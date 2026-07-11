import type { Metadata } from "next";
import { Header } from "@/components/avison/header";
import { Hero } from "@/components/avison/hero";
import { Products } from "@/components/avison/products";
import { About } from "@/components/avison/about";
import { Footer } from "@/components/avison/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { HOME_SEARCH_COPY } from "@/lib/seo/search-copy";

export const metadata: Metadata = pageMetadata({
  title: HOME_SEARCH_COPY.title,
  description: HOME_SEARCH_COPY.description,
  path: "/",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <JsonLd data={[organizationJsonLd(), webSiteJsonLd()]} />
      <Header />
      <Hero />
      <Products />
      <About />
      <Footer />
    </main>
  );
}
