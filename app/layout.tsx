import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Aivara Solutions — Technology + Creativity for the Modern Business",
    template: "%s | Aivara Solutions",
  },
  description: "Aivara Solutions blends AI, web & marketing, logistics, and custom music to grow modern businesses.",
  openGraph: {
    title: "Aivara Solutions — Technology + Creativity for the Modern Business",
    description: "Aivara Solutions blends AI, web & marketing, logistics, and custom music to grow modern businesses.",
    siteName: "Aivara Solutions",
    images: [
      {
        url: "/images/aivara-logo.png",
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
    images: ["/images/aivara-logo.png"],
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
      <body>{children}</body>
    </html>
  );
}
