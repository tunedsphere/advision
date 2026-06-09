import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getSmileRelease } from "@/lib/releases";
import { DownloadAutoStart } from "@/components/smile/download-auto-start";
import { SmileDownloadButton } from "@/components/smile/download-button";
import {
  InstallPreviewPanel,
  InstallStepList,
  InstallStepShowcase,
  InstallTryAgain,
} from "@/components/smile/install-step-showcase";

function AppleIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export function SmileDownloadPageContent() {
  const release = getSmileRelease();
  const fileName = release.installerFileName(release.version);

  return (
    <>
      <Suspense fallback={null}>
        <DownloadAutoStart
          downloadUrl={release.downloadUrl}
          fileName={fileName}
        />
      </Suspense>

      <InstallStepShowcase
        steps={release.installSteps}
        version={release.version}
        downloadUrl={release.downloadUrl}
        fileName={fileName}
      >
        <div className="relative grid min-h-screen grid-cols-1 overflow-x-hidden lg:grid-cols-[minmax(0,42rem)_1fr]">
          <aside className="relative z-30 flex w-full flex-col justify-between bg-[#141416] px-6 py-10 text-white md:px-10 md:py-14 lg:min-h-screen lg:px-14">
            <div className="my-auto">
              <Link
                href="/smile"
                className="mt-10 flex items-center gap-4 rounded-xl transition-opacity hover:opacity-85"
              >
                <Image
                  src="/smile/icon.png"
                  alt="Smile app icon"
                  width={64}
                  height={64}
                  className="rounded-[16px] shadow-lg"
                  priority
                />
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight">
                    Smile
                  </h1>
                  <p className="mt-1 text-sm text-white/50">
                    Version {release.version}
                  </p>
                </div>
              </Link>

              <p className="mt-8 max-w-md text-lg font-medium leading-snug text-white/88">
                Download, Install, and{" "}
                <span className="bg-linear-to-r from-rose-400 to-yellow-400 bg-clip-text text-transparent">
                  Smile
                </span>
              </p>

              <InstallStepList steps={release.installSteps} />
              {release.isDownloadAvailable ? <InstallTryAgain /> : null}
            </div>

            <div className="mt-12">
              {release.isDownloadAvailable ? (
                <SmileDownloadButton
                  downloadUrl={release.downloadUrl}
                  fileName={fileName}
                  className="w-full rounded-full bg-white text-[#141416] hover:bg-white/90 gap-2 sm:w-auto"
                >
                  <AppleIcon />
                  Download for macOS
                </SmileDownloadButton>
              ) : (
                <p className="rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-white/55">
                  {release.unavailableMessage}
                </p>
              )}
            </div>
          </aside>

          <div className="relative z-10 min-h-screen">
            <InstallPreviewPanel version={release.version} />
          </div>
        </div>
      </InstallStepShowcase>
    </>
  );
}
