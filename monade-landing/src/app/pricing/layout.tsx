import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing",
  description:
    "Transparent per-second pricing for Monade voice workflows. No platform fees and no seat licenses.",
  path: "/pricing",
});

export default function PricingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
