import type { Metadata } from "next";
import { LegalDocument } from "@/components/smile/legal-document";
import { SmilePrivacyPolicyContent } from "@/lib/smile/legal/privacy-content";
import { pageMetadata } from "@/lib/seo/metadata";
import { SMILE_PRIVACY_SEARCH_COPY } from "@/lib/seo/search-copy";
import { SMILE_LEGAL_UPDATED } from "@/lib/smile/site";

export const metadata: Metadata = pageMetadata({
  title: SMILE_PRIVACY_SEARCH_COPY.title,
  description: SMILE_PRIVACY_SEARCH_COPY.description,
  path: "/smile/privacy",
});

export default function SmilePrivacyPage() {
  return (
    <LegalDocument title="Privacy Policy" updated={SMILE_LEGAL_UPDATED}>
      <SmilePrivacyPolicyContent />
    </LegalDocument>
  );
}
