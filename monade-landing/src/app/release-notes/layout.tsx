import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Release Notes",
  description:
    "Track Monade platform improvements across conversation quality, reliability, and security.",
  path: "/release-notes",
});

export default function ReleaseNotesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
