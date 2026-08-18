"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy-700/60 bg-navy-900/80 shadow-lg shadow-black/20 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-5">
        <Link href="#home" className="font-display text-lg font-semibold text-ink-100">
          Nur Mohammad<span className="text-accent-400">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-300 transition-colors hover:text-accent-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden items-center rounded-full bg-accent-500 px-5 py-2 text-sm font-semibold text-navy-950 transition-all hover:bg-accent-400 hover:shadow-lg hover:shadow-accent-500/25 md:inline-flex"
        >
          Let&apos;s Talk
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-ink-200 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-navy-700/60 bg-navy-900/95 backdrop-blur-lg md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-200 hover:text-accent-400"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-navy-950"
            >
              Let&apos;s Talk
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
