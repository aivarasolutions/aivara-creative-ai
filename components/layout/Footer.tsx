import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-3 w-3 rounded-full gradient-text inline-block" />
            <span className="font-semibold">Aivara Solutions</span>
          </div>
          <p className="text-sm text-gray-400">
            Technology + Creativity for the Modern Business. AI & Education, Web & Marketing, Logistics, and Aivara Music.
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
            <li><Link href="/services/ai-education" className="hover:text-white">AI & Education</Link></li>
            <li><Link href="/services/web-marketing" className="hover:text-white">Web & Marketing</Link></li>
            <li><Link href="/services/logistics" className="hover:text-white">Logistics</Link></li>
            <li><Link href="/services/music" className="hover:text-white">Aivara Music</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3 text-gray-200">Contact Us</h4>
          <div className="space-y-3">
            <a href="mailto:Kevin@AivaraSolutions.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
              <Mail className="h-4 w-4" />
              Kevin@AivaraSolutions.com
            </a>
            <a href="tel:310-400-0032" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
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

        <div>
          <h4 className="text-sm font-semibold mb-3 text-gray-200">Get Updates</h4>
          <form className="flex gap-2">
            <input type="email" placeholder="Email address" className="flex-1 p-3 rounded-xl bg-black/70 border border-white/10 text-white" />
            <Button className="px-5">Join</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-gray-500 py-6">
        © {new Date().getFullYear()} Aivara Solutions. All rights reserved.
      </div>
    </footer>
  );
}