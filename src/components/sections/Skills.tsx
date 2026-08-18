import { Layers, BarChart3, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/data/portfolio";

const icons: Record<string, LucideIcon> = {
  "SCM & ERP Tools": Layers,
  "Data & Analytics": BarChart3,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Tools that keep the supply chain honest"
          description="A practical toolkit built through daily use, not certificates collected for their own sake."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.title] ?? Layers;
            return (
              <Reveal key={group.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-navy-700/60 bg-navy-800/40 p-8 backdrop-blur transition-all hover:border-accent-500/30 hover:bg-navy-800/60">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-100">
                    {group.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-navy-600/60 bg-navy-900/60 px-3 py-1.5 text-xs font-medium text-ink-300 transition-colors hover:border-accent-500/40 hover:text-accent-400"
                      >
                        {skill}
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
