"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../section-header";

const tiers = [
  {
    code: "T1",
    name: "Lite",
    tagline: "Single-channel cadence.",
    price: "$1,500",
    cadence: "/ month",
    timeline: "4 posts/wk",
    description:
      "Steady, voice-matched content on the one platform that matters most to you. Sunday delivery, 24-hour approval.",
    includes: [
      "Voice model trained on your last 30 posts",
      "4 posts/wk on 1 platform",
      "Jesseman-edited, never raw AI",
      "Sunday weekly drop",
      "30-day notice cancellation",
    ],
    for: "$5K–$30K/mo operators starting to scale content.",
  },
  {
    code: "T2",
    name: "Operator",
    tagline: "Multi-channel cadence.",
    price: "$3,000",
    cadence: "/ month",
    timeline: "8 posts/wk",
    featured: true,
    description:
      "Two platforms, long-form weekly, IG stories. The cadence operators actually need to keep audience momentum.",
    includes: [
      "Everything in Lite",
      "8 posts/wk on 2 platforms",
      "1 long-form / week (newsletter or blog)",
      "3 IG stories / week",
      "Bi-weekly strategy check-in",
    ],
    for: "$30K–$150K/mo founders, coaches, consultants.",
  },
  {
    code: "T3",
    name: "Studio",
    tagline: "Full content operation.",
    price: "$7,500",
    cadence: "/ month",
    timeline: "12+ posts/wk",
    description:
      "Three platforms, two long-form, full repurposing engine, monthly analytics. Outsource the content function.",
    includes: [
      "Everything in Operator",
      "12+ posts/wk on 3 platforms",
      "2 long-form / week",
      "Email newsletter ghostwritten",
      "Full repurposing engine",
      "Monthly analytics + voice tune-up",
    ],
    for: "$150K+/mo operators, agencies, productized SaaS founders.",
  },
];

export function GhostTiers() {
  return (
    <section id="tiers" className="hairline-top py-28 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          eyebrow="Three Cadences"
          title={
            <>
              Three depths of{" "}
              <span className="italic font-light text-accent">delivery</span>.
            </>
          }
          description="Stratum scales from one platform to a full content operation. Same edit standard at every tier — Jesseman finals every post."
        />

        <div className="mt-20 grid lg:grid-cols-3 gap-px bg-border hairline-top hairline-bottom">
          {tiers.map((t, i) => (
            <motion.div
              key={t.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative bg-background p-8 md:p-10 flex flex-col gap-8 ${
                t.featured ? "lg:-mt-6 lg:-mb-6 bg-surface ring-1 ring-accent/30" : ""
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-8 md:left-10">
                  <span className="text-mono text-[10px] tracking-[0.2em] uppercase bg-accent text-background px-2 py-1">
                    Most fit
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-mono text-xs text-accent">/{t.code}</span>
                <span className="text-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                  {t.timeline}
                </span>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                  Stratum<span className="text-muted-2"> · </span>
                  <span className="italic font-light">{t.name}</span>
                </h3>
                <p className="mt-2 text-muted">{t.tagline}</p>
              </div>

              <div className="flex items-baseline gap-3 hairline-top pt-6">
                <span className="text-mono text-4xl md:text-5xl font-light tracking-tight">
                  {t.price}
                </span>
                <span className="text-mono text-xs text-muted">{t.cadence}</span>
              </div>

              <p className="text-sm text-muted leading-relaxed">{t.description}</p>

              <ul className="flex flex-col gap-3 hairline-top pt-6">
                {t.includes.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm">
                    <span className="text-accent mt-1">+</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 hairline-top">
                <p className="label mb-3">For</p>
                <p className="text-sm">{t.for}</p>
                <a
                  href="#contact"
                  className="group mt-6 inline-flex items-center gap-2 text-mono text-xs tracking-[0.18em] uppercase border-b border-foreground/30 pb-1 hover:border-accent hover:text-accent transition-colors"
                >
                  Initiate {t.name.toLowerCase()}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
