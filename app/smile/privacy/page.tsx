import type { Metadata } from "next";
import { LegalDocument } from "@/components/smile/legal-document";
import { SmilePrivacyPolicyContent } from "@/lib/smile/legal/privacy-content";
import { SMILE_LEGAL_UPDATED } from "@/lib/smile/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Smile",
  description:
    "How Smile and avison-soft.com handle your data. Local library on your Mac today; optional online features or analytics may be added later.",
};

export default function SmilePrivacyPage() {
  return (
    <LegalDocument title="Privacy Policy" updated={SMILE_LEGAL_UPDATED}>
      <SmilePrivacyPolicyContent />
    </LegalDocument>
  );
}
