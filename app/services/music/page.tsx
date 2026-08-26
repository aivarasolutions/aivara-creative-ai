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
            <h2 className="text-2xl font-semibold mb-6 text-teal-300">Audio Samples</h2>
            <div className="bg-black/60 border border-white/10 rounded-lg overflow-hidden p-4">
              <p className="text-gray-300">
                Audio examples are not published until the applicable creator, client,
                composition, master, and public-display rights have been confirmed.
              </p>
              <p className="mt-3 text-sm text-gray-400">
                Contact us to discuss an appropriately cleared sample or a custom brief.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <Card className="bg-black/60 border border-white/10">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-teal-300">Delivery Formats</h2>
                <p className="mt-3 text-gray-300">
                  Deliverables, platform publishing, attribution, and licensing are defined
                  in the written project scope before release.
                </p>
              </CardContent>
            </Card>
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