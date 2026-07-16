"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FRAMES = [
  {
    src: "/hero.png",
    alt: "Smile Albums library with album grid and Winter Lights detail",
    width: 1444,
    height: 619,
  },
  {
    src: "/hero2.png",
    alt: "Smile Albums view with Northbound playing and the playback bar",
    width: 1449,
    height: 618,
  },
  {
    src: "/preview.png",
    alt: "Smile DemoLibrary with album grid and song list",
    width: 1477,
    height: 628,
  },
  {
    src: "/winter-light.png",
    alt: "Smile Winter Lights album detail with artwork and track list",
    width: 1442,
    height: 614,
  },
  {
    src: "/EQ2.png",
    alt: "Smile parametric equalizer with graph EQ and band controls",
    width: 1443,
    height: 611,
  },
] as const;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function activeFrameIndex(progress: number) {
  return Math.min(FRAMES.length - 1, Math.floor(progress * FRAMES.length));
}

export function HeroScreenshotShowcase() {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motionQuery.matches);
    updateMotion();
    motionQuery.addEventListener("change", updateMotion);

    const updateProgress = () => {
      const showcase = showcaseRef.current;
      if (!showcase) return;

      const viewport = window.innerHeight;
      const scrollY = window.scrollY;
      const showcaseDocTop = showcase.getBoundingClientRect().top + scrollY;
      const showcaseHeight = showcase.offsetHeight;

      // Step through frames as the screenshot approaches — tuned to switch earlier.
      const startY = showcaseDocTop - viewport * 0.72;
      const endY = showcaseDocTop + showcaseHeight * 0.35;
      const span = Math.max(endY - startY, 1);

      setProgress(clamp((scrollY - startY) / span, 0, 1));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      motionQuery.removeEventListener("change", updateMotion);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const activeIndex = reducedMotion ? 0 : activeFrameIndex(progress);

  return (
    <div ref={showcaseRef} className="w-full min-w-0 pb-4 sm:pb-6">
      <div className="border-border bg-background relative aspect-[1444/619] w-full max-w-full overflow-hidden rounded-xl border shadow-lg md:rounded-2xl md:shadow-2xl">
        {FRAMES.map((frame, index) => {
          const isActive = index === activeIndex;

          return (
            <Image
              key={frame.src}
              src={frame.src}
              alt={frame.alt}
              width={frame.width}
              height={frame.height}
              sizes="(max-width: 1152px) 100vw, 1152px"
              priority={index === 0}
              aria-hidden={!isActive}
              className={`absolute inset-0 h-full w-full object-contain object-top md:object-cover ${
                reducedMotion
                  ? ""
                  : "transition-opacity duration-500 ease-in-out"
              } ${isActive ? "opacity-100" : "opacity-0"}`}
            />
          );
        })}
      </div>

      <div className="mt-4 flex justify-center gap-2" aria-hidden>
        {FRAMES.map((frame, index) => {
          const isActive = index === activeIndex;

          return (
            <span
              key={frame.src}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ${
                isActive
                  ? "bg-foreground/70 w-6"
                  : "bg-muted-foreground/30 w-1.5"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
