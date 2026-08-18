import { Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="A track record built on execution"
          description="Ten years of moving from the front line of sales operations to owning the order-to-cash bridge for a nationwide dealer network."
        />

        <div className="relative">
          <div className="absolute bottom-2 left-[15px] top-2 w-px bg-navy-600 sm:left-[19px]" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.08} y={16}>
                <div className="relative pl-12 sm:pl-14">
                  <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-accent-500/40 bg-navy-800 text-accent-400 sm:h-10 sm:w-10">
                    <Briefcase size={16} />
                  </span>

                  <div className="rounded-2xl border border-navy-700/60 bg-navy-800/40 p-6 backdrop-blur transition-colors hover:border-accent-500/30 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-ink-100 sm:text-xl">
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-ink-400">{exp.company}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-navy-600/60 px-3 py-1 text-xs font-medium text-accent-400">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3 border-t border-navy-700/60 pt-6">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-3 text-sm leading-relaxed text-ink-300 sm:text-base"
                        >
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-500" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
