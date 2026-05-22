"use client";

import Link from "next/link";

export function Products() {
  return (
    <section className="relative">
      <div className="border-t border-border" />

      <div className="relative h-[600px] md:h-[900px] overflow-hidden group/section">
        {/* Diagonal divider BACK — behind images, visible in title area */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <line
              x1="40"
              y1="0"
              x2="60"
              y2="100"
              stroke="var(--background)"
              strokeWidth="12"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="40"
              y1="0"
              x2="60"
              y2="100"
              stroke="var(--border)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Left side - Smile */}
        <Link
          href="/smile"
          className="absolute inset-0 group/left cursor-pointer z-20"
          style={{ clipPath: "polygon(0 0, 60% 0, 40% 100%, 0 100%)" }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-rose-400/10 via-background to-transparent opacity-0 group-hover/left:opacity-100 transition-opacity duration-500" />
          <div
            className="absolute overflow-hidden rounded-tl-2xl"
            style={{ top: "220px", left: "40px", right: 0, bottom: 0 }}
          >
            <img
              src="/music-app.png"
              alt="Smile Music Player"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top right",
                display: "block",
              }}
            />
            <div
              className="absolute inset-0 transition-all duration-500"
              style={{ background: "hsl(var(--background) / 0.5)" }}
            />
            <div className="absolute inset-0 bg-background/30 group-hover/left:bg-background/0 group-hover/section:bg-background/40 group-hover/left:!bg-background/10 transition-all duration-500" />
          </div>
        </Link>

        {/* Right side - Laugh */}
        <Link
          href="/laugh"
          className="absolute inset-0 group/right cursor-pointer z-20"
          style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)" }}
        >
          <div className="absolute inset-0 bg-linear-to-bl from-teal-300/10 via-background to-transparent opacity-0 group-hover/right:opacity-100 transition-opacity duration-500" />
          <div
            className="absolute overflow-hidden rounded-tr-2xl"
            style={{ top: "220px", right: "40px", left: 0, bottom: 0 }}
          >
            <img
              src="/laugh-app.png"
              alt="Laugh Video Player"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "bottom left",
                display: "block",
              }}
            />
            <div
              className="absolute inset-0 transition-all duration-500"
              style={{ background: "hsl(var(--background) / 0.5)" }}
            />
            <div className="absolute inset-0 bg-background/30 group-hover/right:bg-background/0 group-hover/section:bg-background/40 group-hover/right:!bg-background/10 transition-all duration-500" />
          </div>
        </Link>

        {/* Titles — z-30, above images and dividers */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div className="relative h-full max-w-6xl mx-auto px-6 md:px-12">
            <div className="absolute top-10 md:top-14 left-6 md:left-12 flex flex-col items-start text-left">
              <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Music
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold">
                <span className="bg-linear-to-r from-rose-100 to-yellow-50 bg-clip-text text-transparent">
                  Smile
                </span>
              </h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-[240px]">
                Your music, your way. Full personalization with tag management.
              </p>
            </div>

            <div className="absolute top-10 md:top-14 right-6 md:right-12 flex flex-col items-end text-right">
              <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                Video
              </span>
              <h2 className="text-3xl md:text-5xl font-semibold">
                <span className="bg-linear-to-r from-yellow-50 to-teal-100 bg-clip-text text-transparent">
                  Laugh
                </span>
              </h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-[200px]">
                Your library, beautifully organized. Smart video management.
              </p>
            </div>
          </div>
        </div>

        {/* Diagonal divider FRONT — above images, clips the panels */}
        <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <line
              x1="60"
              y1="0"
              x2="40"
              y2="100"
              stroke="var(--background)"
              strokeWidth="12"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="60"
              y1="0"
              x2="40"
              y2="100"
              stroke="var(--border)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>

      <div className="border-t border-border" />
    </section>
  );
}
