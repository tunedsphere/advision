import { SmileHeader } from "@/components/smile/header";
import { getSmileRelease } from "@/lib/releases";

export function SmileHeaderShell() {
  const release = getSmileRelease();

  return (
    <SmileHeader
      downloadUrl={release.downloadUrl}
      fileName={release.installerFileName(release.version)}
    />
  );
}
