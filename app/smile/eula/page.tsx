import type { Metadata } from "next";
import { LegalDocument } from "@/components/smile/legal-document";
import { SmileEulaContent } from "@/lib/smile/legal/eula-content";
import { pageMetadata } from "@/lib/seo/metadata";
import { SMILE_EULA_SEARCH_COPY } from "@/lib/seo/search-copy";
import { SMILE_LEGAL_UPDATED } from "@/lib/smile/site";

export const metadata: Metadata = pageMetadata({
  title: SMILE_EULA_SEARCH_COPY.title,
  description: SMILE_EULA_SEARCH_COPY.description,
  path: "/smile/eula",
});

export default function SmileEulaPage() {
  return (
    <LegalDocument title="End User License Agreement" updated={SMILE_LEGAL_UPDATED}>
      <SmileEulaContent />
    </LegalDocument>
  );
}
