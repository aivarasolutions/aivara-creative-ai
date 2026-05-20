import { Resend } from 'resend';

// To send to Kevin@AivaraSolutions.com, verify aivarasolutions.com at https://resend.com/domains
// and set NOTIFICATION_EMAIL=Kevin@AivaraSolutions.com + FROM_EMAIL=notifications@aivarasolutions.com
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'kevin.a.jackson21@gmail.com';
const FROM_EMAIL = process.env.NOTIFICATION_FROM || 'Aivara Website <onboarding@resend.dev>';

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

function escape(str: string): string {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

interface ContactNotification {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  source?: string;
}

export async function sendContactNotification(data: ContactNotification): Promise<void> {
  const resend = getResend();
  if (!resend) {
    console.warn('RESEND_API_KEY not set — skipping notification email');
    return;
  }

  const source = data.source || 'Contact Form';
  const subject = `[Aivara Lead] ${source} — ${data.name} (${data.service})`;

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0a0a0a; color: #ffffff; border-radius: 12px;">
      <div style="background: linear-gradient(90deg, #db2777, #14b8a6, #facc15); padding: 2px; border-radius: 12px;">
        <div style="background: #0a0a0a; padding: 28px; border-radius: 10px;">
          <h1 style="margin: 0 0 8px 0; font-size: 22px; color: #ffffff;">New Lead from Aivara Website</h1>
          <p style="margin: 0 0 24px 0; color: #9ca3af; font-size: 14px;">Source: <strong style="color: #2dd4bf;">${escape(source)}</strong></p>

          <table style="width: 100%; border-collapse: collapse; color: #e5e7eb;">
            <tr><td style="padding: 8px 0; color: #9ca3af; width: 110px;">Name</td><td style="padding: 8px 0;"><strong>${escape(data.name)}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #9ca3af;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escape(data.email)}" style="color: #2dd4bf;">${escape(data.email)}</a></td></tr>
            ${data.phone ? `<tr><td style="padding: 8px 0; color: #9ca3af;">Phone</td><td style="padding: 8px 0;"><a href="tel:${escape(data.phone)}" style="color: #2dd4bf;">${escape(data.phone)}</a></td></tr>` : ''}
            <tr><td style="padding: 8px 0; color: #9ca3af;">Service</td><td style="padding: 8px 0;">${escape(data.service)}</td></tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background: #111111; border-left: 3px solid #14b8a6; border-radius: 6px;">
            <p style="margin: 0 0 6px 0; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
            <p style="margin: 0; color: #ffffff; white-space: pre-wrap; line-height: 1.5;">${escape(data.message)}</p>
          </div>

          <p style="margin: 24px 0 0 0; color: #6b7280; font-size: 12px;">Submitted ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST · Also saved to Mailchimp</p>
        </div>
      </div>
    </div>
  `;

  const text = `New lead from Aivara Website
Source: ${source}

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}\n` : ''}Service: ${data.service}

Message:
${data.message}

Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST`;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      replyTo: data.email,
      subject,
      html,
      text,
    });
  } catch (error) {
    console.error('Resend notification email failed:', error);
  }
}

export async function sendNewsletterNotification(email: string): Promise<void> {
  const resend = getResend();
  if (!resend) {
    console.warn('RESEND_API_KEY not set — skipping notification email');
    return;
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `[Aivara Newsletter] New signup — ${email}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #14b8a6;">New Newsletter Signup</h2>
          <p style="font-size: 16px;"><strong>Email:</strong> <a href="mailto:${escape(email)}" style="color: #14b8a6;">${escape(email)}</a></p>
          <p style="color: #6b7280; font-size: 12px;">Submitted ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST · Also added to Mailchimp audience</p>
        </div>
      `,
      text: `New newsletter signup: ${email}\nSubmitted ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST`,
    });
  } catch (error) {
    console.error('Resend newsletter notification failed:', error);
  }
}
