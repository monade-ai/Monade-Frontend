import type { Metadata } from "next";

const FALLBACK_SITE_URL = "https://monade.ai";

export const SITE_NAME = "Monade";
export const DEFAULT_SITE_TITLE = "Monade | Building Voice-Enabled Businesses";
export const DEFAULT_SITE_DESCRIPTION =
  "Monade builds voice-enabled businesses with scalable, auditable AI voice workflows.";

function normalizeSiteUrl(value: string): string {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    FALLBACK_SITE_URL;

  try {
    const withProtocol = raw.startsWith("http") ? raw : `https://${raw}`;
    return normalizeSiteUrl(new URL(withProtocol).toString());
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}

export function toAbsoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
  noIndex?: boolean;
  openGraphType?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
  section?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  imagePath = "/monade-new-logo.png",
  noIndex = false,
  openGraphType = "website",
  publishedTime,
  tags,
  section,
}: BuildPageMetadataOptions): Metadata {
  const imageUrl = toAbsoluteUrl(imagePath);
  const pageUrl = toAbsoluteUrl(path);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  const openGraphBase = {
    url: pageUrl,
    title: fullTitle,
    description,
    siteName: SITE_NAME,
    images: [{ url: imageUrl, alt: SITE_NAME }],
  };

  const openGraph: Metadata["openGraph"] =
    openGraphType === "article"
      ? {
          ...openGraphBase,
          type: "article",
          publishedTime,
          tags,
          section,
        }
      : {
          ...openGraphBase,
          type: "website",
        };

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
