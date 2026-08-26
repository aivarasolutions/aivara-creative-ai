import { LandingPage } from '@/components/ui/LandingPage';
import { Bot, Zap, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation for Small Business | Save Time & Capture More Leads | Aivara Solutions',
  description:
    'Stop drowning in repetitive work. Aivara Solutions builds AI automation systems for small businesses — chatbots, lead follow-up, email automation, and internal workflows. Free strategy call.',
  keywords: [
    'AI automation small business',
    'AI chatbot for business',
    'business workflow automation',
    'lead follow-up automation',
    'AI assistant for small business',
  ],
};

export default function AIAutomationPage() {
  return (
    <LandingPage
      offer="AI Automation Starter System"
      service="AI & Education"
      badge="AI Automation Starter System"
       headline="Reduce Repetitive Work With AI"
       subheadline="Aivara Solutions builds practical AI automation systems for small businesses, including chatbots, lead follow-up, and internal workflows."
      heroBullets={[
        'AI chatbot configuration for common customer questions',
        'Automated lead capture and email follow-up',
        'Internal task automation for your team',
        'Custom AI usage guide for staff onboarding',
      ]}
      primaryCta="Get My Free AI Audit"
      benefits={[
        {
          icon: <Zap className="h-6 w-6" />,
          title: 'Reduce Repetitive Tasks',
          description:
            'Automate the repetitive tasks eating your day — customer questions, follow-ups, reminders, and routine admin work.',
        },
        {
          icon: <Bot className="h-6 w-6" />,
          title: 'Support Common Questions',
          description:
            'An AI assistant can be configured to help handle common lead and client questions based on your approved business information.',
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: 'Empower Your Team',
          description:
            'Give your staff AI tools and a custom playbook so they work faster, smarter, and more consistently every day.',
        },
      ]}
      features={[
        'AI chatbot or virtual assistant setup',
        'Trained on your business, services, and FAQs',
        'Lead capture workflow (web, email, SMS)',
        'Automated email follow-up sequences',
        'Internal task automation (notifications, reminders)',
        'CRM connection and data sync prep',
        'Custom AI prompt library for your team',
        'Staff usage guide and onboarding doc',
        'Performance dashboard and reporting',
        'Post-launch support options defined in the project scope',
      ]}
      industries={[
        'Property Management',
        'Travel, Tours & Rentals',
        'Logistics & Transportation',
        'Local Service Businesses',
        'Consultants & Agencies',
        'Creators & Personal Brands',
      ]}
      process={[
        {
          step: '01',
          title: 'Free Strategy Call',
          description:
            'We map your daily workflows and identify the highest-leverage automation opportunities.',
        },
        {
          step: '02',
          title: 'System Design',
          description:
            'You receive a custom plan with the exact AI tools, automations, and integrations we recommend.',
        },
        {
          step: '03',
          title: 'Build & Train',
          description:
            'We build the chatbot, automations, and workflows — and train them on your business data.',
        },
        {
          step: '04',
          title: 'Launch & Support',
          description:
            'We launch the system, train your team, and discuss post-launch support options in the project scope.',
        },
      ]}
      faqs={[
        {
          question: 'How long does it take to launch an AI automation system?',
          answer:
            'Implementation timing depends on scope, data readiness, integrations, and approvals. Your project schedule is confirmed in the written proposal.',
        },
        {
          question: 'Do I need technical knowledge to use it?',
          answer:
            'No. Every system is built around your existing workflow, and we provide a simple staff usage guide so anyone on your team can use it confidently.',
        },
        {
          question: 'Will this replace my employees?',
          answer:
            'No. AI automation removes repetitive busywork so your team can focus on higher-value work — sales, relationships, and growth.',
        },
        {
          question: 'Can the AI use my real business data?',
          answer:
            'Yes. We train it on your services, pricing, FAQs, processes, and policies so responses are accurate and on-brand.',
        },
        {
          question: 'What does it cost?',
          answer:
            'Pricing depends on scope. Book a strategy call to discuss a tailored proposal and response timing.',
        },
        {
          question: 'Do you offer ongoing support?',
          answer:
            'Yes. Monthly maintenance, optimization, and expansion plans are available after launch.',
        },
      ]}
      formHeadline="Get a Free AI Automation Audit"
      formSubheadline="Tell us about your business and we’ll follow up with next steps and a tailored proposal."
      formCta="Get My Free Audit"
      finalCtaHeadline="Ready to Let AI Do the Repetitive Work?"
      finalCtaText="Tell us what’s eating your time. We’ll show you exactly how to automate it."
    />
  );
}
