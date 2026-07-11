import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { LaughHeader } from "@/components/laugh/header";
import { LaughHero } from "@/components/laugh/hero";
import { LaughFeatures } from "@/components/laugh/features";
import { LaughLibrary } from "@/components/laugh/library";
import { LaughCTA } from "@/components/laugh/cta";
import { LaughFooter } from "@/components/laugh/footer";
import { laughSoftwareApplicationJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { LAUGH_PRODUCT_SEARCH_COPY } from "@/lib/seo/search-copy";

export const metadata: Metadata = pageMetadata({
  title: LAUGH_PRODUCT_SEARCH_COPY.title,
  description: LAUGH_PRODUCT_SEARCH_COPY.description,
  path: "/laugh",
});

export default function LaughPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd data={laughSoftwareApplicationJsonLd()} />
      <LaughHeader />
      <LaughHero />
      <LaughFeatures />
      <LaughLibrary />
      <LaughCTA />
      <LaughFooter />
    </main>
  );
}
