import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getKitBySlug } from "@/lib/business-kits";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const kit = getKitBySlug(slug);

  if (!kit) {
    return buildPageMetadata({
      title: "Business Kit",
      description: "Business kit not found.",
      path: `/open-claw/kit/${slug}`,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: kit.name,
    description: kit.tagline,
    path: `/open-claw/kit/${kit.slug}`,
    tags: [kit.category, kit.vertical, "Business Kit", "Voice AI"],
    section: "Business Kits",
  });
}

export default function OpenClawKitLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
