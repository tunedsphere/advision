import Link from "next/link";
import { SMILE_LEGAL_LINKS } from "@/lib/smile/site";

type FooterLinksProps = {
  className?: string;
  linkClassName?: string;
};

export function SmileFooterLinks({
  className = "flex items-center gap-6",
  linkClassName = "text-xs text-muted-foreground transition-colors hover:text-foreground",
}: FooterLinksProps) {
  return (
    <nav className={className} aria-label="Legal and support">
      {SMILE_LEGAL_LINKS.map(({ href, label }) => (
        <Link key={href} href={href} className={linkClassName}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
