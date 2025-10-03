"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { motion } from "framer-motion";
import { Lightbulb, Globe, Truck, Music } from "lucide-react";

export default function HomePage() {
  const [portfolioFilter, setPortfolioFilter] = useState("All");

  const services = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "AI & Education",
      description: "Onboarding, automation, and beginner-friendly training.",
      href: "/services/ai-education",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web & Marketing",
      description: "Websites, SEO, branding, and growth campaigns.",
      href: "/services/web-marketing",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics",
      description: "Last-mile, routing, and operational tech.",
      href: "/services/logistics",
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Aivara Music",
      description: "Custom jingles and sound identity for brands.",
      href: "/services/music",
    },
  ];

  const portfolioItems = [
    { title: "AI Training Platform", category: "AI", image: "/images/portfolio/ai-training.jpg", description: "Custom onboarding automation" },
    { title: "E-Commerce Redesign", category: "Web", image: "/images/portfolio/ecommerce.jpg", description: "Full-stack site with SEO" },
    { title: "Route Optimization Dashboard", category: "Logistics", image: "/images/portfolio/logistics.jpg", description: "Real-time tracking system" },
    { title: "Restaurant Jingle", category: "Music", image: "/images/portfolio/restaurant-jingle.jpg", description: "Brand sound identity", hasAudio: true },
    { title: "Startup Brand Identity", category: "Web", image: "/images/portfolio/startup-brand.jpg", description: "Logo, web, and messaging" },
    { title: "Podcast Theme Song", category: "Music", image: "/images/portfolio/podcast-theme.jpg", description: "Custom intro music", hasAudio: true },
  ];

  const filteredPortfolio = portfolioFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === portfolioFilter);

  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text"
        >
          Technology + Creativity for the Modern Business
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg text-gray-300"
        >
          AI & Education • Web & Marketing • Logistics • Aivara Music
        </motion.p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <Link href="/services">
            <Button className="px-8 py-6 text-lg">Explore Services</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="px-8 py-6 text-lg">
              Get a Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <Section className="bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 text-black">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <Card className="bg-black/70 backdrop-blur-lg border border-white/10 hover:bg-black/80 transition-all h-full group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4 text-teal-300 group-hover:text-teal-200 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Portfolio Teaser */}
      <Section className="bg-gradient-to-r from-pink-600/10 via-teal-500/10 to-yellow-400/10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 gradient-text">Selected Work</h2>
        
        {/* Filter Bar */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["All", "AI", "Web", "Logistics", "Music"].map((filter) => (
            <button
              key={filter}
              onClick={() => setPortfolioFilter(filter)}
              className={`px-6 py-2 rounded-full transition ${
                portfolioFilter === filter
                  ? "bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 text-black font-semibold"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredPortfolio.slice(0, 6).map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio">
            <Button variant="outline" className="px-8 py-4">View All Work</Button>
          </Link>
        </div>
      </Section>

      {/* CTA Strip */}
      <Section className="bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 text-black text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">One team. Many ways to win.</h2>
        <Link href="/contact">
          <Button className="px-10 py-6 text-xl bg-black text-white hover:bg-black/80">
            Book a Discovery Call
          </Button>
        </Link>
      </Section>

      <Footer />
    </div>
  );
}