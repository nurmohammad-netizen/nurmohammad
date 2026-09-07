"use client";

import { useReducedMotion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

export function CountUp({ value, duration = 1000, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(value.replace(/\d+(?:\.\d+)?/g, "0"));

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) return;

    const numericValues = [...value.matchAll(/\d+(?:\.\d+)?/g)].map((match) => Number(match[0]));
    const startTime = performance.now();
    let frameId = 0;

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      let numericIndex = 0;
      const nextValue = value.replace(/\d+(?:\.\d+)?/g, (match) => {
        const target = numericValues[numericIndex++];
        const current = target * easedProgress;
        return match.includes(".") ? current.toFixed(1) : Math.round(current).toString();
      });

      setDisplayValue(nextValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(update);
      }
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [duration, isInView, shouldReduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {shouldReduceMotion ? value : displayValue}
    </span>
  );
}