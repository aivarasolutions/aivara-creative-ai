'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';

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
  subheadline = 'Tell us about your business — we’ll send back a quick plan and quote within 24 hours.',
  ctaLabel = 'Send My Request',
}: LandingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
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
          service,
          message: `[${offer}] Business: ${formData.business || 'N/A'} — ${formData.message}`,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'Thanks! We’ll be in touch within 24 hours.');
        setFormData({ name: '', email: '', phone: '', business: '', message: '' });
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again or email Kevin@AivaraSolutions.com.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-br from-pink-600/40 via-teal-500/40 to-yellow-400/40 rounded-3xl blur-xl opacity-60"></div>
      <div className="relative bg-gradient-to-br from-black via-black to-black/90 border border-white/15 rounded-3xl p-8 md:p-10 shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">{headline}</h2>
        <p className="text-gray-400 mb-7">{subheadline}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/60 transition"
              required
              disabled={status === 'loading'}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/60 transition"
              required
              disabled={status === 'loading'}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone (optional)"
              value={formData.phone}
              onChange={handleChange}
              className="p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/60 transition"
              disabled={status === 'loading'}
            />
            <input
              type="text"
              name="business"
              placeholder="Business / Industry"
              value={formData.business}
              onChange={handleChange}
              className="p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/60 transition"
              disabled={status === 'loading'}
            />
          </div>

          <textarea
            name="message"
            placeholder="What are you trying to build, automate, or improve?"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/60 transition"
            rows={4}
            required
            disabled={status === 'loading'}
          />

          <Button
            type="submit"
            className="w-full px-10 py-6 text-lg font-semibold transition-transform hover:scale-[1.02]"
            disabled={status === 'loading'}
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
            >
              {message}
            </div>
          )}

          <p className="text-xs text-gray-500 text-center pt-2">
            No spam. We respond within 24 hours.
          </p>
        </form>
      </div>
    </div>
  );
}
