import Link from "next/link";
import { SmileFooter } from "@/components/smile/footer";
import { SmileHeaderShell } from "@/components/smile/header-shell";

type LegalDocumentProps = {
  title: string;
  updated: string;
  children: React.ReactNode;
};

export function LegalDocument({ title, updated, children }: LegalDocumentProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SmileHeaderShell />

      <article className="border-border mx-auto max-w-3xl border-x px-6 py-16 md:py-20">
        <Link
          href="/smile"
          className="text-muted-foreground hover:text-foreground mb-8 inline-block text-sm transition-colors"
        >
          ← Back to Smile
        </Link>

        <header className="mb-10">
          <h1 className="text-foreground mb-2 text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h1>
          <p className="text-muted-foreground text-sm">Last updated {updated}</p>
        </header>

        <div className="text-muted-foreground space-y-6 text-sm leading-relaxed md:text-base [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-medium [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </article>

      <SmileFooter />
    </main>
  );
}
