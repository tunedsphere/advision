import type { Metadata } from "next";
import { FaqPageContent } from "@/components/faq/faq-page-content";
import { JsonLd } from "@/components/seo/json-ld";
import { LaughFooter } from "@/components/laugh/footer";
import { LaughHeader } from "@/components/laugh/header";
import { LAUGH_FAQ } from "@/lib/seo/faq-content";
import { faqPageJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { LAUGH_FAQ_SEARCH_COPY } from "@/lib/seo/search-copy";
import { SMILE_SUPPORT_EMAIL } from "@/lib/smile/site";

export const metadata: Metadata = pageMetadata({
  title: LAUGH_FAQ_SEARCH_COPY.title,
  description: LAUGH_FAQ_SEARCH_COPY.description,
  path: "/laugh/faq",
});

export default function LaughFaqPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd data={faqPageJsonLd(LAUGH_FAQ)} />
      <LaughHeader />
      <FaqPageContent
        productName="Laugh"
        productHref="/laugh"
        supportHref={`mailto:${SMILE_SUPPORT_EMAIL}`}
        items={LAUGH_FAQ}
      />
      <LaughFooter />
    </main>
  );
}
