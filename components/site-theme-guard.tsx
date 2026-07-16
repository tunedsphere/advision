"use client";

import { useEffect } from "react";

/** Keeps the marketing site on the fixed :root palette (no global theme class). */
export function SiteThemeGuard() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return null;
}
