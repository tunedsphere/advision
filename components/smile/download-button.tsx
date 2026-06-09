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
};

export function triggerFileDownload(url: string, fileName: string) {
  const link = document.createElement("a");
  link.href = url;
  link.rel = "noopener noreferrer";
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function SmileDownloadButton({
  downloadUrl,
  fileName,
  size = "lg",
  className,
  children,
}: SmileDownloadButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (downloadUrl) {
      triggerFileDownload(downloadUrl, fileName);
      router.push("/smile/download?started=1");
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
