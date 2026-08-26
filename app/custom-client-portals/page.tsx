import { LandingPage } from '@/components/ui/LandingPage';
import { LayoutDashboard, Lock, FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Client Portals & Owner Dashboards | Aivara Solutions',
  description:
    'Secure custom client portals, owner dashboards, and internal tools built for property managers, logistics teams, agencies, and growing businesses. Get a quote.',
  keywords: [
    'custom client portal',
    'owner dashboard development',
    'client portal for business',
    'property management portal',
    'business dashboard development',
  ],
};

export default function ClientPortalPage() {
  return (
    <LandingPage
      offer="Client Portal Buildout"
      service="Web & Marketing"
      badge="Custom Client Portal Buildout"
      headline="Give Your Clients a Secure Portal They’ll Actually Use"
      subheadline="Aivara Solutions builds custom client portals, owner dashboards, and internal tools — secure logins, file uploads, project tracking, and automated notifications, all branded to your business."
      heroBullets={[
        'Secure client logins and role-based access',
        'Branded dashboard with your colors and logo',
        'File uploads, project tracking, and request forms',
        'Automated email notifications and admin controls',
      ]}
      primaryCta="Get My Portal Quote"
      benefits={[
        {
          icon: <Lock className="h-6 w-6" />,
           title: 'Security-Focused Design',
          description:
             'We can scope secure authentication, role-based access, and appropriate data-handling controls for your project.',
        },
        {
          icon: <LayoutDashboard className="h-6 w-6" />,
          title: 'Branded to Your Business',
          description:
            'Not a generic SaaS portal. Custom-built around your workflow, your colors, your logo, and the exact features you need.',
        },
        {
          icon: <FileText className="h-6 w-6" />,
           title: 'Organized Requests & Updates',
          description:
             'A portal can bring files, statuses, and updates into one organized place for your team and authorized users.',
        },
      ]}
      features={[
        'Secure login system (email + password, magic link options)',
        'Branded client dashboard',
        'Role-based access (admin, client, team)',
        'File upload and document storage',
        'Project or request tracking',
        'Status updates and progress visibility',
        'Automated email notifications',
        'Admin dashboard for your team',
        'Database setup and hosting',
        'Mobile-responsive design',
        'CRM and email tool integrations',
        'Training and launch support',
      ]}
      industries={[
        'Property Management',
        'Real Estate & Rentals',
        'Logistics & Transportation',
        'Consultants & Agencies',
        'Construction & Trades',
        'Service Businesses',
      ]}
      process={[
        {
          step: '01',
          title: 'Discovery Call',
          description:
            'We learn how your business operates and what your clients, owners, or team actually need from a portal.',
        },
        {
          step: '02',
          title: 'Portal Blueprint',
          description:
            'You receive a custom design and feature blueprint — pages, user flows, and admin controls — for approval.',
        },
        {
          step: '03',
          title: 'Build & Test',
          description:
            'We build the portal, connect it to your tools, and test every flow with real data before launch.',
        },
        {
          step: '04',
          title: 'Launch & Train',
          description:
            'We launch the portal, train your team, and onboard your first clients with a smooth handoff.',
        },
      ]}
      faqs={[
        {
          question: 'How long does it take to build a custom portal?',
          answer:
            'Portal timing depends on scope, integrations, content readiness, and approvals. Your project schedule is confirmed in the written proposal.',
        },
        {
          question: 'Will the portal match my brand?',
          answer:
            'Yes. The portal uses your logo, colors, fonts, and tone of voice. It feels like a natural extension of your business.',
        },
        {
          question: 'Is the portal secure?',
          answer:
            'Absolutely. We use industry-standard encryption, role-based access, secure authentication, and modern hosting infrastructure.',
        },
        {
          question: 'Can it connect to my existing tools?',
          answer:
            'Yes. We can integrate with your CRM, email tools, payment processors, file storage, and other business systems.',
        },
        {
          question: 'Who owns the portal?',
          answer:
            'You do. After final payment, you own the code, database, and design. Ongoing hosting and maintenance is available separately.',
        },
        {
          question: 'What does a custom portal cost?',
          answer:
            'Portal pricing depends on scope and features. Book a discovery call to discuss a tailored proposal and response timing.',
        },
        {
          question: 'Do you offer ongoing support?',
          answer:
            'Yes. Monthly maintenance, feature expansions, and hosting plans are available after launch.',
        },
      ]}
      formHeadline="Get a Custom Portal Quote"
      formSubheadline="Tell us how your business operates, and we’ll follow up with next steps and a tailored proposal."
      formCta="Get My Portal Quote"
      finalCtaHeadline="Ready to Build a Portal Your Clients Will Love?"
      finalCtaText="Tell us how your business runs. We’ll design the portal that fits."
    />
  );
}
