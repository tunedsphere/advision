import { SmileDownloadButton } from "@/components/smile/download-button";
import { getSmileRelease } from "@/lib/releases";

export function SmileCTA() {
  const release = getSmileRelease();
  const fileName = release.installerFileName(release.version);

  return (
    <section id="download" className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
            Ready to{" "}
            <span className="bg-linear-to-r from-rose-400 to-yellow-400 bg-clip-text text-transparent">
              Smile
            </span>
            ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Download for free and discover a new way to experience your music.
          </p>

          <SmileDownloadButton
            downloadUrl={release.downloadUrl}
            fileName={fileName}
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            Download for Mac
          </SmileDownloadButton>

          <p className="text-xs text-muted-foreground mt-6">
            Free download · macOS 14+ · Apple Silicon (M1 and later)
          </p>
        </div>
      </div>
    </section>
  );
}
