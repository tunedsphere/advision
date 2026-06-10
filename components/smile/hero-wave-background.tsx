"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const BAR_WIDTH = 3;
const BAR_GAP = 2;
const BAR_UNIT = BAR_WIDTH + BAR_GAP;
const WAVE_MAX_WIDTH_PX = 1536;

const BAR_HEIGHTS = [
  28, 56, 38, 72, 44, 84, 32, 64, 26, 76, 48, 36, 66, 42, 54, 34, 78, 28, 58,
  40, 32, 68, 46, 36, 72, 26, 54, 44, 62, 34, 84, 42, 48, 66, 30, 46, 58, 38,
  76, 48,
];

function buildWaveStrip(minWidthPx: number, barUnit: number) {
  const count = Math.ceil(minWidthPx / barUnit);
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
            className={`w-[3px] xl:w-[4px] shrink-0 ${
              tall ? "smile-wave-bar-breathe-tall" : "smile-wave-bar-breathe"
            }`}
            style={{
              height: `${height}px`,
              ...barMotionStyle(index),
            }}
          >
            <span className="smile-wave-bar-gradient block h-full w-full rounded-full" />
          </span>
        );
      })}
    </>
  );
}

/** Each strip half must cover the wave width so the loop never exposes empty space. */
function stripWidthForWave(waveWidthPx: number, barUnit: number) {
  return Math.ceil(waveWidthPx / barUnit) * barUnit;
}

export function HeroWaveBackground() {
  const [waveWidth, setWaveWidth] = useState(WAVE_MAX_WIDTH_PX);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      const width = Math.round(container.getBoundingClientRect().width);
      if (width > 0) setWaveWidth(width);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const strip = useMemo(
    () => buildWaveStrip(stripWidthForWave(waveWidth, BAR_UNIT), BAR_UNIT),
    [waveWidth],
  );

  const stripWidthPx = strip.length * BAR_UNIT;

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-8 z-0 h-[min(680px,72vh)]"
      aria-hidden
    >
      <div
        ref={containerRef}
        className="relative mx-auto h-full w-full max-w-12xl overflow-hidden"
      >
        <div className="smile-wave-hero-mask smile-wave-hero-lane-breathe absolute inset-0 flex items-center">
          <div
            className="smile-wave-hero-track absolute left-0 flex h-full items-center opacity-95"
            style={
              {
                width: stripWidthPx * 2,
                "--wave-shift": `${stripWidthPx}px`,
              } as React.CSSProperties
            }
          >
            <div
              className="flex h-full shrink-0 items-center gap-[2px]"
              style={{ width: stripWidthPx }}
            >
              <WaveBars heights={strip} indexOffset={0} />
            </div>
            <div
              className="flex h-full shrink-0 items-center gap-[2px]"
              style={{ width: stripWidthPx }}
            >
              <WaveBars heights={strip} indexOffset={strip.length} />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-transparent from-0% via-transparent via-55% to-background to-100%" />
        <div className="smile-wave-hero-edge-fade-left" aria-hidden />
        <div className="smile-wave-hero-edge-fade-right" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, oklch(0.14 0.012 255 / 0.9) 0%, oklch(0.14 0.012 255 / 0.45) 48%, oklch(0.14 0.012 255 / 0) 72%)",
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}
