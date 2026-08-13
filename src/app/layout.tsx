import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/layout/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MARAPATHRAN V — Founder & CEO of MTRX TECH",
  description: "MARAPATHRAN V is a technology entrepreneur, Computer Science student and Founder & CEO of MTRX TECH, building products and exploring the future of technology.",
  keywords: "Marapathran V, MTRX TECH, technology entrepreneur, computer science, founder, software, technology products, CampusOS, Talent Tracker, Bus Tracker, ADRI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} antialiased dark`}>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white selection:bg-[var(--color-brand-gold)] selection:text-black`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
