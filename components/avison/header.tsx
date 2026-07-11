"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-avison.svg"
            alt="Avison logo"
            width={30}
            height={30}
            priority
          />
          <span className="text-lg font-semibold text-foreground tracking-tight uppercase">
            Avison
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/smile"
            className="text-sm uppercase tracking-wide text-foreground hover:text-muted-foreground transition-colors"
          >
            Smile
          </Link>
          <Link
            href="/laugh"
            className="text-sm uppercase tracking-wide text-foreground hover:text-muted-foreground transition-colors"
          >
            Laugh
          </Link>
          <Link
            href="#about"
            className="text-sm uppercase tracking-wide text-foreground hover:text-muted-foreground transition-colors"
          >
            About
          </Link>
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
              href="/smile"
              className="text-sm uppercase tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Smile
            </Link>
            <Link
              href="/laugh"
              className="text-sm uppercase tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Laugh
            </Link>
            <Link
              href="#about"
              className="text-sm uppercase tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
