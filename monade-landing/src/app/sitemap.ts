import type { MetadataRoute } from "next";
import { BUSINESS_KITS } from "@/lib/business-kits";
import { CASE_STUDIES } from "@/lib/case-studies";
import { getAllPosts } from "@/lib/markdown";
import { toAbsoluteUrl } from "@/lib/seo";

const STATIC_ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" },
  { path: "/pricing", priority: 0.9, changeFrequency: "weekly" },
  { path: "/open-claw", priority: 0.9, changeFrequency: "weekly" },
  { path: "/case-studies", priority: 0.8, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/company", priority: 0.7, changeFrequency: "monthly" },
  { path: "/trust", priority: 0.7, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.7, changeFrequency: "weekly" },
  { path: "/team", priority: 0.6, changeFrequency: "monthly" },
  { path: "/release-notes", priority: 0.6, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: toAbsoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPosts("blog").map((post) => ({
    url: toAbsoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = getAllPosts("case-studies").map((study) => ({
    url: toAbsoluteUrl(`/case-studies/${study.slug}`),
    lastModified: new Date(study.date),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const openClawKitEntries: MetadataRoute.Sitemap = BUSINESS_KITS.map((kit) => ({
    url: toAbsoluteUrl(`/open-claw/kit/${kit.slug}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const openClawCaseStudyEntries: MetadataRoute.Sitemap = CASE_STUDIES.map((study) => ({
    url: toAbsoluteUrl(`/open-claw/case-study/${study.slug}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...blogEntries,
    ...caseStudyEntries,
    ...openClawKitEntries,
    ...openClawCaseStudyEntries,
  ];
}
