import { Rocket, ArrowUpRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { entrepreneurship } from "@/data/portfolio";

export function Entrepreneurship() {
  return (
    <section id="ventures" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Entrepreneurship" title="Building something of his own" />

        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent-500/20 bg-gradient-to-br from-navy-800/80 via-navy-800/40 to-navy-900/80 p-8 backdrop-blur sm:p-12">
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
                  className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-all hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/25"
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
      </Container>
    </section>
  );
}
