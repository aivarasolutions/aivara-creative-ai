import { Resend } from 'resend';

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'Kevin@AivaraSolutions.com';
const FROM_EMAIL = process.env.NOTIFICATION_FROM || 'Aivara Solutions <notifications@aivarasolutions.com>';
const SITE_URL = 'https://aivarasolutions.com';

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

function escape(str: string): string {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function nl2br(str: string): string {
  return escape(str).replace(/\r?\n/g, '<br>');
}

function timestamp(): string {
  return new Date().toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }) + ' PST';
}

function brandedShell(opts: {
  preheader: string;
  badge: string;
  title: string;
  intro: string;
  bodyHtml: string;
}): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<title>${escape(opts.title)}</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color:#1a1a1a;">
<div style="display:none; max-height:0; overflow:hidden; opacity:0; visibility:hidden; mso-hide:all;">${escape(opts.preheader)}</div>
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f4f4f7;">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width:600px; width:100%; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08);">

        <!-- Gradient header -->
        <tr>
          <td style="background:linear-gradient(135deg, #db2777 0%, #14b8a6 50%, #facc15 100%); padding:32px 40px;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
              <tr>
                <td style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:11px; font-weight:700; letter-spacing:3px; color:#ffffff; text-transform:uppercase; opacity:0.95;">
                  Aivara Solutions
                </td>
                <td align="right" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:11px; font-weight:600; color:#ffffff; opacity:0.9;">
                  ${escape(opts.badge)}
                </td>
              </tr>
              <tr>
                <td colspan="2" style="padding-top:14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:26px; font-weight:700; color:#ffffff; line-height:1.25;">
                  ${escape(opts.title)}
                </td>
              </tr>
              <tr>
                <td colspan="2" style="padding-top:8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; color:#ffffff; opacity:0.92; line-height:1.5;">
                  ${escape(opts.intro)}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px 40px;">
            ${opts.bodyHtml}
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:#fafafa; border-top:1px solid #ececec; padding:24px 40px; text-align:center;">
            <p style="margin:0 0 6px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:13px; font-weight:600; color:#1a1a1a;">Aivara Solutions</p>
            <p style="margin:0 0 12px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:12px; color:#6b7280;">Creative AI Studio · AI, Web, Logistics &amp; Music</p>
            <p style="margin:0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:11px; color:#9ca3af;">
              <a href="${SITE_URL}" style="color:#14b8a6; text-decoration:none;">aivarasolutions.com</a>
              &nbsp;·&nbsp;
              <a href="mailto:Kevin@AivaraSolutions.com" style="color:#14b8a6; text-decoration:none;">Kevin@AivaraSolutions.com</a>
            </p>
            <p style="margin:14px 0 0 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:10px; color:#9ca3af;">
              Automated notification from the Aivara Solutions website. Reply directly to respond to the sender.
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
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
  const subject = `New Lead · ${data.name} · ${source}`;
  const ts = timestamp();

  const detailRow = (label: string, value: string, isLink?: 'email' | 'tel') => {
    const safeValue = escape(value);
    const display = isLink === 'email'
      ? `<a href="mailto:${safeValue}" style="color:#0f766e; text-decoration:none; font-weight:500;">${safeValue}</a>`
      : isLink === 'tel'
      ? `<a href="tel:${safeValue}" style="color:#0f766e; text-decoration:none; font-weight:500;">${safeValue}</a>`
      : `<span style="color:#1a1a1a; font-weight:500;">${safeValue}</span>`;
    return `
      <tr>
        <td width="120" style="padding:10px 0; border-bottom:1px solid #f0f0f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px; font-weight:600; vertical-align:top;">${escape(label)}</td>
        <td style="padding:10px 0; border-bottom:1px solid #f0f0f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; line-height:1.5;">${display}</td>
      </tr>`;
  };

  const bodyHtml = `
    <p style="margin:0 0 20px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; color:#4b5563; line-height:1.6;">
      You received a new submission from the Aivara Solutions website. Contact details and the full message are below — hit <strong>Reply</strong> to respond directly to ${escape(data.name)}.
    </p>

    <h2 style="margin:0 0 12px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:13px; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:1.5px;">Contact Details</h2>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border:1px solid #ececec; border-radius:10px; padding:8px 16px; margin-bottom:24px;">
      ${detailRow('Name', data.name)}
      ${detailRow('Email', data.email, 'email')}
      ${data.phone ? detailRow('Phone', data.phone, 'tel') : ''}
      ${detailRow('Service', data.service)}
      ${detailRow('Source', source)}
      ${detailRow('Received', ts)}
    </table>

    <h2 style="margin:0 0 12px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:13px; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:1.5px;">Message</h2>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f9fafb; border-left:4px solid #14b8a6; border-radius:8px; margin-bottom:28px;">
      <tr>
        <td style="padding:18px 22px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; color:#1a1a1a; line-height:1.65;">
          ${nl2br(data.message)}
        </td>
      </tr>
    </table>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
      <tr>
        <td style="border-radius:8px; background:linear-gradient(135deg, #db2777 0%, #14b8a6 100%);">
          <a href="mailto:${escape(data.email)}?subject=Re%3A%20Your%20inquiry%20to%20Aivara%20Solutions"
             style="display:inline-block; padding:12px 28px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; font-weight:600; color:#ffffff; text-decoration:none; border-radius:8px;">
            Reply to ${escape(data.name.split(' ')[0])}
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:24px 0 0 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:12px; color:#9ca3af;">
      Lead also saved to Mailchimp audience and tagged with “${escape(source)}”.
    </p>
  `;

  const html = brandedShell({
    preheader: `New ${source} lead from ${data.name} — ${data.service}`,
    badge: 'NEW LEAD',
    title: 'New Lead Inquiry',
    intro: `${data.name} just reached out via ${source} (${data.service}).`,
    bodyHtml,
  });

  const text = `AIVARA SOLUTIONS — New Lead Inquiry
${'-'.repeat(50)}

Source:   ${source}
Received: ${ts}

CONTACT DETAILS
  Name:    ${data.name}
  Email:   ${data.email}${data.phone ? `\n  Phone:   ${data.phone}` : ''}
  Service: ${data.service}

MESSAGE
${data.message}

${'-'.repeat(50)}
Reply directly to this email to respond to ${data.name}.
Lead also saved to Mailchimp.

Aivara Solutions · aivarasolutions.com`;

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      replyTo: data.email,
      subject,
      html,
      text,
    });
    if ((result as { error?: unknown }).error) {
      console.error('[Resend] contact notification API error:', (result as { error: unknown }).error);
    }
  } catch (error) {
    console.error('[Resend] contact notification failed:', error);
  }
}

interface WelcomeEmailData {
  firstName?: string;
  email: string;
  interest?: string;
}

export async function sendWelcomeEmail(data: WelcomeEmailData): Promise<void> {
  const resend = getResend();
  if (!resend) {
    console.warn('RESEND_API_KEY not set — skipping welcome email');
    return;
  }

  const first = (data.firstName || '').trim() || 'there';
  const services = [
    'AI Automation Systems',
    'Client Portals & Business Dashboards',
    'Lead Generation & Marketing Automation',
    'AI Training & Business Onboarding',
    'Websites + Automation Buildouts',
    'Creative Content & Brand Media',
  ];

  const serviceList = services
    .map(
      (s) => `
      <tr>
        <td style="padding:8px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; color:#1a1a1a; line-height:1.55;">
          <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:linear-gradient(135deg, #db2777 0%, #14b8a6 100%); margin-right:12px; vertical-align:middle;"></span>
          <strong style="font-weight:600;">${escape(s)}</strong>
        </td>
      </tr>`
    )
    .join('');

  const bodyHtml = `
    <p style="margin:0 0 18px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:15px; color:#1a1a1a; line-height:1.65;">
      Hi ${escape(first)},
    </p>

    <p style="margin:0 0 18px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:15px; color:#4b5563; line-height:1.7;">
      Thanks for joining the Aivara Solutions list. We'll send practical ideas, tools, and updates to help you automate your business, improve your client experience, and build systems that scale.
    </p>

    <p style="margin:0 0 14px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:13px; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:1.5px;">
      What we help businesses with
    </p>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:28px;">
      ${serviceList}
    </table>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:8px 0 18px 0;">
      <tr>
        <td style="border-radius:10px; background:linear-gradient(135deg, #db2777 0%, #14b8a6 50%, #facc15 100%);">
          <a href="${SITE_URL}/contact"
             style="display:inline-block; padding:14px 32px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:15px; font-weight:700; color:#000000; text-decoration:none; border-radius:10px;">
            Book a Free Strategy Call
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 28px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; color:#4b5563;">
      Or
      <a href="${SITE_URL}" style="color:#0f766e; text-decoration:none; font-weight:600;">explore Aivara Solutions →</a>
    </p>

    <p style="margin:24px 0 6px 0; padding-top:20px; border-top:1px solid #ececec; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:13px; color:#6b7280; line-height:1.6;">
      <strong style="color:#1a1a1a;">Kevin · Aivara Solutions</strong><br>
      <a href="mailto:kevin@aivarasolutions.com" style="color:#0f766e; text-decoration:none;">kevin@aivarasolutions.com</a> · <a href="tel:+13104000032" style="color:#0f766e; text-decoration:none;">310-400-0032</a><br>
      <a href="${SITE_URL}" style="color:#0f766e; text-decoration:none;">aivarasolutions.com</a>
    </p>
  `;

  const html = brandedShell({
    preheader: 'Welcome to Aivara Solutions — AI, automation, and systems built to scale.',
    badge: 'WELCOME',
    title: 'Welcome to Aivara Solutions',
    intro:
      "Thanks for joining our list. We help businesses build smarter systems with AI, automation, websites, portals, marketing, and creative content.",
    bodyHtml,
  });

  const text = `Welcome to Aivara Solutions

Hi ${first},

Thanks for joining the Aivara Solutions list. We'll send practical ideas, tools, and updates to help you automate your business, improve your client experience, and build systems that scale.

We help businesses with:
  • AI Automation Systems
  • Client Portals & Business Dashboards
  • Lead Generation & Marketing Automation
  • AI Training & Business Onboarding
  • Websites + Automation Buildouts
  • Creative Content & Brand Media

Book a Free Strategy Call: ${SITE_URL}/contact
Explore Aivara Solutions: ${SITE_URL}

Kevin · Aivara Solutions
kevin@aivarasolutions.com · 310-400-0032
${SITE_URL}

Aivara Solutions — AI-powered systems for modern businesses.`;

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      replyTo: 'kevin@aivarasolutions.com',
      subject: 'Welcome to Aivara Solutions — Build, Automate & Scale Smarter',
      html,
      text,
    });
    if ((result as { error?: unknown }).error) {
      console.error('[Resend] welcome email API error:', (result as { error: unknown }).error);
      throw new Error(
        `Resend rejected welcome email: ${JSON.stringify((result as { error: unknown }).error)}`
      );
    }
    console.log('[Resend] welcome email sent to', data.email, 'id:', (result as { data?: { id?: string } }).data?.id);
  } catch (error) {
    console.error('[Resend] welcome email failed:', error);
    throw error;
  }
}

export async function sendNewsletterNotification(email: string): Promise<void> {
  const resend = getResend();
  if (!resend) {
    console.warn('RESEND_API_KEY not set — skipping notification email');
    return;
  }

  const ts = timestamp();
  const bodyHtml = `
    <p style="margin:0 0 20px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; color:#4b5563; line-height:1.6;">
      A new subscriber just joined the Aivara Solutions newsletter from the website footer.
    </p>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border:1px solid #ececec; border-radius:10px; padding:8px 16px; margin-bottom:24px;">
      <tr>
        <td width="120" style="padding:10px 0; border-bottom:1px solid #f0f0f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px; font-weight:600;">Email</td>
        <td style="padding:10px 0; border-bottom:1px solid #f0f0f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px;">
          <a href="mailto:${escape(email)}" style="color:#0f766e; text-decoration:none; font-weight:500;">${escape(email)}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px; font-weight:600;">Received</td>
        <td style="padding:10px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; color:#1a1a1a;">${escape(ts)}</td>
      </tr>
    </table>

    <p style="margin:0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:12px; color:#9ca3af;">
      Subscriber added to your Mailchimp audience automatically.
    </p>
  `;

  const html = brandedShell({
    preheader: `New newsletter subscriber: ${email}`,
    badge: 'NEW SUBSCRIBER',
    title: 'New Newsletter Signup',
    intro: `${email} just subscribed to your newsletter.`,
    bodyHtml,
  });

  const text = `AIVARA SOLUTIONS — New Newsletter Subscriber
${'-'.repeat(50)}

Email:    ${email}
Received: ${ts}

Subscriber added to Mailchimp audience.

Aivara Solutions · aivarasolutions.com`;

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      replyTo: email,
      subject: `New Newsletter Subscriber · ${email}`,
      html,
      text,
    });
    if ((result as { error?: unknown }).error) {
      console.error('[Resend] newsletter notification API error:', (result as { error: unknown }).error);
    }
  } catch (error) {
    console.error('[Resend] newsletter notification failed:', error);
  }
}
