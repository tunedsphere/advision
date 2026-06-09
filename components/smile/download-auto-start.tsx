"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

type DownloadAutoStartProps = {
  downloadUrl: string | null;
  fileName: string;
};

function triggerFileDownload(url: string, fileName: string) {
  const link = document.createElement("a");
  link.href = url;
  link.rel = "noopener noreferrer";
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

/** Retries download once when landing from a Download button with ?started=1 */
export function DownloadAutoStart({
  downloadUrl,
  fileName,
}: DownloadAutoStartProps) {
  const searchParams = useSearchParams();
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (hasStartedRef.current) return;
    if (searchParams.get("started") !== "1") return;
    if (!downloadUrl) return;

    hasStartedRef.current = true;
    triggerFileDownload(downloadUrl, fileName);
  }, [downloadUrl, fileName, searchParams]);

  return null;
}
