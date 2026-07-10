import type { Metadata } from "next";
import { SmileHeaderShell } from "@/components/smile/header-shell";
import { SmileHero } from "@/components/smile/hero";
import { SmileFeatures } from "@/components/smile/features";
import { SmilePersonalization } from "@/components/smile/personalization";
import { SmileCTA } from "@/components/smile/cta";
import { SmileFooter } from "@/components/smile/footer";

export const metadata: Metadata = {
  title: "Smile - Your Music, Your Way | Avison",
  description:
    "A personalized music experience with powerful tag management and metadata editing. Clean, simple, and designed for you.",
};

export default function SmilePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SmileHeaderShell />
      <SmileHero />
      <SmileFeatures />
      <SmilePersonalization />
      <SmileCTA />
      <SmileFooter />
    </main>
  );
}
