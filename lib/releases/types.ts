export type PlatformRequirement = {
  label: string;
  value: string;
};

export type InstallStep = {
  title: string;
  description?: string;
};

/** Static product metadata + version; download URL resolved at runtime from env. */
export type ProductReleaseConfig = {
  productId: string;
  productName: string;
  /** Marketing semver — keep aligned with smile-app Packaging/RELEASE_VERSION. */
  version: string;
  installerFileName: (version: string) => string;
  requirements: PlatformRequirement[];
  installSteps: InstallStep[];
  unavailableMessage: string;
};

export type ResolvedProductRelease = ProductReleaseConfig & {
  downloadUrl: string | null;
  isDownloadAvailable: boolean;
};
