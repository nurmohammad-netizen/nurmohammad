import { BarChart3, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const projects = [
  {
    title: "The Crossover — Global Energy Dashboard",
    description:
      "An interactive data dashboard on the 2025 milestone where global renewables overtook coal for the first time — researched from Ember and IEA data, designed and built with AI-assisted tools.",
    tags: ["Data Visualization", "AI-Assisted", "Dashboard Design"],
    href: "https://me.nurintl.com/the-crossover-standalone.html",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Applied AI & data work"
          description="Turning raw data into a clear story — hands-on projects using AI tools for analysis and design."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.title}>
              
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-card group flex h-full flex-col rounded-2xl border border-navy-700/60 bg-navy-800/40 p-6 backdrop-blur sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400">
                    <BarChart3 size={18} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink-100">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-ink-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-navy-600/60 px-3 py-1 text-xs font-medium text-ink-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 group-hover:underline">
                  View live dashboard <ExternalLink size={14} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
