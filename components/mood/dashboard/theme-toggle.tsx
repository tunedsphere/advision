"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMoodDashboardTheme } from "@/components/mood/dashboard/dashboard-theme-provider";

export function ThemeToggle() {
  const { appearance, toggleAppearance, mounted } = useMoodDashboardTheme();
  const isLightAppearance = appearance === "light";

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-9"
      onClick={toggleAppearance}
      disabled={!mounted}
      aria-label={
        isLightAppearance
          ? "Switch to dark appearance"
          : "Switch to light appearance"
      }
    >
      {isLightAppearance ? (
        <Moon className="size-4" />
      ) : (
        <Sun className="size-4" />
      )}
    </Button>
  );
}
