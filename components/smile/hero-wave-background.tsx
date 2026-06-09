"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const BAR_WIDTH = 3;
const BAR_GAP = 2;
const BAR_UNIT = BAR_WIDTH + BAR_GAP;
const TRACK_DURATION_MS = 36_000;

const BAR_HEIGHTS = [
  28, 56, 38, 72, 44, 84, 32, 64, 26, 76, 48, 36, 66, 42, 54, 34, 78, 28, 58,
  40, 32, 68, 46, 36, 72, 26, 54, 44, 62, 34, 84, 42, 48, 66, 30, 46, 58, 38,
  76, 48,
];

function detectGecko() {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent.toLowerCase();
  if (/firefox|zen/.test(ua)) return true;
  return (
    typeof CSS !== "undefined" &&
    CSS.supports("-moz-appearance", "none") &&
    !/chrome|chromium|edg\//.test(ua)
  );
}

function buildWaveStrip(minWidthPx: number, barUnit: number) {
  const count = Math.ceil(minWidthPx / barUnit);
  return Array.from(
    { length: count },
    (_, i) => BAR_HEIGHTS[i % BAR_HEIGHTS.length],
  );
}

function barMotionStyle(index: number, isGecko: boolean) {
  const duration = isGecko
    ? 3.2 + (index % 5) * 0.4
    : 2.6 + (index % 6) * 0.35;
  const delay = (index * (isGecko ? 0.17 : 0.13)) % 5;

  return {
    animationDuration: `${duration}s`,
    animationDelay: `-${delay}s`,
  };
}

function WaveBars({
  heights,
  indexOffset = 0,
  isGecko = false,
}: {
  heights: number[];
  indexOffset?: number;
  isGecko?: boolean;
}) {
  return (
    <>
      {heights.map((height, i) => {
        const index = i + indexOffset;
        const tall = index % 7 === 0 || index % 11 === 3;

        return (
          <span
            key={`${indexOffset}-${i}`}
            className={`w-[3px] shrink-0 ${
              tall ? "smile-wave-bar-breathe-tall" : "smile-wave-bar-breathe"
            }`}
            style={{
              height: `${height}px`,
              ...barMotionStyle(index, isGecko),
            }}
          >
            <span className="smile-wave-bar-gradient block h-full w-full rounded-full" />
          </span>
        );
      })}
    </>
  );
}

/** Each strip half must cover the full viewport so the loop never exposes empty space. */
function stripWidthForViewport(viewportPx: number, barUnit: number) {
  return Math.ceil(viewportPx / barUnit) * barUnit;
}

export function HeroWaveBackground() {
  const [viewportWidth, setViewportWidth] = useState(3840);
  const [isGecko, setIsGecko] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsGecko(detectGecko());
  }, []);

  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const strip = useMemo(
    () =>
      buildWaveStrip(stripWidthForViewport(viewportWidth, BAR_UNIT), BAR_UNIT),
    [viewportWidth],
  );

  const stripWidthPx = strip.length * BAR_UNIT;

  useEffect(() => {
    if (!isGecko) return;

    const track = trackRef.current;
    if (!track) return;

    track.style.animation = "none";

    const start = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const elapsed = (now - start) % TRACK_DURATION_MS;
      const progress = elapsed / TRACK_DURATION_MS;
      const x = -stripWidthPx * (1 - progress);
      track.style.transform = `translate3d(${x}px, 0, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isGecko, stripWidthPx]);

  return (
    <div
      className={`pointer-events-none absolute left-1/2 top-8 z-0 h-[min(680px,72vh)] w-screen -translate-x-1/2 overflow-hidden${
        isGecko ? " smile-wave-hero--gecko" : ""
      }`}
      aria-hidden
    >
      <div
        className={`absolute inset-0 flex items-center${
          isGecko ? "" : " smile-wave-hero-lane-breathe"
        }`}
      >
        <div
          ref={trackRef}
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
            <WaveBars heights={strip} indexOffset={0} isGecko={isGecko} />
          </div>
          <div
            className="flex h-full shrink-0 items-center gap-[2px]"
            style={{ width: stripWidthPx }}
          >
            <WaveBars
              heights={strip}
              indexOffset={strip.length}
              isGecko={isGecko}
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-background from-0% via-transparent via-62% to-background to-100%" />
      <div className="absolute inset-0 bg-linear-to-r from-background from-0% via-transparent via-65% to-background to-100% opacity-55" />
    </div>
  );
}
