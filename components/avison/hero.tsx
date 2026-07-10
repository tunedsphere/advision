export function Hero() {
  return (
    <section className="pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Avison
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight leading-[1.08] mb-6">
          Software that
          <br />
          <span className="bg-linear-to-r from-rose-400 to-teal-300 bg-clip-text text-transparent">
            inspires
          </span>{" "}
          joy
        </h1>
        <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
          Beautiful, intuitive applications that transform how you experience
          music and video.
        </p>
      </div>
    </section>
  );
}
