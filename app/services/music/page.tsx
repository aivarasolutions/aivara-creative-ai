import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/ui/faq";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aivara Music - Custom Jingles & Sound Identity | Aivara Solutions",
  description: "Custom jingles, theme songs, background loops, and brand sound identity for modern businesses.",
};

export default function MusicPage() {
  const services = [
    "Custom jingles & brand sound",
    "Theme songs & intros",
    "Background loops & ambient music",
    "Licensing & commercial deliverables",
  ];

  const videoEmbeds = [
    { platform: "TikTok", url: "https://www.tiktok.com", title: "Coffee Shop Jingle Demo" },
    { platform: "Instagram", url: "https://www.instagram.com", title: "Tech Startup Sound Identity" },
    { platform: "YouTube", url: "https://www.youtube.com", title: "Restaurant Theme Song" },
  ];

  const portfolioClients = [
    { name: "InnovateNow", logo: "/images/clients/innovatenow.png" },
    { name: "Brew & Co", logo: "/images/clients/brew-co.png" },
    { name: "PowerFit", logo: "/images/clients/powerfit.png" },
    { name: "Luxury Homes", logo: "/images/clients/luxury-homes.png" },
    { name: "ShopSmart", logo: "/images/clients/shopsmart.png" },
    { name: "The Business Hour", logo: "/images/clients/business-hour.png" },
  ];

  const faqs = [
    {
      question: "How long does it take to create a custom jingle?",
      answer: "Most jingles are delivered within 2-3 weeks, including revisions. Rush delivery (1 week) is available for an additional fee.",
    },
    {
      question: "What's included in the licensing?",
      answer: "You receive full commercial rights for your custom music, including broadcast, digital, and in-store use. We provide multiple file formats and stems if needed.",
    },
    {
      question: "Can you match a specific style or vibe?",
      answer: "Absolutely! We work from your brand guidelines and reference tracks to create music that perfectly matches your vision.",
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes, all packages include 2-3 rounds of revisions to ensure you're completely satisfied with the final product.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      
      <Section className="pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 sticky top-20 bg-black/80 backdrop-blur-sm py-4 z-10">
            Aivara Music
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Your brand's sound identity—custom jingles, themes, and background tracks that make people remember you.
          </p>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-teal-300">What We Offer</h2>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-teal-300">Listen to Our Work</h2>
            <div className="bg-black/60 border border-white/10 rounded-lg overflow-hidden p-4">
              <iframe 
                width="100%" 
                height="600" 
                scrolling="no" 
                frameBorder="no" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2058721338&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"
                className="w-full"
              ></iframe>
              <a 
                href="https://soundcloud.com/thatbvmpz/sets/aivara-music-theme-songs?si=5d5005cf1b9f43cf940c46f12fcd7990&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-teal-400 hover:text-teal-300 text-sm"
              >
                View Full Playlist on SoundCloud →
              </a>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-teal-300">Video Showcases</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videoEmbeds.map((video, index) => (
                <Card key={index} className="bg-black/60 border border-white/10">
                  <CardContent className="p-6 text-center">
                    <div className="aspect-video bg-gradient-to-br from-pink-600/20 via-teal-500/20 to-yellow-400/20 rounded-xl mb-4 flex items-center justify-center">
                      <span className="text-gray-400">{video.platform} Video</span>
                    </div>
                    <p className="text-sm text-gray-300">{video.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-teal-300">Trusted by Leading Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {portfolioClients.map((client, index) => (
                <Card key={index} className="bg-black/60 border border-white/10 hover:border-teal-400/50 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="h-20 flex items-center justify-center">
                      <span className="text-gray-400 font-semibold">{client.name}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-teal-300">Frequently Asked Questions</h2>
            <FAQ items={faqs} />
          </div>

          <div className="bg-gradient-to-r from-pink-600/10 via-teal-500/10 to-yellow-400/10 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-center">Order Your Custom Jingle</h3>
            <p className="text-gray-300 mb-6 text-center">Ready to create a memorable sound for your brand?</p>
            
            <form className="max-w-xl mx-auto space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white"
                required
              />
              <input 
                type="text" 
                placeholder="Brand Name" 
                className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white"
                required
              />
              <input 
                type="text" 
                placeholder="Use Case (e.g., website intro, podcast theme)" 
                className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white"
              />
              <input 
                type="text" 
                placeholder="Desired Vibe (e.g., energetic, calm, professional)" 
                className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white"
              />
              <input 
                type="date" 
                placeholder="Deadline" 
                className="w-full p-4 rounded-xl bg-black/70 border border-white/20 text-white"
              />
              <Link href="/contact?service=music">
                <Button className="w-full px-8 py-4 text-lg">Submit Request</Button>
              </Link>
            </form>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}