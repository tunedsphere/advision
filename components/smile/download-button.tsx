"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type SmileDownloadButtonProps = {
  downloadUrl: string | null;
  fileName: string;
  size?: "default" | "sm" | "lg";
  className?: string;
  children: ReactNode;
  /** When false, stays on the page (use on /smile/download). Default: true */
  navigateAfterDownload?: boolean;
};

/** Start a file download without navigating away from the current page. */
export function triggerFileDownload(url: string) {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("aria-hidden", "true");
  iframe.style.cssText =
    "position:absolute;width:0;height:0;border:0;visibility:hidden";
  iframe.src = url;
  document.body.appendChild(iframe);
  window.setTimeout(() => iframe.remove(), 120_000);
}

export function SmileDownloadButton({
  downloadUrl,
  fileName,
  size = "lg",
  className,
  children,
  navigateAfterDownload = true,
}: SmileDownloadButtonProps) {
  const router = useRouter();

  if (downloadUrl && !navigateAfterDownload) {
    return (
      <Button asChild size={size} className={className}>
        <a href={downloadUrl} download={fileName}>
          {children}
        </a>
      </Button>
    );
  }

  const handleClick = () => {
    if (downloadUrl) {
      triggerFileDownload(downloadUrl);
      if (navigateAfterDownload) {
        window.setTimeout(() => {
          router.push("/smile/download");
        }, 250);
      }
      return;
    }

    router.push("/smile/download");
  };

  return (
    <Button type="button" size={size} className={className} onClick={handleClick}>
      {children}
    </Button>
  );
}
