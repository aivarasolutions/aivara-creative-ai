import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Aivara Solutions, covering the information we collect, social media integrations, social publishing, SMS/text message communications, data sharing, retention, and your rights.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "August 25, 2026";

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
                Social Media Account Integrations
              </h2>
              <p>
                Aivara may allow you to connect third-party social media accounts to our
                Services, including accounts on platforms such as TikTok, Facebook,
                Instagram, and other supported services. When you connect an account, we
                may receive and process information made available through the
                authorization you provide and the permissions or scopes you approve.
              </p>
              <p>Depending on the platform and the permissions you grant, this may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Social platform user or account identifiers</li>
                <li>Username, display name, and account or profile information</li>
                <li>Profile image or avatar, where provided</li>
                <li>OAuth access tokens and refresh tokens</li>
                <li>Token expiration information and permissions or scopes granted</li>
                <li>Social account connection status</li>
                <li>Creator or account settings returned by the platform</li>
                <li>Content you choose to upload, schedule, or publish</li>
                <li>Captions, descriptions, titles, and publishing preferences</li>
                <li>Uploaded images and videos</li>
                <li>Publishing job identifiers, post status, publishing results, and provider error information</li>
              </ul>
              <p>
                We use this information only to provide the social media management,
                scheduling, publishing, account connection, and related platform
                functionality you request. OAuth access and refresh tokens are stored
                securely on the server side and are not exposed in the frontend. We do not
                sell social platform credentials or authorization tokens, and we do not use
                connected-account authorization data for unrelated advertising purposes.
              </p>
              <p>
                You may disconnect a connected social account from Aivara. Disconnecting
                prevents future use of that authorization by Aivara, subject to technical
                processing and legal retention requirements. You may also revoke Aivara&apos;s
                authorization directly through the applicable third-party platform. Aivara
                only accesses information permitted by the scopes or permissions you
                explicitly authorize. Your use of a connected platform is also governed by
                that platform&apos;s own privacy policy and terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                TikTok Integration
              </h2>
              <p>
                When you connect TikTok, Aivara uses TikTok Login and OAuth to obtain the
                access you authorize. Aivara may process TikTok account identity
                information made available through the approved TikTok scopes and may
                securely store the TikTok OAuth tokens needed to maintain the connection.
                The current planned TikTok scopes are{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-teal-300">
                  user.info.basic
                </code>{" "}
                and{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-teal-300">
                  video.publish
                </code>
                . Aivara only requests or uses permissions that are presented to you and
                authorized by you.
              </p>
              <p>
                When you instruct Aivara to publish or schedule content, Aivara may send
                your selected video or photo content, captions, privacy selections,
                commercial-content disclosures, and other publishing preferences to TikTok.
                Aivara may also receive TikTok Creator Info and publishing-status
                information returned by TikTok that is necessary to validate and complete
                publishing, subject to the scopes and access TikTok makes available.
                Aivara does not post to TikTok unless you have connected the account and
                instructed Aivara to publish or schedule content.
              </p>
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
                SMS Privacy and Consent Policy
              </h2>
              <p>
                Aivara Solutions may collect mobile phone numbers when users submit forms,
                request quotes, create bookings, communicate with our team, or use our
                client portals. By providing a mobile phone number, users may receive SMS
                messages related to bookings, reservations, service updates, payment
                notifications, account notifications, customer support, and other
                operational communications.
              </p>
              <p>
                Aivara Solutions does not sell, rent, share, or disclose mobile phone
                numbers, SMS opt-in data, or SMS consent information to third parties or
                affiliates for marketing or promotional purposes.
              </p>
              <p>
                SMS opt-in data and consent information will only be used to provide the
                requested communication services and may be shared only with service
                providers when necessary to deliver SMS messages on behalf of Aivara
                Solutions.
              </p>
              <p>
                Users may opt out of SMS messages at any time by replying STOP. Users may
                reply HELP for assistance. Message frequency may vary. Message and data
                rates may apply.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Data Sharing</h2>
              <p>
                We may share information with service providers needed to operate our
                business, such as hosting providers, payment processors, email and SMS
                providers, analytics tools, booking systems, customer support tools, and
                connected social media platforms. When you use social publishing features,
                we necessarily transmit the content you select and related publishing
                information to the social platform you select. This is a service-provider
                interaction initiated by you and is necessary to provide the requested
                publishing functionality. These providers are permitted to use the
                information only as necessary to provide services to us or at your
                direction.
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
                or anonymized in accordance with applicable law. After a connected social
                account is disconnected, we may retain limited records of publishing
                activity, audit history, publishing status, and error information for
                legitimate operational, security, fraud-prevention, support, audit, and
                compliance purposes, where permitted by law. Disconnecting an account does
                not necessarily result in the immediate deletion of every related record.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Security of Integration Information
              </h2>
              <p>
                We use reasonable technical and organizational safeguards designed to
                protect sensitive integration credentials and related information,
                including secure server-side storage and encryption of authorization tokens
                where implemented. No method of transmission or storage can be guaranteed
                to be completely secure.
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
