import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Monade.ai - Voice AI Suite for Enterprises",
  description: "Voice Agents and Models for Real Time Communications. Transform your business with advanced AI-powered voice solutions.",
  keywords: ["Voice AI", "AI Agents", "Enterprise AI", "Voice Technology", "Real Time Communications"],
  authors: [{ name: "Monade.ai" }],
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
<header style={{ backgroundColor: "#000", padding: "1rem", textAlign: "center", display: "flex", justifyContent: "center", gap: "2rem" }}>
  <a 
    href="/" 
    style={{ 
      color: "#fff", 
      textDecoration: "none", 
      fontSize: "1.2rem", 
      fontWeight: "bold" 
    }}
  >
    Home
  </a>
  <a 
    href="/about" 
    style={{ 
      color: "#fff", 
      textDecoration: "none", 
      fontSize: "1.2rem", 
      fontWeight: "bold" 
    }}
  >
    About
  </a>
  <a 
    href="/team" 
    style={{ 
      color: "#fff", 
      textDecoration: "none", 
      fontSize: "1.2rem", 
      fontWeight: "bold" 
    }}
  >
    Team
  </a>
  <a 
    href="/pricing" 
    style={{ 
      color: "#fff", 
      textDecoration: "none", 
      fontSize: "1.2rem", 
      fontWeight: "bold" 
    }}
  >
    Pricing
  </a>
</header>
        {children}
      </body>
    </html>
  );
}
