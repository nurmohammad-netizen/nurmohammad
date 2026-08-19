import { Sparkles, Megaphone, Code2, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { growthAreas } from "@/data/portfolio";

const icons: Record<string, LucideIcon> = {
  "Digital Marketing": Megaphone,
  "AI-Powered Web Development": Code2,
};

export function Growth() {
  return (
    <section id="growth" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Currently Expanding Into"
          title="Actively learning, in the open"
          description="Not claiming mastery, these are skills he's deliberately building right now, alongside his core SCM work."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {growthAreas.map((area, i) => {
            const Icon = icons[area.title] ?? Sparkles;
            return (
              <Reveal key={area.title} delay={i * 0.1}>
                <div className="interactive-card h-full rounded-2xl border border-dashed border-accent-500/30 bg-navy-800/30 p-8 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400">
                      <Icon size={20} />
                    </div>
                    <Badge>In Progress</Badge>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-100">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-400 sm:text-base">
                    {area.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {area.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium text-ink-500">
                        #{tag.replace(/\s+/g, "")}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
