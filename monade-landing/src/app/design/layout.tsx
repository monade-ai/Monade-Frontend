import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Design System",
  description:
    "Explore Monade's visual identity, design principles, and brand system foundations.",
  path: "/design",
});

export default function DesignLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
