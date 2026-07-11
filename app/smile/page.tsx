import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { SmileHeaderShell } from "@/components/smile/header-shell";
import { SmileHero } from "@/components/smile/hero";
import { SmileFeatures } from "@/components/smile/features";
import { SmilePersonalization } from "@/components/smile/personalization";
import { SmileCTA } from "@/components/smile/cta";
import { SmileFooter } from "@/components/smile/footer";
import { getSmileRelease } from "@/lib/releases";
import { smileSoftwareApplicationJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { SMILE_PRODUCT_SEARCH_COPY } from "@/lib/seo/search-copy";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = pageMetadata({
  title: SMILE_PRODUCT_SEARCH_COPY.title,
  description: SMILE_PRODUCT_SEARCH_COPY.description,
  path: "/smile",
});

export default function SmilePage() {
  const release = getSmileRelease();
  const downloadUrl = release.downloadUrl
    ? release.downloadUrl.startsWith("http")
      ? release.downloadUrl
      : `${SITE_URL}${release.downloadUrl}`
    : `${SITE_URL}/smile/download`;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd
        data={smileSoftwareApplicationJsonLd({
          downloadUrl,
          version: release.version,
        })}
      />
      <SmileHeaderShell />
      <SmileHero />
      <SmileFeatures />
      <SmilePersonalization />
      <SmileCTA />
      <SmileFooter />
    </main>
  );
}
