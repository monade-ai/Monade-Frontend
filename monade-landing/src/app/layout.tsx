import React from "react";
import Navbar from "../components/Navbar";
import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono, Funnel_Display, Darker_Grotesque, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const funnel = Funnel_Display({
  variable: "--font-funnel",
  subsets: ["latin"],
  display: "swap",
});

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monade AI Voice Agent: Conversational AI for Automated Customer Service",
  description:
    "Transform your business with Monade AI Voice Agent. Our conversational AI automates customer service, sales, and logistics, enhancing efficiency and reducing costs. Explore our AI virtual assistant solutions.",
  keywords: [
    "AI Voice Agent",
    "Conversational AI",
    "Automated Customer Service",
    "AI Virtual Assistant",
    "AI Call Center Solution",
    "Voice AI for Business",
    "Natural Language Processing",
    "Speech Recognition",
    "Customer Experience Automation",
    "24/7 Customer Support AI",
    "Multilingual AI Agent",
    "AI for Sales Automation",
    "AI for Logistics Management",
    "AI for Real Estate Operations",
    "Business Efficiency AI",
    "Cost Reduction with AI",
    "Intelligent Automation Solutions",
    "AI-powered Communication",
    "Voice Assistant Technology",
    "AI for Inbound Calls",
    "AI for Outbound Calls",
    "Automated Voice Assistant",
  ],
  authors: [{ name: "Monade.ai" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f7f4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} ${funnel.variable} ${darkerGrotesque.variable} ${playfair.variable} antialiased font-sans`}
      >
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Monade AI Voice Agent",
              "url": "https://www.business.monade.ai",
              "logo": "https://www.business.monade.ai/monade-logo.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "marketing@monade.ai",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.linkedin.com/company/monade-ai",
                "https://twitter.com/monade_ai"
              ]
            }
          `}
        </script>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
