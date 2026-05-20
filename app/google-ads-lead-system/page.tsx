import { LandingPage } from '@/components/ui/LandingPage';
import { Target, BarChart3, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads Lead Generation System | Get More Qualified Leads | Aivara Solutions',
  description:
    'Done-for-you Google Ads system with conversion-focused landing pages, CRM capture, conversion tracking, and automated follow-up. Aivara Solutions builds lead engines that convert.',
  keywords: [
    'Google Ads lead generation',
    'Google Ads management',
    'lead generation system',
    'conversion landing page',
    'small business lead funnel',
  ],
};

export default function GoogleAdsLeadSystemPage() {
  return (
    <LandingPage
      offer="Google Ads Lead System"
      service="Web & Marketing"
      badge="Done-for-You Google Ads Lead System"
      headline="More Qualified Leads. Less Wasted Ad Spend."
      subheadline="Aivara Solutions builds complete Google Ads lead systems — high-converting landing pages, CRM capture, conversion tracking, and automated follow-up. Everything you need to turn ad clicks into real customers."
      heroBullets={[
        'Google Ads campaign setup and optimization',
        'Conversion-focused landing page built for your offer',
        'CRM capture and instant lead notifications',
        'Automated email follow-up that closes deals',
      ]}
      primaryCta="Get My Lead System Quote"
      benefits={[
        {
          icon: <Target className="h-6 w-6" />,
          title: 'Turn Clicks Into Leads',
          description:
            'Most ad spend gets wasted on bad landing pages. Ours are built around one goal: capturing qualified leads.',
        },
        {
          icon: <Mail className="h-6 w-6" />,
          title: 'Automated Follow-Up',
          description:
            'Most leads don’t buy on the first touch. Our follow-up sequences nurture them until they’re ready to talk.',
        },
        {
          icon: <BarChart3 className="h-6 w-6" />,
          title: 'Track What Actually Works',
          description:
            'Conversion tracking, GA4, and reporting dashboards show you exactly where leads come from and what to scale.',
        },
      ]}
      features={[
        'Google Ads account setup and configuration',
        'Keyword research and audience targeting',
        'Conversion-focused landing page',
        'Headline, copy, and offer optimization',
        'Lead form with smart fields',
        'CRM capture and instant lead routing',
        'GA4 + conversion tracking setup',
        'Meta Pixel and retargeting prep',
        'Automated email follow-up sequence',
        'Lead scoring and qualification flow',
        'Reporting dashboard with key metrics',
        'First 30 days of campaign optimization',
      ]}
      industries={[
        'Property Management',
        'Travel, Tours & Rentals',
        'Local Service Businesses',
        'Real Estate & Rentals',
        'Consultants & Agencies',
        'Logistics & Transportation',
      ]}
      process={[
        {
          step: '01',
          title: 'Strategy Call',
          description:
            'We map your offer, ideal customer, and lead goals — then build a campaign strategy around them.',
        },
        {
          step: '02',
          title: 'Landing Page Build',
          description:
            'We design and launch a high-converting landing page focused on a single action: capturing a lead.',
        },
        {
          step: '03',
          title: 'Campaign Launch',
          description:
            'We set up Google Ads, conversion tracking, CRM capture, and follow-up automation — and turn it on.',
        },
        {
          step: '04',
          title: 'Optimize & Scale',
          description:
            'We monitor performance, optimize keywords and creative, and refine the funnel for the first 30 days.',
        },
      ]}
      faqs={[
        {
          question: 'How long until I start getting leads?',
          answer:
            'Most clients see their first qualified leads within 7–14 days of campaign launch. We optimize aggressively in the first 30 days.',
        },
        {
          question: 'Do I pay for the ad spend separately?',
          answer:
            'Yes. Google Ads spend is billed directly by Google to your account. Our fee covers strategy, build, setup, and optimization — not the ad budget itself.',
        },
        {
          question: 'What’s the recommended ad budget?',
          answer:
            'Most small businesses start with $1,000–$3,000/month in ad spend. We help you set the right budget for your goals during the strategy call.',
        },
        {
          question: 'What if my industry is competitive?',
          answer:
            'We specialize in conversion-focused funnels — strong offers, better landing pages, and smart follow-up — so you can compete even in expensive niches.',
        },
        {
          question: 'Do you offer ongoing campaign management?',
          answer:
            'Yes. After the first 30 days, monthly management retainers are available for ongoing optimization, reporting, and scaling.',
        },
        {
          question: 'What does the buildout cost?',
          answer:
            'Most lead system builds range from $3,500–$7,500. Book a strategy call for a custom quote within 24 hours.',
        },
        {
          question: 'Who owns the landing page and assets?',
          answer:
            'You do. After final payment, you own the landing page, Google Ads account, CRM data, and all assets we built.',
        },
      ]}
      formHeadline="Get a Free Lead System Strategy"
      formSubheadline="Tell us about your business and offer. We’ll send a custom plan and quote within 24 hours."
      formCta="Get My Lead System Quote"
      finalCtaHeadline="Ready to Turn Ad Spend Into Real Customers?"
      finalCtaText="Tell us about your offer. We’ll design the funnel that converts."
    />
  );
}
