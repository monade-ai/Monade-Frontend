import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Trust & Security",
  description:
    "Understand Monade's security model, privacy architecture, and compliance approach for enterprise voice workflows.",
  path: "/trust",
});

export default function TrustLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
