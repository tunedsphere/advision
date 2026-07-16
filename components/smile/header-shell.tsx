import Link from "next/link";
import { SmileHeader } from "@/components/smile/header";
import { getSmileRelease } from "@/lib/releases";
import { MOOD_PRODUCT_PATH } from "@/lib/mood/cloud";

const moodNavLinkClass =
  "text-sm uppercase tracking-wide text-foreground transition-colors hover:text-muted-foreground";

export function SmileHeaderShell() {
  const release = getSmileRelease();

  return (
    <SmileHeader
      downloadUrl={release.downloadUrl}
      fileName={release.installerFileName(release.version)}
      trailing={
        <Link href={MOOD_PRODUCT_PATH} className={moodNavLinkClass}>
          Mood
        </Link>
      }
    />
  );
}
