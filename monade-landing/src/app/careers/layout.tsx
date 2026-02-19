import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Careers",
  description:
    "Join Monade and build production-grade voice intelligence for businesses across high-impact industries.",
  path: "/careers",
});

export default function CareersLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
