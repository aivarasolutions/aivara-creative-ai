import { LandingPage } from '@/components/ui/LandingPage';
import { Target, BarChart3, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
       title: 'Google Ads Lead System | Aivara Solutions',
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
       headline="A Configurable Google Ads Lead System"
       subheadline="Aivara Solutions builds Google Ads lead systems with landing pages, CRM capture, conversion tracking, and automated follow-up."
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
          title: 'Lead Capture Workflow',
          description:
            'Landing pages can be structured around a focused offer and lead-capture workflow.',
        },
        {
          icon: <Mail className="h-6 w-6" />,
          title: 'Automated Follow-Up',
          description:
            'Follow-up sequences can be configured to send approved messages after a lead submits a form.',
        },
        {
          icon: <BarChart3 className="h-6 w-6" />,
          title: 'Campaign Measurement',
          description:
            'Conversion tracking, analytics, and reporting can help you review available campaign activity data.',
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
         'Campaign optimization scope discussed in proposal',
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
            'We review campaign activity and discuss optimization options based on the agreed scope.',
        },
      ]}
      faqs={[
        {
          question: 'How long until I start getting leads?',
          answer:
            'Lead timing and volume depend on audience, budget, competition, approval timing, and campaign conditions. We do not guarantee lead results.',
        },
        {
          question: 'Do I pay for the ad spend separately?',
          answer:
            'Yes. Google Ads spend is billed directly by Google to your account. Our fee covers strategy, build, setup, and optimization — not the ad budget itself.',
        },
        {
          question: 'What’s the recommended ad budget?',
          answer:
            'Ad budget is determined after discussing your goals, audience, and competitive conditions.',
        },
        {
          question: 'What if my industry is competitive?',
          answer:
            'We can scope landing pages and follow-up workflows to support your campaign strategy in competitive markets.',
        },
        {
          question: 'Do you offer ongoing campaign management?',
          answer:
            'Ongoing management, optimization, and reporting options can be included in a monthly scope.',
        },
        {
          question: 'What does the buildout cost?',
          answer:
            'Build pricing depends on scope. Book a strategy call to discuss a tailored proposal and response timing.',
        },
        {
          question: 'Who owns the landing page and assets?',
          answer:
            'You do. After final payment, you own the landing page, Google Ads account, CRM data, and all assets we built.',
        },
      ]}
      formHeadline="Get a Free Lead System Strategy"
      formSubheadline="Tell us about your business and offer, and we’ll follow up with next steps and a tailored proposal."
      formCta="Get My Lead System Quote"
      finalCtaHeadline="Ready to Plan Your Lead System?"
      finalCtaText="Tell us about your offer and we’ll discuss a suitable campaign workflow."
    />
  );
}
