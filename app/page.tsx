import { Header } from "@/components/advision/header";
import { Hero } from "@/components/advision/hero";
import { Products } from "@/components/advision/products";
import { About } from "@/components/advision/about";
import { Footer } from "@/components/advision/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Products />
      <About />
      <Footer />
    </main>
  );
}
