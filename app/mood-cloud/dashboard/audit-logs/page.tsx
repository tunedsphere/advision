import type { Metadata } from "next";
import { SectionPlaceholder } from "@/components/mood/dashboard/section-placeholder";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Audit logs | Mood dashboard",
  description: "Review Mood account activity and sync events.",
  path: "/mood-cloud/dashboard/audit-logs",
});

export default function MoodAuditLogsPage() {
  return (
    <SectionPlaceholder
      title="Audit logs"
      description="Device sign-ins, sync events, and billing changes will appear here. API wiring ships next."
    />
  );
}
