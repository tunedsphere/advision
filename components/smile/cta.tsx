import { Button } from "@/components/ui/button";

export function SmileCTA() {
  return (
    <section id="download" className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
            Ready to <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Smile</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Download for free and discover a new way to experience your music.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              Download for Mac
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-secondary">
              Windows
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Free download. macOS 12+ / Windows 10+
          </p>
        </div>
      </div>
    </section>
  );
}
