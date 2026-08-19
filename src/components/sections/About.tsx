import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { aboutParagraphs, atAGlance } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="From the field to the spreadsheet, and back"
        />
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,1fr)]">
          <Reveal>
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
              <div className="relative mx-auto shrink-0 sm:mx-0">
                <div className="relative h-40 w-40 overflow-hidden rounded-full border border-accent-500/35 bg-navy-800 shadow-xl shadow-black/30 sm:h-44 sm:w-44">
                  <Image
                    src="/profile.png"
                    alt="Nur Mohammad"
                    fill
                    sizes="(max-width: 640px) 160px, 176px"
                    className="object-cover"
                  />
                </div>
                <span className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full border-4 border-navy-900 bg-accent-500" />
              </div>
            <div className="space-y-5 text-base leading-relaxed text-ink-300 sm:text-lg">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="interactive-card rounded-2xl border border-navy-700/60 bg-navy-800/40 p-8 backdrop-blur">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-accent-400">
                At a Glance
              </h3>
              <ul className="mt-6 space-y-6">
                {atAGlance.map((item) => (
                  <li key={item.label}>
                    <p className="font-medium text-ink-100">{item.value}</p>
                    <p className="mt-0.5 text-sm text-ink-400">{item.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
