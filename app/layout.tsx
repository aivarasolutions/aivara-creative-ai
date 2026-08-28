import "./globals.css";
import type { Metadata } from "next";
import { NewsletterPopup } from "@/components/ui/NewsletterPopup";
import { AnalyticsScripts, GTMNoScript } from "@/components/Analytics";

const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.REPLIT_DEV_DOMAIN) {
    return `https://${process.env.REPLIT_DEV_DOMAIN}`;
  }
  return 'https://aivarasolutions.com';
};

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aivara Solutions — Technology + Creativity for the Modern Business",
    template: "%s | Aivara Solutions",
  },
  description: "Aivara Solutions blends AI, web & marketing, logistics, and custom music to grow modern businesses.",
  openGraph: {
    title: "Aivara Solutions — Technology + Creativity for the Modern Business",
    description: "Aivara Solutions blends AI, web & marketing, logistics, and custom music to grow modern businesses.",
    url: siteUrl,
    siteName: "Aivara Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/aivara-logo.png",
        width: 1024,
        height: 1024,
        alt: "Aivara Solutions gradient logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aivara Solutions — Technology + Creativity for the Modern Business",
    description: "Aivara Solutions blends AI, web & marketing, logistics, and custom music to grow modern businesses.",
    images: ["/images/aivara-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/images/aivara-logo.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aivara Solutions",
  url: siteUrl,
  logo: new URL("/images/aivara-logo.png", siteUrl).toString(),
  email: "kevin@aivarasolutions.com",
  telephone: "+1-310-400-0032",
  description:
    "Aivara Solutions builds websites, portals, automations, AI workflows, lead generation systems, and creative content for modern businesses.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-310-400-0032",
      contactType: "customer service",
      email: "kevin@aivarasolutions.com",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <AnalyticsScripts />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <GTMNoScript />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-black focus:shadow-lg"
        >
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
        <NewsletterPopup />
      </body>
    </html>
  );
}
