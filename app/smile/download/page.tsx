import type { Metadata } from "next";
import { SmileDownloadPageContent } from "@/components/smile/download-page-content";
import { JsonLd } from "@/components/seo/json-ld";
import { getSmileRelease } from "@/lib/releases";
import { smileSoftwareApplicationJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { SMILE_DOWNLOAD_SEARCH_COPY } from "@/lib/seo/search-copy";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = pageMetadata({
  title: SMILE_DOWNLOAD_SEARCH_COPY.title,
  description: SMILE_DOWNLOAD_SEARCH_COPY.description,
  path: "/smile/download",
});

export default function SmileDownloadPage() {
  const release = getSmileRelease();
  const downloadUrl = release.downloadUrl
    ? release.downloadUrl.startsWith("http")
      ? release.downloadUrl
      : `${SITE_URL}${release.downloadUrl}`
    : `${SITE_URL}/smile/download`;

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#e3dfd8] text-foreground">
      <JsonLd
        data={smileSoftwareApplicationJsonLd({
          downloadUrl,
          version: release.version,
        })}
      />
      <SmileDownloadPageContent />
    </main>
  );
}
