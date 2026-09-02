import { Rocket, ArrowUpRight, Clock, UtensilsCrossed } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { entrepreneurship, showcaseProject } from "@/data/portfolio";

export function Entrepreneurship() {
  return (
    <section id="ventures" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Entrepreneurship" title="Building something of his own" />

        <Reveal>
          <div className="interactive-card relative overflow-hidden rounded-3xl border border-accent-500/20 bg-gradient-to-br from-navy-800/80 via-navy-800/40 to-navy-900/80 p-8 backdrop-blur sm:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/10 blur-[100px]" />

            <div className="relative max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/15 text-accent-400">
                  <Rocket size={22} />
                </div>
                <Badge>{entrepreneurship.status}</Badge>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-ink-100 sm:text-3xl">
                {entrepreneurship.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent-400">{entrepreneurship.role}</p>
              <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">
                {entrepreneurship.description}
              </p>
              <p className="mt-3 text-sm text-ink-500">{entrepreneurship.workNote}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {entrepreneurship.tags.map((tag) => (
                  <Badge key={tag} tone="neutral">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href={entrepreneurship.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-button group inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-navy-950"
                >
                  Visit Our Page
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <span className="inline-flex items-center gap-1.5 text-sm text-ink-500">
                  <Clock size={14} />
                  {entrepreneurship.websiteNote}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="interactive-card mt-6 rounded-3xl border border-navy-700/60 bg-navy-800/40 p-8 backdrop-blur sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-400">
                  <UtensilsCrossed size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-400">
                    {showcaseProject.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-ink-100">
                    {showcaseProject.name}
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {showcaseProject.stack.map((technology) => (
                  <Badge key={technology} tone="neutral">
                    {technology}
                  </Badge>
                ))}
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-300 sm:text-lg">
              {showcaseProject.description}
            </p>

            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={showcaseProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-button group inline-flex items-center gap-2 rounded-full border border-accent-500/50 px-5 py-2.5 text-sm font-semibold text-accent-400"
              >
                View Live Site
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a href="#contact" className="text-sm font-medium text-ink-400 transition-colors hover:text-accent-400">
                Interested in a similar site for your business? Let&apos;s talk
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
