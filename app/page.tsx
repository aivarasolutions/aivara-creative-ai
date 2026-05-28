"use client";

/**
 * Aivara Solutions — Homepage (Aivara OS / Bold Gradient)
 *
 * ──────────────────────────────────────────────────────────────────────
 *  EDITING GUIDE
 * ──────────────────────────────────────────────────────────────────────
 *  All copy, links, and image paths live in the constants block below
 *  (HERO, TRUSTED_BY, REPLACE_TOOLS, COMPARISON, MODULES, SHOWCASE,
 *  WHITE_LABEL, INDUSTRIES, STATS, TESTIMONIALS, FINAL_CTA).
 *
 *  - To change wording: edit the strings inside those arrays/objects.
 *  - To change a CTA link: edit `href` in HERO.primaryCta / secondaryCta
 *    or FINAL_CTA.primaryCta / secondaryCta.
 *  - To swap an image: drop the new file into /public/images/ and
 *    update the path string (e.g. "/images/portfolio/your-pic.png").
 *  - To add/remove a module, industry, testimonial, etc.: add or
 *    remove an entry in its array — the grid auto-adjusts.
 *
 *  The site Header and Footer are reused from components/layout — edit
 *  navigation links and contact info there.
 * ──────────────────────────────────────────────────────────────────────
 */

import Link from "next/link";
import Image from "next/image";
import { trackCTA, trackBookingClick } from "@/lib/analytics";
import {
  ArrowRight,
  Check,
  Server,
  Users,
  BarChart3,
  Database,
  Workflow,
  Settings,
  Globe,
  MessageSquare,
  Layers,
  Search,
  Bell,
  Box,
  MonitorSmartphone,
  PieChart,
  Activity,
  LayoutDashboard,
  Truck,
  Building2,
  Waves,
  Target,
  Plane,
  Compass,
  Bot,
  Music,
} from "lucide-react";
import { ToolPill } from "@/components/ui/ToolPill";
import "./styles/aivara-os.css";

/* ────────────────────────────────────────────────────────────────────
 * 0. HEADER (sticky nav, mockup design)
 * ──────────────────────────────────────────────────────────────────── */
const HEADER = {
  logoSrc: "/images/aivara-logo.png",
  brand: "AIVARA OS",
  nav: [
    { label: "Platform", href: "#modules" },
    { label: "Modules", href: "#modules" },
    { label: "Industries", href: "#industries" },
    { label: "Pricing", href: "/contact" },
    { label: "Resources", href: "/portfolio" },
  ],
  signInLabel: "Sign In",
  signInHref: "/contact",
  bookDemoLabel: "Book Demo",
  bookDemoHref: "/contact",
};

/* ────────────────────────────────────────────────────────────────────
 * 1. HERO
 * ──────────────────────────────────────────────────────────────────── */
const HERO = {
  badge: "Now in private beta",
  // Full gradient title (whole headline rendered with bold-gradient-text)
  title: "The AI-Powered Operating System For Modern Businesses",
  subtitle:
    "CRM • Automations • Dashboards • Analytics • Operations • AI Assistants • White-Label Portals",
  primaryCta: { label: "Book Demo", href: "/contact" },
  secondaryCta: { label: "See Platform", href: "#modules" },
  tertiaryCta: { label: "Start Free", href: "/contact" },
};

const TRUSTED_BY = [
  { name: "AURA LOGISTICS", className: "text-xl font-bold font-serif" },
  { name: "NexusCorp", className: "text-xl font-bold tracking-tighter" },
  { name: "Vanguard Ecom", className: "text-xl font-bold italic" },
  { name: "SYNERGY", className: "text-xl font-bold" },
  { name: "VERTEX", className: "text-xl font-bold tracking-widest" },
];

/* ────────────────────────────────────────────────────────────────────
 * 2. REPLACE YOUR STACK
 * ──────────────────────────────────────────────────────────────────── */
const REPLACE_HEADING = {
  titleLead: "Replace 12 tools.",
  titleAccent: "One platform.",
  subtitle:
    "Stop paying for fragmented software and wasting time integrating them. Aivara OS unifies your entire business operations natively.",
};

const REPLACE_TOOLS = [
  "HubSpot",
  "Slack",
  "Monday",
  "Notion",
  "ClickUp",
  "Zapier",
  "QuickBooks",
];

const COMPARISON: { label: string; old: string; new: string; hl?: boolean }[] = [
  { label: "Total Cost", old: "$2,400/mo", new: "From $499/mo", hl: true },
  { label: "Setup Time", old: "3-6 months", new: "Days" },
  { label: "AI-Native", old: "Bolted-on", new: "Core Architecture", hl: true },
  { label: "Data Silos", old: "Scattered", new: "Unified Graph" },
  { label: "Support", old: "Multiple vendors", new: "One dedicated team" },
];

/* ────────────────────────────────────────────────────────────────────
 * 3. MODULES
 * ──────────────────────────────────────────────────────────────────── */
const MODULES_HEADING = {
  title: "Everything you need to scale",
  subtitle: "Activate the modules you need, when you need them.",
};

const MODULES = [
  { icon: Users, name: "AI CRM", desc: "Intelligent relationship management" },
  { icon: Workflow, name: "Operations Hub", desc: "Automate complex business logic" },
  { icon: Layers, name: "Project Management", desc: "Task tracking and resource allocation" },
  { icon: BarChart3, name: "Finance & Billing", desc: "Invoicing, expenses, and forecasting" },
  { icon: Globe, name: "Marketing Automation", desc: "Campaigns and lead generation" },
  { icon: MessageSquare, name: "Customer Support", desc: "Omnichannel ticketing and AI triage" },
  { icon: Users, name: "HR & People", desc: "Onboarding and employee lifecycle" },
  { icon: Box, name: "Inventory & Logistics", desc: "Supply chain visibility" },
  { icon: PieChart, name: "Analytics & BI", desc: "Custom dashboards and reports" },
  { icon: Database, name: "Document Intelligence", desc: "Extract data from unstructured files" },
  { icon: Settings, name: "Workflow Builder", desc: "No-code automation builder" },
  { icon: MonitorSmartphone, name: "Aivara Copilot", desc: "Your proactive AI business assistant" },
];

/* ────────────────────────────────────────────────────────────────────
 * 4. DASHBOARD SHOWCASE
 * ──────────────────────────────────────────────────────────────────── */
const SHOWCASE_HEADING = {
  title: "Powered by Aivara OS",
  subtitle: "See how modern enterprises configure their platforms.",
};

const SHOWCASE = [
  { img: "/images/portfolio/site-aivara-portal.png", industry: "Corporate Operations" },
  { img: "/images/portfolio/log-freightsync-lastmile.png", industry: "Logistics & Supply Chain" },
  { img: "/images/portfolio/ai-ipm-apollo.png", industry: "Professional Services" },
  { img: "/images/portfolio/site-richaf.png", industry: "E-Commerce" },
];

/* ────────────────────────────────────────────────────────────────────
 * 5. WHITE-LABEL
 * ──────────────────────────────────────────────────────────────────── */
const WHITE_LABEL = {
  titleLine1: "Your brand.",
  titleLine2: "Our platform.",
  body: "Aivara OS is fully white-labelable. Offer a premium, enterprise-grade portal to your clients under your own domain and brand identity.",
  bullets: [
    "Custom domain routing (app.yourcompany.com)",
    "Upload your own logos and favicons",
    "Match your brand color palette exactly",
    "Configure custom pricing and billing modules",
  ],
};

/* ────────────────────────────────────────────────────────────────────
 * 6. INDUSTRIES
 * ──────────────────────────────────────────────────────────────────── */
const INDUSTRIES_HEADING = "Built for complex industries";

const INDUSTRIES = [
  { name: "Logistics", desc: "Fleet management, routing, and supply chain automation." },
  { name: "E-Commerce", desc: "Multi-channel inventory, support, and fulfillment tracking." },
  { name: "Education", desc: "Student portals, course management, and billing." },
  { name: "Music & Media", desc: "Royalty splitting, asset management, and release scheduling." },
  { name: "Real Estate", desc: "Property portfolios, tenant portals, and maintenance." },
  { name: "Professional Services", desc: "Client billing, project tracking, and document intelligence." },
];

/* ────────────────────────────────────────────────────────────────────
 * 7. SOCIAL PROOF
 * ──────────────────────────────────────────────────────────────────── */
const STATS = [
  { val: "$2.4B", label: "GMV Processed" },
  { val: "12k+", label: "Workflows Automated" },
  { val: "98%", label: "Enterprise Retention" },
  { val: "50+", label: "Enterprise Customers" },
];

const TESTIMONIALS = [
  {
    quote:
      "Aivara OS allowed us to deprecate 7 different SaaS tools within our first month. The integrated data model is game-changing.",
    author: "Marcus T.",
    role: "CEO, FreightSync Logistics",
  },
  {
    quote:
      "We configured a complete custom portal for our 500+ B2B clients in under two weeks. The white-label capabilities are unmatched.",
    author: "Elena R.",
    role: "COO, Vanguard Ecom",
  },
  {
    quote:
      "Managing royalty splits and release schedules used to take days. Now it's an automated workflow. Incredibly powerful platform.",
    author: "David K.",
    role: "Founder, SoundWave Label",
  },
];

/* ────────────────────────────────────────────────────────────────────
 * 8. FINAL CTA
 * ──────────────────────────────────────────────────────────────────── */
const FINAL_CTA = {
  title: "Run your entire business on Aivara OS",
  subtitle:
    "Join the forward-thinking enterprises consolidating their operations into one intelligent platform.",
  primaryCta: { label: "Book Enterprise Demo", href: "/contact" },
  secondaryCta: { label: "Talk to Sales", href: "/contact" },
};

/* ────────────────────────────────────────────────────────────────────
 *  TOOLS — "The Tools We Use to Build, Automate & Scale Businesses"
 * ──────────────────────────────────────────────────────────────────── */
const TOOLS_HEADING = {
  eyebrow: "Powered by Industry-Leading Tools",
  title: "The Tools We Use to Build, Automate & Scale Businesses",
  subtitle:
    "Powered by industry-leading platforms for AI, development, automation, communication, creative production, and business infrastructure.",
  disclaimer:
    "Logos shown represent tools and platforms we use in our workflow. Aivara Solutions is not claiming official partnership or endorsement unless stated. All logos and product names are trademarks of their respective owners.",
};

const si = (slug: string) => `https://cdn.simpleicons.org/${slug}`;
const siWhite = (slug: string) => `https://cdn.simpleicons.org/${slug}/ffffff`;

const TOOL_CATEGORIES: {
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

/* ────────────────────────────────────────────────────────────────────
 *  PORTFOLIO — "Systems, Brands & Builds Powered by Aivara"
 * ──────────────────────────────────────────────────────────────────── */
const PORTFOLIO_HEADING = {
  title: "Systems, Brands & Builds Powered by Aivara",
  subtitle:
    "From client portals and AI automations to booking systems, lead funnels, dashboards, and creative campaigns — these are the types of systems we build to help businesses operate and grow smarter.",
  disclaimer:
    "Some projects shown are internal Aivara-built systems, owned brands, or client-facing builds currently in development.",
  ctaTitle: "Want a system like this built for your business?",
  ctaLabel: "Start My Build",
  ctaHref: "/contact",
  viewAllLabel: "View all work",
  viewAllHref: "/portfolio",
};

type PortfolioItem = {
  title: string;
  category: string;
  badge: string;
  description: string;
  chips: string[];
  gradient: string;
  image: string;
  url: string;
};

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "Aivara Client Portal",
    category: "Portal / AI Automation",
    badge: "Internal Build",
    description:
      "Manage requests, budgets, files, approvals, and updates from one client-facing system.",
    chips: ["Portal", "Automation", "Client System"],
    gradient: "from-pink-500 via-purple-500 to-blue-500",
    image: "/images/portfolio/site-aivara-portal.png",
    url: "https://portal.aivarasolutions.com",
  },
  {
    title: "FreightSync TMS Owner Portal",
    category: "Logistics / Dashboard",
    badge: "Logistics System",
    description:
      "Track loads, revenue, expenses, and settlements from one owner-facing dashboard.",
    chips: ["Logistics", "Dashboard", "Reporting"],
    gradient: "from-blue-500 via-teal-500 to-green-500",
    image: "/images/portfolio/site-freightsync.png",
    url: "https://freightsynctms.com",
  },
  {
    title: "IPM Owner & Property Portal",
    category: "Property Management / Portal",
    badge: "Property Management",
    description:
      "Monitor reservations, expenses, payouts, and property performance in one place.",
    chips: ["Property Management", "Portal", "Reporting"],
    gradient: "from-teal-500 via-green-500 to-yellow-400",
    image: "/images/portfolio/ai-ipm-apollo.png",
    url: "https://ipm.services",
  },
  {
    title: "Wave Sandy Booking & Campaign System",
    category: "Travel / Rentals / Marketing",
    badge: "Booking + Marketing",
    description:
      "Drive bookings with campaign pages, analytics, and conversion-focused rental marketing.",
    chips: ["Booking", "Marketing", "Analytics"],
    gradient: "from-cyan-400 via-blue-500 to-purple-500",
    image: "/images/portfolio/site-wavesandy.png",
    url: "https://book.wavesandy.com",
  },
  {
    title: "Google Ads Lead Generation System",
    category: "Marketing / Lead Gen",
    badge: "Lead Generation",
    description:
      "Capture and track leads with landing pages, analytics, follow-up, and reporting.",
    chips: ["Lead Generation", "Tracking", "Automation"],
    gradient: "from-yellow-400 via-orange-500 to-pink-500",
    image: "/images/portfolio/site-aivara.jpg",
    url: "/contact",
  },
  {
    title: "RichAF.Global Guidebook Funnel",
    category: "Travel / Digital Product",
    badge: "Travel Tech",
    description:
      "Turn destination content into a branded funnel for guidebook sales and audience growth.",
    chips: ["Travel Tech", "Funnel", "Digital Product"],
    gradient: "from-purple-500 via-pink-500 to-orange-400",
    image: "/images/portfolio/site-richaf.png",
    url: "https://guides.richaf.global",
  },
  {
    title: "Hidden Jade Experiences Brand Assets",
    category: "Creative / Tourism",
    badge: "Creative Production",
    description:
      "Present experiences with polished brand visuals, brochures, and guest-facing marketing.",
    chips: ["Creative", "Tourism", "Branding"],
    gradient: "from-green-500 via-teal-500 to-cyan-500",
    image: "/images/portfolio/site-hiddenjade.png",
    url: "https://hiddenjadeexperiences.com",
  },
  {
    title: "AI Customer Support Bot",
    category: "AI / Automation",
    badge: "AI Automation",
    description:
      "Answer FAQs, capture leads, and route customer requests automatically.",
    chips: ["AI", "Support", "Lead Capture"],
    gradient: "from-pink-500 via-purple-500 to-teal-500",
    image: "/images/portfolio/ai-richaf-bot.png",
    url: "https://richaf.global",
  },
  {
    title: "Brand Sound Identity",
    category: "Creative / Music",
    badge: "Creative Media",
    description:
      "Strengthen campaigns and content with custom audio branding and theme music.",
    chips: ["Creative Media", "Audio", "Branding"],
    gradient: "from-orange-500 via-pink-500 to-purple-500",
    image: "/images/portfolio/site-aivara-music.png",
    url: "/contact",
  },
];

/* ────────────────────────────────────────────────────────────────────
 * 9. FOOTER (mockup design)
 * ──────────────────────────────────────────────────────────────────── */
const FOOTER = {
  logoSrc: "/images/aivara-logo.png",
  blurb:
    "The AI-Powered Operating System for Modern Businesses. Unify, automate, and scale.",
  columns: [
    {
      title: "Platform",
      links: [
        { label: "Architecture", href: "#" },
        { label: "Security", href: "#" },
        { label: "White-Label", href: "#" },
        { label: "API", href: "#" },
      ],
    },
    {
      title: "Modules",
      links: [
        { label: "CRM", href: "#modules" },
        { label: "Operations", href: "#modules" },
        { label: "Finance", href: "#modules" },
        { label: "Copilot", href: "#modules" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Logistics", href: "#industries" },
        { label: "E-Commerce", href: "#industries" },
        { label: "Real Estate", href: "#industries" },
        { label: "Agencies", href: "#industries" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/contact" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
  ],
};

/* ────────────────────────────────────────────────────────────────────
 *  PAGE
 * ──────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans overflow-x-hidden relative">
      {/* Background blobs */}
      <div className="bold-gradient-blob bg-pink-600 w-96 h-96 rounded-full top-[-100px] left-[-100px]" />
      <div className="bold-gradient-blob bg-teal-500 w-[500px] h-[500px] rounded-full top-[20%] right-[-200px]" />
      <div className="bold-gradient-blob bg-yellow-500 w-80 h-80 rounded-full bottom-[10%] left-[10%]" />

      {/* ── HEADER (sticky) ────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={HEADER.logoSrc}
              alt="Aivara Solutions"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              {HEADER.brand}
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            {HEADER.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href={HEADER.signInHref}
              className="text-sm font-medium hover:text-white transition-colors hidden sm:block"
            >
              {HEADER.signInLabel}
            </Link>
            <Link
              href={HEADER.bookDemoHref}
              onClick={() => trackBookingClick("homepage_header")}
              className="bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-500 hover:opacity-90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)]"
            >
              {HEADER.bookDemoLabel}
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20">
        {/* ── HERO ────────────────────────────────────────────────── */}
        <section className="container mx-auto px-6 pt-16 pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            {HERO.badge}
          </div>
          <h1 className="bold-gradient-text text-5xl md:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
            {HERO.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12">
            {HERO.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              href={HERO.primaryCta.href}
              onClick={() => trackBookingClick("homepage_hero")}
              className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(219,39,119,0.4)]"
            >
              {HERO.primaryCta.label} <ArrowRight size={18} />
            </Link>
            <Link
              href={HERO.secondaryCta.href}
              onClick={() =>
                trackCTA(HERO.secondaryCta.label, "homepage_hero", HERO.secondaryCta.href)
              }
              className="w-full sm:w-auto glass-panel hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              {HERO.secondaryCta.label}
            </Link>
            <Link
              href={HERO.tertiaryCta.href}
              onClick={() =>
                trackCTA(HERO.tertiaryCta.label, "homepage_hero", HERO.tertiaryCta.href)
              }
              className="w-full sm:w-auto border border-white/20 hover:bg-white/5 px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              {HERO.tertiaryCta.label}
            </Link>
          </div>

          <div className="text-sm text-slate-500 font-medium mb-8 uppercase tracking-widest">
            Trusted by Enterprise Leaders
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {TRUSTED_BY.map((logo) => (
              <span key={logo.name} className={logo.className}>
                {logo.name}
              </span>
            ))}
          </div>

          {/* Inline dashboard preview */}
          <div className="mt-24 relative max-w-6xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
            <div className="relative rounded-2xl glass-panel border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[600px] text-left">
              <div className="h-12 border-b border-white/5 bg-black/40 flex items-center px-4 gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 bg-white/5 rounded-md h-7 flex items-center px-3 text-xs text-slate-400 gap-2 mx-4">
                  <Globe size={12} /> aivara.os/dashboard
                </div>
              </div>

              <div className="flex flex-1 overflow-hidden bg-slate-900/50">
                <div className="w-64 border-r border-white/5 p-4 hidden md:flex flex-col gap-1">
                  <div className="flex items-center gap-2 px-2 py-3 mb-4">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-pink-500 to-teal-500 flex items-center justify-center font-bold">
                      V
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Vanguard Ecom</div>
                      <div className="text-xs text-slate-400">Enterprise Plan</div>
                    </div>
                  </div>
                  {["Dashboard", "Analytics", "Customers", "Operations", "Finance"].map(
                    (item, i) => (
                      <div
                        key={item}
                        className={`px-3 py-2 rounded-lg text-sm flex items-center gap-3 ${
                          i === 0 ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5"
                        }`}
                      >
                        {i === 0 ? (
                          <Activity size={16} className="text-teal-400" />
                        ) : (
                          <Box size={16} />
                        )}
                        {item}
                      </div>
                    )
                  )}
                </div>

                <div className="flex-1 p-6 overflow-y-auto">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">Good morning, Sarah</h3>
                      <p className="text-slate-400 text-sm">Here&apos;s what&apos;s happening today.</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                        <Search size={16} />
                      </div>
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                        <Bell size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-slate-400 text-sm mb-1">Total Revenue</div>
                      <div className="text-3xl font-bold">
                        $124,500
                        <span className="text-teal-400 text-sm ml-2 font-normal">+12.5%</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 relative overflow-hidden">
                      <div className="absolute right-0 top-0 w-24 h-24 bg-pink-500/20 blur-2xl rounded-full" />
                      <div className="text-slate-400 text-sm mb-1">Active Workflows</div>
                      <div className="text-3xl font-bold">1,204</div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-teal-500/20 to-pink-500/20 border border-teal-500/30">
                      <div className="text-teal-100 text-sm mb-1">AI Copilot Insights</div>
                      <div className="text-sm font-medium mt-2">
                        Anomaly detected in supply chain routing. Recommend re-routing 3 shipments.
                      </div>
                    </div>
                  </div>

                  <div className="h-64 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col">
                    <div className="text-sm font-medium mb-4 flex justify-between">
                      <span>Performance Overview</span>
                      <span className="text-slate-400 text-xs">Last 30 days</span>
                    </div>
                    <div className="flex-1 flex items-end gap-2 px-2">
                      {[40, 60, 45, 80, 55, 90, 70, 100, 85, 95].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-teal-500/80 to-pink-500/80 relative group"
                          style={{ height: `${h}%` }}
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-xs py-1 px-2 rounded hidden group-hover:block">
                            {h}k
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── REPLACE YOUR STACK ─────────────────────────────────── */}
        <section className="container mx-auto px-6 py-24 border-t border-white/10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {REPLACE_HEADING.titleLead}{" "}
              <span className="bold-gradient-text">{REPLACE_HEADING.titleAccent}</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              {REPLACE_HEADING.subtitle}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
            <div className="flex flex-wrap justify-center max-w-md gap-3">
              {REPLACE_TOOLS.map((tool) => (
                <div
                  key={tool}
                  className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 line-through decoration-red-500/50 decoration-2 text-sm font-medium"
                >
                  {tool}
                </div>
              ))}
            </div>
            <div className="text-slate-600 rotate-90 md:rotate-0">
              <ArrowRight size={32} />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-600 to-teal-500 p-[1px] mb-4 shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-teal-500/20" />
                  <Image
                    src="/images/aivara-logo.png"
                    alt="Aivara"
                    width={40}
                    height={40}
                    className="h-10 w-auto relative z-10"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 text-teal-400 font-medium bg-teal-400/10 px-3 py-1 rounded-full text-sm">
                <Check size={16} /> Unified System
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto glass-panel rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-4 font-semibold text-slate-300">Feature</th>
                  <th className="p-4 font-semibold text-slate-500">Legacy Stack</th>
                  <th className="p-4 font-semibold text-white bg-gradient-to-b from-white/10 to-transparent">
                    Aivara OS
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.label} className="border-b border-white/5">
                    <td className="p-4 text-sm font-medium text-slate-300">{row.label}</td>
                    <td className="p-4 text-sm text-slate-500">{row.old}</td>
                    <td
                      className={`p-4 text-sm font-semibold bg-white/[0.02] ${
                        row.hl ? "text-teal-400" : "text-white"
                      }`}
                    >
                      {row.new}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── MODULES (compact list — no gradient cards) ─────────── */}
        <section id="modules" className="container mx-auto px-6 py-20">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{MODULES_HEADING.title}</h2>
            <p className="text-slate-400">{MODULES_HEADING.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 max-w-5xl mx-auto">
            {MODULES.map((mod) => (
              <div key={mod.name} className="flex items-start gap-3">
                <mod.icon size={18} className="text-teal-400 mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-base text-white leading-snug">
                    {mod.name}
                  </h3>
                  <p className="text-sm text-slate-400 leading-snug">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TOOLS / TECH STACK ─────────────────────────────────── */}
        <section className="py-24 bg-black/40 border-y border-white/5">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-600/20 via-teal-500/20 to-yellow-400/20 border border-white/10 mb-6">
                <span className="text-xs uppercase tracking-wider text-slate-200 font-semibold">
                  {TOOLS_HEADING.eyebrow}
                </span>
              </div>
              <h2 className="bold-gradient-text text-3xl md:text-5xl font-bold mb-6">
                {TOOLS_HEADING.title}
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                {TOOLS_HEADING.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TOOL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="group relative h-full">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-600/30 via-teal-500/30 to-yellow-400/30 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500" />
                  <div className="relative h-full bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl transition-all duration-500 group-hover:border-white/20 group-hover:-translate-y-1">
                    <div className="p-7 flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-5 text-white">{cat.title}</h3>
                      <div className="flex flex-wrap gap-2.5 mt-auto">
                        {cat.tools.map((tool, i) => (
                          <ToolPill key={`${tool.name}-${i}`} name={tool.name} logo={tool.logo} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 italic text-center mt-10 max-w-3xl mx-auto leading-relaxed">
              {TOOLS_HEADING.disclaimer}
            </p>
          </div>
        </section>

        {/* ── PORTFOLIO (replaces "Powered by Aivara OS" section) ── */}
        <section className="py-24 bg-gradient-to-r from-pink-600/10 via-teal-500/10 to-yellow-400/10 border-y border-white/5">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="bold-gradient-text text-3xl md:text-5xl font-bold mb-4">
                {PORTFOLIO_HEADING.title}
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-3">
                {PORTFOLIO_HEADING.subtitle}
              </p>
              <p className="text-sm text-slate-500 italic max-w-3xl mx-auto">
                {PORTFOLIO_HEADING.disclaimer}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {PORTFOLIO_ITEMS.map((item) => {
                const isExternal = item.url.startsWith("http");
                return (
                  <a
                    key={item.title}
                    href={item.url}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group relative h-full block"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-600/40 via-teal-500/40 to-yellow-400/40 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500" />
                    <div className="relative h-full bg-black/70 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:-translate-y-1 cursor-pointer flex flex-col">
                      <div
                        className={`relative aspect-video overflow-hidden bg-gradient-to-br ${item.gradient}`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur border border-white/20 text-[10px] uppercase tracking-wider font-semibold text-white">
                          {item.badge}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="text-[11px] text-teal-400 mb-2 uppercase tracking-wider font-semibold">
                          {item.category}
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          {item.chips.map((chip) => (
                            <span
                              key={chip}
                              className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/5 border border-white/10 text-slate-300"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="text-center max-w-2xl mx-auto pt-8 border-t border-white/10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                {PORTFOLIO_HEADING.ctaTitle}
              </h3>
              <Link
                href={PORTFOLIO_HEADING.ctaHref}
                onClick={() =>
                  trackCTA(
                    PORTFOLIO_HEADING.ctaLabel,
                    "portfolio_cta",
                    PORTFOLIO_HEADING.ctaHref
                  )
                }
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 text-black font-bold px-10 py-4 text-lg rounded-xl hover:opacity-90 transition"
              >
                {PORTFOLIO_HEADING.ctaLabel}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <div className="mt-8">
                <Link
                  href={PORTFOLIO_HEADING.viewAllHref}
                  className="text-sm text-slate-400 hover:text-teal-300 transition inline-flex items-center gap-1"
                >
                  {PORTFOLIO_HEADING.viewAllLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHITE-LABEL ────────────────────────────────────────── */}
        <section id="whitelabel" className="container mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {WHITE_LABEL.titleLine1} <br />
                {WHITE_LABEL.titleLine2}
              </h2>
              <p className="text-lg text-slate-400 mb-8">{WHITE_LABEL.body}</p>
              <ul className="space-y-4">
                {WHITE_LABEL.bullets.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                      <Check size={14} />
                    </div>
                    <span className="text-slate-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 relative w-full">
              {/* gradient glow */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-pink-600/30 via-teal-500/20 to-yellow-500/20 blur-3xl rounded-full" />

              {/* Browser frame */}
              <div className="relative rounded-xl border border-white/10 bg-slate-950 shadow-2xl overflow-hidden">
                <div className="h-8 bg-black/60 border-b border-white/10 px-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  </div>
                  <div className="ml-3 flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-400">
                    <Globe size={9} />
                    portal.yourcompany.com
                  </div>
                </div>

                {/* Dashboard body */}
                <div className="flex bg-slate-950 text-white min-h-[340px]">
                  {/* Sidebar — modules */}
                  <aside className="hidden sm:flex w-32 shrink-0 flex-col border-r border-white/10 bg-black/40 p-3 gap-1">
                    {/* Branding placeholder */}
                    <div className="mb-3 px-2 py-2 rounded-md border border-dashed border-pink-400/60 bg-pink-500/10 text-center">
                      <div className="text-[8px] uppercase tracking-wider text-pink-300 font-bold leading-tight">
                        Your Logo
                      </div>
                    </div>
                    {[
                      { icon: Users, label: "CRM", active: true },
                      { icon: Workflow, label: "Operations" },
                      { icon: BarChart3, label: "Analytics" },
                      { icon: Layers, label: "Projects" },
                      { icon: Database, label: "Finance" },
                      { icon: MessageSquare, label: "Support" },
                      { icon: Settings, label: "Settings" },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className={`flex items-center gap-2 px-2 py-1.5 rounded text-[10px] ${
                          m.active
                            ? "bg-gradient-to-r from-pink-600/30 to-teal-500/20 text-white border border-pink-400/30"
                            : "text-slate-400"
                        }`}
                      >
                        <m.icon size={11} />
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </aside>

                  {/* Main */}
                  <div className="flex-1 p-4 space-y-3 min-w-0">
                    {/* Top bar with branding placeholder */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="px-3 py-1.5 rounded-md border-2 border-dashed border-teal-400/70 bg-teal-500/10">
                          <span className="text-[9px] uppercase tracking-widest font-bold text-teal-300">
                            Your Branding Here
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Search size={11} className="text-slate-500" />
                        <Bell size={11} className="text-slate-500" />
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-500 to-teal-500" />
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-semibold text-white">
                        Good morning, Sarah
                      </div>
                      <div className="text-[9px] text-slate-500">
                        Here's what's happening today
                      </div>
                    </div>

                    {/* KPI cards */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Revenue", value: "$124.5K", delta: "+12.5%" },
                        { label: "Active Clients", value: "1,284", delta: "+3.2%" },
                        { label: "Open Tasks", value: "47", delta: "-8%" },
                      ].map((k) => (
                        <div
                          key={k.label}
                          className="rounded-md border border-white/10 bg-white/[0.03] p-2"
                        >
                          <div className="text-[8px] text-slate-500 uppercase tracking-wider">
                            {k.label}
                          </div>
                          <div className="text-[12px] font-bold text-white mt-0.5">
                            {k.value}
                          </div>
                          <div className="text-[8px] text-teal-400">{k.delta}</div>
                        </div>
                      ))}
                    </div>

                    {/* Chart placeholder */}
                    <div className="rounded-md border border-white/10 bg-white/[0.02] p-2 h-20 relative overflow-hidden">
                      <div className="text-[8px] text-slate-500 uppercase tracking-wider mb-1">
                        Pipeline · Last 30 days
                      </div>
                      <svg viewBox="0 0 200 40" className="w-full h-12">
                        <defs>
                          <linearGradient id="wlChart" x1="0" x2="1" y1="0" y2="0">
                            <stop offset="0%" stopColor="#db2777" />
                            <stop offset="50%" stopColor="#14b8a6" />
                            <stop offset="100%" stopColor="#facc15" />
                          </linearGradient>
                          <linearGradient id="wlFill" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 32 L20 26 L40 28 L60 18 L80 22 L100 12 L120 16 L140 8 L160 14 L180 6 L200 10 L200 40 L0 40 Z"
                          fill="url(#wlFill)"
                        />
                        <path
                          d="M0 32 L20 26 L40 28 L60 18 L80 22 L100 12 L120 16 L140 8 L160 14 L180 6 L200 10"
                          fill="none"
                          stroke="url(#wlChart)"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>

                    {/* Activity */}
                    <div className="space-y-1">
                      {[
                        { tag: "AI", text: "Lead scored 92 · Acme Corp", color: "bg-pink-500" },
                        { tag: "OPS", text: "Workflow #284 completed", color: "bg-teal-500" },
                        { tag: "FIN", text: "Invoice #1042 paid · $4,200", color: "bg-yellow-500" },
                      ].map((a) => (
                        <div
                          key={a.text}
                          className="flex items-center gap-2 rounded border border-white/5 bg-white/[0.02] px-2 py-1"
                        >
                          <span
                            className={`${a.color} text-[7px] font-bold text-black px-1.5 py-0.5 rounded`}
                          >
                            {a.tag}
                          </span>
                          <span className="text-[9px] text-slate-300 truncate">
                            {a.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating "white-label" badge */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 text-black text-[10px] font-bold uppercase tracking-wider shadow-lg">
                White-Labeled
              </div>
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ─────────────────────────────────────────── */}
        <section id="industries" className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">{INDUSTRIES_HEADING}</h2>
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x hide-scrollbar">
              {INDUSTRIES.map((ind) => (
                <div
                  key={ind.name}
                  className="min-w-[280px] p-6 rounded-2xl bg-slate-900 border border-white/10 snap-center hover:border-teal-500/50 transition-colors cursor-pointer"
                >
                  <h3 className="text-xl font-bold mb-2">{ind.name}</h3>
                  <p className="text-sm text-slate-400">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF ───────────────────────────────────────── */}
        <section className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 border-r border-white/10 last:border-0"
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-500 mb-2">
                  {stat.val}
                </div>
                <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="p-8 rounded-2xl glass-panel relative">
                <div className="text-4xl text-teal-500/20 absolute top-4 right-6 font-serif">
                  &ldquo;
                </div>
                <p className="text-slate-300 mb-6 relative z-10 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-400">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.author}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ──────────────────────────────────────────── */}
        <section className="container mx-auto px-6 py-12">
          <div className="relative rounded-3xl overflow-hidden px-8 py-20 text-center border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-pink-900/30" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{FINAL_CTA.title}</h2>
              <p className="text-lg text-slate-300 mb-10">{FINAL_CTA.subtitle}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href={FINAL_CTA.primaryCta.href}
                  onClick={() => trackBookingClick("homepage_final_cta")}
                  className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                >
                  {FINAL_CTA.primaryCta.label}
                </Link>
                <Link
                  href={FINAL_CTA.secondaryCta.href}
                  onClick={() =>
                    trackCTA(
                      FINAL_CTA.secondaryCta.label,
                      "homepage_final_cta",
                      FINAL_CTA.secondaryCta.href
                    )
                  }
                  className="glass-panel px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
                >
                  {FINAL_CTA.secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer className="border-t border-white/10 bg-slate-950 pt-20 pb-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
            <div className="col-span-2">
              <Image
                src={FOOTER.logoSrc}
                alt="Aivara Solutions"
                width={120}
                height={32}
                className="h-8 w-auto mb-4 opacity-80"
              />
              <p className="text-slate-400 text-sm mb-6 max-w-xs">{FOOTER.blurb}</p>
            </div>
            {FOOTER.columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-semibold mb-4 text-white">{col.title}</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-teal-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Aivara Solutions. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {FOOTER.legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
