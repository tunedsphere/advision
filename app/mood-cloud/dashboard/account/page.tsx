import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/mood/dashboard/section-placeholder";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Account | Mood dashboard",
  description: "Manage your Mood account profile and devices.",
  path: "/mood-cloud/dashboard/account",
});

export default function MoodAccountPage() {
  return (
    <SectionPlaceholder
      title="Account"
      description="Profile details, registered devices, and device token rotation will live here."
    />
  );
}
