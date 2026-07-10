import { Header } from "@/components/avison/header";
import { Hero } from "@/components/avison/hero";
import { Products } from "@/components/avison/products";
import { About } from "@/components/avison/about";
import { Footer } from "@/components/avison/footer";

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
