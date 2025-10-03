"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import type { Metadata } from "next";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const portfolioItems = [
    { 
      title: "AI Training Platform", 
      category: "AI", 
      image: "/images/portfolio/ai-training.jpg", 
      description: "Custom onboarding automation for 200-employee tech company" 
    },
    { 
      title: "E-Commerce Redesign", 
      category: "Web", 
      image: "/images/portfolio/ecommerce.jpg", 
      description: "Full-stack site with SEO optimization and 127% sales increase" 
    },
    { 
      title: "Route Optimization Dashboard", 
      category: "Logistics", 
      image: "/images/portfolio/logistics.jpg", 
      description: "Real-time tracking system for 100+ vehicle fleet" 
    },
    { 
      title: "Restaurant Jingle", 
      category: "Music", 
      image: "/images/portfolio/restaurant-jingle.jpg", 
      description: "Brand sound identity for upscale Italian restaurant", 
      hasAudio: true 
    },
    { 
      title: "Startup Brand Identity", 
      category: "Web", 
      image: "/images/portfolio/startup-brand.jpg", 
      description: "Complete rebrand including logo, website, and messaging" 
    },
    { 
      title: "Podcast Theme Song", 
      category: "Music", 
      image: "/images/portfolio/podcast-theme.jpg", 
      description: "Custom intro music for business podcast", 
      hasAudio: true 
    },
    { 
      title: "AI Customer Support Bot", 
      category: "AI", 
      image: "/images/portfolio/ai-support.jpg", 
      description: "GPT-4 powered support system reducing tickets by 40%" 
    },
    { 
      title: "SEO Campaign Success", 
      category: "Web", 
      image: "/images/portfolio/seo-campaign.jpg", 
      description: "Page 1 rankings for 15 key terms in 6 months" 
    },
    { 
      title: "Last-Mile Delivery Optimization", 
      category: "Logistics", 
      image: "/images/portfolio/last-mile.jpg", 
      description: "35% cost reduction through AI-powered route planning" 
    },
    { 
      title: "Tech Startup Jingle", 
      category: "Music", 
      image: "/images/portfolio/tech-jingle.jpg", 
      description: "Upbeat 30-second sound identity for SaaS company", 
      hasAudio: true 
    },
    { 
      title: "Warehouse Management System", 
      category: "Logistics", 
      image: "/images/portfolio/warehouse.jpg", 
      description: "Custom WMS integration for 50% faster order processing" 
    },
    { 
      title: "Marketing Automation Platform", 
      category: "AI", 
      image: "/images/portfolio/marketing-automation.jpg", 
      description: "Automated email sequences and lead scoring system" 
    },
  ];

  const filteredPortfolio = filter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      
      <Section className="pt-32">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our work across AI & Education, Web & Marketing, Logistics, and Aivara Music.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["All", "AI", "Web", "Logistics", "Music"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition ${
                filter === category
                  ? "bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 text-black font-semibold"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolio.map((item, index) => (
            <PortfolioCard key={index} {...item} />
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}