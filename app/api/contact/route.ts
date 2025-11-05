import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // 1. Add to Mailchimp
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const MAILCHIMP_DATACENTER = process.env.MAILCHIMP_API_SERVER;

    let mailchimpSuccess = false;
    
    if (MAILCHIMP_API_KEY && MAILCHIMP_AUDIENCE_ID && MAILCHIMP_DATACENTER) {
      try {
        const mailchimpResponse = await fetch(
          `https://${MAILCHIMP_DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
          {
            method: 'POST',
            headers: {
              Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email_address: email,
              status: 'subscribed',
              merge_fields: {
                FNAME: name.split(' ')[0],
              },
            }),
          }
        );

        mailchimpSuccess = mailchimpResponse.ok || mailchimpResponse.status === 400;
      } catch (error) {
        console.error('Mailchimp error:', error);
      }
    }

    // 2. Send email notification using Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'Kevin@AivaraSolutions.com';

    let emailSuccess = false;

    if (RESEND_API_KEY) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Aivara Solutions <noreply@aivarasolutions.com>',
            to: [BUSINESS_EMAIL],
            reply_to: email,
            subject: `New Contact Form Submission - ${service}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #14b8a6;">New Contact Form Submission</h2>
                
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                  <p><strong>Service Interested In:</strong> ${service}</p>
                </div>

                <div style="margin: 20px 0;">
                  <h3 style="color: #333;">Message:</h3>
                  <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 8px;">${message}</p>
                </div>

                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
                  <p style="color: #666; font-size: 12px;">
                    This email was sent from the Aivara Solutions contact form.
                  </p>
                </div>
              </div>
            `,
          }),
        });

        emailSuccess = emailResponse.ok;
      } catch (error) {
        console.error('Email sending error:', error);
      }
    }

    // Return success if email was sent successfully
    if (emailSuccess) {
      return NextResponse.json(
        { 
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',
          mailchimpAdded: mailchimpSuccess
        },
        { status: 200 }
      );
    } else if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly at Kevin@AivaraSolutions.com' },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or email us directly at Kevin@AivaraSolutions.com' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
