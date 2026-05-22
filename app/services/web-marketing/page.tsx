import { Header } from "@/components/layout/Header";
import { ServicePageView } from "@/components/ServicePageView";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/ui/faq";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Check, X, Star, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web & Marketing Services | Real Estate Website Development | Aivara Solutions",
  description:
    "Real estate website development, vacation rental website design, Airbnb website setup, and property management websites. Houston-based premium web design with booking integration prep.",
  keywords: [
    "real estate website development",
    "vacation rental website design",
    "Airbnb website setup",
    "property management websites",
    "Houston real estate web design",
    "booking website development",
    "rental property branding",
  ],
};

export default function WebMarketingPage() {
  const services = [
    "Web design & development",
    "SEO & analytics",
    "Brand identity & messaging",
    "Performance marketing & paid social",
  ];

  const starterIncludes = [
    "Domain setup + DNS",
    "Coming Soon / park page",
    "Mobile-friendly branded landing page",
    "1 business email setup",
    "Contact form integration",
    "Social links",
    "Hosting setup",
    "SSL/security setup",
    "Basic SEO setup",
    "WhatsApp button integration",
    "Existing logo/branding implementation if provided by client",
  ];

  const starterExcludes = [
    "Custom logo design",
    "Ongoing hosting costs",
    "Domain renewal fees",
    "Google Workspace/email subscription costs",
    "Premium integrations or paid plugins",
  ];

  const proIncludes = [
    "Everything in Simple Starter",
    "Full website structure",
    "Branded logo placement, colors, and fonts",
    "Lead capture form",
    "Google Maps embed",
    "SEO page structure",
    "GA4 + Meta Pixel setup",
    "Future booking integration prep",
    "CRM integration prep",
    "OTA integration prep",
    "Branded automation system planning",
    "Basic branding guidance/refinement",
  ];

  const proExcludes = [
    "Full custom branding package",
    "Advanced custom logo design package",
    "Monthly hosting or software subscriptions",
    "Booking engine subscription costs",
    "Third-party CRM/software fees",
  ];

  const addOns = [
    "Professional logo design",
    "Full branding kit",
    "Drone / video / photo content",
    "Booking engine integration",
    "CRM integration",
    "AI chatbot",
    "Owner portal",
    "Multi-property management system",
    "Ongoing website maintenance",
    "SEO and paid ads management",
  ];

  const paymentOptions = [
    "Split milestone payments",
    "2–3 month development agreements",
    "Ongoing monthly service retainers",
    "Future expansion phases",
  ];

  const thirdPartyCosts = [
    "Domain registration & renewals",
    "Hosting plans",
    "Google Workspace/business email subscriptions",
    "Booking software subscriptions",
    "Premium plugins/apps",
    "CRM software",
    "Automation platforms",
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
      answer:
        "Most websites are completed in 4-8 weeks, depending on complexity and content requirements. We work in sprints to deliver value quickly.",
    },
    {
      question: "Do you provide ongoing marketing support?",
      answer:
        "Yes! We offer monthly retainers for SEO, content marketing, paid advertising, and performance optimization.",
    },
    {
      question: "What platforms do you work with?",
      answer:
        "We build custom solutions with React/Next.js, but also work with WordPress, Shopify, and other platforms based on your needs.",
    },
    {
      question: "Can you help with content creation?",
      answer:
        "Absolutely. We offer copywriting, blog content, social media content, and video scriptwriting services.",
    },
    {
      question: "Do you build websites for real estate or rental properties?",
      answer:
        "Yes. We build websites for property owners, developers, short-term rentals, boutique stays, and real estate brands.",
    },
    {
      question: "Can you set up domain, email, and hosting?",
      answer:
        "Yes. We can handle domain setup, DNS, branded business emails, hosting, SSL, and basic launch infrastructure.",
    },
    {
      question: "Are domain and hosting fees included in the package price?",
      answer:
        "No. Domain renewals, hosting plans, email subscriptions, and some third-party software costs are billed separately unless otherwise agreed upon.",
    },
    {
      question: "Is logo design included?",
      answer:
        "Existing logos and branding can be implemented into the website. Full custom logo and branding packages are available as optional add-on services.",
    },
    {
      question: "Can the website connect to booking tools later?",
      answer:
        "Yes. We can prepare the site for future booking engines, CRM systems, OTA links, owner portals, and automation workflows.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes. Flexible milestone and monthly payment structures are available for qualified projects depending on scope and timeline.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes. Monthly maintenance, SEO, analytics, marketing, and property management support are available separately.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <ServicePageView service="Web & Marketing" />

      <Section className="pt-32">
        <div className="max-w-6xl mx-auto">
          <header className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 sticky top-20 bg-black/80 backdrop-blur-sm py-4 z-10">
              Web & Marketing
            </h1>

            <p className="text-xl text-gray-300 mb-12">
              Websites and campaigns built for speed, clarity, and conversions—backed by clean engineering and sharp messaging.
            </p>
          </header>

          <div className="mb-20 max-w-4xl">
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

          {/* Real Estate Website Launch Packages */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-600/20 via-teal-500/20 to-yellow-400/20 border border-white/10 mb-6">
                <Sparkles className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-gray-200 font-medium">Premium Real Estate Packages</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Real Estate Website Launch Packages
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                For property owners, developers, short-term rental operators, and real estate brands, Aivara Solutions builds the digital foundation needed to launch professionally, capture leads, and prepare for future booking, marketing, and property management systems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Simple Starter */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                <Card className="relative bg-gradient-to-br from-black via-black to-black/80 border border-white/10 rounded-2xl overflow-hidden h-full transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/20">
                  <CardContent className="p-8 md:p-10 flex flex-col h-full">
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Simple Starter</h3>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-4xl font-bold bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent">
                          $1,500 – $2,500
                        </span>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        Best for properties still under development or businesses that need a clean online presence quickly.
                      </p>
                    </div>

                    <div className="mb-6 flex-grow">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-300 mb-4">Includes</h4>
                      <ul className="space-y-2.5">
                        {starterIncludes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                            <Check className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Not Included</h4>
                      <ul className="space-y-2.5">
                        {starterExcludes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                            <X className="h-4 w-4 text-gray-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact?package=starter" className="mt-auto">
                      <Button className="w-full py-4 text-base font-semibold transition-transform hover:scale-[1.02]">
                        Request Starter Package
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>

              {/* Professional Build - Recommended */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-600 via-teal-500 to-yellow-400 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-500"></div>
                <Card className="relative bg-gradient-to-br from-black via-black to-black/80 border border-white/20 rounded-2xl overflow-hidden h-full transition-all duration-500 group-hover:-translate-y-1">
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 px-5 py-2 rounded-bl-xl flex items-center gap-1.5 shadow-lg">
                      <Star className="h-3.5 w-3.5 text-black fill-black" />
                      <span className="text-xs font-bold text-black uppercase tracking-wider">Recommended</span>
                    </div>
                  </div>

                  <CardContent className="p-8 md:p-10 flex flex-col h-full">
                    <div className="mb-6 mt-4">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Professional Build</h3>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-teal-400 to-yellow-400 bg-clip-text text-transparent">
                          $3,500 – $6,500
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Best for luxury properties, multi-unit developments, rental businesses, and brands preparing for future booking or property management operations.
                      </p>
                    </div>

                    <div className="mb-6 flex-grow">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-teal-300 mb-4">Includes</h4>
                      <ul className="space-y-2.5">
                        {proIncludes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                            <Check className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Not Included</h4>
                      <ul className="space-y-2.5">
                        {proExcludes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                            <X className="h-4 w-4 text-gray-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact?package=professional" className="mt-auto">
                      <Button className="w-full py-4 text-base font-semibold transition-transform hover:scale-[1.02]">
                        Request Professional Build
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Optional Add-Ons */}
            <div className="mt-16">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Optional Add-Ons</h3>
                <p className="text-gray-400 mb-8">Expand any package with these premium services.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {addOns.map((addon, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-black/40 hover:border-teal-500/40 hover:bg-black/60 transition-all duration-300"
                    >
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 flex-shrink-0"></span>
                      <span className="text-sm text-gray-300">{addon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Flexible Payment Options */}
            <div className="mt-12">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-pink-600/[0.06] via-teal-500/[0.06] to-yellow-400/[0.06] p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                  Flexible Payment Options Available
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We understand that every project and development timeline is different. Flexible payment plans and phased project agreements are available for qualified clients.
                </p>

                <p className="text-sm font-semibold uppercase tracking-wider text-teal-300 mb-4">
                  Options may include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {paymentOptions.map((opt, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Check className="h-4 w-4 text-teal-400 flex-shrink-0 mt-1" />
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Most projects begin with an upfront setup payment followed by milestone or monthly payments during the development process.
                </p>

                <p className="text-xs text-gray-500 italic border-t border-white/10 pt-4">
                  Website ownership, premium assets, backend transfers, and final deployment may remain under Aivara Solutions management until final payment has been completed.
                </p>
              </div>
            </div>

            {/* Third-Party Costs */}
            <div className="mt-12">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Additional Third-Party Costs May Apply
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Some services require third-party subscriptions or annual renewals billed separately unless otherwise agreed upon.
                </p>

                <p className="text-sm font-semibold uppercase tracking-wider text-teal-300 mb-4">
                  Examples include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {thirdPartyCosts.map((cost, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 flex-shrink-0 mt-2.5"></span>
                      <span>{cost}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-gray-400 border-t border-white/10 pt-4">
                  Monthly hosting, maintenance, marketing, and property management services are available separately.
                </p>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-20 max-w-4xl">
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

          <div className="mb-12 max-w-4xl">
            <h2 className="text-2xl font-semibold mb-6 text-teal-300">Frequently Asked Questions</h2>
            <FAQ items={faqs} />
          </div>

          <div className="bg-gradient-to-r from-pink-600/10 via-teal-500/10 to-yellow-400/10 rounded-2xl p-8 text-center border border-white/10 max-w-4xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Grow Your Online Presence?</h3>
            <p className="text-gray-300 mb-6">Let&apos;s build a website and marketing strategy that converts.</p>
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
