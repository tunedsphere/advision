import { MOOD_TIERS, type MoodTierId } from "@/lib/mood/cloud";

export type MoodCorpusId = "music" | "images" | "videos";

export type MoodCorpusFolder = {
  id: MoodCorpusId;
  label: string;
  usedBytes: number;
};

export type MoodVaultFile = {
  id: string;
  name: string;
  sizeBytes: number;
  modifiedAt: string;
  device: string;
};

export type MoodDashboardUsage = {
  tierId: MoodTierId;
  tierName: string;
  storageLimitLabel: string;
  storageLimitBytes: number;
  storageUsedBytes: number;
  folders: MoodCorpusFolder[];
};

const GB = 1024 ** 3;
const TB = 1024 ** 4;

function storageLabelToBytes(label: string): number {
  const match = label.trim().match(/^([\d.]+)\s*(GB|TB)$/i);
  if (!match) return 0;
  const value = Number.parseFloat(match[1] ?? "0");
  const unit = match[2]?.toUpperCase();
  return unit === "TB" ? value * TB : value * GB;
}

/** Placeholder usage until the Mood API is wired. */
export function getMockDashboardUsage(): MoodDashboardUsage {
  const tier = MOOD_TIERS.find((item) => item.id === "standard") ?? MOOD_TIERS[0];
  const folders: MoodCorpusFolder[] = [
    {
      id: "music",
      label: "Music",
      usedBytes: 18.2 * GB,
    },
    {
      id: "images",
      label: "Images",
      usedBytes: 6.1 * GB,
    },
    {
      id: "videos",
      label: "Videos",
      usedBytes: 18.5 * GB,
    },
  ];
  const storageUsedBytes = folders.reduce(
    (total, folder) => total + folder.usedBytes,
    0,
  );

  return {
    tierId: tier.id,
    tierName: tier.name,
    storageLimitLabel: tier.storageLabel,
    storageLimitBytes: storageLabelToBytes(tier.storageLabel),
    storageUsedBytes,
    folders,
  };
}

export function formatStorageBytes(bytes: number): string {
  if (bytes >= TB) {
    return `${(bytes / TB).toFixed(1)} TB`;
  }
  if (bytes >= GB) {
    return `${(bytes / GB).toFixed(1)} GB`;
  }
  if (bytes >= 1024 ** 2) {
    return `${(bytes / 1024 ** 2).toFixed(1)} MB`;
  }
  return `${Math.max(bytes, 0)} B`;
}

export function storageUsagePercent(usedBytes: number, limitBytes: number): number {
  if (limitBytes <= 0) return 0;
  return Math.min(100, Math.round((usedBytes / limitBytes) * 100));
}

export const MOOD_CORPUS_IDS = ["music", "images", "videos"] as const;

export function isMoodCorpusId(value: string): value is MoodCorpusId {
  return MOOD_CORPUS_IDS.includes(value as MoodCorpusId);
}

export function getFolderHref(corpusId: MoodCorpusId): string {
  return `/mood-cloud/dashboard/folders/${corpusId}`;
}

export function getCorpusFolder(corpusId: MoodCorpusId): MoodCorpusFolder | undefined {
  return getMockDashboardUsage().folders.find((folder) => folder.id === corpusId);
}

const MOCK_FILES: Record<MoodCorpusId, MoodVaultFile[]> = {
  music: [
    {
      id: "music-1",
      name: "Smile Library/Albums/Aurora — All My Demons.flac",
      sizeBytes: 312 * 1024 ** 2,
      modifiedAt: "2026-07-12T14:22:00Z",
      device: "MacBook Pro",
    },
    {
      id: "music-2",
      name: "Smile Library/Playlists/Evening Focus.m3u8",
      sizeBytes: 4.2 * 1024,
      modifiedAt: "2026-07-11T09:05:00Z",
      device: "MacBook Pro",
    },
    {
      id: "music-3",
      name: "Smile Library/Albums/Kamasi Washington — The Epic/01.mp3",
      sizeBytes: 18.6 * 1024 ** 2,
      modifiedAt: "2026-07-10T18:41:00Z",
      device: "Studio Mac mini",
    },
    {
      id: "music-4",
      name: "Smile Library/Artwork/album-cover-aurora.jpg",
      sizeBytes: 820 * 1024,
      modifiedAt: "2026-07-09T11:12:00Z",
      device: "MacBook Pro",
    },
  ],
  images: [
    {
      id: "images-1",
      name: "Photos/2026/Vacation/DSC_1042.heic",
      sizeBytes: 4.8 * 1024 ** 2,
      modifiedAt: "2026-07-13T16:30:00Z",
      device: "MacBook Pro",
    },
    {
      id: "images-2",
      name: "Photos/Wallpapers/smile-gradient.png",
      sizeBytes: 2.1 * 1024 ** 2,
      modifiedAt: "2026-07-08T08:15:00Z",
      device: "Studio Mac mini",
    },
    {
      id: "images-3",
      name: "Photos/Exports/poster-draft.webp",
      sizeBytes: 960 * 1024,
      modifiedAt: "2026-07-07T19:44:00Z",
      device: "MacBook Pro",
    },
  ],
  videos: [
    {
      id: "videos-1",
      name: "Laugh Library/Movies/Inception (2010).mkv",
      sizeBytes: 8.4 * 1024 ** 3,
      modifiedAt: "2026-07-14T21:10:00Z",
      device: "Studio Mac mini",
    },
    {
      id: "videos-2",
      name: "Laugh Library/Series/Severance/S01E03.mp4",
      sizeBytes: 2.1 * 1024 ** 3,
      modifiedAt: "2026-07-13T22:05:00Z",
      device: "MacBook Pro",
    },
    {
      id: "videos-3",
      name: "Laugh Library/Clips/demo-reel.mov",
      sizeBytes: 512 * 1024 ** 2,
      modifiedAt: "2026-07-06T13:20:00Z",
      device: "Studio Mac mini",
    },
  ],
};

export function getMockFilesForCorpus(corpusId: MoodCorpusId): MoodVaultFile[] {
  return MOCK_FILES[corpusId];
}

export function formatFileDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(isoDate));
}
