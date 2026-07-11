import type { Metadata } from "next";
import Link from "next/link";
import { SmileFooter } from "@/components/smile/footer";
import { SmileHeaderShell } from "@/components/smile/header-shell";
import { pageMetadata } from "@/lib/seo/metadata";
import { SMILE_SUPPORT_SEARCH_COPY } from "@/lib/seo/search-copy";
import { SMILE_COMPANY_NAME, SMILE_SUPPORT_EMAIL } from "@/lib/smile/site";

export const metadata: Metadata = pageMetadata({
  title: SMILE_SUPPORT_SEARCH_COPY.title,
  description: SMILE_SUPPORT_SEARCH_COPY.description,
  path: "/smile/support",
});

export default function SmileSupportPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SmileHeaderShell />

      <div className="border-border mx-auto max-w-3xl border-x px-6 py-16 md:py-20">
        <Link
          href="/smile"
          className="text-muted-foreground hover:text-foreground mb-8 inline-block text-sm transition-colors"
        >
          ← Back to Smile
        </Link>

        <h1 className="text-foreground mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Support
        </h1>
        <p className="text-muted-foreground mb-10 max-w-xl text-sm leading-relaxed md:text-base">
          Need help installing Smile, indexing your library, or reporting a bug?
          Reach out to {SMILE_COMPANY_NAME} — we read every message.
        </p>

        <div className="border-border bg-card/40 rounded-xl border p-6 md:p-8">
          <p className="text-muted-foreground mb-2 text-xs tracking-widest uppercase">
            Email
          </p>
          <a
            href={`mailto:${SMILE_SUPPORT_EMAIL}`}
            className="text-foreground text-lg font-medium hover:underline md:text-xl"
          >
            {SMILE_SUPPORT_EMAIL}
          </a>
          <p className="text-muted-foreground mt-4 text-sm">
            Include your macOS version and Smile version (Smile → About) when
            reporting issues.
          </p>
        </div>

        <div className="text-muted-foreground mt-10 space-y-2 text-sm">
          <p>
            <Link href="/smile/download" className="text-foreground underline">
              Download Smile
            </Link>{" "}
            ·{" "}
            <Link href="/smile/faq" className="text-foreground underline">
              FAQ
            </Link>{" "}
            ·{" "}
            <Link href="/smile/privacy" className="text-foreground underline">
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link href="/smile/eula" className="text-foreground underline">
              EULA
            </Link>
          </p>
        </div>
      </div>

      <SmileFooter />
    </main>
  );
}
