import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, EB_Garamond } from "next/font/google";
import "./globals.css";
import {
  DEFAULT_SITE_DESCRIPTION,
  DEFAULT_SITE_TITLE,
  getMetadataBase,
  toAbsoluteUrl,
} from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: DEFAULT_SITE_TITLE,
    template: "%s | Monade",
  },
  description: DEFAULT_SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: DEFAULT_SITE_TITLE,
    description: DEFAULT_SITE_DESCRIPTION,
    siteName: "Monade",
    locale: "en_US",
    images: [
      {
        url: toAbsoluteUrl("/monade-new-logo.png"),
        alt: "Monade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_SITE_TITLE,
    description: DEFAULT_SITE_DESCRIPTION,
    images: [toAbsoluteUrl("/monade-new-logo.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#D94126",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${ebGaramond.variable} antialiased font-sans bg-white text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
