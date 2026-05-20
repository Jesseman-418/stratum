"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type Props = {
  number: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
};

export function SectionHeader({ number, eyebrow, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid md:grid-cols-12 gap-6 md:gap-10"
    >
      <div className="md:col-span-3 flex items-start gap-4">
        <span className="text-mono text-xs text-accent">/{number}</span>
        <span className="label">{eyebrow}</span>
      </div>
      <div className="md:col-span-9">
        <h2 className="text-[clamp(2rem,5vw,4.25rem)] font-medium tracking-[-0.03em] leading-[1] max-w-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
