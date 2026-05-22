import { Button } from "@/components/ui/button";
import { Download, Maximize2, Film } from "lucide-react";

export function LaughHero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Video App
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 tracking-tight leading-[1.08]">
          Your Library,
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-teal-400 bg-clip-text text-transparent">
            Beautifully Organized
          </span>
        </h1>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md mx-auto">
          A cozy video experience that brings your content together. Smart
          organization, beautiful playback, and a warm interface.
        </p>

        <Button
          size="lg"
          className="rounded-full bg-foreground text-background hover:bg-foreground/90 gap-2"
        >
          <Download className="w-4 h-4" />
          Download App
        </Button>

        <p className="text-xs text-muted-foreground mt-3">
          Free · macOS 12+ · Windows 10+
        </p>

        {/* Mock UI */}
        <div className="relative mt-16 bg-card border border-border rounded-2xl overflow-hidden text-left shadow-2xl">
          {/* Window controls */}
          <div className="flex items-center gap-1.5 px-4 pt-4 pb-0">
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
          </div>

          {/* Video preview */}
          <div className="mx-3.5 mt-3.5 rounded-xl overflow-hidden relative aspect-video bg-gradient-to-br from-teal-950/60 to-yellow-950/20 flex items-center justify-center">
            {/* Subtle film grain overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, #2dd4bf22 0%, transparent 50%),
                                  radial-gradient(circle at 80% 20%, #facc1511 0%, transparent 40%)`,
              }}
            />

            {/* Film icon watermark */}
            <Film className="absolute top-4 right-4 w-4 h-4 text-teal-400/30" />

            {/* Play button */}
            <button className="w-14 h-14 rounded-full border border-teal-400/30 bg-teal-400/10 flex items-center justify-center text-teal-300 hover:bg-teal-400/20 transition-colors z-10">
              <svg
                className="w-6 h-6 ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            {/* Bottom controls overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="h-[3px] bg-white/10 rounded-full overflow-hidden mb-2">
                <div className="h-full w-3/5 bg-gradient-to-r from-yellow-400 to-teal-400 rounded-full" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/40">38:12</span>
                <span className="text-[10px] text-white/40">1:04:36</span>
              </div>
            </div>
          </div>

          {/* File row */}
          <div className="mx-3.5 mt-3 mb-3.5 flex items-center gap-3 px-3 py-2.5 rounded-xl bg-secondary/50 border border-border">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400/20 to-teal-400/20 flex items-center justify-center flex-shrink-0">
              <Film className="w-4 h-4 text-teal-400" strokeWidth={1.75} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground truncate">
                Documentary.mp4
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                1:04:36 · 4K · 2.3 GB
              </div>
            </div>
            <button className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Library row previews */}
          <div className="mx-3.5 mb-3.5 border-t border-border pt-3 flex flex-col gap-0.5">
            {[
              { name: "Short Film.mov", meta: "18:42 · 1080p" },
              { name: "Travel Vlog.mp4", meta: "32:10 · 4K" },
              { name: "Concert Live.mkv", meta: "1:52:00 · 1080p" },
            ].map((file, i) => (
              <div
                key={file.name}
                className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                <span className="text-xs text-muted-foreground w-3.5 text-center flex-shrink-0">
                  {i + 2}
                </span>
                <div className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                  <Film
                    className="w-3.5 h-3.5 text-muted-foreground"
                    strokeWidth={1.75}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-foreground truncate">
                    {file.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {file.meta}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
