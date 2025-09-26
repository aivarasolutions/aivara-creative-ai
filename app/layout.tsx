import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aivara Solutions — Creative AI Studio",
  description: "Creative AI for brands & creators: jingles, theme songs, reels, custom GPTs, and AI marketing.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
