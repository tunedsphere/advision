export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-muted-foreground mb-4">About</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-tight leading-tight">
              Built with care,
              <br />
              designed for you
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Avison, we believe software should be a joy to use. Every pixel, 
              every interaction, every feature is crafted with intention.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We&apos;re a small team passionate about creating tools that respect your time, 
              your privacy, and your taste. No bloat. No distractions. Just beautiful, 
              functional software.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-border">
            <div className="bg-background p-8">
              <div className="text-3xl font-semibold text-foreground mb-1">2</div>
              <div className="text-sm text-muted-foreground">Apps</div>
            </div>
            <div className="bg-background p-8">
              <div className="text-3xl font-semibold text-foreground mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Privacy Focused</div>
            </div>
            <div className="bg-background p-8">
              <div className="text-3xl font-semibold text-foreground mb-1">Fast</div>
              <div className="text-sm text-muted-foreground">Performance</div>
            </div>
            <div className="bg-background p-8">
              <div className="text-3xl font-semibold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
