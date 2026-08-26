# Aivara Solutions — Mailchimp Customer Journey Setup

This guide covers the **one-time manual setup** in Mailchimp for the Aivara Solutions
lead nurture sequence. The website already handles lead capture, audience sync,
tagging, and the two transactional Resend emails (admin notification + visitor
confirmation). Mailchimp only needs to host the 4-email nurture journey.

> **Why manual?** Mailchimp's Customer Journeys API cannot create or publish a
> journey. The journey must be built once by hand in the Mailchimp dashboard. The
> HTML templates and triggers below are all you need.

---

## 1. Save the 4 templates in Mailchimp

For each file in this `email-templates/` folder:

1. In Mailchimp, go to **Content → Email templates → Create Template**.
2. Choose **Code your own → Paste in code**.
3. Open the HTML file, copy the **entire** contents, and paste it in.
4. Name the template exactly as listed, then **Save**.

| Template file | Save as (template name) | Subject line | Timing |
|---|---|---|---|
| `aivara-nurture-1-thank-you.html` | Aivara Nurture 1 — Thank You | Thank You for Contacting Aivara Solutions | Immediate |
| `aivara-nurture-2-smarter-systems.html` | Aivara Nurture 2 — Smarter Systems | Build Smarter Systems for Your Business | Day 2 |
| `aivara-nurture-3-services.html` | Aivara Nurture 3 — Services | What Aivara Solutions Can Build for You | Day 5 |
| `aivara-nurture-4-consultation.html` | Aivara Nurture 4 — Consultation | Ready to Build Your Next System? | Day 7 |

**Notes**
- The templates use standard Mailchimp merge tags: `*|FNAME|*`, `*|UNSUB|*`,
  `*|UPDATE_PROFILE|*`, `*|LIST:ADDRESS|*`, `*|CURRENT_YEAR|*`. Do not remove the
  footer block — Mailchimp requires the unsubscribe + physical address tags.
- The templates are text-only and do not load external images or media.
- No external tracking scripts are included.

---

## 2. Audience to use

Use the **Aivara Solutions** audience — the same audience the website writes to
(`MAILCHIMP_AUDIENCE_ID`). Do **not** use the IPM, RichAF, or any other audience.

Every website lead arrives already tagged (applied automatically by the site):

**Baseline tags (every lead):**
- `Website Lead`
- `Aivara Inquiry`
- `Aivara Solutions Lead`
- `Business Inquiry`

**Conditional tags (based on the form/page/service):**
- `Contact Form` — submissions from the `/contact` form
- `Portal Inquiry` — Client Portal Buildout offer (`/custom-client-portals`)
- `Automation Inquiry` — AI Automation Starter System offer (`/ai-automation-small-business`)
- `AI Solutions Inquiry` — service "AI & Education"
- `Software Inquiry` — service "Web & Marketing"
- `FreightSync Inquiry` — service "Logistics"
- `Consulting Inquiry` — service "Multiple Services" / "Other"

> `Social Scheduler Inquiry` is intentionally **not** applied — there is no
> corresponding form or page on the site yet. Add the mapping in
> `lib/mailchimp.ts → buildLeadTags()` if/when that page is built.

---

## 3. Trigger

Build a **Customer Journey** with this entry trigger:

- **Trigger:** Tag added → **`Website Lead`**

Since `Website Lead` is a baseline tag applied to every website lead, this catches
all inquiries. (If you want to nurture only a subset, trigger on a more specific
tag like `Contact Form` instead.)

---

## 4. Journey flow

Build the journey in this exact order:

```
START  (Trigger: Tag added → "Website Lead")
  │
  ├─ Send: Aivara Nurture 1 — Thank You          (immediate)
  │
  ├─ Wait 2 days
  │
  ├─ Send: Aivara Nurture 2 — Smarter Systems     (Day 2)
  │
  ├─ Wait 3 days
  │
  ├─ Send: Aivara Nurture 3 — Services            (Day 5)
  │
  ├─ Wait 2 days
  │
  └─ Send: Aivara Nurture 4 — Consultation        (Day 7)
END
```

In the journey builder: add an **Email** action, pick the matching template, then
add a **Delay** step between each email using the wait values above.

---

## 5. Sender settings (apply to all 4 journey emails)

| Setting | Value |
|---|---|
| **From name** | Aivara Solutions |
| **From email** | `notifications@aivarasolutions.com` *(verified sending domain in Resend; use this if your Mailchimp sending domain is also authenticated — otherwise use your verified Mailchimp sender)* |
| **Reply-To** | `Kevin@AivaraSolutions.com` |

> **Domain note:** The website's Resend emails already send from
> `notifications@aivarasolutions.com`. For Mailchimp to send from that same
> address, authenticate the `aivarasolutions.com` domain in **Mailchimp →
> Settings → Domains**. If it isn't authenticated there, use your existing
> verified Mailchimp sender for the journey and keep Reply-To as Kevin's address.

---

## 6. Activate & test

1. Click **Publish / Turn on** to activate the journey.
2. Submit a test lead through the website contact form.
3. Confirm the contact appears in the Aivara Solutions audience with the baseline
   tags (and the right conditional tag), which fires the journey.
4. Confirm Email 1 arrives immediately; the rest follow on the delay schedule.

---

## What the website already does (no Mailchimp work needed)

On every contact-form submission the site automatically:
- Upserts the lead into the Aivara Solutions Mailchimp audience (with caching of
  the audience ID).
- Applies the baseline + conditional tags listed above.
- Stores the message in the `MESSAGE` merge field + an inquiry note.
- Sends the **admin notification** via Resend → `Kevin@AivaraSolutions.com`
  (subject: *New Aivara Solutions Website Lead*, Reply-To = the visitor).
- Sends the **visitor confirmation** via Resend (subject: *Thank You for
  Contacting Aivara Solutions*, Reply-To = `Kevin@AivaraSolutions.com`).

All three run through `Promise.allSettled`, so a failure in one never breaks the
form submission.
