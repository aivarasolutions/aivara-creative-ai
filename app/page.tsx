"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { ToolPill } from "@/components/ui/ToolPill";
import { motion } from "framer-motion";
import {
  Bot,
  LayoutDashboard,
  Target,
  GraduationCap,
  Palette,
  Building2,
  ArrowRight,
  Check,
  Sparkles,
  Home,
  Truck,
  Plane,
  Wrench,
  User,
  Briefcase,
} from "lucide-react";
import portfolioData from "@/public/data/portfolio.json";

export default function HomePage() {
  const [portfolioFilter, setPortfolioFilter] = useState("All");

  const services = [
    {
      icon: <Bot className="h-7 w-7" />,
      title: "AI Automation Systems",
      description:
        "Automate customer support, lead follow-up, admin tasks, research, reporting, and repetitive workflows using practical AI systems.",
      href: "#offers",
    },
    {
      icon: <LayoutDashboard className="h-7 w-7" />,
      title: "Websites, Portals & Dashboards",
      description:
        "Modern websites, secure client portals, owner dashboards, internal tools, and reporting systems built around your business operations.",
      href: "#offers",
    },
    {
      icon: <Target className="h-7 w-7" />,
      title: "Lead Generation & Marketing Automation",
      description:
        "Google Ads, landing pages, CRM capture, email follow-up, tracking, analytics, and reporting systems designed to turn traffic into leads.",
      href: "#offers",
    },
    {
      icon: <GraduationCap className="h-7 w-7" />,
      title: "AI Training & Business Onboarding",
      description:
        "Hands-on AI training, workflow planning, prompt systems, staff onboarding, and custom playbooks for business teams.",
      href: "/contact",
    },
    {
      icon: <Palette className="h-7 w-7" />,
      title: "Creative Content & Brand Media",
      description:
        "Social media graphics, short-form videos, brand assets, presentations, campaign content, and custom business music.",
      href: "/contact",
    },
    {
      icon: <Building2 className="h-7 w-7" />,
      title: "Industry-Specific Business Systems",
      description:
        "Custom systems for property management, logistics, travel, rentals, local service businesses, creators, and agencies.",
      href: "#industries",
    },
  ];

  const offers = [
    {
      title: "AI Automation Starter System",
      description:
        "For businesses that want to save time, respond faster, and reduce manual work.",
      bullets: [
        "AI chatbot or assistant setup",
        "Lead capture workflow",
        "Email follow-up automation",
        "Internal task automation",
        "Staff usage guide",
      ],
      cta: "Start With AI Automation",
      href: "/ai-automation-small-business",
      recommended: false,
    },
    {
      title: "Client Portal Buildout",
      description:
        "For businesses that need a secure place for clients, owners, or teams to track work.",
      bullets: [
        "Login system",
        "Client dashboard",
        "File uploads",
        "Project or request tracking",
        "Email notifications",
        "Admin dashboard",
      ],
      cta: "Build My Portal",
      href: "/custom-client-portals",
      recommended: true,
    },
    {
      title: "Google Ads Lead System",
      description:
        "For businesses that need more leads, better tracking, and automated follow-up.",
      bullets: [
        "Google Ads setup",
        "Conversion-focused landing page",
        "Lead form and CRM capture",
        "Conversion tracking",
        "Follow-up automation",
        "Reporting dashboard",
      ],
      cta: "Launch My Lead System",
      href: "/google-ads-lead-system",
      recommended: false,
    },
  ];

  const industries = [
    { icon: <Home className="h-5 w-5" />, label: "Property Management" },
    { icon: <Truck className="h-5 w-5" />, label: "Logistics & Transportation" },
    { icon: <Plane className="h-5 w-5" />, label: "Travel, Tours & Rentals" },
    { icon: <Wrench className="h-5 w-5" />, label: "Local Service Businesses" },
    { icon: <User className="h-5 w-5" />, label: "Creators & Personal Brands" },
    { icon: <Briefcase className="h-5 w-5" />, label: "Consultants & Agencies" },
  ];

  // Brand logos: colored SVGs via Simple Icons CDN; trademark-restricted brands self-hosted.
  // si(slug) = brand color; siWhite(slug) = forced white (for brands whose default color is too dark on black bg).
  const si = (slug: string) => `https://cdn.simpleicons.org/${slug}`;
  const siWhite = (slug: string) => `https://cdn.simpleicons.org/${slug}/ffffff`;
  const toolCategories: {
    title: string;
    tools: { name: string; logo: string | null }[];
  }[] = [
    {
      title: "AI Strategy & Automation",
      tools: [
        { name: "ChatGPT", logo: "/images/logos/chatgpt.svg" },
        { name: "Manus", logo: "/images/logos/manus.svg" },
        { name: "Runway", logo: "/images/logos/runway.svg" },
      ],
    },
    {
      title: "App & Portal Development",
      tools: [
        { name: "Replit", logo: si("replit") },
        { name: "Supabase", logo: si("supabase") },
        { name: "Vercel", logo: siWhite("vercel") },
        { name: "GitHub", logo: siWhite("github") },
      ],
    },
    {
      title: "Email & Client Communication",
      tools: [
        { name: "Resend", logo: siWhite("resend") },
        { name: "Mailchimp", logo: si("mailchimp") },
        { name: "Google Workspace", logo: si("google") },
        { name: "Slack", logo: "/images/logos/slack.svg" },
      ],
    },
    {
      title: "Creative Production",
      tools: [
        { name: "Canva", logo: "/images/logos/canva.svg" },
        { name: "CapCut", logo: "/images/logos/capcut.svg" },
        { name: "Runway", logo: "/images/logos/runway.svg" },
      ],
    },
    {
      title: "Payments & Financial Operations",
      tools: [
        { name: "Stripe", logo: si("stripe") },
        { name: "PayPal", logo: si("paypal") },
        { name: "QuickBooks", logo: si("quickbooks") },
        { name: "Square", logo: siWhite("square") },
      ],
    },
    {
      title: "Websites, Domains & Infrastructure",
      tools: [
        { name: "Squarespace", logo: siWhite("squarespace") },
        { name: "GoDaddy", logo: si("godaddy") },
        { name: "Vercel", logo: siWhite("vercel") },
      ],
    },
  ];

  // Select 6 items for homepage portfolio section
  const featuredPortfolio = [
    portfolioData[0], // AI Customer Support Bot
    portfolioData[1], // Marketing Automation Platform (Apollo)
    portfolioData[6], // Route Optimization Dashboard
    portfolioData[2], // SaaS Onboarding Automation
    portfolioData[9], // Business Theme Song
    portfolioData[4], // Startup Brand Identity
  ];

  const filteredPortfolio =
    portfolioFilter === "All"
      ? featuredPortfolio
      : featuredPortfolio.filter((item) => item.category === portfolioFilter);

  return (
    <div className="bg-black text-white min-h-screen w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text max-w-5xl"
        >
          AI-Powered Systems for Modern Businesses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          Aivara Solutions builds websites, portals, automations, AI workflows, marketing
          systems, and creative content engines for businesses ready to operate smarter.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 flex gap-4 flex-wrap justify-center"
        >
          <Link href="/contact">
            <Button className="px-8 py-6 text-lg">Book a Free Strategy Call</Button>
          </Link>
          <Link href="#services">
            <Button variant="outline" className="px-8 py-6 text-lg">
              Explore Our Services
            </Button>
          </Link>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-8 text-sm text-gray-400 max-w-2xl"
        >
          Built for service businesses, property managers, logistics teams, travel brands,
          creators, and growing companies.
        </motion.p>
      </section>

      {/* What We Build */}
      <Section id="services" className="bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 pt-8">
            <div className="flex justify-center mb-16">
              <Image
                src="/images/aivara-logo.png"
                alt="Aivara Solutions"
                width={720}
                height={240}
                className="h-40 md:h-56 lg:h-64 w-auto"
                priority={false}
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">What We Build</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Six core systems designed to help your business operate smarter, scale faster,
              and look more professional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const brandColors = [
                "text-pink-400",
                "text-teal-300",
                "text-yellow-400",
                "text-pink-400",
                "text-teal-300",
                "text-yellow-400",
              ];
              const iconColor = brandColors[index % brandColors.length];
              return (
              <div key={index} className="group relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-600/30 via-teal-500/30 to-yellow-400/30 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>
                <Card className="relative h-full bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-white/20 group-hover:-translate-y-1">
                  <CardContent className="p-7 flex flex-col h-full">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-600/20 via-teal-500/20 to-yellow-400/20 border border-white/10 ${iconColor} mb-5`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-grow">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-300 hover:text-teal-200 transition group/link"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* High-Impact Offers */}
      <Section id="offers" className="bg-gradient-to-b from-black via-pink-600/[0.04] to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-600/20 via-teal-500/20 to-yellow-400/20 border border-white/10 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-xs uppercase tracking-wider text-gray-200 font-semibold">
                Launch Packages
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
              High-Impact Systems You Can Launch First
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Start with the systems that save time, create better client experiences, and
              generate measurable business value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <div key={index} className="group relative h-full">
                <div
                  className={`absolute -inset-0.5 rounded-2xl blur transition duration-500 ${
                    offer.recommended
                      ? "bg-gradient-to-br from-pink-600 via-teal-500 to-yellow-400 opacity-60 group-hover:opacity-90"
                      : "bg-gradient-to-br from-white/10 to-white/5 opacity-50 group-hover:opacity-75"
                  }`}
                ></div>
                <Card
                  className={`relative h-full bg-gradient-to-br from-black via-black to-black/80 rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-1 ${
                    offer.recommended ? "border border-white/20" : "border border-white/10"
                  }`}
                >
                  {offer.recommended && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 px-5 py-2 rounded-bl-xl shadow-lg">
                        <span className="text-xs font-bold text-black uppercase tracking-wider">
                          Most Popular
                        </span>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className={`mb-6 ${offer.recommended ? "mt-4" : ""}`}>
                      <h3 className="text-2xl font-bold mb-3 text-white">{offer.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{offer.description}</p>
                    </div>

                    <ul className="space-y-2.5 mb-8 flex-grow">
                      {offer.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                          <Check className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={offer.href} className="mt-auto">
                      <Button className="w-full py-4 text-base font-semibold transition-transform hover:scale-[1.02]">
                        {offer.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industries */}
      <Section id="industries" className="bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
              Built for Businesses That Need Real Systems
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We design practical technology and automation around the way your business
              actually operates.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 px-5 py-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-teal-500/40 hover:bg-black/60 transition-all duration-300"
              >
                <span className="flex-shrink-0 text-teal-300 group-hover:text-teal-200 transition">
                  {industry.icon}
                </span>
                <span className="text-sm md:text-base font-medium text-gray-200">
                  {industry.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Portfolio */}
      <Section className="bg-gradient-to-r from-pink-600/10 via-teal-500/10 to-yellow-400/10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 gradient-text">
          Portfolio
        </h2>

        {/* Filter Bar */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["All", "AI", "Web", "Logistics", "Music"].map((filter) => (
            <button
              key={filter}
              onClick={() => setPortfolioFilter(filter)}
              className={`px-6 py-2 rounded-full transition ${
                portfolioFilter === filter
                  ? "bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 text-black font-semibold"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredPortfolio.map((item) => {
            const hasEmbed = !!(item.media as any)?.embedUrl;

            if (hasEmbed) {
              return (
                <div
                  key={item.id}
                  className="bg-black/70 border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all"
                >
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

        <div className="text-center">
          <Link href="/portfolio">
            <Button variant="outline" className="px-8 py-4">
              View All Work
            </Button>
          </Link>
        </div>
      </Section>

      {/* Tech Stack Section */}
      <Section className="bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-600/20 via-teal-500/20 to-yellow-400/20 border border-white/10 mb-6">
              <span className="text-xs uppercase tracking-wider text-gray-200 font-semibold">
                Powered by Industry-Leading Tools
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
              The Tools We Use to Build, Automate &amp; Scale Businesses
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Powered by industry-leading platforms for AI, development, automation,
              communication, creative production, and business infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolCategories.map((cat, idx) => (
              <div key={idx} className="group relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-600/30 via-teal-500/30 to-yellow-400/30 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>
                <Card className="relative h-full bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-white/20 group-hover:-translate-y-1">
                  <CardContent className="p-7 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-5 text-white">{cat.title}</h3>
                    <div className="flex flex-wrap gap-2.5 mt-auto">
                      {cat.tools.map((tool, i) => (
                        <ToolPill key={`${tool.name}-${i}`} name={tool.name} logo={tool.logo} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 italic text-center mt-10 max-w-3xl mx-auto leading-relaxed">
            Logos shown represent tools and platforms we use in our workflow. Aivara Solutions
            is not claiming official partnership or endorsement unless stated. All logos and
            product names are trademarks of their respective owners.
          </p>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 text-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build a Smarter Business System?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-black/80">
            Tell us what you&apos;re trying to build, automate, or improve. We&apos;ll help map
            the right system and tools for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button className="px-8 py-6 text-lg bg-black text-white hover:bg-black/80">
                Book a Free Strategy Call
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="px-8 py-6 text-lg border-black text-black hover:bg-black hover:text-white"
              >
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
