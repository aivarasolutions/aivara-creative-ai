'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { trackLead, trackFormError } from '@/lib/analytics';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
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
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(data.message);
        trackLead({
          service: formData.service,
          source: 'contact_form',
          formType: 'contact',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          marketingConsent: false,
        });
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
        trackFormError('contact_form', 'contact', data.error || 'unknown');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again or email us directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value =
      e.target instanceof HTMLInputElement && e.target.type === 'checkbox'
        ? e.target.checked
        : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <div className="bg-black/60 border border-white/10 rounded-2xl p-8">
      <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="sr-only">Your name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50"
                required
                disabled={status === 'loading'}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">Your email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50"
                required
                disabled={status === 'loading'}
              />
            </div>
        </div>

        <div>
          <label htmlFor="contact-phone" className="sr-only">Phone number (optional)</label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            placeholder="Phone Number (optional)"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50"
            disabled={status === 'loading'}
          />
          <p className="mt-2 text-xs text-gray-400">
            Optional. We use this only to respond to your inquiry; it is not SMS consent.
          </p>
        </div>

        <div>
          <label htmlFor="contact-service" className="sr-only">Select a service</label>
          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white focus:outline-none focus:border-teal-500/50"
            required
            disabled={status === 'loading'}
          >
            <option value="">Select a Service</option>
            <option value="AI & Education">AI & Education</option>
            <option value="Web & Marketing">Web & Marketing</option>
            <option value="Logistics">Logistics</option>
            <option value="Aivara Music">Aivara Music</option>
            <option value="Multiple Services">Multiple Services</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="sr-only">Tell us about your project</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50"
            rows={6}
            required
            disabled={status === 'loading'}
          ></textarea>
        </div>

        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <input
              id="contact-marketing-consent"
              type="checkbox"
              name="marketingConsent"
              checked={formData.marketingConsent}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="mt-1 h-4 w-4 rounded border-white/30 bg-black text-teal-500 focus:ring-teal-400"
            />
            <label htmlFor="contact-marketing-consent" className="text-sm text-gray-300">
              Yes, email me Aivara Solutions tips, updates, and offers. I can unsubscribe at
              any time.
            </label>
          </div>
          <p className="pl-7 text-xs text-gray-400">
            Choosing not to receive updates will not affect your inquiry.
          </p>
        </div>

        <Button 
          type="submit" 
          className="w-full px-10 py-6 text-lg" 
          disabled={status === 'loading'}
          aria-busy={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </Button>

        {message && (
          <div
            id="contact-form-status"
            role={status === 'error' ? 'alert' : 'status'}
            aria-live="polite"
            aria-atomic="true"
            className={`p-4 rounded-xl ${
            status === 'success' 
              ? 'bg-teal-500/10 border border-teal-500/30 text-teal-400' 
              : 'bg-red-500/10 border border-red-500/30 text-red-400'
          }`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
