'use client';

import { useEffect, useState, useCallback, FormEvent } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { trackEvent, trackNewsletterSignup } from '@/lib/analytics';

const STORAGE_KEY = 'aivara_popup_state_v1';
const DISMISS_DAYS = 7;
const SHOW_DELAY_MS = 8000;
const MOBILE_SCROLL_PCT = 0.4;

// Routes where the newsletter popup must never appear (e.g. legal pages that
// need to be cleanly verifiable by third parties such as Twilio A2P review).
const EXCLUDED_PATHS = ['/privacy-policy', '/terms-and-conditions'];

type PopupState = {
  dismissedAt?: number;
  subscribed?: boolean;
};

function readState(): PopupState {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function writeState(state: PopupState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

function shouldSuppress(state: PopupState): boolean {
  if (state.subscribed) return true;
  if (state.dismissedAt) {
    const ageMs = Date.now() - state.dismissedAt;
    if (ageMs < DISMISS_DAYS * 24 * 60 * 60 * 1000) return true;
  }
  return false;
}

const track = trackEvent;

const INTEREST_OPTIONS = [
  'AI Automation',
  'Client Portals & Dashboards',
  'Lead Generation',
  'AI Training',
  'Creative Media',
  'Website + Automation',
  'Not Sure Yet',
];

export function NewsletterPopup() {
  const pathname = usePathname();
  const isExcluded = EXCLUDED_PATHS.includes(pathname);
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const closePopup = useCallback(
    (reason: 'close' | 'maybe_later' | 'escape' | 'backdrop' = 'close') => {
      setOpen(false);
      const prev = readState();
      writeState({ ...prev, dismissedAt: Date.now() });
      track('newsletter_popup_close', { reason });
    },
    []
  );

  // Trigger logic: timer, exit-intent (desktop), scroll 40% (mobile)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isExcluded) return;
    if (shouldSuppress(readState())) return;

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setOpen(true);
      track('newsletter_popup_view', { page_path: window.location.pathname });
    };

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const timer = window.setTimeout(show, SHOW_DELAY_MS);

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !shown) show();
    };

    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      if (docH <= 0) return;
      const pct = window.scrollY / docH;
      if (pct >= MOBILE_SCROLL_PCT) show();
    };

    if (!isMobile) {
      document.addEventListener('mouseout', onMouseOut);
    } else {
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('scroll', onScroll);
    };
  }, [isExcluded]);

  // Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePopup('escape');
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, closePopup]);

  // Lock body scroll while open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRx.test(trimmedEmail)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');
    track('newsletter_subscribe_attempt', {
      source: 'website_popup',
      interest,
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    });

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: trimmedEmail,
          interest,
          source: 'Website Popup',
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(
          data.message ||
            "You're in! Check your inbox for a welcome message from Aivara Solutions."
        );
        writeState({ subscribed: true });
        trackNewsletterSignup('website_popup', interest);
      } else {
        setStatus('error');
        setMessage(
          data.error || 'Something went wrong. Please try again or contact us directly.'
        );
        track('newsletter_subscribe_error', {
          source: 'website_popup',
          interest,
          reason: data.error || 'unknown',
        });
      }
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again or contact us directly.');
      track('newsletter_subscribe_error', {
        source: 'website_popup',
        interest,
        reason: 'network',
      });
    }
  };

  if (isExcluded || !open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="aivara-popup-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) closePopup('backdrop');
      }}
    >
      <div className="relative w-full max-w-lg">
        {/* Gradient glow border */}
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-pink-600 via-teal-500 to-yellow-400 opacity-70 blur-lg" />
        <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {/* Gradient bar top */}
          <div className="h-1 bg-gradient-to-r from-pink-600 via-purple-500 via-teal-500 to-yellow-400" />

          {/* Close */}
          <button
            type="button"
            onClick={() => closePopup('close')}
            aria-label="Close popup"
            className="absolute top-3 right-3 z-10 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-6 sm:p-8">
            {/* Logo */}
            <div className="flex justify-center mb-5">
              <img
                src="/images/aivara-logo.png"
                alt="Aivara Solutions"
                className="h-16 sm:h-20 w-auto"
              />
            </div>

            {status === 'success' ? (
              <div className="text-center py-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-pink-600 via-teal-500 to-yellow-400 mb-4">
                  <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">You&apos;re in!</h2>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">{message}</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-semibold transition"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2
                  id="aivara-popup-title"
                  className="text-2xl sm:text-3xl font-bold text-center mb-3 bg-gradient-to-r from-pink-400 via-teal-300 to-yellow-300 bg-clip-text text-transparent"
                >
                  Build Smarter. Automate Faster.
                </h2>
                <p className="text-sm sm:text-base text-gray-300 text-center mb-6 leading-relaxed">
                  Join the Aivara Solutions list for AI tools, automation tips, business systems, marketing strategies, and launch updates.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    autoComplete="given-name"
                    className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-teal-400/60 focus:ring-1 focus:ring-teal-400/30"
                    disabled={status === 'loading'}
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-teal-400/60 focus:ring-1 focus:ring-teal-400/30"
                    disabled={status === 'loading'}
                  />
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-teal-400/60 focus:ring-1 focus:ring-teal-400/30"
                    disabled={status === 'loading'}
                  >
                    <option value="">Business type / interest</option>
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full mt-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 text-black font-bold text-base hover:opacity-95 active:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                  >
                    {status === 'loading' ? 'Joining…' : 'Join the Aivara List'}
                  </button>

                  {status === 'error' && message && (
                    <p className="text-xs text-red-400 text-center pt-1">{message}</p>
                  )}
                </form>

                <p className="text-[11px] text-gray-500 text-center mt-4 leading-relaxed">
                  No spam. Just practical tools, ideas, and updates to help your business operate smarter.
                </p>

                <div className="text-center mt-3">
                  <button
                    type="button"
                    onClick={() => closePopup('maybe_later')}
                    className="text-xs text-gray-500 hover:text-gray-300 transition underline-offset-4 hover:underline"
                  >
                    Maybe later
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
