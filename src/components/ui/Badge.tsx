import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "accent" | "neutral";
}

export function Badge({ children, tone = "accent" }: BadgeProps) {
  const toneClasses =
    tone === "accent"
      ? "border-accent-500/30 bg-accent-500/10 text-accent-400"
      : "border-navy-500/40 bg-navy-700/60 text-ink-300";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${toneClasses}`}
    >
      {children}
    </span>
  );
}
