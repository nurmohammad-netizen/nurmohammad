import { ExternalLink, LayoutDashboard } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Practical tools, built to make information clearer"
          description="A small selection of hands-on work that shows how operational thinking translates into useful digital products."
        />

        <Reveal>
          <article className="interactive-card rounded-3xl border border-navy-700/60 bg-navy-800/40 p-8 backdrop-blur sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-400">
                  <LayoutDashboard size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">
                    Dashboard Project
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-ink-100 sm:text-3xl">
                    The Crossover
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                <Badge tone="neutral">Dashboard</Badge>
                <Badge tone="neutral">Data Visualization</Badge>
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-300 sm:text-lg">
              An interactive dashboard visualizing the global shift between renewable energy and
              coal, built to turn complex energy data into a clear, at-a-glance comparison.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-ink-500">
              <span>Global renewable energy vs coal usage and growth trends</span>
              <a
                href="/the-crossover.html"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-button inline-flex items-center gap-2 rounded-full border border-accent-500/50 px-5 py-2.5 font-semibold text-accent-400"
              >
                View Dashboard
                <ExternalLink size={15} />
              </a>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
