---
name: Email / Mailchimp environment split
description: Which lead-capture credentials exist in which environment for the Aivara Solutions site
---

The Aivara Solutions contact/subscribe flow integrates Mailchimp (audience + tags)
and Resend (admin notification + visitor confirmation).

- `RESEND_API_KEY` is present in the Replit dev environment. Sending from
  `notifications@aivarasolutions.com` works (domain verified in Resend) — you can
  send real test emails from dev.
- `MAILCHIMP_API_KEY` / `MAILCHIMP_AUDIENCE_ID` / `MAILCHIMP_API_SERVER` are NOT
  set in Replit dev — they live only in the production deployment (Vercel, per
  replit.md). So the Mailchimp leg of the contact flow cannot be exercised from
  the dev environment; it only runs in production.

**Why:** Explains why a local contact-form test will send the Resend emails but
silently skip Mailchimp (the route throws inside Promise.allSettled and logs, but
never crashes). Don't assume Mailchimp is broken when it's just unconfigured in dev.

**How to apply:** To verify Mailchimp tagging/audience, test against the deployed
site or temporarily set the three Mailchimp vars in dev secrets.
