"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import {
  readStoredMoodDashboardAppearance,
  storeMoodDashboardAppearance,
  type MoodDashboardAppearance,
} from "@/lib/mood/dashboard-theme";

type MoodDashboardThemeContextValue = {
  appearance: MoodDashboardAppearance;
  setAppearance: (appearance: MoodDashboardAppearance) => void;
  toggleAppearance: () => void;
  mounted: boolean;
};

const MoodDashboardThemeContext =
  createContext<MoodDashboardThemeContextValue | null>(null);

export function useMoodDashboardTheme() {
  const context = useContext(MoodDashboardThemeContext);
  if (!context) {
    throw new Error(
      "useMoodDashboardTheme must be used within MoodDashboardThemeProvider",
    );
  }
  return context;
}

export function MoodDashboardThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [appearance, setAppearanceState] =
    useState<MoodDashboardAppearance>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setAppearanceState(readStoredMoodDashboardAppearance());
    setMounted(true);
  }, []);

  const setAppearance = useCallback((next: MoodDashboardAppearance) => {
    setAppearanceState(next);
    storeMoodDashboardAppearance(next);
  }, []);

  const toggleAppearance = useCallback(() => {
    setAppearanceState((current) => {
      const next: MoodDashboardAppearance = current === "dark" ? "light" : "dark";
      storeMoodDashboardAppearance(next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      appearance,
      setAppearance,
      toggleAppearance,
      mounted,
    }),
    [appearance, mounted, setAppearance, toggleAppearance],
  );

  return (
    <MoodDashboardThemeContext.Provider value={value}>
      <div
        className={cn(
          "mood-dashboard bg-background text-foreground min-h-svh",
          appearance === "light" && "mood-dashboard-light",
        )}
      >
        {children}
      </div>
    </MoodDashboardThemeContext.Provider>
  );
}
