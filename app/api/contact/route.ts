import { NextResponse } from 'next/server';
import { sendContactNotification, sendVisitorConfirmation } from '@/lib/email';
import { buildLeadTags, syncLeadToMailchimp } from '@/lib/mailchimp';

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message, marketingConsent } = await req.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Extract source/offer tag from message prefix like "[Offer Name] ..."
    const sourceMatch = message.match(/^\[([^\]]+)\]/);
    const source = sourceMatch ? sourceMatch[1] : 'Contact Form';

    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    const emailMarketingConsent = marketingConsent === true;
    const tags = emailMarketingConsent
      ? [...buildLeadTags(source, service), 'Email Marketing Opt-In']
      : [];

    // Marketing-list enrollment is optional. Every inquiry still receives the
    // operational response and internal notification needed to handle it.
    const requests = [
      ...(emailMarketingConsent
        ? [
            syncLeadToMailchimp({
              email,
              firstName,
              lastName,
              phone,
              message,
              service,
              source,
              tags,
            }),
          ]
        : []),
      sendContactNotification({
        name,
        email,
        phone,
        service,
        message,
        source,
        marketingConsent: emailMarketingConsent,
      }),
      sendVisitorConfirmation({ name, email, service, source }),
    ];
    const labels = emailMarketingConsent
      ? ['Mailchimp sync', 'admin notification', 'visitor confirmation']
      : ['admin notification', 'visitor confirmation'];
    const results = await Promise.allSettled(requests);

    results.forEach((r, i) => {
      if (r.status === 'rejected') {
        const label = labels[i];
        console.error(`[contact] ${label} failed:`, r.reason);
      }
    });

    return NextResponse.json(
      {
        message:
          "Thank you! Your message has been received. We'll follow up with next steps.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or contact us at Kevin@AivaraSolutions.com' },
      { status: 500 }
    );
  }
}
