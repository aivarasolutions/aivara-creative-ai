"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceItems = [
    { label: "AI & Education", href: "/services/ai-education" },
    { label: "Web & Marketing", href: "/services/web-marketing" },
    { label: "Logistics", href: "/services/logistics" },
    { label: "Aivara Music", href: "/services/music" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full gradient-text inline-block" />
          <span className="text-lg font-semibold tracking-wide">Aivara Solutions</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-gray-300 hover:text-white transition">
            Home
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative">
            <button 
              className="text-sm text-gray-300 hover:text-white transition flex items-center gap-1"
              onClick={() => setServicesOpen(!servicesOpen)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setTimeout(() => setServicesOpen(false), 200);
                }
              }}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown className={`h-3 w-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-56 bg-black/95 border border-white/10 rounded-xl shadow-xl py-2 z-50"
                onMouseLeave={() => setServicesOpen(false)}
              >
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
                    onClick={() => setServicesOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/portfolio" className="text-sm text-gray-300 hover:text-white transition">
            Portfolio
          </Link>
          
          <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition">
            Contact
          </Link>
          
          <Link href="/contact">
            <Button className="px-5 py-2">Get a Quote</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-xl border border-white/10"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <nav className="px-4 py-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)} className="text-base text-gray-300 hover:text-white">
              Home
            </Link>
            
            {/* Mobile Services Submenu */}
            <div>
              <button 
                className="text-base text-gray-300 hover:text-white flex items-center gap-1 w-full"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block text-sm text-gray-400 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/portfolio" onClick={() => setOpen(false)} className="text-base text-gray-300 hover:text-white">
              Portfolio
            </Link>
            
            <Link href="/contact" onClick={() => setOpen(false)} className="text-base text-gray-300 hover:text-white">
              Contact
            </Link>
            
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button className="px-5 py-3 w-full">Get a Quote</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}