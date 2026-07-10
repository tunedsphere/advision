#!/usr/bin/env node
import { existsSync, readFileSync } from "fs";
import { join } from "path";

const root = process.cwd();
const versionPath = join(root, "Packaging/RELEASE_VERSION");
const pattern = /^[0-9]+\.[0-9]+\.[0-9]+$/;

if (!existsSync(versionPath)) {
  console.error("Missing Packaging/RELEASE_VERSION");
  process.exit(1);
}

const version = readFileSync(versionPath, "utf8").trim();
if (!pattern.test(version)) {
  console.error(`Invalid Packaging/RELEASE_VERSION: "${version}"`);
  process.exit(1);
}

const dmgPath = join(root, "public", `Smile-${version}.dmg`);
if (!existsSync(dmgPath)) {
  console.error(
    `No installer for ${version}: expected public/Smile-${version}.dmg`,
  );
  console.error(
    "Copy the build from smile-app, or bump Packaging/RELEASE_VERSION to match the DMG you added.",
  );
  process.exit(1);
}

console.log(`Smile release OK: ${version} → public/Smile-${version}.dmg`);
