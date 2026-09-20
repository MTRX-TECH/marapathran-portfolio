import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/layout/LenisProvider";
import CustomCursor from "@/components/ui/CustomCursor";

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
  description: "Systems architect, software engineer, and Founder & CEO of MTRX TECH. Building real-world software platforms, campus operating systems, and developer tools.",
  keywords: "Marapathran V, MTRX TECH, systems builder, computer science, founder, software engineering, CampusOS, TalentTrack, Bus Tracker, CanteenPay, ADRI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} antialiased dark`}>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white selection:bg-[var(--color-brand-gold)] selection:text-black`}>
        <CustomCursor />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
