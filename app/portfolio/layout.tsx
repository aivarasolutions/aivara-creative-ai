import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our work across AI & Education, Web & Marketing, Logistics, and Aivara Music.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}