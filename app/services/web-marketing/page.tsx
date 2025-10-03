import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/ui/faq";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web & Marketing Services | Aivara Solutions",
  description: "Web design/development, SEO & analytics, brand identity, and performance marketing for modern businesses.",
};

export default function WebMarketingPage() {
  const services = [
    "Web design & development",
    "SEO & analytics",
    "Brand identity & messaging",
    "Performance marketing & paid social",
  ];

  const caseStudies = [
    {
      title: "E-Commerce Site Redesign",
      description: "Complete site overhaul with focus on conversion optimization and mobile-first design.",
      results: "127% increase in online sales",
    },
    {
      title: "SEO Campaign for Local Business",
      description: "Comprehensive SEO strategy including technical optimization, content creation, and link building.",
      results: "Page 1 rankings for 15 key terms",
    },
    {
      title: "Brand Identity Launch",
      description: "Full brand development including logo, website, messaging framework, and marketing collateral.",
      results: "Successfully launched to 10k+ audience",
    },
    {
      title: "Paid Social Campaign",
      description: "Multi-platform ad campaign with A/B testing and conversion tracking for SaaS startup.",
      results: "$2.50 cost per acquisition",
    },
  ];

  const faqs = [
    {
      question: "How long does a website project take?",
      answer: "Most websites are completed in 4-8 weeks, depending on complexity and content requirements. We work in sprints to deliver value quickly.",
    },
    {
      question: "Do you provide ongoing marketing support?",
      answer: "Yes! We offer monthly retainers for SEO, content marketing, paid advertising, and performance optimization.",
    },
    {
      question: "What platforms do you work with?",
      answer: "We build custom solutions with React/Next.js, but also work with WordPress, Shopify, and other platforms based on your needs.",
    },
    {
      question: "Can you help with content creation?",
      answer: "Absolutely. We offer copywriting, blog content, social media content, and video scriptwriting services.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      
      <Section className="pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 sticky top-20 bg-black/80 backdrop-blur-sm py-4 z-10">
            Web & Marketing
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Websites and campaigns built for speed, clarity, and conversions—backed by clean engineering and sharp messaging.
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
            <h2 className="text-2xl font-semibold mb-6 text-teal-300">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((study, index) => (
                <Card key={index} className="bg-black/60 border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-200">{study.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{study.description}</p>
                    <p className="text-sm font-semibold text-teal-400">{study.results}</p>
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
            <h3 className="text-2xl font-bold mb-4">Ready to Grow Your Online Presence?</h3>
            <p className="text-gray-300 mb-6">Let's build a website and marketing strategy that converts.</p>
            <Link href="/contact">
              <Button className="px-8 py-4 text-lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}