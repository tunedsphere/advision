import type { ProductReleaseConfig, ResolvedProductRelease } from "./types";

/**
 * Smile release metadata for the marketing site.
 *
 * Bump `version` when shipping a new build (mirror smile-app Packaging/RELEASE_VERSION).
 *
 * Download URL resolution (first match wins):
 * 1. SMILE_DOWNLOAD_URL — full URL (stable /latest redirect or direct .dmg)
 * 2. SMILE_DOWNLOAD_BASE_URL + versioned filename — CDN bucket root
 */
export const SMILE_RELEASE_CONFIG: ProductReleaseConfig = {
  productId: "smile",
  productName: "Smile",
  version: "0.9.16",
  installerFileName: (version) => `Smile-${version}.dmg`,
  requirements: [
    { label: "macOS", value: "14 Sonoma or later" },
    { label: "Processor", value: "Apple Silicon (M1 and later)" },
    { label: "Storage", value: "~50 MB for the app" },
    { label: "Price", value: "Free" },
  ],
  installSteps: [
    {
      title: "Download",
      description:
        "Download Smile.dmg from your browser — the file lands in Downloads.",
    },
    {
      title: "Install",
      description:
        "Double-click the disk image, then drag Smile into Applications.",
    },
    {
      title: "Smile",
      description: "Open Smile from Applications and add your music folders.",
    },
  ],
  unavailableMessage:
    "The installer is not hosted yet. Check back soon — this page will update automatically once downloads are live.",
};

function trimEnv(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

/** Resolve the Smile .dmg URL from environment variables. */
export function resolveSmileDownloadUrl(
  version = SMILE_RELEASE_CONFIG.version,
): string | null {
  const direct = trimEnv(process.env.SMILE_DOWNLOAD_URL);
  if (direct) return direct;

  const base = trimEnv(process.env.SMILE_DOWNLOAD_BASE_URL);
  if (base) {
    return `${base.replace(/\/$/, "")}/${SMILE_RELEASE_CONFIG.installerFileName(version)}`;
  }

  return null;
}

/** Full release record for server components and metadata. */
export function getSmileRelease(): ResolvedProductRelease {
  const downloadUrl = resolveSmileDownloadUrl();

  return {
    ...SMILE_RELEASE_CONFIG,
    downloadUrl,
    isDownloadAvailable: downloadUrl !== null,
  };
}
