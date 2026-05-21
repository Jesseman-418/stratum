"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../section-header";

const steps = [
  {
    code: "01",
    label: "Day 0",
    title: "Free rewrite",
    body:
      "Send one of your recent posts. Within 24 hours you get a sharpened version back — new hook, tighter structure, clearer payoff. No retainer talk until you've seen the work.",
  },
  {
    code: "02",
    label: "Week 1",
    title: "Voice train",
    body:
      "Claude is trained on your last 30 posts — your idioms, your sentence shape, your hooks, your humor. The voice model is invisible to you. It lives inside the studio.",
  },
  {
    code: "03",
    label: "Each Sunday",
    title: "Sunday drop",
    body:
      "The full week of posts lands in your inbox every Sunday. You have 24 hours to reply with edits or approve. Jesseman finals every draft before it reaches you.",
  },
  {
    code: "04",
    label: "Each day",
    title: "You publish",
    body:
      "You hit publish on your own profile. Voice is yours. Posts are yours. No 'powered by' anywhere. Stratum stays invisible. You stay the operator.",
  },
];

export function GhostHowItWorks() {
  return (
    <section id="how" className="hairline-top py-28 md:py-40 px-6 lg:px-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="03"
          eyebrow="The Delivery Loop"
          title={
            <>
              Four steps from cold prospect to{" "}
              <span className="italic font-light text-accent">compounding posts</span>.
            </>
          }
          description="No phased ambiguity. No moving targets. A single weekly rhythm that holds while you build the rest of your business."
        />

        <div className="mt-20 grid md:grid-cols-2 gap-px bg-border hairline-top hairline-bottom">
          {steps.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-8 md:p-12 flex flex-col gap-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-mono text-xs text-accent">/{s.code}</span>
                <span className="text-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                  {s.label}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                {s.title}
              </h3>
              <p className="text-sm md:text-base text-muted leading-relaxed max-w-md">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
