import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import site from "@/content/site.json";

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  metadataBase: new URL(site.meta.url),
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    url: site.meta.url,
    siteName: "Monade AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.title,
    description: site.meta.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
