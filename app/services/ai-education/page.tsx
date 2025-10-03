import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/ui/faq";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Education Services | Aivara Solutions",
  description: "Automation audits, onboarding playbooks, team workshops, and AI tool selection for modern businesses.",
};

export default function AIEducationPage() {
  const services = [
    "Automation setup & audits",
    "Onboarding playbooks",
    "Team workshops & training",
    "Tool selection & governance",
  ];

  const caseStudies = [
    {
      title: "SaaS Onboarding Automation",
      description: "Built automated onboarding flow that reduced setup time by 75% for a 200-employee tech company.",
      results: "3x faster employee productivity ramp-up",
    },
    {
      title: "AI Training Workshop Series",
      description: "Delivered hands-on AI training for marketing team, enabling them to use GPT-4 and automation tools effectively.",
      results: "5 hours/week saved per team member",
    },
    {
      title: "Custom GPT Development",
      description: "Created tailored GPT assistants for customer support, reducing response time and improving accuracy.",
      results: "40% reduction in support tickets",
    },
  ];

  const faqs = [
    {
      question: "How long does an AI audit take?",
      answer: "Most AI audits are completed within 1-2 weeks, depending on the complexity of your current systems and workflows.",
    },
    {
      question: "Do we need technical knowledge to implement AI solutions?",
      answer: "No! We specialize in beginner-friendly training and create playbooks that anyone on your team can follow.",
    },
    {
      question: "What tools do you recommend?",
      answer: "We're tool-agnostic and recommend solutions based on your specific needs, budget, and existing tech stack.",
    },
    {
      question: "Can you help with ongoing AI strategy?",
      answer: "Absolutely. We offer retainer packages for ongoing AI governance, training updates, and strategic consulting.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      
      <Section className="pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 sticky top-20 bg-black/80 backdrop-blur-sm py-4 z-10">
            AI & Education
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            We turn AI into practical wins: audits, simple automations, and hands-on training your team can actually use.
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
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Team with AI?</h3>
            <p className="text-gray-300 mb-6">Let's discuss how we can help you implement practical AI solutions.</p>
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