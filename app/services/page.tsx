import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceCard } from "@/components/ui/service-card";
import { Section } from "@/components/ui/section";
import { Lightbulb, Globe, Truck, Music } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Aivara Solutions",
  description: "AI & Education, Web & Marketing, Logistics, and custom music services to grow modern businesses.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "AI & Education",
      description: "Automation audits, starter playbooks, team training. We turn AI into practical wins: audits, simple automations, and hands-on training your team can actually use.",
      href: "/services/ai-education",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Web & Marketing",
      description: "Full-stack sites, conversion copy, SEO, paid social. Websites and campaigns built for speed, clarity, and conversions—backed by clean engineering and sharp messaging.",
      href: "/services/web-marketing",
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Logistics",
      description: "Dispatch workflows, tracking, analytics. From dispatch to doorstep, we streamline routes, tracking, and ops dashboards to cut costs and missed windows.",
      href: "/services/logistics",
    },
    {
      icon: <Music className="h-10 w-10" />,
      title: "Aivara Music",
      description: "Theme songs, jingles, background tracks, licensing. Your brand's sound identity—custom jingles, themes, and background tracks that make people remember you.",
      href: "/services/music",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      
      <Section className="pt-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI automation to custom music, we offer comprehensive solutions to help your business thrive in the modern digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}