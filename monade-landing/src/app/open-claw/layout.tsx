import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Open Claw",
  description:
    "Deploy Open Claw agents with Monade's business layer for telephony, campaigns, analytics, and guardrails.",
  path: "/open-claw",
});

export default function OpenClawLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
