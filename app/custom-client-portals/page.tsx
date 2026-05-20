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
          title: 'Secure & Professional',
          description:
            'Bank-grade authentication, encrypted data, role-based access. Your clients trust you more the moment they log in.',
        },
        {
          icon: <LayoutDashboard className="h-6 w-6" />,
          title: 'Branded to Your Business',
          description:
            'Not a generic SaaS portal. Custom-built around your workflow, your colors, your logo, and the exact features you need.',
        },
        {
          icon: <FileText className="h-6 w-6" />,
          title: 'Cuts Email & Admin Time',
          description:
            'Stop chasing files, statuses, and updates in email threads. Everything lives in one organized place — for you and your clients.',
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
            'Most portals launch in 4–8 weeks depending on complexity. We build in phases so you see progress quickly.',
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
            'Most portals range from $5,000–$15,000+ depending on scope and features. Book a discovery call for a tailored quote within 24 hours.',
        },
        {
          question: 'Do you offer ongoing support?',
          answer:
            'Yes. Monthly maintenance, feature expansions, and hosting plans are available after launch.',
        },
      ]}
      formHeadline="Get a Custom Portal Quote"
      formSubheadline="Tell us how your business operates. We’ll send a tailored plan and quote within 24 hours."
      formCta="Get My Portal Quote"
      finalCtaHeadline="Ready to Build a Portal Your Clients Will Love?"
      finalCtaText="Tell us how your business runs. We’ll design the portal that fits."
    />
  );
}
