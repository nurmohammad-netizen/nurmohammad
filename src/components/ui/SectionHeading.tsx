import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      y={16}
      className={`mb-12 sm:mb-16 ${centered ? "mx-auto max-w-2xl text-center" : ""}`}
    >
      <span
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-400 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-6 bg-accent-500" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold text-ink-100 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-400 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
