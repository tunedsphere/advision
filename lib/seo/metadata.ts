import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/seo/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

/** Shared title, description, canonical, Open Graph, and Twitter metadata. */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
