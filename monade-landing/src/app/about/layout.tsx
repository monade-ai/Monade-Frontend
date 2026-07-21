import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "Why we build voice AI in India, for India — and what we won't compromise to do it.",
  path: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
