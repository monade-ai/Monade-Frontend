import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "Learn how Monade is building human-grade voice AI systems for modern customer operations.",
  path: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
