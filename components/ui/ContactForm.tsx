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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-black/60 border border-white/10 rounded-2xl p-8">
      <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50"
            required
            disabled={status === 'loading'}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50"
            required
            disabled={status === 'loading'}
          />
        </div>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (optional)"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50"
          disabled={status === 'loading'}
        />

        <select
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

        <textarea
          name="message"
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50"
          rows={6}
          required
          disabled={status === 'loading'}
        ></textarea>

        <Button 
          type="submit" 
          className="w-full px-10 py-6 text-lg" 
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </Button>

        {message && (
          <div className={`p-4 rounded-xl ${
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
