import type { Metadata } from "next";
import { SmileDownloadPageContent } from "@/components/smile/download-page-content";

export const metadata: Metadata = {
  title: "Download Smile | Avison",
  description:
    "Download Smile for macOS. Install the Apple Silicon build and start listening in minutes.",
};

export default function SmileDownloadPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#e3dfd8] text-foreground">
      <SmileDownloadPageContent />
    </main>
  );
}
