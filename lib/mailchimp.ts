import crypto from 'crypto';

const API_KEY = process.env.MAILCHIMP_API_KEY;
const DATACENTER =
  process.env.MAILCHIMP_API_SERVER || process.env.MAILCHIMP_SERVER_PREFIX;

function authHeader(): string {
  return `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`;
}

function md5(input: string): string {
  return crypto.createHash('md5').update(input.toLowerCase()).digest('hex');
}

// Module-level cache for the resolved audience ID (mirrors the IPM setup so we
// don't re-resolve the list on every submission within a warm serverless instance).
let cachedAudienceId: string | null = null;

export async function getAudienceId(): Promise<string | null> {
  if (cachedAudienceId) return cachedAudienceId;

  const envId = process.env.MAILCHIMP_AUDIENCE_ID;
  if (envId) {
    cachedAudienceId = envId;
    return cachedAudienceId;
  }

  // Fallback: resolve the first available list if no audience ID was provided.
  if (!API_KEY || !DATACENTER) return null;
  try {
    const res = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists?count=1&fields=lists.id`,
      { headers: { Authorization: authHeader() } }
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { lists?: Array<{ id: string }> };
    cachedAudienceId = data.lists?.[0]?.id ?? null;
    return cachedAudienceId;
  } catch (err) {
    console.error('[mailchimp] failed to resolve audience id:', err);
    return null;
  }
}

// Baseline tags applied to every Aivara Solutions website lead.
const BASELINE_TAGS = [
  'Website Lead',
  'Aivara Inquiry',
  'Aivara Solutions Lead',
  'Business Inquiry',
];

/**
 * Build the full tag list for a lead. Baseline tags are always applied.
 * Conditional tags are mapped ONLY to forms/routes/services that actually
 * exist in this project:
 *   - Contact Form      -> /contact ContactForm submissions
 *   - Portal Inquiry    -> Client Portal Buildout offer (/custom-client-portals)
 *   - Automation Inquiry-> AI Automation Starter System offer (/ai-automation-small-business)
 *   - AI Solutions Inquiry -> service "AI & Education"
 *   - Software Inquiry   -> service "Web & Marketing" (web/portal/software builds)
 *   - FreightSync Inquiry-> service "Logistics" (FreightSync logistics product)
 *   - Consulting Inquiry -> service "Multiple Services" / "Other"
 * Social Scheduler Inquiry has no corresponding form/page and is intentionally
 * not mapped (we do not invent routes).
 */
export function buildLeadTags(source?: string, service?: string): string[] {
  const tags = [...BASELINE_TAGS];
  const s = (source || '').toLowerCase();
  const svc = (service || '').toLowerCase();

  // Source / offer based
  if (s.includes('contact form')) tags.push('Contact Form');
  if (s.includes('portal')) tags.push('Portal Inquiry');
  if (s.includes('automation')) tags.push('Automation Inquiry');

  // Service based
  if (svc.includes('ai')) tags.push('AI Solutions Inquiry');
  if (svc.includes('web') || svc.includes('marketing')) tags.push('Software Inquiry');
  if (svc.includes('logistic')) tags.push('FreightSync Inquiry');
  if (svc.includes('multiple') || svc === 'other') tags.push('Consulting Inquiry');

  return Array.from(new Set(tags));
}

interface LeadInput {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  message: string;
  service: string;
  source: string;
  tags: string[];
}

/**
 * Upsert a lead into the Aivara Solutions Mailchimp audience, apply tags
 * additively, and attach an inquiry note. Throws on hard failure so the
 * caller can handle it via Promise.allSettled without crashing the request.
 */
export async function syncLeadToMailchimp(lead: LeadInput): Promise<void> {
  if (!API_KEY || !DATACENTER) {
    throw new Error('Mailchimp not configured');
  }
  const audienceId = await getAudienceId();
  if (!audienceId) {
    throw new Error('Mailchimp audience could not be resolved');
  }

  const email = lead.email.trim().toLowerCase();
  const hash = md5(email);
  const base = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${audienceId}/members/${hash}`;

  // PUT upsert — creates or updates without failing on existing members.
  const upsertRes = await fetch(base, {
    method: 'PUT',
    headers: { Authorization: authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email_address: email,
      status_if_new: 'subscribed',
      merge_fields: {
        FNAME: lead.firstName,
        LNAME: lead.lastName,
        PHONE: lead.phone || '',
        MESSAGE: lead.message.substring(0, 255),
      },
    }),
  });

  if (!upsertRes.ok) {
    const data = await upsertRes.json().catch(() => ({}));
    throw new Error(
      `Mailchimp upsert failed (${upsertRes.status}): ${JSON.stringify(data)}`
    );
  }

  // Apply tags additively. Tagging is a core requirement, so a non-2xx response
  // must be surfaced (logged with status + body) rather than silently swallowed.
  // We still don't throw here — the member upsert already succeeded, and the
  // request should not fail just because tagging hit a transient API error.
  try {
    const tagRes = await fetch(`${base}/tags`, {
      method: 'POST',
      headers: { Authorization: authHeader(), 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tags: lead.tags.map((name) => ({ name, status: 'active' })),
      }),
    });
    if (!tagRes.ok) {
      const body = await tagRes.text().catch(() => '');
      console.error(`[mailchimp] tag apply returned ${tagRes.status} for ${email}: ${body}`);
    }
  } catch (err) {
    console.error('[mailchimp] tag apply failed:', err);
  }

  // Attach an inquiry note (best-effort).
  await fetch(`${base}/notes`, {
    method: 'POST',
    headers: { Authorization: authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify({
      note: `${lead.source} Inquiry - ${lead.service}\n\nMessage: ${lead.message}\n\nSubmitted: ${new Date().toISOString()}`,
    }),
  }).catch((err) => console.error('[mailchimp] note add failed:', err));
}
