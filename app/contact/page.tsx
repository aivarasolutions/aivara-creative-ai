import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/ui/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Aivara Solutions",
  description: "Get in touch with Aivara Solutions for a discovery call or project quote. We're here to help grow your business.",
};

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      
      <Section className="pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Let&apos;s Work Together
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with AI, web solutions, logistics optimization, or custom music? 
               Let&apos;s start with a discovery call.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-pink-600/20 via-teal-500/20 to-yellow-400/20 border border-white/10">
                      <Mail className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:Kevin@AivaraSolutions.com" className="text-gray-400 hover:text-white transition">
                        Kevin@AivaraSolutions.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-pink-600/20 via-teal-500/20 to-yellow-400/20 border border-white/10">
                      <Phone className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:310-400-0032" className="text-gray-400 hover:text-white transition">
                        310-400-0032
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-pink-600/20 via-teal-500/20 to-yellow-400/20 border border-white/10">
                      <MapPin className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-gray-400">
                        Serving clients nationwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-600/10 via-teal-500/10 to-yellow-400/10 rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Emergency support available for existing clients 24/7
                </p>
              </div>

              <div className="bg-black/60 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">What Happens Next?</h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-teal-400 font-semibold">1.</span>
                    We&apos;ll review your message within 24 hours
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-400 font-semibold">2.</span>
                    Schedule a discovery call to discuss your needs
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-400 font-semibold">3.</span>
                    Receive a custom proposal and timeline
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal-400 font-semibold">4.</span>
                    Start building your solution together
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}