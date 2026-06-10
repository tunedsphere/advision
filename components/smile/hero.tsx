import Image from "next/image";
import { SmileDownloadButton } from "@/components/smile/download-button";
import { HeroScreenshotShowcase } from "@/components/smile/hero-screenshot-showcase";
import { HeroWaveBackground } from "@/components/smile/hero-wave-background";
import { getSmileRelease } from "@/lib/releases";

export function SmileHero() {
  const release = getSmileRelease();
  const fileName = release.installerFileName(release.version);
  return (
    <section className="relative overflow-x-hidden px-6 pt-32 pb-8 sm:pb-16">
      <HeroWaveBackground />

      <div className="relative z-10 mx-auto max-w-6xl pb-8 text-center sm:pb-16 md:pb-32">
        <div className="mb-6 flex justify-center">
          <Image
            src="/smile/icon.png"
            alt="Smile app icon"
            width={72}
            height={72}
            className="rounded-[18px] shadow-lg"
            priority
          />
        </div>

        <h1 className="text-foreground mb-6 text-5xl leading-[1.08] font-semibold tracking-tight md:text-6xl lg:text-7xl">
          Your Music
          <br />
          <span className="bg-linear-to-r from-rose-400 to-yellow-400 bg-clip-text text-transparent">
            Your Way
          </span>
        </h1>

        <p className="text-muted-foreground mx-auto mb-8 max-w-md text-lg leading-relaxed">
          A personalized music experience with powerful tag management and
          metadata editing. Clean, simple, designed for you.
        </p>

        <SmileDownloadButton
          downloadUrl={release.downloadUrl}
          fileName={fileName}
          size="lg"
          className="bg-foreground text-background hover:bg-foreground/90 gap-2 rounded-full"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download for macOS
        </SmileDownloadButton>

        <p className="text-muted-foreground mt-3 text-xs">
          Free · macOS 14+ · Apple Silicon
        </p>
        <p className="text-muted-foreground/70 mt-1 text-xs">
          Windows not available yet
        </p>
      </div>
      <div className="border-border relative z-10 mx-auto mt-16 max-w-6xl min-w-0 border-t pt-4 sm:pt-8 md:pt-16">
        <HeroScreenshotShowcase />
      </div>
    </section>
  );
}
