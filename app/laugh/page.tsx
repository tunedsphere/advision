import type { Metadata } from "next";
import { LaughHeader } from "@/components/laugh/header";
import { LaughHero } from "@/components/laugh/hero";
import { LaughFeatures } from "@/components/laugh/features";
import { LaughLibrary } from "@/components/laugh/library";
import { LaughCTA } from "@/components/laugh/cta";
import { LaughFooter } from "@/components/laugh/footer";

export const metadata: Metadata = {
  title: "laugh - Video, Reimagined | Advision",
  description:
    "A cozy video experience that brings your content together. Smart organization, beautiful playback, and a warm interface that feels like home.",
};

export default function laughPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <LaughHeader />
      <LaughHero />
      <LaughFeatures />
      <LaughLibrary />
      <LaughCTA />
      <LaughFooter />
    </main>
  );
}
