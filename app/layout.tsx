import type { Metadata } from "next";
import { Geist } from "next/font/google";
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
      </body>
    </html>
  );
}