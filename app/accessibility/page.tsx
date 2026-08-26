import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Accessibility Statement for Aivara Solutions and our commitment to improving the accessibility of our website.",
  alternates: { canonical: "/accessibility" },
};

const LAST_UPDATED = "August 26, 2026";

export default function AccessibilityPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <Section className="pt-32">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
              Accessibility Statement
            </h1>
            <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
          </header>

          <div className="space-y-10 text-gray-300 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Our Commitment</h2>
              <p>
                Aivara Solutions is committed to improving the accessibility and usability
                of our website for people with disabilities. We aim to use the Web Content
                Accessibility Guidelines (WCAG) 2.2 Level AA as a technical reference for
                ongoing improvements, where reasonably practicable.
              </p>
              <p>
                Accessibility is an ongoing effort. Some content or third-party services
                may have limitations, and we do not claim that every part of the website
                is perfectly accessible at all times.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Feedback and Assistance
              </h2>
              <p>
                If you experience difficulty accessing any part of this website or need
                information in an alternative format, please contact us at{" "}
                <a
                  href="mailto:kevin@aivarasolutions.com"
                  className="text-teal-400 hover:text-white transition"
                >
                  kevin@aivarasolutions.com
                </a>
                . Please include the page or feature you were using and a description of
                the issue so we can investigate it.
              </p>
            </section>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}