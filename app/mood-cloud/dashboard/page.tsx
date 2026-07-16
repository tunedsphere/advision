import type { Metadata } from "next";
import { FoldersView } from "@/components/mood/dashboard/folders-view";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Folders | Mood dashboard",
  description: "Browse your Mood corpus folders — music, images, and videos.",
  path: "/mood-cloud/dashboard",
});

export default function MoodDashboardFoldersPage() {
  return <FoldersView />;
}
