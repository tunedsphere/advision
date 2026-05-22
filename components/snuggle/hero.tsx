import { Button } from "@/components/ui/button";

export function laughHero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm text-muted-foreground mb-4">Video App</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 tracking-tight leading-[1.1]">
              Video,
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Reimagined
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
              A cozy video experience that brings your content together. Smart
              organization, beautiful playback, and a warm interface.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                Download for Mac
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary"
              >
                Windows
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              Free download. macOS 12+ / Windows 10+
            </p>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
              {/* Video preview */}
              <div className="aspect-video bg-gradient-to-br from-violet-900/30 to-purple-900/30 flex items-center justify-center relative">
                <button className="w-16 h-16 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-foreground/20 transition-colors">
                  <svg
                    className="w-7 h-7 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="h-1 bg-foreground/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/5 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="p-4 flex items-center justify-between border-t border-border">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-foreground">
                    Documentary.mp4
                  </span>
                  <span className="text-xs text-muted-foreground">1:24:36</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
