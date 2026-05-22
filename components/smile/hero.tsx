import { Button } from "@/components/ui/button";

export function SmileHero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto text-center  pb-20 ">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Music App
        </p>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 tracking-tight leading-[1.08]">
          Your Music,
          <br />
          <span className="bg-gradient-to-r from-rose-400 to-yellow-400 bg-clip-text text-transparent">
            Your Way
          </span>
        </h1>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md mx-auto">
          A personalized music experience with powerful tag management and
          metadata editing. Clean, simple, designed for you.
        </p>

        <Button
          size="lg"
          className="rounded-full bg-foreground text-background hover:bg-foreground/90 gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download App
        </Button>

        <p className="text-xs text-muted-foreground mt-3">
          Free · macOS 12+ · Windows 10+
        </p>
      </div>
      {/* Mock UI */}
      <section id="features" className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 border-x border-border">
          <div className="relative mt-16 bg-card border border-border rounded-2xl overflow-hidden text-left shadow-2xl">
            {/* Window controls */}
            <div className="flex items-center gap-1.5 px-4 pt-4 pb-0">
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
            </div>

            {/* Now playing */}
            <div className="mx-3.5 mt-3.5 flex items-center gap-3 p-3.5 rounded-xl bg-secondary/50 border border-border">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-400/20 to-yellow-400/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-rose-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-foreground truncate">
                  Midnight Dreams
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  Aurora Waves
                </div>
              </div>
              <button className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              </button>
            </div>

            {/* Progress */}
            <div className="px-3.5 pt-3">
              <div className="h-[3px] bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-[38%] bg-gradient-to-r from-rose-400 to-yellow-400 rounded-full" />
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-[10px] text-muted-foreground">1:24</span>
                <span className="text-[10px] text-muted-foreground">4:12</span>
              </div>
            </div>

            {/* Track list */}
            <div className="mx-3.5 mb-3.5 mt-2 border-t border-border pt-2.5 flex flex-col gap-0.5">
              {[
                {
                  title: "Midnight Dreams",
                  artist: "Aurora Waves",
                  dur: "4:12",
                  active: true,
                },
                { title: "Starlight", artist: "Nova", dur: "3:24" },
                { title: "Ocean Breeze", artist: "Coastal", dur: "3:51" },
                { title: "Neon Lights", artist: "Synth", dur: "5:03" },
              ].map((track, i) => (
                <div
                  key={track.title}
                  className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-secondary/50 transition-colors cursor-pointer group"
                >
                  <span className="text-xs text-muted-foreground w-3.5 text-center flex-shrink-0">
                    {track.active ? (
                      <svg
                        className="w-3 h-3 text-rose-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-muted-foreground"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-sm truncate ${track.active ? "bg-gradient-to-r from-rose-400 to-yellow-400 bg-clip-text text-transparent font-medium" : "text-foreground"}`}
                    >
                      {track.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {track.artist}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground flex-shrink-0">
                    {track.dur}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
