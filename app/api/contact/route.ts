import { NextResponse } from 'next/server';
import { sendContactNotification } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Extract source/offer tag from message prefix like "[Offer Name] ..."
    const sourceMatch = message.match(/^\[([^\]]+)\]/);
    const source = sourceMatch ? sourceMatch[1] : 'Contact Form';

    // Send notification email to Kevin (non-blocking — never break the form if email fails)
    sendContactNotification({ name, email, phone, service, message, source }).catch((err) =>
      console.error('Notification email error:', err)
    );

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;

    if (!API_KEY || !AUDIENCE_ID || !DATACENTER) {
      // Mailchimp not configured — but email notification still goes out
      return NextResponse.json(
        { message: 'Thank you! Your message has been received. We\'ll get back to you within 24 hours.' },
        { status: 200 }
      );
    }

    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
            PHONE: phone || '',
            MESSAGE: message.substring(0, 255),
          },
          tags: ['Contact Form', service],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 400 && data.title === 'Member Exists') {
        try {
          const emailHash = await crypto.subtle.digest(
            'SHA-256',
            new TextEncoder().encode(email.toLowerCase())
          );
          const hashArray = Array.from(new Uint8Array(emailHash));
          const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

          const updateResponse = await fetch(
            `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${hashHex}`,
            {
              method: 'PATCH',
              headers: {
                Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                merge_fields: {
                  FNAME: firstName,
                  LNAME: lastName,
                  PHONE: phone || '',
                  MESSAGE: message.substring(0, 255),
                },
              }),
            }
          );

          if (updateResponse.ok) {
            const noteResponse = await fetch(
              `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${hashHex}/notes`,
              {
                method: 'POST',
                headers: {
                  Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  note: `Contact Form Inquiry - ${service}\n\nMessage: ${message}\n\nSubmitted: ${new Date().toISOString()}`,
                }),
              }
            );

            return NextResponse.json(
              { message: 'Thank you! Your message has been received. We\'ll get back to you within 24 hours.' },
              { status: 200 }
            );
          }
        } catch (updateError) {
          console.error('Update error:', updateError);
        }
        
        return NextResponse.json(
          { message: 'Thank you! We already have your contact information and will respond to your inquiry shortly.' },
          { status: 200 }
        );
      }
      
      return NextResponse.json(
        { error: data.title || 'Subscription failed. Please try again or contact us directly at Kevin@AivaraSolutions.com' },
        { status: response.status }
      );
    }

    const emailHash = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(email.toLowerCase())
    );
    const hashArray = Array.from(new Uint8Array(emailHash));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${hashHex}/notes`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          note: `Contact Form Inquiry - ${service}\n\nMessage: ${message}\n\nSubmitted: ${new Date().toISOString()}`,
        }),
      }
    );

    return NextResponse.json(
      { message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.' },
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
