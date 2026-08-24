import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions for Aivara Solutions, covering acceptance of terms, services, social media integrations, Social Scheduler authorization, client responsibilities, payment terms, SMS/text messaging terms, liability, and governing law.",
  alternates: { canonical: "/terms-and-conditions" },
};

const LAST_UPDATED = "August 25, 2026";

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <Section className="pt-32">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
          </header>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Acceptance of Terms</h2>
              <p>
                These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to
                and use of the services provided by Aivara Solutions (&ldquo;Aivara
                Solutions,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;). By engaging our Services, accessing our website, or
                providing your information, you agree to be bound by these Terms. If you
                do not agree, do not use our Services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Description of Services
              </h2>
              <p>
                Aivara Solutions provides services that may include website design and
                development, booking systems, automation services, SMS/email
                notifications, marketing and promotions, social media and content
                services, business consulting, client portals and dashboards,
                payment/booking notification systems, and property, travel, event, and
                hospitality-related digital services (collectively, the
                &ldquo;Services&rdquo;). The specific scope of any engagement will be
                described in a proposal, statement of work, or similar agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Client Responsibilities
              </h2>
              <p>
                Clients are responsible for providing accurate information, timely
                feedback, required content and materials, and any necessary access or
                approvals. Clients are responsible for ensuring they have the rights to
                any materials they provide and for compliance with all laws applicable to
                their business and end customers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Payment Terms</h2>
              <p>
                Fees, deposits, and payment schedules will be set out in the applicable
                proposal or invoice. Payments are due as specified, and late or unpaid
                amounts may result in suspension or termination of Services. Unless
                otherwise stated, fees are non-refundable once work has commenced.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Project Timelines and Scope
              </h2>
              <p>
                Estimated timelines are provided in good faith and may be affected by
                client responsiveness, change requests, and third-party dependencies.
                Work outside the agreed scope may require additional fees and revised
                timelines.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                No Guarantee of Specific Marketing Results
              </h2>
              <p>
                We do not guarantee any specific marketing, advertising, ranking,
                traffic, revenue, or business results. Outcomes depend on many factors
                outside our control, including market conditions and third-party
                platforms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Third-Party Platforms Disclaimer
              </h2>
              <p>
                Our Services may rely on or integrate with third-party platforms and
                providers (for example, hosting, payment processors, SMS/email providers,
                analytics, booking systems, and social media platforms). We are not
                responsible for the availability, performance, policies, or actions of
                these third parties, and your use of them may be subject to their own
                terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Third-Party Social Media Integrations
              </h2>
              <p>
                Aivara may allow you to connect supported third-party social media
                accounts, including accounts on platforms such as TikTok, Facebook,
                Instagram, and other supported services. By connecting an account, you
                represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You own the account or have proper authority to manage it.</li>
                <li>
                  You authorize Aivara to interact with the connected service within the
                  permissions you grant.
                </li>
                <li>
                  You authorize Aivara to submit or publish content on your behalf when
                  you intentionally use the Social Scheduler.
                </li>
                <li>
                  You remain responsible for the legality, accuracy, ownership, licensing,
                  and appropriateness of all content you upload or publish.
                </li>
                <li>
                  Your use remains subject to the applicable third-party platform&apos;s
                  terms, policies, community guidelines, advertising requirements,
                  music/content rules, and other requirements.
                </li>
              </ul>
              <p>
                Third-party platforms may impose rate limits, account restrictions, privacy
                limitations, content moderation, publishing limits, API outages,
                authorization expiration, and review or audit requirements. Aivara may
                temporarily disable an integration if required by a provider or for
                security or compliance reasons.
              </p>
              <p>
                Aivara does not guarantee approval of content by a third-party platform,
                continuous availability of third-party APIs, successful publication where
                a platform rejects, delays, limits, moderates, removes, or blocks content,
                or continued availability of a specific integration if the provider
                changes or restricts its API. Your use of each connected platform is also
                governed by that platform&apos;s own terms and privacy policies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Social Scheduler Authorization
              </h2>
              <p>
                When you schedule a post through Aivara, you are giving Aivara an
                instruction to attempt publication at the selected time. Aivara may
                transmit the content and settings you select to the applicable third-party
                platform. Publishing may be delayed or prevented by platform processing,
                moderation, API availability, authorization issues, or other third-party
                limitations.
              </p>
              <p>
                Before scheduling, you should review your captions, media, privacy
                settings, commercial disclosures, publishing targets, and any other
                applicable settings. Aivara does not silently publish content that you
                have not intentionally scheduled or submitted through the Social
                Scheduler.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Website, Automation, Booking System, and Notification Service Limitations
              </h2>
              <p>
                Websites, automations, booking systems, and notification services are
                provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
                We do not warrant that they will be uninterrupted, error-free, or fully
                secure. Delivery of notifications (including SMS and email) depends on
                third-party carriers and providers and is not guaranteed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                SMS Terms and Conditions
              </h2>
              <p>
                By providing your mobile phone number to Aivara Solutions through our
                website, booking forms, client portals, quote forms, or during
                communication with our team, you agree to receive SMS messages from Aivara
                Solutions.
              </p>
              <p>
                SMS messages may include booking updates, reservation notifications,
                service updates, payment notifications, account notifications, customer
                support messages, and other operational communications.
              </p>
              <p>
                Message frequency may vary. Message and data rates may apply. Reply STOP to
                unsubscribe at any time. Reply HELP for assistance.
              </p>
              <p>SMS consent is not required as a condition of purchase.</p>
              <p>
                Aivara Solutions does not sell, rent, share, or disclose mobile phone
                numbers, SMS opt-in data, or SMS consent information to third parties or
                affiliates for marketing or promotional purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Intellectual Property
              </h2>
              <p>
                Unless otherwise agreed in writing, Aivara Solutions retains ownership of
                its pre-existing materials, tools, and processes. Upon full payment,
                clients receive the rights to the final deliverables as described in the
                applicable agreement. Clients retain ownership of materials they provide.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Confidentiality</h2>
              <p>
                Each party agrees to keep the other party&rsquo;s non-public information
                confidential and to use it only as necessary to perform under or benefit
                from the Services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Aivara Solutions shall not be
                liable for any indirect, incidental, special, consequential, or punitive
                damages, or for lost profits, revenues, data, or goodwill. Our total
                liability for any claim arising out of or relating to the Services shall
                not exceed the amount paid by the client for the Services giving rise to
                the claim.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Aivara Solutions and its
                personnel from any claims, damages, liabilities, and expenses arising
                from your use of the Services, your content or materials, or your
                violation of these Terms or applicable law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Termination</h2>
              <p>
                Either party may terminate an engagement as set out in the applicable
                agreement. We may suspend or terminate Services for non-payment or breach
                of these Terms. Upon termination, you remain responsible for amounts owed
                for work performed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. Changes are effective when
                posted on this page, and your continued use of the Services constitutes
                acceptance of the updated Terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Texas, United States,
                without regard to its conflict of laws principles. Any disputes shall be
                subject to the exclusive jurisdiction of the state and federal courts
                located in Texas.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
              <p>
                If you have questions about these Terms, please contact us at{" "}
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
