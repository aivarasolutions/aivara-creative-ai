"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import portfolioData from "@/public/data/portfolio.json";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredPortfolio = filter === "All" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

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
          {filteredPortfolio.map((item) => (
            <a 
              key={item.id} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <PortfolioCard 
                title={item.title}
                category={item.category}
                image={item.image}
                description={item.summary}
                hasAudio={!!item.media?.audioUrl}
              />
            </a>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}