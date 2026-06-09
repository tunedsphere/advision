"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  MousePointer2,
  Pause,
  Repeat,
  Settings,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";

const BAR_HEIGHTS = [
  10, 20, 14, 26, 18, 30, 16, 24, 12, 28, 20, 14, 26, 18, 22, 16, 30, 12, 24,
  18, 14, 26, 20, 16, 28, 12, 22, 18, 24, 14, 30, 16, 20, 26, 12, 18, 22, 16,
  28, 14, 24, 20, 18, 26, 16, 30, 12, 22,
];

const COLLAPSED_WIDTH = 96;
const COLLAPSED_HEIGHT = 10;
const EXPANDED_WIDTH = 410;
const EXPANDED_HEIGHT = 42;
const BLINK_CYCLES = 3;
const BLINK_FADE_MS = 180;

type AnimationPhase = "idle" | "blink" | "cursor" | "expand" | "done";

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function springEase(t: number) {
  const c4 = (2 * Math.PI) / 3;
  return t === 0 ? 0 : t === 1 ? 1 : 1 + 2 ** (-10 * t) * Math.sin((t * 10 - 0.75) * c4);
}

function buildWaveStrip(minWidthPx = 1280) {
  const count = Math.ceil(minWidthPx / 5);
  return Array.from(
    { length: count },
    (_, i) => BAR_HEIGHTS[i % BAR_HEIGHTS.length],
  );
}

function WaveBars({ heights }: { heights: number[] }) {
  return (
    <>
      {heights.map((height, i) => (
        <span
          key={i}
          className="w-[3px] shrink-0 rounded-full bg-linear-to-b from-rose-400/75 to-yellow-400/55"
          style={{ height: `${height}px` }}
        />
      ))}
    </>
  );
}

function ContinuousWaveform({ opacity }: { opacity: number }) {
  const strip = buildWaveStrip();

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden transition-opacity duration-500 ease-out"
      style={{ opacity }}
      aria-hidden
    >
      <div className="smile-wave-track absolute left-0 flex h-full w-max items-center">
        <div className="flex h-full shrink-0 items-center gap-[2px]">
          <WaveBars heights={strip} />
        </div>
        <div className="flex h-full shrink-0 items-center gap-[2px]">
          <WaveBars heights={strip} />
        </div>
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-background from-[2%] via-transparent via-50% to-background to-[98%]" />
    </div>
  );
}

const flowWidgetChrome =
  "border border-white/12 bg-secondary/85 shadow-[0_-4px_24px_rgba(0,0,0,0.18)] backdrop-blur-xl";

function FlowTransportIcon({
  children,
  label,
  muted = false,
}: {
  children: ReactNode;
  label: string;
  muted?: boolean;
}) {
  return (
    <button
      type="button"
      tabIndex={-1}
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${
        muted
          ? "text-muted-foreground/80"
          : "text-foreground"
      }`}
      aria-label={label}
    >
      {children}
    </button>
  );
}

function ExpandedFlowWidget() {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-[42px] items-center rounded-full ${flowWidgetChrome} pl-1.5 pr-1`}
      >
        <div className="ml-1 mr-1 flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-[4px] ring-1 ring-white/10">
          <svg
            className="h-3.5 w-3.5 text-rose-400/90"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        </div>

        <div className="mx-1 w-[108px] min-w-0 text-left">
          <p className="truncate bg-linear-to-r from-rose-400 to-yellow-400 bg-clip-text text-[11px] font-semibold leading-tight text-transparent">
            Midnight Dreams
          </p>
          <p className="truncate text-[10px] leading-tight text-muted-foreground">
            Aurora Waves
          </p>
        </div>

        <div className="flex items-center px-1">
          <FlowTransportIcon label="Shuffle" muted>
            <Shuffle className="h-[11px] w-[11px]" strokeWidth={2} />
          </FlowTransportIcon>

          <div className="flex items-center gap-0.5">
            <FlowTransportIcon label="Previous">
              <SkipBack
                className="h-[11px] w-[11px] fill-current"
                strokeWidth={0}
              />
            </FlowTransportIcon>
            <FlowTransportIcon label="Pause">
              <Pause className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
            </FlowTransportIcon>
            <FlowTransportIcon label="Next">
              <SkipForward
                className="h-[11px] w-[11px] fill-current"
                strokeWidth={0}
              />
            </FlowTransportIcon>
          </div>

          <FlowTransportIcon label="Repeat" muted>
            <Repeat className="h-[11px] w-[11px]" strokeWidth={2} />
          </FlowTransportIcon>

          <FlowTransportIcon label="Volume" muted>
            <Volume2 className="h-2.5 w-2.5" strokeWidth={2} />
          </FlowTransportIcon>
        </div>
      </div>

      <button
        type="button"
        tabIndex={-1}
        className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full ${flowWidgetChrome} shadow-[0_2px_6px_rgba(0,0,0,0.1)]`}
        aria-label="Smile settings"
      >
        <Settings className="h-3.5 w-3.5 text-foreground" strokeWidth={2} />
      </button>
    </div>
  );
}

function CollapsedPeekBar({ opacity }: { opacity: number }) {
  return (
    <div
      className="rounded-full border border-white/20 bg-secondary shadow-[0_0_8px_rgba(255,255,255,0.1)] transition-opacity duration-[180ms] ease-in-out"
      style={{
        width: COLLAPSED_WIDTH,
        height: COLLAPSED_HEIGHT,
        opacity,
      }}
    />
  );
}

function WidgetDemoCursor({ visible, atTarget }: { visible: boolean; atTarget: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute z-30 transition-all duration-700 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: atTarget ? "50%" : "72%",
        top: atTarget ? "54%" : "78%",
        transform: "translate(-20%, -20%)",
      }}
      aria-hidden
    >
      <MousePointer2
        className="h-7 w-7 text-foreground drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
        fill="currentColor"
        strokeWidth={1.5}
      />
    </div>
  );
}

function AnimatedWidgetCluster({
  expansionProgress,
  blinkOpacity,
  showCollapsed,
}: {
  expansionProgress: number;
  blinkOpacity: number;
  showCollapsed: boolean;
}) {
  const clusterWidth =
    COLLAPSED_WIDTH +
    (EXPANDED_WIDTH - COLLAPSED_WIDTH) * expansionProgress;
  const clusterHeight =
    COLLAPSED_HEIGHT +
    (EXPANDED_HEIGHT - COLLAPSED_HEIGHT) * expansionProgress;
  const collapsedOpacity = (1 - expansionProgress) * blinkOpacity;
  const expandedOpacity = expansionProgress;

  return (
    <div
      className="relative flex items-end justify-center"
      style={{
        width: clusterWidth,
        height: clusterHeight,
      }}
    >
      {showCollapsed && (
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            opacity: collapsedOpacity,
            transform: `scale(${1 - expansionProgress * 0.05})`,
            filter: `blur(${expansionProgress * 1.25}px)`,
          }}
        >
          <CollapsedPeekBar opacity={1} />
        </div>
      )}

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          opacity: expandedOpacity,
          transform: `scale(${0.9 + expansionProgress * 0.1})`,
          filter: `blur(${(1 - expansionProgress) * 1.25}px)`,
          pointerEvents: expansionProgress > 0.85 ? "auto" : "none",
        }}
      >
        <ExpandedFlowWidget />
      </div>
    </div>
  );
}

function WidgetShowcaseDemo() {
  const demoRef = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef(false);
  const [phase, setPhase] = useState<AnimationPhase>("idle");
  const [blinkOpacity, setBlinkOpacity] = useState(1);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorAtTarget, setCursorAtTarget] = useState(false);
  const [expansionProgress, setExpansionProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const runBlinkSequence = useCallback(async () => {
    for (let cycle = 0; cycle < BLINK_CYCLES; cycle += 1) {
      setBlinkOpacity(0.18);
      await sleep(BLINK_FADE_MS);
      setBlinkOpacity(1);
      await sleep(BLINK_FADE_MS);
    }
  }, []);

  const runExpandSequence = useCallback(async () => {
    const duration = reducedMotion ? 120 : 520;
    const start = performance.now();

    await new Promise<void>((resolve) => {
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setExpansionProgress(springEase(t));
        if (t < 1) {
          requestAnimationFrame(tick);
        } else {
          resolve();
        }
      };
      requestAnimationFrame(tick);
    });
  }, [reducedMotion]);

  const startSequence = useCallback(async () => {
    if (hasPlayedRef.current) return;
    hasPlayedRef.current = true;

    if (reducedMotion) {
      setPhase("done");
      setExpansionProgress(1);
      setBlinkOpacity(1);
      return;
    }

    setPhase("blink");
    await runBlinkSequence();

    setPhase("cursor");
    setCursorVisible(true);
    await sleep(80);
    setCursorAtTarget(true);
    await sleep(760);

    setPhase("expand");
    setCursorVisible(false);
    await runExpandSequence();

    setPhase("done");
    setExpansionProgress(1);
    setBlinkOpacity(1);
  }, [reducedMotion, runBlinkSequence, runExpandSequence]);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motionQuery.matches);
    updateMotion();
    motionQuery.addEventListener("change", updateMotion);
    return () => motionQuery.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    const demo = demoRef.current;
    if (!demo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && entry.intersectionRatio >= 0.35) {
          void startSequence();
          observer.disconnect();
        }
      },
      { threshold: [0.35, 0.5] },
    );

    observer.observe(demo);
    return () => observer.disconnect();
  }, [startSequence]);

  const waveformOpacity =
    phase === "done" || expansionProgress > 0.4
      ? 0.35 + expansionProgress * 0.65
      : 0.12;
  const showCollapsed = phase !== "done" && expansionProgress < 0.98;

  return (
    <div
      ref={demoRef}
      className="relative mx-auto h-32 w-full max-w-5xl overflow-hidden md:h-36"
    >
      <ContinuousWaveform opacity={waveformOpacity} />

      <WidgetDemoCursor visible={cursorVisible} atTarget={cursorAtTarget} />

      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <AnimatedWidgetCluster
          expansionProgress={expansionProgress}
          blinkOpacity={blinkOpacity}
          showCollapsed={showCollapsed}
        />
      </div>
    </div>
  );
}

export function SmileWidgetShowcase() {
  return (
    <div className="border-b border-border">
      <div className="px-6 py-14 text-center md:py-16">
        <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
          Screen Widget
        </p>
        <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Keep Your Music{" "}
          <span className="bg-linear-to-r from-rose-400 to-yellow-400 bg-clip-text text-transparent">
            Close
          </span>
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          A floating edge widget — play, pause, and skip without leaving what
          you&apos;re doing.
        </p>
      </div>

      <WidgetShowcaseDemo />

      <p className="pb-14 text-center text-[11px] text-muted-foreground/70 md:pb-16">
        Music flows in · you control it · it flows on
      </p>
    </div>
  );
}
