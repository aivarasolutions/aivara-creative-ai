import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Aivara Solutions, covering the information we collect, how we use it, SMS/text message communications, data sharing, retention, and your rights.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "June 10, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <Section className="pt-32">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
          </header>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section className="space-y-4">
              <p>
                Aivara Solutions (&ldquo;Aivara Solutions,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, share, and
                protect information in connection with our services, including website
                design and development, booking systems, automation services, SMS/email
                notifications, marketing and promotions, social media and content
                services, business consulting, client portals and dashboards,
                payment/booking notification systems, and property, travel, event, and
                hospitality-related digital services (collectively, the
                &ldquo;Services&rdquo;).
              </p>
              <p>
                By using our website or Services, you agree to the practices described in
                this Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
              <p>We may collect the following categories of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business name</li>
                <li>Billing and payment-related information</li>
                <li>Booking and reservation details</li>
                <li>Website usage data</li>
                <li>Communications with us</li>
                <li>Form submissions</li>
                <li>Client and customer data submitted through our systems</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                How We Use Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide our Services</li>
                <li>Manage client accounts</li>
                <li>Send booking, payment, and account notifications</li>
                <li>Communicate with clients and authorized users</li>
                <li>
                  Improve our websites, systems, automations, and Services
                </li>
                <li>Process payments and reservations</li>
                <li>Provide support</li>
                <li>Comply with legal and business obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                SMS/Text Message Privacy
              </h2>
              <p>
                Aivara Solutions may collect and use mobile phone numbers to send
                account-related, booking-related, reservation-related, payment-related,
                operational, and service notifications by SMS/text message.
              </p>
              <p>
                Message frequency may vary. Message and data rates may apply. Recipients
                may reply STOP to opt out of future messages and HELP for assistance.
              </p>
              <p>
                Mobile phone numbers and SMS consent information will not be sold, rented,
                shared, or disclosed to third parties or affiliates for marketing or
                promotional purposes.
              </p>
              <p>
                SMS opt-in data and consent will not be shared with any third parties,
                except with service providers as necessary to deliver SMS messages, comply
                with legal obligations, or operate our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Data Sharing</h2>
              <p>
                We may share information with service providers needed to operate our
                business, such as hosting providers, payment processors, email and SMS
                providers, analytics tools, booking systems, and customer support tools.
                These providers are permitted to use the information only as necessary to
                provide services to us.
              </p>
              <p className="font-semibold text-white">
                We do not sell personal information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Data Retention</h2>
              <p>
                We retain information only as long as needed for business, legal,
                accounting, support, and operational purposes, after which it is deleted
                or anonymized in accordance with applicable law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Your Rights</h2>
              <p>
                You may contact us to access, correct, update, or delete your information
                where applicable. We will respond to such requests in accordance with
                applicable law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices,
                please contact us at{" "}
                <a
                  href="mailto:kevin@aivarasolutions.com"
                  className="text-teal-400 hover:text-white transition"
                >
                  kevin@aivarasolutions.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
