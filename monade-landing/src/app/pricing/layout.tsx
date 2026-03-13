import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing",
  description:
    "Transparent rupee-per-minute pricing for Monade voice workflows. ₹8/min below 10,000 minutes and ₹6/min at higher volumes.",
  path: "/pricing",
});

export default function PricingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
