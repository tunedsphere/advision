"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { SmileDownloadButton } from "@/components/smile/download-button";
import { cn } from "@/lib/utils";

type SmileHeaderProps = {
  downloadUrl: string | null;
  fileName: string;
};

const navLinkClass =
  "text-sm uppercase tracking-wide text-foreground transition-colors hover:text-muted-foreground";

const mobileNavLinkClass =
  "rounded-lg px-2 py-3 text-base font-medium uppercase tracking-wide text-foreground transition-colors hover:bg-muted/50 hover:text-muted-foreground";

export function SmileHeader({ downloadUrl, fileName }: SmileHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const mobileBackdrop =
    mounted && mobileMenuOpen
      ? createPortal(
          <button
            type="button"
            className="fixed inset-0 top-14 z-40 bg-background/55 backdrop-blur-md transition-opacity duration-300 ease-out md:hidden"
            aria-label="Close menu"
            onClick={closeMobileMenu}
          />,
          document.body,
        )
      : null;

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-header-background/80 backdrop-blur-md">
      {mobileBackdrop}
      <div className="relative z-10 mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href="/smile" className="flex items-center gap-2">
            <span className="bg-linear-to-r from-rose-400 to-yellow-400 bg-clip-text text-lg font-semibold uppercase tracking-wide text-transparent">
              Smile
            </span>
          </Link>
          <span className="hidden text-border md:block">|</span>
          <Link
            href="/"
            className={`hidden md:block ${navLinkClass}`}
          >
            Avison
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#features" className={navLinkClass}>
            Features
          </Link>
          <Link href="#personalization" className={navLinkClass}>
            Personalization
          </Link>
          <SmileDownloadButton
            downloadUrl={downloadUrl}
            fileName={fileName}
            size="sm"
            className="bg-foreground text-background hover:bg-foreground/90 uppercase tracking-wide"
          >
            Download
          </SmileDownloadButton>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5 text-foreground transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={cn(
          "relative z-10 grid transition-[grid-template-rows] duration-300 ease-out md:hidden",
          mobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <nav
            className={cn(
              "border-t border-border bg-background/95 px-6 py-4 shadow-lg backdrop-blur-xl transition-[opacity,transform] duration-300 ease-out",
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-1 opacity-0",
            )}
            aria-hidden={!mobileMenuOpen}
            onPointerDown={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col gap-1">
              <Link
                href="#features"
                className={mobileNavLinkClass}
                onClick={closeMobileMenu}
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                Features
              </Link>
              <Link
                href="#personalization"
                className={mobileNavLinkClass}
                onClick={closeMobileMenu}
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                Personalization
              </Link>
              <Link
                href="/"
                className={mobileNavLinkClass}
                onClick={closeMobileMenu}
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                Avison
              </Link>
              <SmileDownloadButton
                downloadUrl={downloadUrl}
                fileName={fileName}
                size="default"
                className="mt-2 w-fit bg-foreground text-background hover:bg-foreground/90 uppercase tracking-wide"
              >
                Download
              </SmileDownloadButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
