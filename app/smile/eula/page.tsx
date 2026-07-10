import type { Metadata } from "next";
import { LegalDocument } from "@/components/smile/legal-document";
import { SmileEulaContent } from "@/lib/smile/legal/eula-content";
import { SMILE_LEGAL_UPDATED } from "@/lib/smile/site";

export const metadata: Metadata = {
  title: "End User License Agreement | Smile",
  description: "License terms for Smile on macOS. Jonathan Avison s.p.",
};

export default function SmileEulaPage() {
  return (
    <LegalDocument title="End User License Agreement" updated={SMILE_LEGAL_UPDATED}>
      <SmileEulaContent />
    </LegalDocument>
  );
}
