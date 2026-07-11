import type { Metadata } from "next";
import { FaqPageContent } from "@/components/faq/faq-page-content";
import { JsonLd } from "@/components/seo/json-ld";
import { SmileFooter } from "@/components/smile/footer";
import { SmileHeaderShell } from "@/components/smile/header-shell";
import { SMILE_FAQ } from "@/lib/seo/faq-content";
import { faqPageJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { SMILE_FAQ_SEARCH_COPY } from "@/lib/seo/search-copy";

export const metadata: Metadata = pageMetadata({
  title: SMILE_FAQ_SEARCH_COPY.title,
  description: SMILE_FAQ_SEARCH_COPY.description,
  path: "/smile/faq",
});

export default function SmileFaqPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqPageJsonLd(SMILE_FAQ)} />
      <SmileHeaderShell />
      <FaqPageContent
        productName="Smile"
        productHref="/smile"
        supportHref="/smile/support"
        items={SMILE_FAQ}
      />
      <SmileFooter />
    </main>
  );
}
