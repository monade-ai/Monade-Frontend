import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CASE_STUDIES } from "@/lib/case-studies";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((item) => item.slug === slug);

  if (!study) {
    return buildPageMetadata({
      title: "Case Study",
      description: "Case study not found.",
      path: `/open-claw/case-study/${slug}`,
      noIndex: true,
    });
  }

  const publishedDate = new Date(study.publishedAt);
  const publishedTime = Number.isNaN(publishedDate.getTime())
    ? undefined
    : publishedDate.toISOString();

  return buildPageMetadata({
    title: study.title,
    description: study.subtitle,
    path: `/open-claw/case-study/${study.slug}`,
    openGraphType: "article",
    publishedTime,
    tags: [study.industry, "Case Study", "Voice AI"],
    section: "Case Studies",
  });
}

export default function OpenClawCaseStudyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
