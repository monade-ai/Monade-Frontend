import React from "react";
import Navbar from "../components/Navbar";
import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Monade AI Voice Agent: Tech Startup Platform for Conversational AI",
  description: "Monade is a live tech startup platform providing AI voice agents for automated customer service. Our conversational AI startup automates customer service, sales, and logistics, enhancing efficiency and reducing costs by 80%. Explore our AI virtual assistant solutions.",
  keywords: ["AI Voice Agent", "Tech Startup Platform", "AI Startup", "Conversational AI", "Automated Customer Service", "AI Virtual Assistant", "AI Call Center Solution", "Voice AI for Business", "Natural Language Processing", "Speech Recognition", "Customer Experience Automation", "24/7 Customer Support AI", "Multilingual AI Agent", "AI for Sales Automation", "AI for Logistics Management", "AI for Real Estate Operations", "Business Efficiency AI", "Cost Reduction with AI", "Intelligent Automation Solutions", "AI-powered Communication", "Voice Assistant Technology", "AI for Inbound Calls", "AI for Outbound Calls", "Automated Voice Assistant", "Digital Native Startup", "AI Platform"],
  authors: [{ name: "Monade.ai Tech Startup" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased font-sans`}
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
                "email": marketing@monade.ai,
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
        
        {/* Footer */}
        <footer className="bg-black border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-white font-bold text-xl">monade.ai</span>
                  <span className="px-2 py-1 bg-orange-600/20 border border-orange-500/30 rounded text-orange-400 text-xs font-medium">
                    Tech Startup
                  </span>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  Live AI voice agent platform serving enterprise clients. Bootstrapped tech startup founded in 2025, providing human-like conversational AI solutions across multiple industries.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>© 2025 Monade.ai</span>
                  <span>•</span>
                  <span>Live Tech Startup Platform</span>
                  <span>•</span>
                  <span>Founder-Led</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Platform</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
                  <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                  <li><a href="https://dashboard.monade.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Dashboard</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
                  <li><a href="mailto:marketing@monade.ai" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
