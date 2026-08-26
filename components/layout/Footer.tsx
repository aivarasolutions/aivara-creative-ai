'use client';

import Link from "next/link";
import { Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { trackPhoneClick, trackEmailClick } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/aivara-logo.png" alt="Aivara Solutions" className="h-16 w-auto" />
            <span className="font-semibold text-lg">Aivara Solutions</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Aivara Solutions builds websites, portals, automations, AI workflows, lead generation systems, and creative content for modern businesses.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-gray-200">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-gray-200">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/services" className="hover:text-white">AI Automation</Link></li>
            <li><Link href="/services" className="hover:text-white">Portals &amp; Dashboards</Link></li>
            <li><Link href="/services" className="hover:text-white">Lead Generation</Link></li>
            <li><Link href="/services" className="hover:text-white">AI Training</Link></li>
            <li><Link href="/services" className="hover:text-white">Creative Media</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-gray-200">Contact Us</h4>
          <div className="space-y-3">
            <a
              href="mailto:Kevin@AivaraSolutions.com"
              onClick={() => trackEmailClick('footer', 'kevin@aivarasolutions.com')}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              <Mail className="h-4 w-4" />
              Kevin@AivaraSolutions.com
            </a>
            <a
              href="tel:310-400-0032"
              onClick={() => trackPhoneClick('footer')}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              <Phone className="h-4 w-4" />
              310-400-0032
            </a>
            <div className="flex gap-3 mt-4">
              <a href="https://instagram.com/aivarasolutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Follow us on Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/share/1RtPaToeGh/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Follow us on Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/aivara-solutions-llc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label="Connect with us on LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <NewsletterForm />
      </div>
      <div className="border-t border-white/10 py-6 px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-gray-500">
        <span>© {new Date().getFullYear()} Aivara Solutions. All rights reserved.</span>
        <span className="hidden sm:inline text-gray-700">|</span>
        <div className="flex items-center gap-4">
          <Link href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-white transition">
            Terms &amp; Conditions
          </Link>
          <Link href="/accessibility" className="hover:text-white transition">
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  );
}