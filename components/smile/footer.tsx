import Link from "next/link";
import { SmileFooterLinks } from "@/components/smile/footer-links";

export function SmileFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-4">
            <span className="bg-linear-to-r from-rose-400 to-yellow-400 bg-clip-text text-sm font-medium text-transparent">
              Smile
            </span>
            <span className="text-border">|</span>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground text-xs transition-colors"
            >
              An Advision Product
            </Link>
          </div>

          <SmileFooterLinks />
        </div>
      </div>
    </footer>
  );
}
