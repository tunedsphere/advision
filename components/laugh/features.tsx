import {
  Film,
  FolderOpen,
  Wifi,
  Play,
  Monitor,
  Lock,
  Subtitles,
  SlidersHorizontal,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Film,
    title: "Cinematic Mode",
    description: "Full-window, zero-chrome playback. Just you and your video.",
  },
  {
    icon: FolderOpen,
    title: "Smart Library",
    description: "Auto-organizes your local collection by folder. No scraping.",
  },
  {
    icon: Wifi,
    title: "Network Streaming",
    description: "Browse and play from SMB shares, WebDAV, and HLS streams.",
  },
  {
    icon: Play,
    title: "All Formats",
    description: "MKV, AVI, MP4, WEBM, and more via the extended pipeline.",
  },
  {
    icon: Monitor,
    title: "Hardware Decoding",
    description: "VideoToolbox acceleration for H.264, HEVC, and AV1 on M3+.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "No accounts, no telemetry, no cloud. Your files stay local.",
  },
  {
    icon: Subtitles,
    title: "Subtitle Support",
    description: "Full ASS/SSA rendering with delay control per file.",
  },
  {
    icon: SlidersHorizontal,
    title: "Per-File Memory",
    description: "Resume position, audio track, speed — remembered per file.",
  },
  {
    icon: Clock,
    title: "Continue Watching",
    description: "Pick up exactly where you left off across sessions.",
  },
];

export function LaughFeatures() {
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
                <Icon className="w-4 h-4 text-teal-400" strokeWidth={1.75} />
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
