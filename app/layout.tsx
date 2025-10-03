import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Aivara Solutions — Technology + Creativity for the Modern Business",
    template: "%s | Aivara Solutions",
  },
  description: "Aivara Solutions blends AI, web & marketing, logistics, and custom music to grow modern businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
