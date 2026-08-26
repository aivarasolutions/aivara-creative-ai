'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { trackLead, trackFormError } from '@/lib/analytics';

interface LandingFormProps {
  offer: string;
  service: string;
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
}

export function LandingForm({
  offer,
  service,
  headline = 'Request Your Free Strategy Call',
  subheadline = 'Tell us about your business and we’ll follow up with next steps and a tailored proposal.',
  ctaLabel = 'Send My Request',
}: LandingFormProps) {
  const formId = offer.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
    marketingConsent: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          marketingConsent: formData.marketingConsent,
          service,
          message: `[${offer}] Business: ${formData.business || 'N/A'} — ${formData.message}`,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'Thanks! Your message has been received. We’ll follow up with next steps.');
        trackLead({
          service,
          source: 'landing_page',
          formType: 'service_lead',
          extra: { offer },
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          business: '',
          message: '',
          marketingConsent: false,
        });
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
        trackFormError('landing_page', 'service_lead', data.error || 'unknown');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again or email Kevin@AivaraSolutions.com.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value =
      e.target instanceof HTMLInputElement && e.target.type === 'checkbox'
        ? e.target.checked
        : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-br from-pink-600/40 via-teal-500/40 to-yellow-400/40 rounded-3xl blur-xl opacity-60"></div>
      <div className="relative bg-gradient-to-br from-black via-black to-black/90 border border-white/15 rounded-3xl p-8 md:p-10 shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">{headline}</h2>
        <p className="text-gray-400 mb-7">{subheadline}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`${formId}-name`} className="sr-only">Your name</label>
              <input
                id={`${formId}-name`}
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/60 transition"
                required
                disabled={status === 'loading'}
              />
            </div>
            <div>
              <label htmlFor={`${formId}-email`} className="sr-only">Email address</label>
              <input
                id={`${formId}-email`}
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/60 transition"
                required
                disabled={status === 'loading'}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`${formId}-phone`} className="sr-only">Phone (optional)</label>
              <input
                id={`${formId}-phone`}
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/60 transition"
                disabled={status === 'loading'}
              />
              <p className="mt-2 text-xs text-gray-400">
                Optional. We use this only to respond to your inquiry; it is not SMS consent.
              </p>
            </div>
            <div>
              <label htmlFor={`${formId}-business`} className="sr-only">Business or industry</label>
              <input
                id={`${formId}-business`}
                type="text"
                name="business"
                placeholder="Business / Industry"
                autoComplete="organization"
                value={formData.business}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/60 transition"
                disabled={status === 'loading'}
              />
            </div>
          </div>

          <div>
            <label htmlFor={`${formId}-message`} className="sr-only">What are you trying to build, automate, or improve?</label>
            <textarea
              id={`${formId}-message`}
              name="message"
              placeholder="What are you trying to build, automate, or improve?"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/60 transition"
              rows={4}
              required
              disabled={status === 'loading'}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <input
                id={`${formId}-marketing-consent`}
                type="checkbox"
                name="marketingConsent"
                checked={formData.marketingConsent}
                onChange={handleChange}
                disabled={status === 'loading'}
                className="mt-1 h-4 w-4 rounded border-white/30 bg-black text-teal-500 focus:ring-teal-400"
              />
              <label htmlFor={`${formId}-marketing-consent`} className="text-sm text-gray-300">
                Yes, email me Aivara Solutions tips, updates, and offers. I can unsubscribe
                at any time.
              </label>
            </div>
            <p className="pl-7 text-xs text-gray-400">
              Choosing not to receive updates will not affect your request.
            </p>
          </div>

          <Button
            type="submit"
            className="w-full px-10 py-6 text-lg font-semibold transition-transform hover:scale-[1.02]"
            disabled={status === 'loading'}
            aria-busy={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : ctaLabel}
          </Button>

          {message && (
            <div
              className={`p-4 rounded-xl text-sm ${
                status === 'success'
                  ? 'bg-teal-500/10 border border-teal-500/30 text-teal-300'
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}
              role={status === 'error' ? 'alert' : 'status'}
              aria-live="polite"
              aria-atomic="true"
            >
              {message}
            </div>
          )}

          <p className="text-xs text-gray-500 text-center pt-2">
            No spam. We’ll follow up with next steps.
          </p>
        </form>
      </div>
    </div>
  );
}
