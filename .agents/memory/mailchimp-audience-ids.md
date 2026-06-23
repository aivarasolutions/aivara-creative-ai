---
name: Mailchimp audience IDs
description: Which Mailchimp list ID belongs to which brand — critical because the wrong ID was previously set in MAILCHIMP_AUDIENCE_ID.
---

# Mailchimp Audience IDs

**Why:** The MAILCHIMP_AUDIENCE_ID secret was previously set to RichAF.Global instead of Aivara Solutions, causing all subscriber syncs and nurture sends to hit the wrong list silently.

## Correct IDs (us18 datacenter)
- `64919424d6` — **Aivara Solutions** (use this for all Aivara website forms, popups, contact route)
- `63e947c954` — RichAF.Global (separate brand — do not use for Aivara)
- `a090381f0a` — IPM - International Property Management
- `e2d12c31e2` — Servant of Agape

## How to apply
Any time you touch MAILCHIMP_AUDIENCE_ID for this project, confirm it is `64919424d6`.
The subscribe route (app/api/subscribe/route.ts) and contact route (app/api/contact/route.ts) both read this env var at runtime.
