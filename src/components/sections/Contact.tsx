import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { contactMethods, personal } from "@/data/portfolio";

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something worth shipping"
          description="Open to new roles, partnerships, and conversations about supply chain, operations, or ventures."
          align="center"
        />

        <Reveal>
          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
            {contactMethods.map((method) => (
              <a
                key={method.type}
                href={method.href}
                target={method.type === "email" ? undefined : "_blank"}
                rel={method.type === "email" ? undefined : "noopener noreferrer"}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-navy-700/60 bg-navy-800/40 p-8 text-center backdrop-blur transition-colors hover:border-accent-500/40 hover:bg-navy-800/60"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400">
                  {method.type === "email" && <Mail size={20} />}
                  {method.type === "phone" && <Phone size={20} />}
                  {method.type === "linkedin" && <LinkedInIcon size={20} />}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                    {method.label}
                  </p>
                  <p className="mt-1.5 break-all text-sm font-medium text-ink-100 transition-colors group-hover:text-accent-400 sm:text-base">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-500">
            <MapPin size={14} /> {personal.location}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
