#!/usr/bin/env node
import { writeFileSync } from "fs";
import { join } from "path";

const pattern = /^[0-9]+\.[0-9]+\.[0-9]+$/;
const version = process.argv[2]?.trim();

if (!version || !pattern.test(version)) {
  console.error("Usage: pnpm release:smile <MAJOR.MINOR.PATCH>");
  console.error("Example: pnpm release:smile 0.25.2");
  process.exit(1);
}

const filePath = join(process.cwd(), "Packaging/RELEASE_VERSION");
writeFileSync(filePath, `${version}\n`, "utf8");

console.log(`Packaging/RELEASE_VERSION → ${version}`);
console.log("");
console.log("Next:");
console.log(`  1. Copy Smile-${version}.dmg → public/Smile-${version}.dmg`);
console.log("  2. pnpm verify:smile-release");
console.log("  3. commit-to-v and push (tag v" + version + ")");
