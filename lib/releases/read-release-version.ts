import { readFileSync } from "fs";
import { join } from "path";

const VERSION_PATTERN = /^[0-9]+\.[0-9]+\.[0-9]+$/;

/** Marketing semver — single source: Packaging/RELEASE_VERSION (mirror smile-app). */
export function readSmileReleaseVersion(): string {
  const filePath = join(process.cwd(), "Packaging/RELEASE_VERSION");
  const version = readFileSync(filePath, "utf8").trim();

  if (!VERSION_PATTERN.test(version)) {
    throw new Error(
      `Packaging/RELEASE_VERSION must be MAJOR.MINOR.PATCH, got "${version}"`,
    );
  }

  return version;
}
