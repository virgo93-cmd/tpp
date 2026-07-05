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
        
        {/* Meta Pixel Base Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1324172276506497');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Adsterra Social Bar Script */}
        <Script 
          src="https://pl30224068.effectivecpmnetwork.com/da/55/42/da5542d0815bd26cf7567bdb766488b7.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}