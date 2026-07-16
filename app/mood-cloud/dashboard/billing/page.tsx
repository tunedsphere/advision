import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/mood/dashboard/section-placeholder";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Billing | Mood dashboard",
  description: "Manage your Mood subscription and storage tier.",
  path: "/mood-cloud/dashboard/billing",
});

export default function MoodBillingPage() {
  return (
    <SectionPlaceholder
      title="Billing"
      description="Stripe subscription management and tier changes ship next."
    />
  );
}
