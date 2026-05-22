import type { Metadata } from "next";
import { laughHeader } from "@/components/laugh/header";
import { laughHero } from "@/components/laugh/hero";
import { laughFeatures } from "@/components/laugh/features";
import { laughLibrary } from "@/components/laugh/library";
import { laughCTA } from "@/components/laugh/cta";
import { laughFooter } from "@/components/laugh/footer";

export const metadata: Metadata = {
  title: "laugh - Video, Reimagined | Advision",
  description:
    "A cozy video experience that brings your content together. Smart organization, beautiful playback, and a warm interface that feels like home.",
};

export default function laughPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <laughHeader />
      <laughHero />
      <laughFeatures />
      <laughLibrary />
      <laughCTA />
      <laughFooter />
    </main>
  );
}
