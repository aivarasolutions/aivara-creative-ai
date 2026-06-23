"use strict";exports.id=119,exports.ids=[119],exports.modules={36119:(e,t,o)=>{o.d(t,{Lf:()=>d,Pi:()=>f,dc:()=>m,jr:()=>y});var a=o(82591);let i=process.env.NOTIFICATION_EMAIL||"Kevin@AivaraSolutions.com",n=process.env.NOTIFICATION_FROM||"Aivara Solutions <notifications@aivarasolutions.com>",r="https://aivarasolutions.com";function s(){let e=process.env.RESEND_API_KEY;return e?new a.R(e):null}function l(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function p(){return new Date().toLocaleString("en-US",{timeZone:"America/Los_Angeles",weekday:"short",month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})+" PST"}function c(e){return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<title>${l(e.title)}</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color:#1a1a1a;">
<div style="display:none; max-height:0; overflow:hidden; opacity:0; visibility:hidden; mso-hide:all;">${l(e.preheader)}</div>
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
                  ${l(e.badge)}
                </td>
              </tr>
              <tr>
                <td colspan="2" style="padding-top:14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:26px; font-weight:700; color:#ffffff; line-height:1.25;">
                  ${l(e.title)}
                </td>
              </tr>
              <tr>
                <td colspan="2" style="padding-top:8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; color:#ffffff; opacity:0.92; line-height:1.5;">
                  ${l(e.intro)}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px 40px;">
            ${e.bodyHtml}
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:#fafafa; border-top:1px solid #ececec; padding:24px 40px; text-align:center;">
            <p style="margin:0 0 6px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:13px; font-weight:600; color:#1a1a1a;">Aivara Solutions</p>
            <p style="margin:0 0 12px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:12px; color:#6b7280;">Creative AI Studio \xb7 AI, Web, Logistics &amp; Music</p>
            <p style="margin:0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:11px; color:#9ca3af;">
              <a href="${r}" style="color:#14b8a6; text-decoration:none;">aivarasolutions.com</a>
              &nbsp;\xb7&nbsp;
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
</html>`}async function d(e){let t=s();if(!t){console.warn("RESEND_API_KEY not set — skipping notification email");return}let o=e.source||"Contact Form",a=p(),r=(e,t,o)=>{let a=l(t),i="email"===o?`<a href="mailto:${a}" style="color:#0f766e; text-decoration:none; font-weight:500;">${a}</a>`:"tel"===o?`<a href="tel:${a}" style="color:#0f766e; text-decoration:none; font-weight:500;">${a}</a>`:`<span style="color:#1a1a1a; font-weight:500;">${a}</span>`;return`
      <tr>
        <td width="120" style="padding:10px 0; border-bottom:1px solid #f0f0f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px; font-weight:600; vertical-align:top;">${l(e)}</td>
        <td style="padding:10px 0; border-bottom:1px solid #f0f0f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; line-height:1.5;">${i}</td>
      </tr>`},d=`
    <p style="margin:0 0 20px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; color:#4b5563; line-height:1.6;">
      You received a new submission from the Aivara Solutions website. Contact details and the full message are below — hit <strong>Reply</strong> to respond directly to ${l(e.name)}.
    </p>

    <h2 style="margin:0 0 12px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:13px; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:1.5px;">Contact Details</h2>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border:1px solid #ececec; border-radius:10px; padding:8px 16px; margin-bottom:24px;">
      ${r("Name",e.name)}
      ${r("Email",e.email,"email")}
      ${e.phone?r("Phone",e.phone,"tel"):""}
      ${r("Service",e.service)}
      ${r("Source",o)}
      ${r("Received",a)}
    </table>

    <h2 style="margin:0 0 12px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:13px; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:1.5px;">Message</h2>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f9fafb; border-left:4px solid #14b8a6; border-radius:8px; margin-bottom:28px;">
      <tr>
        <td style="padding:18px 22px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; color:#1a1a1a; line-height:1.65;">
          ${l(e.message).replace(/\r?\n/g,"<br>")}
        </td>
      </tr>
    </table>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
      <tr>
        <td style="border-radius:8px; background:linear-gradient(135deg, #db2777 0%, #14b8a6 100%);">
          <a href="mailto:${l(e.email)}?subject=Re%3A%20Your%20inquiry%20to%20Aivara%20Solutions"
             style="display:inline-block; padding:12px 28px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; font-weight:600; color:#ffffff; text-decoration:none; border-radius:8px;">
            Reply to ${l(e.name.split(" ")[0])}
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:24px 0 0 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:12px; color:#9ca3af;">
      Lead also saved to Mailchimp audience and tagged with “${l(o)}”.
    </p>
  `,f=c({preheader:`New ${o} lead from ${e.name} — ${e.service}`,badge:"NEW LEAD",title:"New Lead Inquiry",intro:`${e.name} just reached out via ${o} (${e.service}).`,bodyHtml:d}),m=`AIVARA SOLUTIONS — New Lead Inquiry
${"-".repeat(50)}

Source:   ${o}
Received: ${a}

CONTACT DETAILS
  Name:    ${e.name}
  Email:   ${e.email}${e.phone?`
  Phone:   ${e.phone}`:""}
  Service: ${e.service}

MESSAGE
${e.message}

${"-".repeat(50)}
Reply directly to this email to respond to ${e.name}.
Lead also saved to Mailchimp.

Aivara Solutions \xb7 aivarasolutions.com`;try{let o=await t.emails.send({from:n,to:i,replyTo:e.email,subject:"New Aivara Solutions Website Lead",html:f,text:m});o.error&&console.error("[Resend] contact notification API error:",o.error)}catch(e){console.error("[Resend] contact notification failed:",e)}}async function f(e){let t=s();if(!t){console.warn("RESEND_API_KEY not set — skipping welcome email");return}let o=(e.firstName||"").trim()||"there",a=["AI Automation Systems","Client Portals & Business Dashboards","Lead Generation & Marketing Automation","AI Training & Business Onboarding","Websites + Automation Buildouts","Creative Content & Brand Media"].map(e=>`
      <tr>
        <td style="padding:8px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; color:#1a1a1a; line-height:1.55;">
          <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:linear-gradient(135deg, #db2777 0%, #14b8a6 100%); margin-right:12px; vertical-align:middle;"></span>
          <strong style="font-weight:600;">${l(e)}</strong>
        </td>
      </tr>`).join(""),i=c({preheader:"Welcome to Aivara Solutions — AI, automation, and systems built to scale.",badge:"WELCOME",title:"Welcome to Aivara Solutions",intro:"Thanks for joining our list. We help businesses build smarter systems with AI, automation, websites, portals, marketing, and creative content.",bodyHtml:`
    <p style="margin:0 0 18px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:15px; color:#1a1a1a; line-height:1.65;">
      Hi ${l(o)},
    </p>

    <p style="margin:0 0 18px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:15px; color:#4b5563; line-height:1.7;">
      Thanks for joining the Aivara Solutions list. We'll send practical ideas, tools, and updates to help you automate your business, improve your client experience, and build systems that scale.
    </p>

    <p style="margin:0 0 14px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:13px; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:1.5px;">
      What we help businesses with
    </p>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:28px;">
      ${a}
    </table>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:8px 0 18px 0;">
      <tr>
        <td style="border-radius:10px; background:linear-gradient(135deg, #db2777 0%, #14b8a6 50%, #facc15 100%);">
          <a href="${r}/contact"
             style="display:inline-block; padding:14px 32px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:15px; font-weight:700; color:#000000; text-decoration:none; border-radius:10px;">
            Book a Free Strategy Call
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 28px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; color:#4b5563;">
      Or
      <a href="${r}" style="color:#0f766e; text-decoration:none; font-weight:600;">explore Aivara Solutions →</a>
    </p>

    <p style="margin:24px 0 6px 0; padding-top:20px; border-top:1px solid #ececec; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:13px; color:#6b7280; line-height:1.6;">
      <strong style="color:#1a1a1a;">Kevin \xb7 Aivara Solutions</strong><br>
      <a href="mailto:kevin@aivarasolutions.com" style="color:#0f766e; text-decoration:none;">kevin@aivarasolutions.com</a> \xb7 <a href="tel:+13104000032" style="color:#0f766e; text-decoration:none;">310-400-0032</a><br>
      <a href="${r}" style="color:#0f766e; text-decoration:none;">aivarasolutions.com</a>
    </p>
  `}),p=`Welcome to Aivara Solutions

Hi ${o},

Thanks for joining the Aivara Solutions list. We'll send practical ideas, tools, and updates to help you automate your business, improve your client experience, and build systems that scale.

We help businesses with:
  • AI Automation Systems
  • Client Portals & Business Dashboards
  • Lead Generation & Marketing Automation
  • AI Training & Business Onboarding
  • Websites + Automation Buildouts
  • Creative Content & Brand Media

Book a Free Strategy Call: ${r}/contact
Explore Aivara Solutions: ${r}

Kevin \xb7 Aivara Solutions
kevin@aivarasolutions.com \xb7 310-400-0032
${r}

Aivara Solutions — AI-powered systems for modern businesses.`;try{let o=await t.emails.send({from:n,to:e.email,replyTo:"kevin@aivarasolutions.com",subject:"Welcome to Aivara Solutions — Build, Automate & Scale Smarter",html:i,text:p});if(o.error)throw console.error("[Resend] welcome email API error:",o.error),Error(`Resend rejected welcome email: ${JSON.stringify(o.error)}`);console.log("[Resend] welcome email sent to",e.email,"id:",o.data?.id)}catch(e){throw console.error("[Resend] welcome email failed:",e),e}}async function m(e){let t=s();if(!t){console.warn("RESEND_API_KEY not set — skipping notification email");return}let o=p(),a=`
    <p style="margin:0 0 20px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; color:#4b5563; line-height:1.6;">
      A new subscriber just joined the Aivara Solutions newsletter from the website footer.
    </p>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border:1px solid #ececec; border-radius:10px; padding:8px 16px; margin-bottom:24px;">
      <tr>
        <td width="120" style="padding:10px 0; border-bottom:1px solid #f0f0f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px; font-weight:600;">Email</td>
        <td style="padding:10px 0; border-bottom:1px solid #f0f0f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px;">
          <a href="mailto:${l(e)}" style="color:#0f766e; text-decoration:none; font-weight:500;">${l(e)}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px; font-weight:600;">Received</td>
        <td style="padding:10px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; color:#1a1a1a;">${l(o)}</td>
      </tr>
    </table>

    <p style="margin:0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:12px; color:#9ca3af;">
      Subscriber added to your Mailchimp audience automatically.
    </p>
  `,r=c({preheader:`New newsletter subscriber: ${e}`,badge:"NEW SUBSCRIBER",title:"New Newsletter Signup",intro:`${e} just subscribed to your newsletter.`,bodyHtml:a}),d=`AIVARA SOLUTIONS — New Newsletter Subscriber
${"-".repeat(50)}

Email:    ${e}
Received: ${o}

Subscriber added to Mailchimp audience.

Aivara Solutions \xb7 aivarasolutions.com`;try{let o=await t.emails.send({from:n,to:i,replyTo:e,subject:`New Newsletter Subscriber \xb7 ${e}`,html:r,text:d});o.error&&console.error("[Resend] newsletter notification API error:",o.error)}catch(e){console.error("[Resend] newsletter notification failed:",e)}}async function y(e){let t=s();if(!t){console.warn("RESEND_API_KEY not set — skipping visitor confirmation email");return}let o=(e.name||"").trim().split(" ")[0]||"there",a=c({preheader:"We've received your inquiry — the Aivara Solutions team will follow up shortly.",badge:"INQUIRY RECEIVED",title:"Thank You for Contacting Us",intro:"We've received your message and will be in touch soon. Here's what happens next.",bodyHtml:`
    <p style="margin:0 0 18px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:15px; color:#1a1a1a; line-height:1.65;">
      Hi ${l(o)},
    </p>

    <p style="margin:0 0 18px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:15px; color:#4b5563; line-height:1.7;">
      Thank you for reaching out to <strong style="color:#1a1a1a;">Aivara Solutions</strong>. We've received your inquiry${e.service?` about <strong style="color:#1a1a1a;">${l(e.service)}</strong>`:""} and a member of our team will follow up with you shortly — typically within 24 hours.
    </p>

    <p style="margin:0 0 24px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:15px; color:#4b5563; line-height:1.7;">
      In the meantime, you're welcome to explore the systems we build — custom portals, automation, AI tools, dashboards, and operational software designed to help businesses run smarter.
    </p>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:8px 0 24px 0;">
      <tr>
        <td style="border-radius:10px; background:linear-gradient(135deg, #db2777 0%, #14b8a6 50%, #facc15 100%);">
          <a href="${r}/services"
             style="display:inline-block; padding:14px 32px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:15px; font-weight:700; color:#000000; text-decoration:none; border-radius:10px;">
            Explore What We Build
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:24px 0 6px 0; padding-top:20px; border-top:1px solid #ececec; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:13px; color:#6b7280; line-height:1.6;">
      <strong style="color:#1a1a1a;">Kevin \xb7 Aivara Solutions</strong><br>
      <a href="mailto:Kevin@AivaraSolutions.com" style="color:#0f766e; text-decoration:none;">Kevin@AivaraSolutions.com</a><br>
      <a href="${r}" style="color:#0f766e; text-decoration:none;">aivarasolutions.com</a>
    </p>
  `}),i=`Thank You for Contacting Aivara Solutions

Hi ${o},

Thank you for reaching out to Aivara Solutions. We've received your inquiry${e.service?` about ${e.service}`:""} and a member of our team will follow up with you shortly — typically within 24 hours.

In the meantime, explore the systems we build — custom portals, automation, AI tools, dashboards, and operational software designed to help businesses run smarter.

Explore what we build: ${r}/services

Kevin \xb7 Aivara Solutions
Kevin@AivaraSolutions.com
${r}`;try{let o=await t.emails.send({from:n,to:e.email,replyTo:"Kevin@AivaraSolutions.com",subject:"Thank You for Contacting Aivara Solutions",html:a,text:i});if(o.error)throw console.error("[Resend] visitor confirmation API error:",o.error),Error(`Resend rejected visitor confirmation: ${JSON.stringify(o.error)}`)}catch(e){throw console.error("[Resend] visitor confirmation failed:",e),e}}}};