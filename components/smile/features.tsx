import {
  Pencil,
  Tag,
  FileAudio,
  Music2,
  Sun,
  Lock,
  ListMusic,
  SlidersHorizontal,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Pencil,
    title: "Full Personalization",
    description: "Customize every aspect of your listening experience.",
  },
  {
    icon: Tag,
    title: "Tag Manager",
    description: "Organize your library with powerful, flexible tags.",
  },
  {
    icon: FileAudio,
    title: "Metadata Editor",
    description: "Full control over your music files and artwork.",
  },
  {
    icon: Music2,
    title: "Lossless Audio",
    description: "Support for FLAC, ALAC, and high-resolution formats.",
  },
  {
    icon: Sun,
    title: "Smart Themes",
    description: "Choose from built-in themes or create your own.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your music stays local. No tracking, no cloud uploads.",
  },
  {
    icon: ListMusic,
    title: "Smart Queue",
    description: "Play Next, queue tracks, and navigate your session timeline.",
  },
  {
    icon: SlidersHorizontal,
    title: "Parametric EQ",
    description: "Eight-band equalizer with graph view and factory presets.",
  },
  {
    icon: ShieldCheck,
    title: "Library Audit",
    description:
      "Auto-detect duplicates, fix metadata, and clean your library.",
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
