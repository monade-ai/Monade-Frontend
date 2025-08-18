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
<div style={{ display: "flex", alignItems: "center", gap: "1rem", position: "absolute", top: "20px", left: "250px", zIndex: 1000 }}>
  <Link 
    href="/" 
    style={{ 
      color: "#fff", 
      textDecoration: "none", 
      fontSize: "1.2rem", 
      fontWeight: "bold", 
      backgroundColor: "#000", 
      padding: "0.5rem 1rem", 
      borderRadius: "5px" 
    }}
  >
    Home
  </Link>
</div>
        {children}
      </body>
    </html>
  );
}
