"use client";

import { SmileDownloadButton } from "@/components/smile/download-button";
import { MotionReveal } from "@/components/smile/motion-reveal";

type SmileCTAContentProps = {
  downloadUrl: string | null;
  fileName: string;
};

export function SmileCTAContent({
  downloadUrl,
  fileName,
}: SmileCTAContentProps) {
  return (
    <section
      id="download"
      className="border-border bg-product-background relative overflow-hidden border-t"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_100%,oklch(0.72_0.19_15/0.08),transparent_68%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36 lg:py-44">
        <MotionReveal className="text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Ready to{" "}
            <span className="bg-linear-to-r from-rose-400 to-yellow-400 bg-clip-text text-transparent">
              Smile
            </span>
            ?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            Download for free and discover a new way to experience your music.
          </p>

          <SmileDownloadButton
            downloadUrl={downloadUrl}
            fileName={fileName}
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            Download for Mac
          </SmileDownloadButton>

          <p className="mt-6 text-xs text-muted-foreground">
            Free download · macOS 14+ · Apple Silicon (M1 and later)
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
