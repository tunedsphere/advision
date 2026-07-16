type SectionPlaceholderProps = {
  title: string;
  description: string;
};

export function SectionPlaceholder({
  title,
  description,
}: SectionPlaceholderProps) {
  return (
    <div className="max-w-2xl w-full">
      <h1 className="text-foreground mb-2 text-xl font-semibold tracking-tight sm:text-2xl">
        {title}
      </h1>
      <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
        {description}
      </p>
    </div>
  );
}
