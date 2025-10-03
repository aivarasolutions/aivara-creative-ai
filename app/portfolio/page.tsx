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
          {filteredPortfolio.map((item) => {
            const hasEmbed = !!(item.media as any)?.embedUrl;
            
            if (hasEmbed) {
              return (
                <div key={item.id} className="bg-black/70 border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all">
                  <div className="aspect-video bg-black overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      scrolling="no" 
                      frameBorder="no" 
                      allow="autoplay" 
                      src={(item.media as any).embedUrl}
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-teal-400 mb-2">{item.category}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-200">{item.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{item.summary}</p>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-teal-400 hover:text-teal-300 text-sm"
                    >
                      Listen on SoundCloud →
                    </a>
                  </div>
                </div>
              );
            }

            return (
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
                />
              </a>
            );
          })}
        </div>
      </Section>

      <Footer />
    </div>
  );
}