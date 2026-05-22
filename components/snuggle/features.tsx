const features = [
  {
    title: "Smart Library",
    description: "Automatically organize your videos by type and genre.",
  },
  {
    title: "Picture-in-Picture",
    description: "Keep watching while you work across your desktop.",
  },
  {
    title: "Subtitle Support",
    description: "Full support for subtitles in any language.",
  },
  {
    title: "Cloud Sync",
    description: "Sync watch history and favorites across devices.",
  },
  {
    title: "Playback Control",
    description: "Speed controls and keyboard shortcuts for power users.",
  },
  {
    title: "Format Support",
    description: "Play virtually any video format out of the box.",
  },
];

export function laughFeatures() {
  return (
    <section id="features" className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="py-16 border-b border-border">
          <p className="text-sm text-muted-foreground mb-4">Features</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Watch your way
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`p-8 ${index % 3 !== 2 ? "lg:border-r" : ""} ${
                index % 2 !== 1 ? "md:border-r lg:border-r-0" : ""
              } ${index < features.length - 3 ? "border-b lg:border-b" : ""} ${
                index < features.length - 2 ? "md:border-b" : ""
              } border-border`}
            >
              <h3 className="text-lg font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
