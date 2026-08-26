import { Header } from "@/components/layout/Header";
import { ServicePageView } from "@/components/ServicePageView";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
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

  const faqs = [
    {
      question: "How long does it take to create a custom jingle?",
      answer: "Timing depends on the brief, revisions, licensing needs, and current production schedule. We confirm delivery timing in the written project scope.",
    },
    {
      question: "What's included in the licensing?",
      answer: "Licensing options and deliverables are set in the written agreement. Usage rights, file formats, and stems depend on the selected scope.",
    },
    {
      question: "Can you match a specific style or vibe?",
      answer: "We can work from brand guidelines and reference tracks to develop music aligned with your brief.",
    },
    {
      question: "Do you offer revisions?",
      answer: "Revision rounds, if included, are defined in the written project scope.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <ServicePageView service="Aivara Music" />
      
      <Section className="pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 sticky top-20 bg-black/80 backdrop-blur-sm py-4 z-10">
            Aivara Music
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Your brand&apos;s sound identity—custom jingles, themes, and background tracks that make people remember you.
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
                title="Aivara Music playlist on SoundCloud"
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
            <h2 className="text-2xl font-semibold mb-6 text-teal-300">Frequently Asked Questions</h2>
            <FAQ items={faqs} />
          </div>

          <div className="bg-gradient-to-r from-pink-600/10 via-teal-500/10 to-yellow-400/10 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-center">Order Your Custom Jingle</h3>
            <p className="text-gray-300 mb-6 text-center">
              Tell us about your brand, intended use, preferred vibe, and timing through our
              contact form so we can respond with the right next steps.
            </p>

            <Link
              href="/contact?service=music"
              className="mx-auto flex max-w-xl items-center justify-center rounded-2xl bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 px-8 py-4 text-lg font-semibold text-black transition hover:opacity-90"
            >
              Open Contact Form
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}