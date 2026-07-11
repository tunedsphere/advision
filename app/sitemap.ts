import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site";

const ROUTES: MetadataRoute.Sitemap = [
  { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
  { url: `${SITE_URL}/smile`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/smile/download`, changeFrequency: "weekly", priority: 0.85 },
  { url: `${SITE_URL}/smile/faq`, changeFrequency: "monthly", priority: 0.75 },
  { url: `${SITE_URL}/smile/support`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/smile/privacy`, changeFrequency: "yearly", priority: 0.4 },
  { url: `${SITE_URL}/smile/eula`, changeFrequency: "yearly", priority: 0.4 },
  { url: `${SITE_URL}/laugh`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/laugh/faq`, changeFrequency: "monthly", priority: 0.75 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES;
}
