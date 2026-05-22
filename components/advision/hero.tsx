export function Hero() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 tracking-tight leading-[1.1]">
            Software that
            <br />
            <span className="bg-linear-to-r from-rose-400  to-teal-300 bg-clip-text text-transparent">
              inspires joy
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed text-center">
            Beautiful, intuitive applications that transform how you experience
            music and video.
          </p>
        </div>
      </div>
    </section>
  );
}
