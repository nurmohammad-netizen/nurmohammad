import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-navy-700/60 bg-navy-950/60">
      <Container className="flex flex-col items-center justify-between gap-4 py-10 text-sm text-ink-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Nur Mohammad. All rights reserved.</p>
        <p>
          Built with Next.js, Tailwind CSS & <span className="text-accent-400">Claude Code</span>
        </p>
      </Container>
    </footer>
  );
}
