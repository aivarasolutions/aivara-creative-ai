"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceItems = [
    { label: "AI Automation", href: "/#offers" },
    { label: "Portals & Dashboards", href: "/#offers" },
    { label: "Lead Generation", href: "/#offers" },
    { label: "AI Training", href: "/contact" },
    { label: "Creative Media", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/aivara-logo.png"
            alt="Aivara Solutions"
            width={64}
            height={64}
            className="h-12 w-12 rounded-xl object-contain"
            priority
          />
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
               type="button"
              className="text-sm text-gray-300 hover:text-white transition flex items-center gap-1"
              onClick={() => setServicesOpen(!servicesOpen)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setTimeout(() => setServicesOpen(false), 200);
                }
              }}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
               aria-controls="desktop-services-menu"
            >
              Services
              <ChevronDown className={`h-3 w-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div 
                 id="desktop-services-menu"
                 role="menu"
                className="absolute top-full left-0 mt-2 w-56 bg-black/95 border border-white/10 rounded-xl shadow-xl py-2 z-50"
                onMouseLeave={() => setServicesOpen(false)}
              >
                {serviceItems.map((item) => (
                  <Link
                    key={`${item.label}-${item.href}`}
                    role="menuitem"
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
          
          <Link href="/contact" className="rounded-2xl inline-flex items-center justify-center bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 px-5 py-2 font-semibold text-black transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-xl border border-white/10"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-white/10 bg-black/80">
          <nav className="px-4 py-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)} className="text-base text-gray-300 hover:text-white">
              Home
            </Link>
            
            {/* Mobile Services Submenu */}
            <div>
              <button 
                type="button"
                className="text-base text-gray-300 hover:text-white flex items-center gap-1 w-full"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-controls="mobile-services-menu"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div id="mobile-services-menu" className="ml-4 mt-2 space-y-2">
                  {serviceItems.map((item) => (
                    <Link
                      key={`${item.label}-${item.href}`}
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
            
            <Link href="/contact" onClick={() => setOpen(false)} className="w-full rounded-2xl inline-flex items-center justify-center bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 px-5 py-3 font-semibold text-black transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black">
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}