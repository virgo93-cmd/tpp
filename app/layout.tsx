import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "True Prosperity Path System - Elite Wealth Infrastructure",
  description: "Discover the structured, step-by-step curriculum designed for modern financial architecture and automated long-term wealth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased dark`}>
      <body className="bg-black text-white selection:bg-yellow-500 selection:text-black">
        {children}
        
        {/* Adsterra Social Bar Script */}
        <Script 
          src="https://pl30224068.effectivecpmnetwork.com/da/55/42/da5542d0815bd26cf7567bdb766488b7.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}