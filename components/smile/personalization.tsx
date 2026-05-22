"use client";

import { useState } from "react";

const themeColors = [
  { name: "Rose", color: "bg-rose-400" },
  { name: "Blue", color: "bg-blue-400" },
  { name: "Green", color: "bg-emerald-400" },
  { name: "Amber", color: "bg-amber-400" },
];

export function SmilePersonalization() {
  const [activeTheme, setActiveTheme] = useState(0);
  const [compactMode, setCompactMode] = useState(false);

  return (
    <section id="personalization" className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 py-24">
          <div>
            <p className="text-sm text-muted-foreground mb-4">Personalization</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-tight">
              Make it yours
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every detail of Smile can be customized to match your style.
            </p>

            <div className="space-y-8">
              <div>
                <label className="text-sm text-muted-foreground mb-3 block">
                  Accent Color
                </label>
                <div className="flex items-center gap-2">
                  {themeColors.map((theme, index) => (
                    <button
                      key={theme.name}
                      onClick={() => setActiveTheme(index)}
                      className={`w-8 h-8 rounded-full ${theme.color} transition-all ${
                        activeTheme === index
                          ? "ring-2 ring-offset-2 ring-offset-background ring-foreground"
                          : "opacity-50 hover:opacity-100"
                      }`}
                      aria-label={`Select ${theme.name} theme`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-t border-border">
                <div>
                  <div className="text-sm text-foreground">Compact Mode</div>
                  <div className="text-xs text-muted-foreground">Smaller UI elements</div>
                </div>
                <button
                  onClick={() => setCompactMode(!compactMode)}
                  className={`w-10 h-6 rounded-full transition-colors ${
                    compactMode ? themeColors[activeTheme].color : "bg-secondary"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-foreground transition-transform mx-1 ${
                      compactMode ? "translate-x-4" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              </div>

              <div className="space-y-1">
                {[1, 2, 3, 4].map((track) => (
                  <div
                    key={track}
                    className={`flex items-center gap-3 rounded-lg hover:bg-secondary/50 transition-colors ${
                      compactMode ? "p-2" : "p-3"
                    }`}
                  >
                    <span className="text-xs text-muted-foreground w-4">{track}</span>
                    <div className={`rounded ${themeColors[activeTheme].color} opacity-40 ${compactMode ? "w-6 h-6" : "w-8 h-8"}`} />
                    <div className="flex-1 min-w-0">
                      <div className={`text-foreground truncate ${compactMode ? "text-xs" : "text-sm"}`}>
                        Track Title {track}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">3:24</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="h-1 bg-secondary rounded-full overflow-hidden">
                  <div className={`h-full w-2/5 ${themeColors[activeTheme].color} rounded-full`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
