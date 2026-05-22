import "./globals.css";
import type { Metadata } from "next";
import { NewsletterPopup } from "@/components/ui/NewsletterPopup";

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
const logoUrl = `${siteUrl}/images/aivara-logo.png`;

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
    images: [
      {
        url: logoUrl,
        width: 1200,
        height: 1200,
        alt: "Aivara Solutions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aivara Solutions — Technology + Creativity for the Modern Business",
    description: "Aivara Solutions blends AI, web & marketing, logistics, and custom music to grow modern businesses.",
    images: [logoUrl],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/images/aivara-logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/images/aivara-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <NewsletterPopup />
      </body>
    </html>
  );
}
