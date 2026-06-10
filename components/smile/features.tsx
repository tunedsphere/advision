"use client";

import { FeatureGrid } from "@/components/smile/feature-grid";
import { MotionReveal } from "@/components/smile/motion-reveal";
import { SmileWidgetShowcase } from "@/components/smile/widget-showcase";
import {
  PictureInPicture2,
  FolderOpen,
  ShieldCheck,
  LayoutGrid,
  ListMusic,
  Heart,
  SlidersHorizontal,
  Palette,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: PictureInPicture2,
    title: "Screen Widget",
    description:
      "Play, pause, and skip from a floating edge widget while you work.",
  },
  {
    icon: FolderOpen,
    title: "Local Library",
    description:
      "Index folders in place — no cloud uploads, no accounts required.",
  },
  {
    icon: ShieldCheck,
    title: "Fix Metadata",
    description:
      "Find duplicates, gaps, and bad tags — preview changes, then apply.",
  },
  {
    icon: LayoutGrid,
    title: "Album Browse",
    description:
      "Tap cover art to expand tracks inline without leaving the grid.",
  },
  {
    icon: ListMusic,
    title: "Smart Queue",
    description: "Play Next, queue tracks, and navigate your session timeline.",
  },
  {
    icon: Heart,
    title: "Favourites",
    description: "Heart tracks from album and genre lists for quick recall.",
  },
  {
    icon: SlidersHorizontal,
    title: "Parametric EQ",
    description: "Eight-band equalizer with graph view and factory presets.",
  },
  {
    icon: Palette,
    title: "Theme Presets",
    description: "Seven OKLCH palettes with light, dark, or system appearance.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your music stays on your Mac. No tracking, no telemetry.",
  },
];

export function SmileFeatures() {
  return (
    <section id="features" className="border-t border-border">
      <div className="mx-auto max-w-6xl border-x border-border px-6">
        <MotionReveal className="border-b border-border py-16">
          <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
            Features
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Everything you need
          </h2>
        </MotionReveal>

        <SmileWidgetShowcase />

        <FeatureGrid features={features} />
      </div>
    </section>
  );
}
