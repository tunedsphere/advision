import Link from "next/link";

export function LaughFooter() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium bg-gradient-to-r from-yellow-400 to-teal-400 bg-clip-text text-transparent">
              Laugh
            </span>
            <span className="text-border">|</span>
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              An Avison Product
            </Link>
          </div>

          <nav
            className="flex items-center gap-6"
            aria-label="Laugh legal and support"
          >
            <Link
              href="/laugh/faq"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
