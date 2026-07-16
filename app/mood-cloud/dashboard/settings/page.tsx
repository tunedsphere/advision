import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/mood/dashboard/section-placeholder";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Settings | Mood dashboard",
  description: "Configure Mood dashboard preferences.",
  path: "/mood-cloud/dashboard/settings",
});

export default function MoodSettingsPage() {
  return (
    <SectionPlaceholder
      title="Settings"
      description="Notification preferences and dashboard options ship next."
    />
  );
}
