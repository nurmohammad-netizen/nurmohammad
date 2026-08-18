import { Award, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { certifications, education } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & education"
          description="Formal learning that backs up the day-to-day practice."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="h-full rounded-2xl border border-navy-700/60 bg-navy-800/40 p-6 backdrop-blur sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400">
                  <Award size={18} />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-100">Certifications</h3>
              </div>
              <ul className="mt-6 divide-y divide-navy-700/60">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium text-ink-100">{cert.name}</p>
                      <p className="text-sm text-ink-400">{cert.issuer}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${
                        cert.status === "in-progress"
                          ? "border-accent-500/40 bg-accent-500/10 text-accent-400"
                          : "border-navy-600/60 text-ink-400"
                      }`}
                    >
                      {cert.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-navy-700/60 bg-navy-800/40 p-6 backdrop-blur sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400">
                  <GraduationCap size={18} />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-100">Education</h3>
              </div>
              <ul className="mt-6 space-y-5">
                {education.map((item) => (
                  <li key={item.degree}>
                    <p className="font-medium text-ink-100">{item.degree}</p>
                    <p className="text-sm text-ink-400">{item.institution}</p>
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
