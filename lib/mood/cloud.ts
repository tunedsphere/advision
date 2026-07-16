/**
 * Mood product constants (marketing + dashboard links).
 */

export const MOOD_PRODUCT_PATH = "/mood-cloud";

export const MOOD_DASHBOARD_URL =
  process.env.MOOD_DASHBOARD_URL?.trim() ||
  process.env.SMILE_CLOUD_DASHBOARD_URL?.trim() ||
  "https://cloud.avison-soft.com";

export const MOOD_API_BASE_URL =
  process.env.MOOD_API_BASE_URL?.trim() ||
  process.env.SMILE_CLOUD_API_BASE_URL?.trim() ||
  "https://api.cloud.avison-soft.com";

export type MoodTierId = "starter" | "standard" | "pro" | "plus";

export type MoodTier = {
  id: MoodTierId;
  name: string;
  storageLabel: string;
  transferLabel: string;
  indicativePriceEur: string;
  recommended?: boolean;
};

/** Storage ladder from ADR 0002. Prices are indicative (P2 anchor). */
export const MOOD_TIERS: MoodTier[] = [
  {
    id: "starter",
    name: "Starter",
    storageLabel: "50 GB",
    transferLabel: "100 GB / month",
    indicativePriceEur: "€0.89",
  },
  {
    id: "standard",
    name: "Standard",
    storageLabel: "200 GB",
    transferLabel: "500 GB / month",
    indicativePriceEur: "€2.49",
    recommended: true,
  },
  {
    id: "pro",
    name: "Pro",
    storageLabel: "1 TB",
    transferLabel: "1 TB / month",
    indicativePriceEur: "€6.99",
  },
  {
    id: "plus",
    name: "Plus",
    storageLabel: "2 TB",
    transferLabel: "2 TB / month",
    indicativePriceEur: "€8.99",
  },
];

export const MOOD_VALUE_PROPS = [
  {
    title: "Predictable caps",
    body: "Fixed storage and monthly transfer allowances. We pause sync at 100% — no surprise overage bills.",
  },
  {
    title: "Smile Library sync",
    body: "Your Smile Library music corpus and playlists sync across Macs. Local listening stays local-first.",
  },
  {
    title: "Mac → Mac proof",
    body: "Upload from one Mac, play on another. Device-local import folders stay on your machine unless you copy into Smile Library first.",
  },
] as const;

export function isMoodDashboardHost(hostname: string): boolean {
  const host = hostname.split(":")[0]?.toLowerCase() ?? "";
  return host === "cloud.avison-soft.com" || host.startsWith("cloud.");
}
