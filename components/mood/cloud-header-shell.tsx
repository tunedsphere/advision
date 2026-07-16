import Link from "next/link";
import { ClerkAuthControls } from "@/components/mood/clerk-auth-controls";

export function MoodCloudHeaderShell() {
  return (
    <header className="border-border bg-header-background/80 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link
            href="/mood-cloud"
            className="bg-linear-to-r from-rose-400 to-yellow-400 bg-clip-text text-lg font-semibold uppercase tracking-wide text-transparent"
          >
            Mood
          </Link>
          <span className="text-border hidden md:block">|</span>
          <Link
            href="/"
            className="text-foreground hidden text-sm uppercase tracking-wide transition-colors hover:text-muted-foreground md:block"
          >
            Avison
          </Link>
        </div>

        <ClerkAuthControls />
      </div>
    </header>
  );
}
