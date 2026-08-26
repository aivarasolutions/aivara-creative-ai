import { Header } from "@/components/layout/Header";
import { ServicePageView } from "@/components/ServicePageView";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { FAQ } from "@/components/ui/faq";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistics Services | Aivara Solutions",
  description: "Route planning, driver operations, tracking dashboards, and systems integration for logistics companies.",
};

export default function LogisticsPage() {
  const services = [
    "Route planning & optimization",
    "Driver operations & dispatch",
    "Real-time tracking dashboards",
    "Systems integration & APIs",
  ];

  const examples = [
    {
      title: "Last-mile workflow example",
      description: "An illustrative routing workflow with delivery zones, assignments, and proof-of-delivery steps.",
    },
    {
      title: "Fleet visibility example",
      description: "An illustrative dashboard format for reviewing fleet activity, ETAs, and operational alerts.",
    },
    {
      title: "Warehouse-to-dispatch example",
      description: "An illustrative integration plan connecting order, warehouse, and dispatch workflows.",
    },
    {
      title: "Driver and dispatch example",
      description: "An illustrative mobile and dashboard workflow for status updates and dispatch coordination.",
    },
  ];

  const faqs = [
    {
      question: "Do you integrate with existing systems?",
      answer: "Yes! We specialize in connecting dispatch systems, WMS, TMS, and other logistics software through custom APIs and integrations.",
    },
    {
      question: "Can you help with route optimization?",
      answer: "Absolutely. We use advanced algorithms to optimize routes based on traffic, delivery windows, vehicle capacity, and other constraints.",
    },
    {
      question: "What about real-time tracking?",
      answer: "We build custom tracking dashboards with live GPS updates, ETAs, and automated customer notifications.",
    },
    {
      question: "Do you support mobile solutions?",
      answer: "Yes, we develop driver apps and mobile-responsive dashboards for both iOS and Android platforms.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <ServicePageView service="Logistics" />
      
      <Section className="pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 sticky top-20 bg-black/80 backdrop-blur-sm py-4 z-10">
            Logistics
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            From dispatch to doorstep, we design route, tracking, and operations dashboards around your workflow.
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
            <h2 className="text-2xl font-semibold mb-2 text-teal-300">Illustrative Project Examples</h2>
            <p className="text-sm text-gray-400 mb-6">
              These examples describe possible project formats, not customer results or guaranteed outcomes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examples.map((study, index) => (
                <Card key={index} className="bg-black/60 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-200">{study.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{study.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-teal-300">Frequently Asked Questions</h2>
            <FAQ items={faqs} />
          </div>

          <div className="bg-gradient-to-r from-pink-600/10 via-teal-500/10 to-yellow-400/10 rounded-2xl p-8 text-center border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Logistics?</h3>
            <p className="text-gray-300 mb-6">Let&apos;s discuss how we can streamline your operations and reduce costs.</p>
            <Link href="/contact" className="rounded-2xl inline-flex items-center justify-center bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 px-8 py-4 text-lg font-semibold text-black transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black">
              Get Started
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}