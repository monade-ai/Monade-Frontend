import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Company",
  description:
    "Meet the company, principles, and founding team behind Monade's voice-enabled business platform.",
  path: "/company",
});

export default function CompanyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
