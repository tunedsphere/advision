"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { FeaturePreviewMock } from "@/components/smile/feature-preview-mocks";
import { MotionReveal } from "@/components/smile/motion-reveal";

type MockVariant =
  | "metadata"
  | "artist"
  | "queue"
  | "privacy";

type SpotlightProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  reverse?: boolean;
  visual: ReactNode;
};

function SpotlightFrame({ children }: { children: ReactNode }) {
  return (
    <div className="border-border bg-card/30 overflow-hidden rounded-xl border shadow-lg">
      {children}
    </div>
  );
}

function ScreenshotVisual({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <SpotlightFrame>
      <div className="relative aspect-[1444/619] w-full">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 576px"
        />
      </div>
    </SpotlightFrame>
  );
}

function MockVisual({ variant }: { variant: MockVariant }) {
  return (
    <SpotlightFrame>
      <div className="relative min-h-[280px] md:min-h-[320px]">
        <FeaturePreviewMock variant={variant} />
      </div>
    </SpotlightFrame>
  );
}

function FeatureSpotlight({
  id,
  eyebrow,
  title,
  description,
  reverse = false,
  visual,
}: SpotlightProps) {
  return (
    <section id={id} className="border-border border-t">
      <div
        className={`grid items-center gap-10 py-16 md:gap-12 md:py-20 lg:grid-cols-2 lg:gap-8 lg:py-24 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <MotionReveal className={reverse ? "lg:pl-4" : "lg:pr-4"} y={20}>
          <p className="text-muted-foreground mb-3 text-xs tracking-widest uppercase">
            {eyebrow}
          </p>
          <h2 className="text-foreground mb-4 text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed md:text-base">
            {description}
          </p>
        </MotionReveal>

        <MotionReveal delay={0.15} y={24}>
          {visual}
        </MotionReveal>
      </div>
    </section>
  );
}

export function SmileFeatureSpotlights() {
  return (
    <div className="border-border border-t">
      <FeatureSpotlight
        id="library"
        eyebrow="Local Library"
        title="Your folders, indexed in place"
        description="Point Smile at the folders you already use. It builds a fast local index — no uploads, no accounts, and your files never leave your Mac."
        visual={
          <ScreenshotVisual
            src="/preview.png"
            alt="Smile DemoLibrary with album grid and song list"
            width={1477}
            height={628}
          />
        }
      />

      <FeatureSpotlight
        id="metadata"
        eyebrow="Fix Metadata"
        title="Clean up tags before you listen"
        description="Find duplicates, missing numbers, and inconsistent artist names. Preview every change in a diff view, then apply when it looks right."
        reverse
        visual={<MockVisual variant="metadata" />}
      />

      <FeatureSpotlight
        id="albums"
        eyebrow="Album Browse"
        title="Cover art that opens inline"
        description="Browse by album in a calm grid. Tap artwork to expand tracks without leaving the view — great for rediscovering full records."
        visual={
          <ScreenshotVisual
            src="/winter-light.png"
            alt="Smile Winter Lights album detail with artwork and track list"
            width={1442}
            height={614}
          />
        }
      />

      <FeatureSpotlight
        id="queue"
        eyebrow="Smart Queue"
        title="Play Next, queue, and session flow"
        description="Build a session without losing context. Play Next bumps a track to the front, the queue holds what comes after, and the bar keeps you oriented."
        reverse
        visual={
          <ScreenshotVisual
            src="/hero2.png"
            alt="Smile Albums view with Northbound playing and the playback bar"
            width={1449}
            height={618}
          />
        }
      />

      <FeatureSpotlight
        id="artists"
        eyebrow="Artists & Favourites"
        title="Browse by artist, save what you love"
        description="Open an artist to see albums and top tracks together. Heart songs from album, genre, or artist lists and find them again in a tap."
        visual={<MockVisual variant="artist" />}
      />

      <FeatureSpotlight
        id="eq"
        eyebrow="Parametric EQ"
        title="Eight bands, graph view, presets"
        description="Shape your sound with a parametric equalizer — draggable bands on a graph, factory presets, and per-session tuning that stays out of the way."
        reverse
        visual={
          <ScreenshotVisual
            src="/EQ2.png"
            alt="Smile parametric equalizer with graph EQ and band controls"
            width={1443}
            height={611}
          />
        }
      />

      <FeatureSpotlight
        id="privacy"
        eyebrow="Privacy First"
        title="Your library stays on your Mac"
        description="Smile is built for local listening. No accounts required, no cloud uploads — just your music, indexed where it already lives."
        visual={<MockVisual variant="privacy" />}
      />
    </div>
  );
}
