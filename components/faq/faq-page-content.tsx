import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/seo/faq-content";

type FaqPageContentProps = {
  productName: string;
  productHref: string;
  supportHref: string;
  items: FaqItem[];
};

export function FaqPageContent({
  productName,
  productHref,
  supportHref,
  items,
}: FaqPageContentProps) {
  return (
    <div className="border-border mx-auto max-w-3xl border-x px-6 py-16 md:py-20">
      <Link
        href={productHref}
        className="text-muted-foreground hover:text-foreground mb-8 inline-block text-sm transition-colors"
      >
        ← Back to {productName}
      </Link>

      <h1 className="text-foreground mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
        {productName} FAQ
      </h1>
      <p className="text-muted-foreground mb-10 max-w-xl text-sm leading-relaxed md:text-base">
        Common questions about {productName}. Can&apos;t find what you need?{" "}
        {supportHref.startsWith("mailto:") ? (
          <a href={supportHref} className="text-foreground underline">
            Contact support
          </a>
        ) : (
          <Link href={supportHref} className="text-foreground underline">
            Contact support
          </Link>
        )}
        .
      </p>

      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
