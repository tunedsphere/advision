import { Button } from "@/components/ui/button";

export function SmileHero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm text-muted-foreground mb-4">Music App</p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 tracking-tight leading-[1.1]">
              Your Music,
              <br />
              <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                Your Way
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
              A personalized music experience with powerful tag management and 
              metadata editing. Clean, simple, and designed for you.
            </p>
            
            <div className="flex items-center gap-4 mb-6">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Download for Mac
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:bg-secondary">
                Windows
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Free download. macOS 12+ / Windows 10+
            </p>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-5 shadow-2xl">
              {/* Window controls */}
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              </div>

              {/* Now playing */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-400/30 to-pink-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-rose-400/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-foreground truncate">Midnight Dreams</div>
                  <div className="text-xs text-muted-foreground">Aurora Waves</div>
                </div>
                <button className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center">
                  <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>

              {/* Progress */}
              <div className="mb-5">
                <div className="h-1 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-2/5 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full" />
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-[10px] text-muted-foreground">1:24</span>
                  <span className="text-[10px] text-muted-foreground">4:12</span>
                </div>
              </div>

              {/* Track list */}
              <div className="border-t border-border pt-4">
                <div className="space-y-1">
                  {[
                    { title: "Starlight", artist: "Nova" },
                    { title: "Ocean Breeze", artist: "Coastal" },
                    { title: "Neon Lights", artist: "Synth" },
                  ].map((track, i) => (
                    <div key={track.title} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group">
                      <span className="text-xs text-muted-foreground w-4">{i + 1}</span>
                      <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center">
                        <svg className="w-3 h-3 text-muted-foreground group-hover:text-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-foreground truncate">{track.title}</div>
                        <div className="text-xs text-muted-foreground">{track.artist}</div>
                      </div>
                      <span className="text-xs text-muted-foreground">3:24</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
