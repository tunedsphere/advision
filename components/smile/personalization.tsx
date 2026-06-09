"use client";

import { useMemo, useState, type CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Disc3,
  Folder,
  Home,
  LibraryBig,
  ListMusic,
  Mic2,
  Music2,
  Search,
  Shapes,
} from "lucide-react";

type Scheme = "light" | "dark";

interface OKLCH {
  l: number;
  c: number;
  h: number;
}

interface ThemePreset {
  id: string;
  label: string;
  primary: OKLCH;
  neutral?: boolean;
}

interface ThemeTokens {
  background: string;
  surface: string;
  foreground: string;
  muted: string;
  accent: string;
  border: string;
  playingRow: string;
  selectionBg: string;
}

const PRESETS: ThemePreset[] = [
  {
    id: "neutral",
    label: "Boring",
    primary: { l: 0.55, c: 0, h: 0 },
    neutral: true,
  },
  { id: "rose", label: "Rose", primary: { l: 0.65, c: 0.17, h: 15 } },
  { id: "orange", label: "Orange", primary: { l: 0.7, c: 0.19, h: 55 } },
  { id: "yellow", label: "Yellow", primary: { l: 0.865, c: 0.177, h: 96 } },
  { id: "green", label: "Green", primary: { l: 0.65, c: 0.15, h: 145 } },
  { id: "blue", label: "Blue", primary: { l: 0.55, c: 0.18, h: 250 } },
  { id: "purple", label: "Purple", primary: { l: 0.68, c: 0.16, h: 290 } },
  { id: "slate", label: "Slate", primary: { l: 0.5, c: 0.03, h: 250 } },
];

type SidebarRowDef = {
  label: string;
  icon: LucideIcon;
  active?: boolean;
};

const LIBRARY_ROWS: SidebarRowDef[] = [
  { label: "Library", icon: LibraryBig },
  { label: "Rock", icon: Folder },
  { label: "Rap", icon: Folder },
  { label: "Friends", icon: Folder },
];

const BROWSE_ROWS: SidebarRowDef[] = [
  { label: "Songs", icon: ListMusic, active: true },
  { label: "Artists", icon: Mic2 },
  { label: "Genres", icon: Shapes },
  { label: "Albums", icon: Disc3 },
];

const TRACKS = [
  {
    title: "Midnight Dreams",
    artist: "Aurora Waves",
    dur: "4:12",
    playing: true,
  },
  { title: "Starlight", artist: "Nova", dur: "3:24" },
  { title: "Ocean Breeze", artist: "Coastal", dur: "3:51" },
  { title: "Neon Lights", artist: "Synth", dur: "5:03" },
];

function oklch({ l, c, h }: OKLCH): string {
  return `oklch(${l} ${c} ${h})`;
}

function presetHeadingGradient(preset: ThemePreset): string {
  if (preset.neutral) {
    return "linear-gradient(90deg, oklch(0.82 0 0), oklch(0.58 0 0))";
  }

  const { l, c, h } = preset.primary;
  const from = oklch({ l: Math.min(l + 0.05, 0.9), c, h });
  const to = oklch({
    l: Math.min(l + 0.15, 0.93),
    c: c * 0.88,
    h: (h + 35) % 360,
  });

  return `linear-gradient(90deg, ${from}, ${to})`;
}

type DeriveTokenOptions = {
  chromeMul?: number;
  chromaScale?: number;
  playingRowMix?: number;
  selectionMix?: number;
};

const PREVIEW_DERIVE: DeriveTokenOptions = {
  chromeMul: 0.28,
  chromaScale: 0.88,
  playingRowMix: 6,
  selectionMix: 11,
};

/** Mirrors Smile `ThemeDerivation` with default tuning (0.5 sliders). */
function deriveTokens(
  preset: ThemePreset,
  scheme: Scheme,
  options: DeriveTokenOptions = {},
): ThemeTokens {
  const contrastDelta = 0;
  const chromaScale = options.chromaScale ?? 1;
  const chromeMul = options.chromeMul ?? 1;
  const playingRowMix = options.playingRowMix ?? (scheme === "light" ? 10 : 14);
  const selectionMix = options.selectionMix ?? (scheme === "light" ? 20 : 24);

  if (preset.neutral) {
    if (scheme === "light") {
      const accent = oklch({ l: 0.22, c: 0, h: 0 });
      return {
        background: oklch({ l: 0.97 - contrastDelta, c: 0, h: 0 }),
        surface: oklch({ l: 0.94 - contrastDelta * 0.5, c: 0, h: 0 }),
        foreground: oklch({ l: 0.18, c: 0, h: 0 }),
        muted: oklch({ l: 0.48, c: 0, h: 0 }),
        accent,
        border: oklch({ l: 0.86, c: 0, h: 0 }),
        playingRow: `color-mix(in oklch, var(--smile-accent) ${playingRowMix}%, transparent)`,
        selectionBg: `color-mix(in oklch, var(--smile-accent) ${selectionMix}%, transparent)`,
      };
    }
    const accent = oklch({ l: 0.78, c: 0, h: 0 });
    return {
      background: oklch({ l: 0.14 + contrastDelta, c: 0, h: 0 }),
      surface: oklch({ l: 0.19 + contrastDelta * 0.5, c: 0, h: 0 }),
      foreground: oklch({ l: 0.94, c: 0, h: 0 }),
      muted: oklch({ l: 0.68, c: 0, h: 0 }),
      accent,
      border: oklch({ l: 0.28, c: 0, h: 0 }),
      playingRow: `color-mix(in oklch, var(--smile-accent) ${playingRowMix}%, transparent)`,
      selectionBg: `color-mix(in oklch, var(--smile-accent) ${selectionMix}%, transparent)`,
    };
  }

  const { primary } = preset;
  const hue = primary.h;

  if (scheme === "light") {
    const accent = oklch({
      l: Math.min(primary.l, 0.62),
      c: primary.c * chromaScale,
      h: hue,
    });
    return {
      background: oklch({
        l: 0.97 - contrastDelta,
        c: 0.012 * chromeMul,
        h: hue,
      }),
      surface: oklch({
        l: 0.94 - contrastDelta * 0.5,
        c: 0.018 * chromeMul,
        h: hue,
      }),
      foreground: oklch({ l: 0.18, c: 0.02 * chromeMul, h: hue }),
      muted: oklch({ l: 0.48, c: 0.03 * chromeMul, h: hue }),
      accent,
      border: oklch({ l: 0.86, c: 0.02 * chromeMul, h: hue }),
      playingRow: `color-mix(in oklch, var(--smile-accent) ${playingRowMix}%, transparent)`,
      selectionBg: `color-mix(in oklch, var(--smile-accent) ${selectionMix}%, transparent)`,
    };
  }

  const accent = oklch({
    l: Math.max(primary.l, 0.72),
    c: primary.c * chromaScale,
    h: hue,
  });
  return {
    background: oklch({
      l: 0.14 + contrastDelta,
      c: 0.015 * chromeMul,
      h: hue,
    }),
    surface: oklch({
      l: 0.19 + contrastDelta * 0.5,
      c: 0.02 * chromeMul,
      h: hue,
    }),
    foreground: oklch({ l: 0.94, c: 0.01 * chromeMul, h: hue }),
    muted: oklch({ l: 0.68, c: 0.025 * chromeMul, h: hue }),
    accent,
    border: oklch({ l: 0.28, c: 0.02 * chromeMul, h: hue }),
    playingRow: `color-mix(in oklch, var(--smile-accent) ${playingRowMix}%, transparent)`,
    selectionBg: `color-mix(in oklch, var(--smile-accent) ${selectionMix}%, transparent)`,
  };
}

function ThemePresetPicker({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1">
      {PRESETS.map((preset) => {
        const selected = preset.id === activeId;
        return (
          <button
            key={preset.id}
            type="button"
            onClick={() => onSelect(preset.id)}
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full transition-opacity hover:opacity-100"
            aria-label={`${preset.label} theme`}
            aria-pressed={selected}
            title={preset.label}
          >
            <span
              className="h-6 w-6 rounded-full"
              style={{
                background: oklch(preset.primary),
                boxShadow: selected
                  ? `0 0 0 2.5px var(--foreground), 0 0 0 3.5px ${oklch(preset.primary)}`
                  : `inset 0 0 0 1px color-mix(in oklch, var(--foreground) 35%, transparent)`,
              }}
            />
          </button>
        );
      })}
    </div>
  );
}

function AppearanceModePicker({
  mode,
  onChange,
}: {
  mode: Scheme;
  onChange: (mode: Scheme) => void;
}) {
  const options: { id: Scheme; label: string }[] = [
    { id: "light", label: "Light" },
    { id: "dark", label: "Dark" },
  ];

  return (
    <div className="inline-flex rounded-lg border border-border p-0.5">
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          onClick={() => onChange(opt.id)}
          className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            mode === opt.id
              ? "bg-secondary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function SidebarSectionLabel({
  children,
  tokens,
}: {
  children: string;
  tokens: ThemeTokens;
}) {
  return (
    <p
      className="px-2 pt-2 pb-0.5 text-[8px] font-semibold uppercase tracking-wide"
      style={{ color: tokens.muted }}
    >
      {children}
    </p>
  );
}

function SidebarRow({
  row,
  tokens,
  indented = false,
}: {
  row: SidebarRowDef;
  tokens: ThemeTokens;
  indented?: boolean;
}) {
  const { icon: Icon, label, active } = row;

  return (
    <div
      className={`flex items-center gap-1.5 rounded-md py-1 pr-1.5 ${indented ? "pl-5" : "pl-2"}`}
      style={{
        background: active ? tokens.selectionBg : "transparent",
        color: tokens.foreground,
      }}
    >
      <Icon
        className="h-3 w-3 shrink-0"
        strokeWidth={1.75}
        style={{
          color: active
            ? `color-mix(in oklch, ${tokens.accent} 72%, ${tokens.muted})`
            : tokens.muted,
        }}
      />
      <span
        className={`truncate text-[10px] leading-tight ${active ? "font-semibold" : "font-medium"}`}
      >
        {label}
      </span>
    </div>
  );
}

function PreviewSidebar({ tokens }: { tokens: ThemeTokens }) {
  return (
    <aside
      className="flex w-[136px] shrink-0 flex-col overflow-hidden border-r"
      style={{ background: tokens.surface, borderColor: tokens.border }}
    >
      <div className="flex flex-col gap-0.5 overflow-y-auto px-2 py-2.5">
        <SidebarRow row={{ label: "Search", icon: Search }} tokens={tokens} />
        <SidebarRow row={{ label: "Home", icon: Home }} tokens={tokens} />

        <SidebarSectionLabel tokens={tokens}>Library</SidebarSectionLabel>
        <div
          className="space-y-0.5 rounded-lg p-0.5"
          style={{
            background: `color-mix(in oklch, ${tokens.accent} 3%, transparent)`,
          }}
        >
          {LIBRARY_ROWS.map((row) => (
            <SidebarRow key={row.label} row={row} tokens={tokens} indented />
          ))}
        </div>

        <SidebarSectionLabel tokens={tokens}>Browse</SidebarSectionLabel>
        {BROWSE_ROWS.map((row) => (
          <SidebarRow key={row.label} row={row} tokens={tokens} />
        ))}
      </div>
    </aside>
  );
}

function SmileAppPreview({ tokens }: { tokens: ThemeTokens }) {
  const cssVars = {
    "--smile-accent": tokens.accent,
  } as CSSProperties;

  return (
    <div
      className="overflow-hidden rounded-2xl border shadow-lg transition-colors duration-300"
      style={{
        ...cssVars,
        background: tokens.background,
        borderColor: tokens.border,
      }}
    >
      <div
        className="flex items-center gap-1.5 border-b px-3.5 py-2.5"
        style={{ borderColor: tokens.border, background: tokens.surface }}
      >
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span
          className="ml-2 text-[10px] font-medium"
          style={{ color: tokens.muted }}
        >
          Smile — Settings → Appearance
        </span>
      </div>

      <div className="flex h-[340px]">
        <PreviewSidebar tokens={tokens} />

        <div className="flex min-w-0 flex-1 flex-col">
          <div
            className="border-b px-3 py-2"
            style={{ borderColor: tokens.border }}
          >
            <p
              className="text-sm font-semibold"
              style={{ color: tokens.foreground }}
            >
              Songs
            </p>
            <p className="text-[10px]" style={{ color: tokens.muted }}>
              1,248 tracks
            </p>
          </div>

          <div className="flex-1 overflow-hidden px-1 py-1">
            {TRACKS.map((track, i) => (
              <div
                key={track.title}
                className="flex items-center gap-2 rounded-md px-2 py-1.5"
                style={{
                  background: track.playing ? tokens.playingRow : "transparent",
                  color: tokens.foreground,
                }}
              >
                <span
                  className="w-3 text-center text-[10px]"
                  style={{
                    color: track.playing
                      ? `color-mix(in oklch, ${tokens.accent} 70%, ${tokens.muted})`
                      : tokens.muted,
                  }}
                >
                  {track.playing ? (
                    <Music2 className="mx-auto h-2.5 w-2.5" strokeWidth={2} />
                  ) : (
                    i + 1
                  )}
                </span>
                <div
                  className="h-7 w-7 shrink-0 rounded"
                  style={{
                    background: track.playing
                      ? `color-mix(in oklch, ${tokens.accent} 10%, ${tokens.surface})`
                      : tokens.surface,
                    border: `1px solid ${tokens.border}`,
                  }}
                />
                <div className="min-w-0 flex-1">
                  <p
                    className="truncate text-[11px] font-medium"
                    style={{ color: tokens.foreground }}
                  >
                    {track.title}
                  </p>
                  <p
                    className="truncate text-[10px]"
                    style={{ color: tokens.muted }}
                  >
                    {track.artist}
                  </p>
                </div>
                <span className="text-[10px]" style={{ color: tokens.muted }}>
                  {track.dur}
                </span>
              </div>
            ))}
          </div>

          <div
            className="border-t px-3 py-2.5"
            style={{
              borderColor: tokens.border,
              background: tokens.surface,
            }}
          >
            <div className="mb-1.5 flex items-center gap-2">
              <div
                className="h-8 w-8 shrink-0 rounded-md"
                style={{
                  background: `color-mix(in oklch, ${tokens.accent} 12%, ${tokens.surface})`,
                  border: `1px solid ${tokens.border}`,
                }}
              />
              <div className="min-w-0 flex-1">
                <p
                  className="truncate text-[11px] font-semibold"
                  style={{ color: tokens.foreground }}
                >
                  Midnight Dreams
                </p>
                <p
                  className="truncate text-[10px]"
                  style={{ color: tokens.muted }}
                >
                  Aurora Waves
                </p>
              </div>
            </div>
            <div
              className="h-[3px] overflow-hidden rounded-full"
              style={{ background: tokens.border }}
            >
              <div
                className="h-full w-[38%] rounded-full transition-colors duration-300"
                style={{
                  background: `color-mix(in oklch, ${tokens.accent} 78%, ${tokens.muted})`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SmilePersonalization() {
  const [presetId, setPresetId] = useState("rose");
  const [scheme, setScheme] = useState<Scheme>("dark");

  const activePreset = PRESETS.find((p) => p.id === presetId) ?? PRESETS[1];
  const tokens = useMemo(
    () => deriveTokens(activePreset, scheme, PREVIEW_DERIVE),
    [activePreset, scheme],
  );

  return (
    <section id="personalization" className="border-t border-border">
      <div className="max-w-6xl mx-auto border-x border-border px-6">
        <div className="grid gap-12 py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
              Appearance
            </p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Make it{" "}
              <span
                className="bg-clip-text text-transparent transition-[background-image] duration-300"
                style={{ backgroundImage: presetHeadingGradient(activePreset) }}
              >
                yours
              </span>
            </h2>
            <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
              Eight OKLCH palettes tint Smile&apos;s chrome — backgrounds,
              surfaces, accents, and borders. Fine-tune contrast and switch
              light or dark under{" "}
              <span className="text-foreground">Settings → Appearance</span>.
            </p>

            <div className="space-y-7">
              <div>
                <label className="mb-3 block text-sm text-muted-foreground">
                  Color theme
                </label>
                <ThemePresetPicker activeId={presetId} onSelect={setPresetId} />
                <p className="mt-2 text-xs text-muted-foreground">
                  {activePreset.label}
                  {activePreset.neutral ? " — achromatic chrome" : ""}
                </p>
              </div>

              <div>
                <label className="mb-3 block text-sm text-muted-foreground">
                  Light &amp; dark
                </label>
                <AppearanceModePicker mode={scheme} onChange={setScheme} />
              </div>

              <div className="space-y-3 border-t border-border pt-6">
                <p className="text-sm text-muted-foreground">Fine-tune</p>
                <div className="space-y-2 opacity-60">
                  {["Contrast", "Accent", "Background tint"].map((label) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="w-28 shrink-0 text-xs text-muted-foreground">
                        {label}
                      </span>
                      <div className="h-1.5 flex-1 rounded-full bg-secondary">
                        <div
                          className="h-full w-1/2 rounded-full"
                          style={{ background: tokens.accent }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-muted-foreground/70">
                  Sliders match the app — preview uses default tuning.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pt-6">
            <SmileAppPreview tokens={tokens} />
          </div>
        </div>
      </div>
    </section>
  );
}
