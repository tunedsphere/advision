"use client";

import { useEffect, useMemo, useState } from "react";

const BAR_WIDTH = 3;
const BAR_GAP = 2;
const BAR_UNIT = BAR_WIDTH + BAR_GAP;

const BAR_HEIGHTS = [
  28, 56, 38, 72, 44, 84, 32, 64, 26, 76, 48, 36, 66, 42, 54, 34, 78, 28, 58,
  40, 32, 68, 46, 36, 72, 26, 54, 44, 62, 34, 84, 42, 48, 66, 30, 46, 58, 38,
  76, 48,
];

function buildWaveStrip(minWidthPx: number) {
  const count = Math.ceil(minWidthPx / BAR_UNIT);
  return Array.from(
    { length: count },
    (_, i) => BAR_HEIGHTS[i % BAR_HEIGHTS.length],
  );
}

function barMotionStyle(index: number) {
  const duration = 2.6 + (index % 6) * 0.35;
  const delay = (index * 0.13) % 5;

  return {
    animationDuration: `${duration}s`,
    animationDelay: `-${delay}s`,
  };
}

function WaveBars({
  heights,
  indexOffset = 0,
}: {
  heights: number[];
  indexOffset?: number;
}) {
  return (
    <>
      {heights.map((height, i) => {
        const index = i + indexOffset;
        const tall = index % 7 === 0 || index % 11 === 3;

        return (
          <span
            key={`${indexOffset}-${i}`}
            className={`w-[3px] shrink-0 rounded-full bg-linear-to-b from-rose-400/50 to-yellow-400/35 ${
              tall ? "smile-wave-bar-breathe-tall" : "smile-wave-bar-breathe"
            }`}
            style={{
              height: `${height}px`,
              ...barMotionStyle(index),
            }}
          />
        );
      })}
    </>
  );
}

/** Each strip half must cover the full viewport so the loop never exposes empty space. */
function stripWidthForViewport(viewportPx: number) {
  return Math.ceil(viewportPx / BAR_UNIT) * BAR_UNIT;
}

export function HeroWaveBackground() {
  const [viewportWidth, setViewportWidth] = useState(3840);

  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const strip = useMemo(
    () => buildWaveStrip(stripWidthForViewport(viewportWidth)),
    [viewportWidth],
  );

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-8 z-0 h-[min(680px,72vh)] w-screen -translate-x-1/2 overflow-hidden"
      aria-hidden
    >
      <div
        className="smile-wave-hero-lane-breathe absolute inset-0 flex items-center [-webkit-mask-image:radial-gradient(ellipse_min(90%,40rem)_min(54%,24rem)_at_50%_38%,transparent_0%,transparent_30%,#000_62%,#000_100%)] [mask-image:radial-gradient(ellipse_min(90%,40rem)_min(54%,24rem)_at_50%_38%,transparent_0%,transparent_30%,#000_62%,#000_100%)]"
      >
        {/* No gap between the two halves — gap breaks the -50% loop seam. */}
        <div className="smile-wave-hero-track absolute left-0 flex h-full w-max items-center opacity-95">
          <div className="flex h-full shrink-0 items-center gap-[2px]">
            <WaveBars heights={strip} indexOffset={0} />
          </div>
          <div className="flex h-full shrink-0 items-center gap-[2px]">
            <WaveBars heights={strip} indexOffset={strip.length} />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-background from-0% via-transparent via-62% to-background to-100%" />
      <div className="absolute inset-0 bg-linear-to-r from-background from-0% via-transparent via-65% to-background to-100% opacity-55" />
    </div>
  );
}
