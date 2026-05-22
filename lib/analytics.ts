type Params = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

function isDebug(): boolean {
  if (!isBrowser()) return false;
  try {
    if (window.location.search.includes('debugAnalytics=true')) {
      try {
        sessionStorage.setItem('aivara_debug_analytics', '1');
      } catch {
        /* ignore */
      }
      return true;
    }
    return sessionStorage.getItem('aivara_debug_analytics') === '1';
  } catch {
    return false;
  }
}

function pagePath(): string {
  if (!isBrowser()) return '';
  return window.location.pathname + window.location.search;
}

function pageTitle(): string {
  if (typeof document === 'undefined') return '';
  return document.title;
}

function debugLog(eventName: string, params: Params) {
  if (!isDebug()) return;
  // eslint-disable-next-line no-console
  console.log(`%cAivara Analytics Event: ${eventName}`, 'color:#14b8a6;font-weight:bold', params);
}

function pushDataLayer(eventName: string, params: Params) {
  if (!isBrowser()) return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...params });
  } catch {
    /* ignore */
  }
}

function sendGtag(eventName: string, params: Params) {
  if (!isBrowser()) return;
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  } catch {
    /* ignore */
  }
}

/**
 * Fire an analytics event. Safe to call from anywhere — no-ops if
 * GTM/GA4 are not loaded. Always pushes to dataLayer so GTM can pick it up.
 */
export function trackEvent(eventName: string, params: Params = {}) {
  const enriched: Params = {
    page_path: pagePath(),
    page_title: pageTitle(),
    ...params,
  };
  debugLog(eventName, enriched);
  pushDataLayer(eventName, enriched);
  sendGtag(eventName, enriched);
}

export function trackPageView(path?: string, title?: string) {
  const p = path || pagePath();
  const t = title || pageTitle();
  const measurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  trackEvent('page_view', {
    page_path: p,
    page_title: t,
    page_location: isBrowser() ? window.location.href : '',
  });
  // Also update gtag config so GA4 attributes events to the new page
  if (isBrowser() && measurementId && typeof window.gtag === 'function') {
    try {
      window.gtag('config', measurementId, { page_path: p, page_title: t });
    } catch {
      /* ignore */
    }
  }
}

export function trackCTA(buttonText: string, location: string, destination?: string) {
  trackEvent('cta_click', {
    button_text: buttonText,
    source: location,
    destination: destination || '',
  });
}

export function trackBookingClick(source: string) {
  trackEvent('book_strategy_call', {
    source,
    button_text: 'Book a Free Strategy Call',
    value: 500,
  });
  trackEvent('cta_click', {
    source,
    button_text: 'Book a Free Strategy Call',
    value: 500,
  });
  trackGoogleAdsConversion('booking', { value: 500 });
}

export function trackPhoneClick(source: string, phoneNumber = '310-400-0032') {
  trackEvent('click_call_button', {
    source,
    phone_number: phoneNumber,
    value: 150,
  });
  trackGoogleAdsConversion('call', { value: 150 });
}

export function trackEmailClick(source: string, email = 'kevin@aivarasolutions.com') {
  trackEvent('click_email_button', {
    source,
    email,
    value: 50,
  });
  trackGoogleAdsConversion('email', { value: 50 });
}

export function trackLead(opts: {
  service?: string;
  source: string;
  formType: string;
  value?: number;
  extra?: Params;
}) {
  const value = typeof opts.value === 'number' ? opts.value : 250;
  trackEvent('generate_lead', {
    service: opts.service || '',
    source: opts.source,
    form_type: opts.formType,
    value,
    ...(opts.extra || {}),
  });
  trackGoogleAdsConversion('lead', { value });
}

export function trackNewsletterSignup(source: string, interest?: string) {
  const value = 25;
  trackEvent('newsletter_subscribe_success', {
    source,
    interest: interest || '',
    form_type: 'newsletter',
    value,
  });
  trackEvent('generate_lead', {
    source,
    interest: interest || '',
    form_type: 'newsletter',
    value,
  });
  trackGoogleAdsConversion('newsletter', { value });
}

export function trackServicePageView(service: string) {
  trackEvent('view_service_page', { service });
}

export function trackFormError(source: string, formType: string, reason: string) {
  trackEvent('form_error', { source, form_type: formType, reason });
}

/**
 * Google Ads conversion fire. If gtag + env vars are present, fires
 * `gtag('event','conversion', { send_to: AW-XXXX/LABEL })`. Otherwise
 * still pushes a clean dataLayer event so GTM can map it.
 */
export type GoogleAdsConversionType = 'lead' | 'booking' | 'call' | 'email' | 'newsletter';

const CONVERSION_DEFAULT_VALUES: Record<GoogleAdsConversionType, number> = {
  lead: 250,
  booking: 500,
  call: 150,
  email: 50,
  newsletter: 25,
};

function labelFor(type: GoogleAdsConversionType): string | undefined {
  switch (type) {
    case 'lead':
      return process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_LEAD;
    case 'booking':
      return process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_BOOKING;
    case 'call':
      return process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_CALL;
    case 'email':
      return process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_EMAIL;
    case 'newsletter':
      return process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL_NEWSLETTER;
  }
}

export function trackGoogleAdsConversion(
  type: GoogleAdsConversionType,
  params: { value?: number; currency?: string } = {}
) {
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const label = labelFor(type);
  const value = typeof params.value === 'number' ? params.value : CONVERSION_DEFAULT_VALUES[type];
  const currency = params.currency || 'USD';

  // Always emit a clean dataLayer event so GTM can fire its own conversion tag
  pushDataLayer('google_ads_conversion', {
    conversion_type: type,
    value,
    currency,
  });

  if (!isBrowser()) return;
  if (!adsId || !label) {
    debugLog('google_ads_conversion (no IDs configured)', { type, value, currency });
    return;
  }
  if (typeof window.gtag !== 'function') {
    debugLog('google_ads_conversion (gtag not loaded)', { type, value, currency });
    return;
  }

  try {
    window.gtag('event', 'conversion', {
      send_to: `${adsId}/${label}`,
      value,
      currency,
    });
    debugLog('google_ads_conversion', { type, send_to: `${adsId}/${label}`, value, currency });
  } catch {
    /* ignore */
  }
}
