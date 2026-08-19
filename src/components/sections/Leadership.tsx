import { Mic } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { leadership } from "@/data/portfolio";

export function Leadership() {
  return (
    <section id="leadership" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Leadership & Communication" title="Where the confidence comes from" />

        <Reveal>
          <div className="interactive-card flex flex-col gap-6 rounded-2xl border border-navy-700/60 bg-navy-800/40 p-8 backdrop-blur sm:flex-row sm:items-start sm:p-10">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-400">
              <Mic size={22} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink-100">
                {leadership.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent-400">{leadership.organization}</p>
              <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">
                {leadership.description}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
