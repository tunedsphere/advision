"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LaughHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/laugh" className="flex items-center gap-2">
            <span className="text-lg font-semibold bg-gradient-to-r from-yellow-100 to-teal-100 bg-clip-text text-transparent">
              laugh
            </span>
          </Link>
          <span className="hidden md:block text-border">|</span>
          <Link
            href="/"
            className="hidden md:block text-sm text-foreground hover:text-muted-foreground transition-colors"
          >
            Advision
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm text-foreground hover:text-muted-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="#library"
            className="text-sm text-foreground hover:text-muted-foreground transition-colors"
          >
            Library
          </Link>
          <Button
            size="sm"
            variant="secondary"
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            Download
          </Button>
        </nav>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5 text-foreground"
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

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="#features"
              className="text-sm text-foreground hover:text-muted-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#library"
              className="text-sm text-foreground hover:text-muted-foreground transition-colors"
            >
              Library
            </Link>
            <Link
              href="/"
              className="text-sm text-foreground hover:text-muted-foreground transition-colors"
            >
              Advision
            </Link>
            <Button size="sm" variant="outline" className="w-fit">
              Download
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
