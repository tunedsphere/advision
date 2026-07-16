import { cn } from "@/lib/utils";
import type { MoodCorpusId } from "@/lib/mood/dashboard";

type FolderCardIconProps = {
  corpus: MoodCorpusId;
  className?: string;
};

const STYLES: Record<
  MoodCorpusId,
  { ring: string; glow: string; accent: string }
> = {
  music: {
    ring: "from-rose-400/30 via-amber-300/20 to-rose-500/10",
    glow: "bg-rose-400/15",
    accent: "text-rose-300",
  },
  images: {
    ring: "from-sky-400/30 via-violet-300/20 to-indigo-400/10",
    glow: "bg-sky-400/15",
    accent: "text-sky-300",
  },
  videos: {
    ring: "from-teal-400/30 via-emerald-300/20 to-cyan-400/10",
    glow: "bg-teal-400/15",
    accent: "text-teal-300",
  },
};

function MusicGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={className}
    >
      <circle
        cx="24"
        cy="24"
        r="14"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <circle cx="24" cy="24" r="5" fill="currentColor" opacity="0.9" />
      <path
        d="M24 10v8M24 30v8M10 24h8M30 24h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M31 14c2 3 2 7 0 10M17 24c-2 3-2 7 0 10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ImagesGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={className}
    >
      <rect
        x="10"
        y="14"
        width="22"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.45"
      />
      <rect
        x="16"
        y="10"
        width="22"
        height="18"
        rx="3"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="22" cy="16" r="2.5" fill="currentColor" opacity="0.85" />
      <path
        d="M18 24l4-4 6 6 3-3 5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VideosGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={className}
    >
      <rect
        x="11"
        y="14"
        width="26"
        height="20"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.45"
      />
      <rect
        x="14"
        y="17"
        width="20"
        height="14"
        rx="2.5"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M22 22l8 5-8 5V22Z" fill="currentColor" opacity="0.9" />
      <path
        d="M11 14l6-4h14l6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}

const GLYPHS: Record<MoodCorpusId, typeof MusicGlyph> = {
  music: MusicGlyph,
  images: ImagesGlyph,
  videos: VideosGlyph,
};

export function FolderCardIcon({ corpus, className }: FolderCardIconProps) {
  const style = STYLES[corpus];
  const Glyph = GLYPHS[corpus];

  return (
    <div className={cn("relative shrink-0 size-20", className)}>
      <div
        className={cn(
          "absolute inset-0 rounded-full bg-linear-to-br blur-xl",
          style.ring,
        )}
      />
      <div
        className={cn(
          "border-border/60 relative flex size-full items-center justify-center rounded-2xl border bg-linear-to-br",
          style.ring,
        )}
      >
        <div
          className={cn(
            "absolute inset-3 rounded-xl blur-md",
            style.glow,
          )}
        />
        <Glyph className={cn("relative size-14", style.accent)} />
      </div>
    </div>
  );
}
