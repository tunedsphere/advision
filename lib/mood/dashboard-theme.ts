export const MOOD_DASHBOARD_THEME_STORAGE_KEY = "mood-dashboard-appearance";

export type MoodDashboardAppearance = "dark" | "light";

export function readStoredMoodDashboardAppearance(): MoodDashboardAppearance {
  if (typeof window === "undefined") return "dark";

  const stored = window.localStorage.getItem(MOOD_DASHBOARD_THEME_STORAGE_KEY);
  return stored === "light" ? "light" : "dark";
}

export function storeMoodDashboardAppearance(
  appearance: MoodDashboardAppearance,
): void {
  window.localStorage.setItem(MOOD_DASHBOARD_THEME_STORAGE_KEY, appearance);
}
