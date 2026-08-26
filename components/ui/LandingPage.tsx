import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/section';
import { FAQ } from '@/components/ui/faq';
import { Card, CardContent } from '@/components/ui/card';
import { LandingForm } from '@/components/ui/LandingForm';
import { ServicePageView } from '@/components/ServicePageView';
import { Check, Sparkles, ArrowRight, Clock, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

export interface LandingPageProps {
  badge: string;
  headline: string;
  subheadline: string;
  heroBullets: string[];
  primaryCta: string;
  benefits: { icon: ReactNode; title: string; description: string }[];
  features: string[];
  industries: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  formHeadline: string;
  formSubheadline: string;
  formCta: string;
  offer: string;
  service: string;
  finalCtaHeadline: string;
  finalCtaText: string;
}

export function LandingPage(props: LandingPageProps) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <ServicePageView service={props.service} />

      {/* Hero with form */}
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/[0.08] via-transparent to-teal-500/[0.08] pointer-events-none"></div>
        <div className="absolute top-20 -left-32 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-40 -right-32 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-600/20 via-teal-500/20 to-yellow-400/20 border border-white/10 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-xs uppercase tracking-wider text-gray-200 font-semibold">
                {props.badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 leading-tight">
              {props.headline}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              {props.subheadline}
            </p>

            <ul className="space-y-3 mb-8">
              {props.heroBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200">
                  <Check className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <a href="#request" className="rounded-2xl inline-flex items-center justify-center bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 px-8 py-6 text-lg font-semibold text-black transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black">
                {props.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-teal-400" />
                <span>Reply within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-teal-400" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-teal-400" />
                <span>Custom-built for your business</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2" id="request">
            <LandingForm
              offer={props.offer}
              service={props.service}
              headline={props.formHeadline}
              subheadline={props.formSubheadline}
              ctaLabel={props.formCta}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Section className="bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Why Businesses Choose This System
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Built for real business operations — not theory. Every system is designed to save
              time, improve client experience, and create measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {props.benefits.map((benefit, i) => (
              <Card
                key={i}
                className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
              >
                <CardContent className="p-7">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-600/20 via-teal-500/20 to-yellow-400/20 border border-white/10 text-teal-300 mb-5">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-gradient-to-b from-black via-teal-500/[0.04] to-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              What&apos;s Included
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Everything you need to launch fast and operate smarter. No fluff — only the parts
              that move the needle.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-pink-600/20 via-teal-500/20 to-yellow-400/20 rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-3xl p-8 md:p-10">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {props.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-br from-pink-600 via-teal-500 to-yellow-400 flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-black" strokeWidth={3} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Industries */}
      <Section className="bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Built for These Industries
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We&apos;ve built systems for service businesses, property managers, logistics
              teams, travel brands, and growing companies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {props.industries.map((industry, i) => (
              <div
                key={i}
                className="px-5 py-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-teal-500/40 hover:bg-black/60 transition-all duration-300 text-center"
              >
                <span className="text-sm md:text-base font-medium text-gray-200">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-gradient-to-b from-black via-pink-600/[0.04] to-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              How It Works
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Simple, transparent process — from first call to live system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {props.process.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-2xl p-6 h-full hover:border-white/20 transition-all">
                  <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-teal-400 to-yellow-400 bg-clip-text text-transparent mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQ items={props.faqs} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-pink-600 via-teal-500 to-yellow-400 text-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{props.finalCtaHeadline}</h2>
          <p className="text-lg md:text-xl mb-8 text-black/80">{props.finalCtaText}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#request" className="rounded-2xl inline-flex items-center justify-center bg-black px-8 py-6 text-lg font-semibold text-white transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black">
                {props.primaryCta}
            </a>
            <Link href="/contact" className="rounded-2xl inline-flex items-center justify-center border border-black px-8 py-6 text-lg font-semibold text-black transition hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
