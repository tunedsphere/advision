import { Heart, Lock, Mic2, Music2, ShieldCheck } from "lucide-react";

const chrome =
  "flex items-center gap-1.5 border-b border-border bg-secondary px-3.5 py-2.5";
const dots = (
  <>
    <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
    <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
    <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
  </>
);

function MockShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card/40 flex h-full w-full flex-col overflow-hidden">
      <div className={chrome}>
        {dots}
        <span className="text-muted-foreground ml-2 truncate text-[10px] font-medium">
          {title}
        </span>
      </div>
      <div className="bg-background min-h-0 flex-1">{children}</div>
    </div>
  );
}

export function WidgetPreviewMock() {
  return (
    <MockShell title="Smile — Screen Widget">
      <div className="relative flex h-full items-center justify-center p-6">
        <div className="border-border bg-secondary/90 absolute right-4 top-1/2 flex w-[min(100%,280px)] -translate-y-1/2 items-center gap-2 rounded-xl border px-3 py-2 shadow-lg backdrop-blur-md">
          <div className="from-rose-400/30 to-yellow-400/20 h-9 w-9 shrink-0 rounded-md bg-linear-to-br" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] font-semibold">Northbound</p>
            <p className="text-muted-foreground truncate text-[10px]">
              Coastal Drive
            </p>
          </div>
          <div className="flex gap-1">
            <span className="bg-foreground/10 h-6 w-6 rounded-full" />
            <span className="bg-foreground h-6 w-6 rounded-full" />
            <span className="bg-foreground/10 h-6 w-6 rounded-full" />
          </div>
        </div>
      </div>
    </MockShell>
  );
}

export function MetadataPreviewMock() {
  return (
    <MockShell title="Smile — Fix Metadata">
      <div className="grid h-full gap-3 p-4 md:grid-cols-2">
        <div className="border-border bg-secondary/50 rounded-lg border p-3">
          <p className="text-muted-foreground mb-2 text-[10px] uppercase tracking-wider">
            Issues found
          </p>
          <div className="space-y-2">
            {["Duplicate album art", "Missing track #", "Inconsistent artist"].map(
              (issue) => (
                <div
                  key={issue}
                  className="border-border flex items-center gap-2 rounded-md border bg-background px-2 py-1.5"
                >
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-orange-300" />
                  <span className="text-[11px]">{issue}</span>
                </div>
              ),
            )}
          </div>
        </div>
        <div className="border-border bg-secondary/50 rounded-lg border p-3">
          <p className="text-muted-foreground mb-2 text-[10px] uppercase tracking-wider">
            Preview
          </p>
          <div className="space-y-2 text-[11px]">
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">Artist</span>
              <span className="text-muted-foreground line-through">coastal drive</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">Artist</span>
              <span className="text-rose-300">Coastal Drive</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-muted-foreground">Album</span>
              <span className="text-rose-300">Northbound</span>
            </div>
          </div>
        </div>
      </div>
    </MockShell>
  );
}

export function ArtistPreviewMock() {
  const albums = ["Northbound", "Winter Lights", "Coastal", "Starlight"];
  return (
    <MockShell title="Smile — Artists">
      <div className="flex h-full flex-col p-4 md:flex-row md:gap-6">
        <div className="flex shrink-0 flex-col items-center text-center md:w-44">
          <div className="from-rose-400/35 to-yellow-400/25 mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br md:h-28 md:w-28">
            <Mic2 className="text-foreground/80 h-10 w-10" strokeWidth={1.5} />
          </div>
          <h4 className="text-sm font-semibold">Coastal Drive</h4>
          <p className="text-muted-foreground mt-1 text-[10px]">
            4 albums · 38 tracks
          </p>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-muted-foreground mb-2 text-[10px] uppercase tracking-wider">
            Albums
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {albums.map((name) => (
              <div key={name} className="min-w-0">
                <div className="border-border from-rose-400/15 to-yellow-400/10 aspect-square rounded-lg border bg-linear-to-br" />
                <p className="mt-1 truncate text-[10px] font-medium">{name}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-4 mb-2 text-[10px] uppercase tracking-wider">
            Top tracks
          </p>
          <div className="space-y-1">
            {["Harbour Lights", "Northbound", "Tidepool"].map((track, i) => (
              <div
                key={track}
                className="flex items-center gap-2 rounded-md px-1 py-1"
              >
                <span className="text-muted-foreground w-4 text-[10px]">
                  {i + 1}
                </span>
                <Music2 className="text-muted-foreground h-3 w-3" />
                <span className="truncate flex-1 text-[11px]">{track}</span>
                {i < 2 ? (
                  <Heart className="h-3 w-3 shrink-0 fill-rose-400 text-rose-400" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockShell>
  );
}

export function QueuePreviewMock() {
  const queue = [
    { title: "Harbour Lights", artist: "Coastal Drive", active: true },
    { title: "Starlight", artist: "Nova", active: false },
    { title: "Ocean Breeze", artist: "Coastal", active: false },
  ];
  return (
    <MockShell title="Smile — Queue">
      <div className="p-4">
        <p className="text-muted-foreground mb-2 text-[10px] uppercase tracking-wider">
          Now playing
        </p>
        {queue.map((track) => (
          <div
            key={track.title}
            className={`mb-3 flex items-center gap-3 rounded-lg px-2 py-2 ${
              track.active ? "bg-rose-400/10 ring-1 ring-rose-400/25" : ""
            }`}
          >
            <div className="border-border h-10 w-10 shrink-0 rounded-md border bg-secondary" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-medium">{track.title}</p>
              <p className="text-muted-foreground truncate text-[10px]">
                {track.artist}
              </p>
            </div>
            {track.active ? (
              <Music2 className="h-3.5 w-3.5 text-rose-300" />
            ) : (
              <span className="text-muted-foreground text-[10px]">Up next</span>
            )}
          </div>
        ))}
      </div>
    </MockShell>
  );
}

export function FavouritesPreviewMock() {
  const tracks = [
    { title: "Midnight Dreams", artist: "Aurora Waves", liked: true },
    { title: "Northbound", artist: "Coastal Drive", liked: true },
    { title: "Neon Lights", artist: "Synth", liked: false },
  ];
  return (
    <MockShell title="Smile — Favourites">
      <div className="p-3">
        {tracks.map((track, i) => (
          <div
            key={track.title}
            className="flex items-center gap-2 rounded-md px-2 py-2"
          >
            <span className="text-muted-foreground w-4 text-[10px]">{i + 1}</span>
            <div className="border-border h-8 w-8 shrink-0 rounded border bg-secondary" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-medium">{track.title}</p>
              <p className="text-muted-foreground truncate text-[10px]">
                {track.artist}
              </p>
            </div>
            <Heart
              className={`h-3.5 w-3.5 shrink-0 ${
                track.liked ? "fill-rose-400 text-rose-400" : "text-muted-foreground/40"
              }`}
            />
          </div>
        ))}
      </div>
    </MockShell>
  );
}

export function ThemePreviewMock() {
  const swatches = [
    "oklch(0.65 0.17 15)",
    "oklch(0.7 0.19 55)",
    "oklch(0.865 0.177 96)",
    "oklch(0.65 0.15 145)",
    "oklch(0.55 0.18 250)",
    "oklch(0.68 0.16 290)",
  ];
  return (
    <MockShell title="Smile — Settings → Appearance">
      <div className="flex h-full flex-col justify-center gap-4 p-6">
        <p className="text-muted-foreground text-[10px] uppercase tracking-wider">
          Color theme
        </p>
        <div className="flex flex-wrap gap-2">
          {swatches.map((color, i) => (
            <div
              key={color}
              className={`h-9 w-9 rounded-full ring-2 ${
                i === 0 ? "ring-rose-400/60" : "ring-transparent"
              }`}
              style={{ background: color }}
            />
          ))}
        </div>
        <div className="border-border mt-2 rounded-lg border bg-secondary/60 p-3">
          <div className="mb-2 h-2 w-16 rounded-full bg-rose-400/50" />
          <div className="bg-background h-2 rounded-full" />
          <div className="bg-background mt-2 h-2 w-4/5 rounded-full" />
        </div>
      </div>
    </MockShell>
  );
}

export function PrivacyPreviewMock() {
  return (
    <MockShell title="Smile — Your Library">
      <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
        <div className="border-border bg-secondary flex h-16 w-16 items-center justify-center rounded-2xl border">
          <Lock className="text-muted-foreground h-7 w-7" strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-sm font-medium">Stays on your Mac</p>
          <p className="text-muted-foreground mt-1 max-w-xs text-[11px] leading-relaxed">
            Local folders only — no accounts required, no cloud uploads.
          </p>
        </div>
        <div className="border-border text-muted-foreground flex items-center gap-2 rounded-full border px-3 py-1 text-[10px]">
          <span className="bg-emerald-400/80 h-1.5 w-1.5 rounded-full" />
          Offline · Private · Yours
        </div>
      </div>
    </MockShell>
  );
}

export function FeaturePreviewMock({
  variant,
}: {
  variant:
    | "widget"
    | "metadata"
    | "artist"
    | "queue"
    | "favourites"
    | "theme"
    | "privacy";
}) {
  switch (variant) {
    case "widget":
      return <WidgetPreviewMock />;
    case "metadata":
      return <MetadataPreviewMock />;
    case "artist":
      return <ArtistPreviewMock />;
    case "queue":
      return <QueuePreviewMock />;
    case "favourites":
      return <FavouritesPreviewMock />;
    case "theme":
      return <ThemePreviewMock />;
    case "privacy":
      return <PrivacyPreviewMock />;
  }
}
