import { SmileCTAContent } from "@/components/smile/cta-content";
import { getSmileRelease } from "@/lib/releases";

export function SmileCTA() {
  const release = getSmileRelease();
  const fileName = release.installerFileName(release.version);

  return (
    <SmileCTAContent downloadUrl={release.downloadUrl} fileName={fileName} />
  );
}
