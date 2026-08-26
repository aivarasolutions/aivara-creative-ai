'use client';

import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { trackEvent, trackNewsletterSignup } from '@/lib/analytics';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    trackEvent('newsletter_subscribe_attempt', { source: 'footer', form_type: 'newsletter' });

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          interest: 'Website Footer',
          source: 'Website Footer',
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage('Thank you! Check your inbox for a welcome email.');
        setEmail('');
        trackNewsletterSignup('footer');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
        trackEvent('newsletter_subscribe_error', {
          source: 'footer',
          form_type: 'newsletter',
          reason: data.error || 'unknown',
        });
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <div>
      <h4 className="text-sm font-semibold mb-3 text-gray-200">Get Updates</h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="footer-newsletter-email" className="sr-only">Email address</label>
        <input
          id="footer-newsletter-email"
          type="email"
          placeholder="Email address"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 rounded-xl bg-black/70 border border-white/10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50"
          disabled={status === 'loading'}
        />
        <Button 
          type="submit" 
          className="w-full" 
          disabled={status === 'loading'}
          aria-busy={status === 'loading'}
        >
          {status === 'loading' ? 'Joining...' : 'Join'}
        </Button>
        {message && (
          <p
            role={status === 'error' ? 'alert' : 'status'}
            aria-live="polite"
            aria-atomic="true"
            className={`text-xs ${status === 'success' ? 'text-teal-400' : 'text-red-400'}`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
