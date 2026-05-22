import { NextResponse } from 'next/server';
import { sendNewsletterNotification, sendWelcomeEmail } from '@/lib/email';

const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function md5Hex(input: string): Promise<string> {
  const crypto = await import('crypto');
  return crypto.createHash('md5').update(input.toLowerCase()).digest('hex');
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email: string = (body.email || '').trim();
    const firstName: string = (body.firstName || '').trim();
    const interest: string = (body.interest || '').trim();
    const source: string = (body.source || 'Website Popup').trim();

    if (!email || !EMAIL_RX.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Fire-and-forget admin notification + welcome email
    sendNewsletterNotification(email).catch((err) =>
      console.error('Newsletter notification error:', err)
    );

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const DATACENTER =
      process.env.MAILCHIMP_API_SERVER || process.env.MAILCHIMP_SERVER_PREFIX;

    const authHeader = API_KEY
      ? `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`
      : '';

    const tags = ['Website Popup', 'Aivara Lead'];
    if (interest) tags.push(interest);

    let mailchimpOk = false;

    if (API_KEY && AUDIENCE_ID && DATACENTER) {
      try {
        const hash = await md5Hex(email);
        // PUT upserts: creates or updates; tolerant to existing members
        const upsertRes = await fetch(
          `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${hash}`,
          {
            method: 'PUT',
            headers: {
              Authorization: authHeader,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email_address: email,
              status_if_new: 'subscribed',
              merge_fields: {
                FNAME: firstName || '',
                INTEREST: interest || '',
                SOURCE: source,
                COMPANY: 'Aivara Solutions Website',
              },
            }),
          }
        );

        if (upsertRes.ok) {
          mailchimpOk = true;
          // Attach tags (additive)
          await fetch(
            `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${hash}/tags`,
            {
              method: 'POST',
              headers: {
                Authorization: authHeader,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                tags: tags.map((name) => ({ name, status: 'active' })),
              }),
            }
          );
        } else {
          const data = await upsertRes.json().catch(() => ({}));
          console.error('Mailchimp upsert failed:', upsertRes.status, data);
          // Don't fail the request: still send the welcome email so the visitor gets a confirmation
          mailchimpOk = false;
        }
      } catch (err) {
        console.error('Mailchimp request error:', err);
      }
    } else {
      console.warn('Mailchimp env vars not fully configured — skipping list signup');
    }

    // Send branded welcome email regardless of mailchimp outcome
    // (don't block the response — keep UX snappy)
    sendWelcomeEmail({ firstName, email, interest }).catch((err) =>
      console.error('Welcome email error:', err)
    );

    return NextResponse.json(
      {
        message: "You're in! Check your inbox for a welcome message from Aivara Solutions.",
        mailchimp: mailchimpOk,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
