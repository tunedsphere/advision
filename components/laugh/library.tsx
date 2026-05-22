export function LaughLibrary() {
  const videos = [
    { title: "Documentary", duration: "1:45:23" },
    { title: "Series S01E01", duration: "45:12" },
    { title: "Movie Night", duration: "2:12:05" },
    { title: "Series S01E02", duration: "52:30" },
  ];

  return (
    <section id="library" className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 py-24">
          <div className="order-2 lg:order-1">
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {videos.map((video) => (
                  <div key={video.title} className="group cursor-pointer">
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-violet-400/20 to-purple-400/20 mb-2 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/50">
                        <svg
                          className="w-8 h-8 text-foreground"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-background/80 text-[10px] text-foreground">
                        {video.duration}
                      </div>
                    </div>
                    <div className="text-sm text-foreground truncate">
                      {video.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm text-muted-foreground mb-4">Library</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-tight">
              Beautifully organized
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              laugh automatically scans and organizes your video collection.
            </p>
            <ul className="space-y-3">
              {[
                "Automatic metadata fetching",
                "Custom collections",
                "Smart filters and search",
                "Continue watching",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
