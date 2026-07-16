import type { Metadata } from "next";
import { MoodCloudPageContent } from "@/components/mood/cloud-page-content";
import { MoodCloudHeaderShell } from "@/components/mood/cloud-header-shell";
import { SmileFooter } from "@/components/smile/footer";
import { pageMetadata } from "@/lib/seo/metadata";
import { MOOD_CLOUD_SEARCH_COPY } from "@/lib/seo/search-copy";
import { MOOD_PRODUCT_PATH } from "@/lib/mood/cloud";

export const metadata: Metadata = pageMetadata({
  title: MOOD_CLOUD_SEARCH_COPY.title,
  description: MOOD_CLOUD_SEARCH_COPY.description,
  path: MOOD_PRODUCT_PATH,
});

export default function MoodCloudPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <MoodCloudHeaderShell />

      <div className="border-border mx-auto max-w-4xl border-x px-6 pt-24 pb-16 md:pt-28 md:pb-20">
        <MoodCloudPageContent />
      </div>

      <SmileFooter />
    </main>
  );
}
