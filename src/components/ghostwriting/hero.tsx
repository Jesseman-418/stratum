"use client";

import { motion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1] as const;

export function GhostHero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-end pb-16 pt-32 px-6 lg:px-10 overflow-hidden"
    >
      <CornerTicks />

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[60vh] glow" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easing, delay: 0.1 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="block h-px w-10 bg-accent" />
          <span className="label">001 / Content Operator</span>
          <span className="text-mono text-[11px] text-muted">
            DONE-FOR-YOU GHOSTWRITING · AI DELIVERY
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easing, delay: 0.2 }}
          className="text-[clamp(2.5rem,8vw,7.5rem)] font-medium tracking-[-0.04em] leading-[0.92] max-w-6xl"
        >
          We write your posts.
          <br />
          You hit{" "}
          <span className="italic font-light text-accent">publish.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easing, delay: 0.4 }}
          className="mt-10 max-w-2xl text-lg md:text-xl text-muted leading-relaxed"
        >
          Stratum Studio is your AI-powered Chief Content Officer. We train
          a voice model on your last 30 posts, draft your weekly content, and
          Jesseman edits every post by hand before it lands in your inbox.
          You never see Claude. You just approve and ship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easing, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 bg-foreground text-background text-mono text-xs tracking-[0.18em] uppercase px-6 py-4 hover:bg-accent transition-colors"
          >
            Get a free rewrite
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="https://calendly.com/njessemandevamirtham/stratum-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 border border-accent text-accent text-mono text-xs tracking-[0.18em] uppercase px-6 py-4 hover:bg-accent hover:text-background transition-colors"
          >
            Book a 15-min call
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#tiers"
            className="inline-flex items-center justify-center gap-3 border border-border text-mono text-xs tracking-[0.18em] uppercase px-6 py-4 hover:border-accent hover:text-accent transition-colors"
          >
            View the three tiers
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: easing, delay: 0.9 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border hairline-top"
        >
          {[
            ["80%", "AI drafted"],
            ["100%", "Human edited"],
            ["24h", "Approval window"],
            ["0", "Raw AI shipped"],
          ].map(([n, l]) => (
            <div
              key={l}
              className="bg-background px-6 py-5 flex flex-col gap-1"
            >
              <span className="text-mono text-3xl font-light tracking-tight">
                {n}
              </span>
              <span className="label">{l}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CornerTicks() {
  const cls = "absolute h-3 w-3 border-foreground/30";
  return (
    <>
      <span className={`${cls} top-16 left-6 lg:left-10 border-t border-l`} />
      <span className={`${cls} top-16 right-6 lg:right-10 border-t border-r`} />
      <span className={`${cls} bottom-6 left-6 lg:left-10 border-b border-l`} />
      <span className={`${cls} bottom-6 right-6 lg:right-10 border-b border-r`} />
    </>
  );
}
