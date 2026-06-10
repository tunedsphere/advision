"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Download, MousePointer2, Plus, Share } from "lucide-react";

function SkeletonBar({ className }: { className: string }) {
  return <div className={`rounded-lg bg-white/8 ${className}`} aria-hidden />;
}

function BrowserPageSkeleton({ isBleed }: { isBleed: boolean }) {
  return (
    <div
      className={`flex flex-1 flex-col overflow-hidden bg-linear-to-b from-[#1c1c1e] via-[#202022] to-[#242426] ${
        isBleed ? "gap-10 px-12 py-12 md:px-16 md:py-14" : "gap-6 px-8 py-8"
      }`}
    >
      <div
        className={`mx-auto flex w-full flex-col items-center ${
          isBleed ? "max-w-lg" : "max-w-xs"
        }`}
      >
        <SkeletonBar
          className={
            isBleed ? "h-24 w-24 rounded-[22px]" : "h-16 w-16 rounded-2xl"
          }
        />

        <SkeletonBar
          className={
            isBleed
              ? "mt-9 h-11 w-48 rounded-full bg-white/10"
              : "mt-6 h-8 w-32 rounded-full bg-white/10"
          }
        />
      </div>

      <div className={`mx-auto w-full ${isBleed ? "max-w-md" : "max-w-48"}`}>
        <div
          className={`flex rounded-xl border border-white/6 bg-white/4 ${
            isBleed ? "flex-row items-start gap-5 p-5" : "flex-col gap-2 p-3"
          }`}
          aria-hidden
        >
          <SkeletonBar
            className={
              isBleed ? "h-12 w-12 shrink-0 rounded-lg" : "h-8 w-8 rounded-md"
            }
          />
        </div>
      </div>

      <div
        className={`mx-auto flex w-full flex-col ${
          isBleed ? "mt-auto max-w-2xl gap-3" : "max-w-xs gap-2"
        }`}
      >
        <SkeletonBar
          className={
            isBleed ? "h-3 w-full bg-white/5" : "h-2 w-full bg-white/5"
          }
        />
        <SkeletonBar
          className={
            isBleed ? "h-3 w-[88%] bg-white/5" : "h-2 w-[80%] bg-white/5"
          }
        />
        <SkeletonBar
          className={
            isBleed ? "h-3 w-[62%] bg-white/5" : "h-2 w-[55%] bg-white/5"
          }
        />
      </div>
    </div>
  );
}

const DOWNLOAD_SEQUENCE_MS = 6200;

function BrowserDownloadPreview({
  version,
  variant = "inline",
  step = 0,
  onAdvanceToInstall,
}: {
  version: string;
  variant?: "inline" | "bleed";
  step?: number;
  onAdvanceToInstall?: () => void;
}) {
  const isBleed = variant === "bleed";
  const isDownloadAnimating = step === 0;
  const dmgName = `Smile-${version}.dmg`;

  useEffect(() => {
    if (!isDownloadAnimating || !onAdvanceToInstall) return;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if ((variant === "bleed" && !isDesktop) || (variant === "inline" && isDesktop)) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const delay = reducedMotion ? 1200 : DOWNLOAD_SEQUENCE_MS;
    const timer = window.setTimeout(onAdvanceToInstall, delay);

    return () => window.clearTimeout(timer);
  }, [isDownloadAnimating, onAdvanceToInstall, variant]);

  return (
    <div
      className={`flex h-full w-full flex-col ${
        isBleed ? "justify-end" : ""
      }`}
    >
      <div
        className={`relative flex min-h-0 flex-col overflow-hidden border border-white/12 bg-[#242426] shadow-[0_32px_80px_rgba(0,0,0,0.45)] ${
          isBleed
            ? "h-[min(90vh,940px)] w-full rounded-t-md border-b-0 border-r-0"
            : "h-full rounded-md"
        }`}
      >
        <div
          className={`relative flex shrink-0 items-center gap-3 border-b border-white/8 bg-[#353537] ${
            isBleed ? "px-5 py-4" : "px-4 py-3"
          }`}
        >
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>

          <div className="flex min-w-0 flex-1 items-center gap-2">
            <div className="hidden h-7 w-14 shrink-0 items-center justify-center rounded-md bg-white/6 sm:flex">
              <span className="text-[10px] text-white/35">‹ ›</span>
            </div>
            <div className="flex h-8 min-w-0 flex-1 items-center justify-center rounded-lg bg-black/30 px-3">
              <span className="truncate text-[11px] text-white/50">
                advision.com/smile/download
              </span>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 text-white/45">
            <Share className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            <Plus className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />

            <div className="relative">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  isDownloadAnimating
                    ? "smile-dl-animate-once smile-dl-toolbar-icon-active bg-orange-400/25 text-orange-50"
                    : "bg-white/6 text-white/70"
                }`}
                aria-hidden
              >
                <Download className="h-4 w-4" strokeWidth={2} aria-hidden />
              </div>

              {isDownloadAnimating ? (
                <div
                  className="smile-dl-animate-once smile-dl-popover-reveal absolute right-0 top-[calc(100%+10px)] z-20 w-72 origin-top-right rounded-2xl border border-white/12 bg-[#2d2d2f]/98 p-4 shadow-2xl backdrop-blur-xl"
                  aria-hidden
                >
                  <p className="mb-3 text-xs font-medium text-white/55">
                    Downloads
                  </p>
                  <div className="smile-dl-animate-once smile-dl-dmg-row-active relative flex items-center gap-3 rounded-xl border border-white/10 bg-white/6 px-3 py-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <svg
                        className="h-5 w-5 text-white/60"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zm0 12H4V8h16v10z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-white/90">
                        {dmgName}
                      </p>
                      <p className="mt-0.5 text-xs text-white/40">
                        Disk Image · Done
                      </p>
                    </div>

                    <div
                      className={`smile-dl-animate-once smile-dl-cursor-popover pointer-events-none absolute z-10 ${
                        isBleed ? "smile-dl-cursor-popover-bleed" : ""
                      }`}
                      aria-hidden
                    >
                      <MousePointer2
                        className="h-5 w-5 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]"
                        fill="white"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <BrowserPageSkeleton isBleed={isBleed} />

        {isDownloadAnimating ? (
          <div
            className={`smile-dl-animate-once smile-dl-cursor-toolbar pointer-events-none absolute z-30 ${
              isBleed ? "smile-dl-cursor-toolbar-bleed" : ""
            }`}
            aria-hidden
          >
            <MousePointer2
              className="h-6 w-6 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]"
              fill="white"
              strokeWidth={1.5}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

const INSTALL_DRAG_SEQUENCE_MS = 3200;

function DmgInstallPreview({
  variant = "inline",
  animate = true,
  onAdvanceToLaunch,
}: {
  variant?: "inline" | "bleed";
  animate?: boolean;
  onAdvanceToLaunch?: () => void;
}) {
  const isBleed = variant === "bleed";

  useEffect(() => {
    if (!animate || !onAdvanceToLaunch) return;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if ((variant === "bleed" && !isDesktop) || (variant === "inline" && isDesktop)) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const delay = reducedMotion ? 1000 : INSTALL_DRAG_SEQUENCE_MS;
    const timer = window.setTimeout(onAdvanceToLaunch, delay);

    return () => window.clearTimeout(timer);
  }, [animate, onAdvanceToLaunch, variant]);

  return (
    <div
      className={`relative mx-auto w-full ${
        isBleed ? "max-w-[480px]" : "max-w-[340px]"
      }`}
    >
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#3d3d3f] shadow-2xl">
        <div
          className={`flex items-center gap-1.5 border-b border-white/8 bg-[#4a4a4c]/90 ${
            isBleed ? "px-4 py-2.5" : "px-3 py-2"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span
            className={`ml-1 truncate text-white/55 ${
              isBleed ? "text-xs" : "text-[10px]"
            }`}
          >
            Smile
          </span>
        </div>

        <div
          className={`relative bg-linear-to-br from-[#4a4a4c] via-[#454547] to-[#3a3a3c] ${
            isBleed ? "h-[260px] px-10 py-10" : "h-[200px] px-6 py-8"
          }`}
        >
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full text-white/25"
            viewBox="0 0 340 200"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 82 112 C 155 72, 235 72, 302 108"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 5"
            />
          </svg>

          <div className="relative flex h-full items-center justify-between">
            <div
              className={`flex flex-col items-center gap-1.5 ${
                animate
                  ? `smile-dmg-drag-icon ${isBleed ? "smile-dmg-drag-icon-bleed" : ""}`
                  : ""
              }`}
            >
              <div className="relative">
                <Image
                  src="/smile/icon.png"
                  alt=""
                  width={isBleed ? 72 : 56}
                  height={isBleed ? 72 : 56}
                  className={`shadow-lg ${isBleed ? "rounded-[18px]" : "rounded-[14px]"}`}
                  aria-hidden
                />
                {animate ? (
                  <div
                    className="smile-dmg-drag-cursor pointer-events-none absolute left-[calc(100%-8px)] top-[calc(100%-6px)] z-10"
                    aria-hidden
                  >
                    <MousePointer2
                      className={`text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)] ${
                        isBleed ? "h-7 w-7" : "h-6 w-6"
                      }`}
                      fill="white"
                      strokeWidth={1.5}
                    />
                  </div>
                ) : null}
              </div>
              <span className={isBleed ? "text-[11px] text-white/70" : "text-[9px] text-white/70"}>
                Smile
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`flex items-center justify-center rounded-xl bg-blue-500/20 ring-1 ring-blue-400/30 ${
                  isBleed ? "h-16 w-16" : "h-14 w-14"
                }`}
              >
                <svg
                  className={`text-blue-300/80 ${isBleed ? "h-8 w-8" : "h-7 w-7"}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zm0 12H4V8h16v10z" />
                </svg>
              </div>
              <span className={isBleed ? "text-[11px] text-white/70" : "text-[9px] text-white/70"}>
                Applications
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

const SMILE_APP_INDEX = 10;

function LaunchPreview({
  variant = "inline",
  animate = true,
}: {
  variant?: "inline" | "bleed";
  animate?: boolean;
}) {
  const isBleed = variant === "bleed";
  const iconSize = isBleed ? 44 : 36;

  return (
    <div
      className={`relative mx-auto w-full ${
        isBleed ? "max-w-[480px]" : "max-w-[340px]"
      }`}
    >
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#1e1e1e] shadow-2xl">
        <div
          className={`flex items-center gap-1.5 border-b border-white/8 bg-[#2a2a2a] ${
            isBleed ? "px-4 py-2.5" : "px-3 py-2"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span
            className={`ml-2 truncate text-white/55 ${
              isBleed ? "text-xs" : "text-[10px]"
            }`}
          >
            Applications
          </span>
        </div>

        <div className={isBleed ? "p-5" : "p-4"}>
          <div className={`grid grid-cols-4 ${isBleed ? "gap-3" : "gap-2"}`}>
            {Array.from({ length: 16 }).map((_, index) => {
              const isSmile = index === SMILE_APP_INDEX;

              return (
                <div
                  key={index}
                  className={`flex flex-col items-center gap-1 rounded-lg p-1.5 ${
                    isSmile
                      ? `bg-rose-400/15 ring-1 ring-rose-400/35 ${
                          animate ? "smile-launch-app-pulse" : ""
                        }`
                      : ""
                  }`}
                >
                  {isSmile ? (
                    <div className="relative">
                      <Image
                        src="/smile/icon.png"
                        alt=""
                        width={iconSize}
                        height={iconSize}
                        className={`shadow-md ${isBleed ? "rounded-[12px]" : "rounded-[10px]"}`}
                        aria-hidden
                      />
                      {animate ? (
                        <div
                          className="smile-launch-cursor-dblclick pointer-events-none absolute left-[calc(100%-6px)] top-[calc(100%-4px)] z-10"
                          aria-hidden
                        >
                          <MousePointer2
                            className={`text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)] ${
                              isBleed ? "h-7 w-7" : "h-6 w-6"
                            }`}
                            fill="white"
                            strokeWidth={1.5}
                          />
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div
                      className={`rounded-[10px] bg-white/8 ${
                        isBleed ? "h-11 w-11" : "h-9 w-9"
                      }`}
                    />
                  )}
                  <span
                    className={`${
                      isBleed ? "text-[9px]" : "text-[8px]"
                    } ${isSmile ? "text-rose-300/90" : "text-white/35"}`}
                  >
                    {isSmile ? "Smile" : "App"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Full-viewport browser that bleeds behind the left panel on desktop. */
export function BrowserBleedLayer({
  version,
  activeStep,
  onAdvanceToInstall,
}: {
  version: string;
  activeStep: number;
  onAdvanceToInstall?: () => void;
}) {
  return (
    <div
      className="pointer-events-none fixed inset-y-0 bottom-0 z-1 hidden lg:left-[max(0px,calc(42rem-14rem))] lg:right-[10%] lg:block"
      aria-hidden={false}
    >
      <div className="pointer-events-auto h-full w-full">
        <BrowserDownloadPreview
          version={version}
          variant="bleed"
          step={activeStep}
          onAdvanceToInstall={onAdvanceToInstall}
        />
      </div>
    </div>
  );
}

/** Step overlay on top of the bleed browser (install / launch). */
export function InstallStepBleedOverlay({
  activeStep,
  onAdvanceToLaunch,
}: {
  activeStep: number;
  onAdvanceToLaunch?: () => void;
}) {
  if (activeStep === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-y-0 bottom-0 z-2 hidden lg:left-[max(0px,calc(42rem-14rem))] lg:right-[10%] lg:block"
      aria-hidden={false}
    >
      <div
        className={`flex h-full w-full px-8 ${
          activeStep === 2
            ? "items-center justify-center pb-[12vh] pt-[10vh]"
            : "items-center justify-center pb-[12vh]"
        }`}
      >
        {activeStep === 1 ? (
          <DmgInstallPreview
            variant="bleed"
            onAdvanceToLaunch={onAdvanceToLaunch}
          />
        ) : (
          <LaunchPreview variant="bleed" />
        )}
      </div>
    </div>
  );
}

const STEP_LABELS = ["Download", "Install", "Smile"] as const;

export function InstallPreviewStage({
  activeStep,
  version,
  onAdvanceToInstall,
  onAdvanceToLaunch,
}: {
  activeStep: number;
  version: string;
  reducedMotion?: boolean;
  onAdvanceToInstall?: () => void;
  onAdvanceToLaunch?: () => void;
}) {
  return (
    <div className="mx-auto w-full max-w-none overflow-visible">
      <p className="mb-3 text-center text-[10px] uppercase tracking-widest text-muted-foreground lg:text-left">
        {activeStep + 1} · {STEP_LABELS[activeStep]}
      </p>

      <div className="relative min-h-0 w-full overflow-visible lg:min-h-[120px]">
        {/* Mobile: browser stays visible behind install + launch overlays */}
        <div className="relative h-[min(420px,65vh)] w-full lg:hidden">
          <BrowserDownloadPreview
            version={version}
            step={activeStep}
            onAdvanceToInstall={onAdvanceToInstall}
          />
          {activeStep === 1 ? (
            <div className="absolute inset-0 flex items-center justify-center bg-[#141416]/40 p-6 backdrop-blur-[1px]">
              <DmgInstallPreview onAdvanceToLaunch={onAdvanceToLaunch} />
            </div>
          ) : null}
          {activeStep === 2 ? (
            <div className="absolute inset-0 flex items-center justify-center bg-[#141416]/40 p-6 pt-10 backdrop-blur-[1px]">
              <LaunchPreview />
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2 lg:justify-start">
        {STEP_LABELS.map((label, index) => (
          <span
            key={label}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeStep
                ? "w-6 bg-rose-400/70"
                : "w-1.5 bg-muted-foreground/25"
            }`}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}
