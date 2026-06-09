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
    description:
      "Play Next, queue tracks, and navigate your session timeline.",
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
      <div className="max-w-6xl mx-auto px-6 border-x border-border">
        <div className="py-16 border-b border-border">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Everything you need
          </h2>
        </div>

        <SmileWidgetShowcase />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="p-8 border-r border-b border-border">
              <div className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center mb-5">
                <Icon className="w-4 h-4 text-rose-400" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-medium text-foreground mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
