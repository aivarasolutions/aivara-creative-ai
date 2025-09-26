"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Play, Menu, X } from "lucide-react";

export default function AivaraCreativeAI() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-black text-white min-h-screen w-full">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full gradient-text inline-block" />
            <span className="text-lg font-semibold tracking-wide">Aivara Solutions</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-gray-300 hover:text-white transition">
                {item.label}
              </a>
            ))}
            <Button className="px-5 py-2">Get a Quote</Button>
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
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-gray-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <Button className="px-5 py-3">Get a Quote</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative flex flex-col items-center justify-center text-center px-6 py-32">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold gradient-text"
        >
          Creative AI Studio for Brands & Creators
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg text-gray-300"
        >
          From custom jingles to animated reels, we power your vision with AI-driven creativity.
        </motion.p>
        <div className="mt-8 flex gap-4">
          <Button className="px-8 py-6 text-lg">Start Your Project</Button>
          <Button variant="outline" className="px-8 py-6 text-lg">
            <Play className="mr-2 h-5 w-5" /> Watch Demo
          </Button>
        </div>
      </section>

      {/* Showreel / Demo Section */}
      <section id="work" className="relative bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 py-20 px-6 text-center text-black">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Made with Aivara</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Custom Jingle", desc: "Unique sound branding for your business." },
            { title: "Animated Reel", desc: "Social-first content powered by AI visuals." },
            { title: "Branded Theme Song", desc: "Memorable music for your brand identity." },
          ].map((item, idx) => (
            <Card key={idx} className="bg-black/70 backdrop-blur-lg border border-white/10 text-white">
              <CardContent>
                <h3 className="text-xl font-semibold mb-2 gradient-text">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Bring Your Ideas to Life with AI
        </motion.h2>
        <Button className="px-10 py-6 text-xl">Start Your Project Today</Button>
      </section>

      {/* Services */}
      <section id="services" className="bg-black py-24 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 gradient-text">Our Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "AI Marketing", desc: "Campaigns, copy, and creative powered by AI." },
            { title: "Custom GPTs", desc: "Tailored AI assistants for any business workflow." },
            { title: "Creative Media", desc: "Jingles, reels, and branded content with AI." },
          ].map((service, idx) => (
            <Card key={idx} className="bg-black/60 border border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-teal-300">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gradient-to-r from-yellow-400 via-teal-400 to-pink-600 py-24 px-6 text-black text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">About Aivara Solutions</h2>
        <p className="max-w-3xl mx-auto text-lg">
          We are innovators at the intersection of AI, creativity, and business. Our mission is to empower brands, creators, and companies to harness artificial intelligence for growth, engagement, and unforgettable storytelling.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-black py-24 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 gradient-text">Get in Touch</h2>
        <p className="text-gray-400 mb-6">Have a project in mind? Let's make it real with AI.</p>
        <form className="max-w-xl mx-auto flex flex-col gap-6">
          <input type="text" placeholder="Your Name" className="p-4 rounded-xl bg-black/70 border border-white/20 text-white" />
          <input type="email" placeholder="Your Email" className="p-4 rounded-xl bg-black/70 border border-white/20 text-white" />
          <textarea placeholder="Tell us about your project..." className="p-4 rounded-xl bg-black/70 border border-white/20 text-white" rows={5}></textarea>
          <Button className="px-10 py-6 text-lg">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-3 w-3 rounded-full gradient-text inline-block" />
              <span className="font-semibold">Aivara Solutions</span>
            </div>
            <p className="text-sm text-gray-400">
              Creative AI for brands & creators. Jingles, theme songs, reels, custom GPTs, and AI marketing that converts.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-200">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#work" className="hover:text-white">Work</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-gray-200">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Custom Jingles & Theme Songs</li>
              <li>AI Marketing & Ad Creative</li>
              <li>Custom GPTs & Automations</li>
              <li>Reels & Video Content</li>
            </ul>
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
    </div>
  );
}
