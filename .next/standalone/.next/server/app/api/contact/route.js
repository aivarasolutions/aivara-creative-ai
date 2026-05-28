"use strict";(()=>{var e={};e.id=386,e.ids=[386],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},50764:(e,t,o)=>{o.r(t),o.d(t,{originalPathname:()=>y,patchFetch:()=>g,requestAsyncStorage:()=>d,routeModule:()=>c,serverHooks:()=>f,staticGenerationAsyncStorage:()=>m});var a={};o.r(a),o.d(a,{POST:()=>p});var i=o(49303),n=o(88716),r=o(60670),s=o(87070),l=o(36119);async function p(e){try{let{name:t,email:o,phone:a,service:i,message:n}=await e.json();if(!t||!o||!i||!n)return s.NextResponse.json({error:"Please fill in all required fields"},{status:400});let r=n.match(/^\[([^\]]+)\]/),p=r?r[1]:"Contact Form";(0,l.Lf)({name:t,email:o,phone:a,service:i,message:n,source:p}).catch(e=>console.error("Notification email error:",e));let c=process.env.MAILCHIMP_API_KEY,d=process.env.MAILCHIMP_AUDIENCE_ID,m=process.env.MAILCHIMP_API_SERVER;if(!c||!d||!m)return s.NextResponse.json({message:"Thank you! Your message has been received. We'll get back to you within 24 hours."},{status:200});let f=t.split(" "),y=f[0],g=f.slice(1).join(" "),u=await fetch(`https://${m}.api.mailchimp.com/3.0/lists/${d}/members`,{method:"POST",headers:{Authorization:`Basic ${Buffer.from(`anystring:${c}`).toString("base64")}`,"Content-Type":"application/json"},body:JSON.stringify({email_address:o,status:"subscribed",merge_fields:{FNAME:y,LNAME:g,PHONE:a||"",MESSAGE:n.substring(0,255)},tags:["Contact Form",i]})}),b=await u.json();if(!u.ok){if(400===u.status&&"Member Exists"===b.title){try{let e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(o.toLowerCase())),t=Array.from(new Uint8Array(e)).map(e=>e.toString(16).padStart(2,"0")).join("");if((await fetch(`https://${m}.api.mailchimp.com/3.0/lists/${d}/members/${t}`,{method:"PATCH",headers:{Authorization:`Basic ${Buffer.from(`anystring:${c}`).toString("base64")}`,"Content-Type":"application/json"},body:JSON.stringify({merge_fields:{FNAME:y,LNAME:g,PHONE:a||"",MESSAGE:n.substring(0,255)}})})).ok)return await fetch(`https://${m}.api.mailchimp.com/3.0/lists/${d}/members/${t}/notes`,{method:"POST",headers:{Authorization:`Basic ${Buffer.from(`anystring:${c}`).toString("base64")}`,"Content-Type":"application/json"},body:JSON.stringify({note:`Contact Form Inquiry - ${i}

Message: ${n}

Submitted: ${new Date().toISOString()}`})}),s.NextResponse.json({message:"Thank you! Your message has been received. We'll get back to you within 24 hours."},{status:200})}catch(e){console.error("Update error:",e)}return s.NextResponse.json({message:"Thank you! We already have your contact information and will respond to your inquiry shortly."},{status:200})}return s.NextResponse.json({error:b.title||"Subscription failed. Please try again or contact us directly at Kevin@AivaraSolutions.com"},{status:u.status})}let h=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(o.toLowerCase())),x=Array.from(new Uint8Array(h)).map(e=>e.toString(16).padStart(2,"0")).join("");return await fetch(`https://${m}.api.mailchimp.com/3.0/lists/${d}/members/${x}/notes`,{method:"POST",headers:{Authorization:`Basic ${Buffer.from(`anystring:${c}`).toString("base64")}`,"Content-Type":"application/json"},body:JSON.stringify({note:`Contact Form Inquiry - ${i}

Message: ${n}

Submitted: ${new Date().toISOString()}`})}),s.NextResponse.json({message:"Thank you! Your message has been sent successfully. We'll get back to you within 24 hours."},{status:200})}catch(e){return console.error("Contact form error:",e),s.NextResponse.json({error:"Something went wrong. Please try again or contact us at Kevin@AivaraSolutions.com"},{status:500})}}let c=new i.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:"app/api/contact/route"},resolvedPagePath:"/home/runner/workspace/app/api/contact/route.ts",nextConfigOutput:"standalone",userland:a}),{requestAsyncStorage:d,staticGenerationAsyncStorage:m,serverHooks:f}=c,y="/api/contact/route";function g(){return(0,r.patchFetch)({serverHooks:f,staticGenerationAsyncStorage:m})}},36119:(e,t,o)=>{o.d(t,{Lf:()=>d,Pi:()=>m,dc:()=>f});var a=o(82591);let i=process.env.NOTIFICATION_EMAIL||"Kevin@AivaraSolutions.com",n=process.env.NOTIFICATION_FROM||"Aivara Solutions <notifications@aivarasolutions.com>",r="https://aivarasolutions.com";function s(){let e=process.env.RESEND_API_KEY;return e?new a.R(e):null}function l(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function p(){return new Date().toLocaleString("en-US",{timeZone:"America/Los_Angeles",weekday:"short",month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})+" PST"}function c(e){return`<!DOCTYPE html>
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
</html>`}async function d(e){let t=s();if(!t){console.warn("RESEND_API_KEY not set — skipping notification email");return}let o=e.source||"Contact Form",a=`New Lead \xb7 ${e.name} \xb7 ${o}`,r=p(),d=(e,t,o)=>{let a=l(t),i="email"===o?`<a href="mailto:${a}" style="color:#0f766e; text-decoration:none; font-weight:500;">${a}</a>`:"tel"===o?`<a href="tel:${a}" style="color:#0f766e; text-decoration:none; font-weight:500;">${a}</a>`:`<span style="color:#1a1a1a; font-weight:500;">${a}</span>`;return`
      <tr>
        <td width="120" style="padding:10px 0; border-bottom:1px solid #f0f0f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px; font-weight:600; vertical-align:top;">${l(e)}</td>
        <td style="padding:10px 0; border-bottom:1px solid #f0f0f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; line-height:1.5;">${i}</td>
      </tr>`},m=`
    <p style="margin:0 0 20px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:14px; color:#4b5563; line-height:1.6;">
      You received a new submission from the Aivara Solutions website. Contact details and the full message are below — hit <strong>Reply</strong> to respond directly to ${l(e.name)}.
    </p>

    <h2 style="margin:0 0 12px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; font-size:13px; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:1.5px;">Contact Details</h2>

    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border:1px solid #ececec; border-radius:10px; padding:8px 16px; margin-bottom:24px;">
      ${d("Name",e.name)}
      ${d("Email",e.email,"email")}
      ${e.phone?d("Phone",e.phone,"tel"):""}
      ${d("Service",e.service)}
      ${d("Source",o)}
      ${d("Received",r)}
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
  `,f=c({preheader:`New ${o} lead from ${e.name} — ${e.service}`,badge:"NEW LEAD",title:"New Lead Inquiry",intro:`${e.name} just reached out via ${o} (${e.service}).`,bodyHtml:m}),y=`AIVARA SOLUTIONS — New Lead Inquiry
${"-".repeat(50)}

Source:   ${o}
Received: ${r}

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

Aivara Solutions \xb7 aivarasolutions.com`;try{let o=await t.emails.send({from:n,to:i,replyTo:e.email,subject:a,html:f,text:y});o.error&&console.error("[Resend] contact notification API error:",o.error)}catch(e){console.error("[Resend] contact notification failed:",e)}}async function m(e){let t=s();if(!t){console.warn("RESEND_API_KEY not set — skipping welcome email");return}let o=(e.firstName||"").trim()||"there",a=["AI Automation Systems","Client Portals & Business Dashboards","Lead Generation & Marketing Automation","AI Training & Business Onboarding","Websites + Automation Buildouts","Creative Content & Brand Media"].map(e=>`
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

Aivara Solutions — AI-powered systems for modern businesses.`;try{let o=await t.emails.send({from:n,to:e.email,replyTo:"kevin@aivarasolutions.com",subject:"Welcome to Aivara Solutions — Build, Automate & Scale Smarter",html:i,text:p});if(o.error)throw console.error("[Resend] welcome email API error:",o.error),Error(`Resend rejected welcome email: ${JSON.stringify(o.error)}`);console.log("[Resend] welcome email sent to",e.email,"id:",o.data?.id)}catch(e){throw console.error("[Resend] welcome email failed:",e),e}}async function f(e){let t=s();if(!t){console.warn("RESEND_API_KEY not set — skipping notification email");return}let o=p(),a=`
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

Aivara Solutions \xb7 aivarasolutions.com`;try{let o=await t.emails.send({from:n,to:i,replyTo:e,subject:`New Newsletter Subscriber \xb7 ${e}`,html:r,text:d});o.error&&console.error("[Resend] newsletter notification API error:",o.error)}catch(e){console.error("[Resend] newsletter notification failed:",e)}}}};var t=require("../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),a=t.X(0,[276,475],()=>o(50764));module.exports=a})();