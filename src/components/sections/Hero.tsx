"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { personal, heroStats } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32">
      <div aria-hidden className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-display text-[16rem] font-bold leading-none text-ink-100/[0.025] sm:right-4 sm:text-[24rem]">
        NM
      </div>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-navy-600/60 bg-navy-800/60 px-4 py-1.5 text-xs font-medium text-ink-300 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" />
          Open to new opportunities & collaborations
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 font-display text-4xl font-bold leading-[1.05] text-ink-100 sm:text-6xl lg:text-7xl"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-2xl font-display text-xl font-medium text-accent-400 sm:text-2xl"
        >
          {personal.title} <span className="text-ink-500">·</span> {personal.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-ink-400 sm:text-lg"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="#contact"
            className="interactive-button group inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-navy-950"
          >
            Get in Touch
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#experience"
            className="interactive-button inline-flex items-center gap-2 rounded-full border border-navy-600 px-6 py-3 text-sm font-semibold text-ink-200"
          >
            View Experience
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 flex items-center gap-2 text-sm text-ink-500"
        >
          <MapPin size={14} /> {personal.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-navy-700/60 pt-10 sm:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-bold text-ink-100 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-ink-500 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
