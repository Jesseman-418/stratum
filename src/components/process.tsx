"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";

const steps = [
  {
    code: "01",
    name: "Excavate",
    duration: "Day 1–3",
    body: "Sixty-minute audit. Map your workflows, recurring outputs, manual loops, and the moments you copy-paste between tools. The blueprint emerges from your operating reality — not a template.",
  },
  {
    code: "02",
    name: "Architect",
    duration: "Day 3–5",
    body: "Translate the blueprint into a CLAUDE.md, skill graph, command list, and hook plan. You approve the architecture before a single line is written.",
  },
  {
    code: "03",
    name: "Construct",
    duration: "Day 5–12",
    body: "Skills, slash commands, hooks, MCP wiring, output styles. Each piece tested in your real workspace, in your real tone, against your real data.",
  },
  {
    code: "04",
    name: "Hand-off",
    duration: "Day 12–14",
    body: "Live walkthrough. Recorded onboarding loom. 30-day email line for tuning. Your operating layer is live and you know how to extend it yourself.",
  },
];

export function Process() {
  return (
    <section id="process" className="hairline-top py-28 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="05"
          eyebrow="Execution Framework"
          title={
            <>
              Fourteen days from{" "}
              <span className="accent-word">audit</span> to{" "}
              <span className="accent-word">live</span>.
            </>
          }
          description="Stratum is a fixed-scope, fixed-timeline build. No phased ambiguity. No moving targets. Four ordered steps."
        />

        <div className="mt-20 relative">
          {/* vertical rail */}
          <div className="absolute left-[14px] md:left-[26px] top-2 bottom-2 w-px bg-border" />

          <div className="flex flex-col gap-0">
            {steps.map((s, i) => (
              <motion.div
                key={s.code}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative grid md:grid-cols-12 gap-6 md:gap-10 pl-12 md:pl-20 py-10 hairline-bottom last:hairline-bottom"
              >
                {/* node */}
                <span className="absolute left-0 top-12 flex items-center">
                  <span className="block h-3 w-3 bg-accent ring-4 ring-background" />
                </span>

                <div className="md:col-span-3 flex flex-col gap-1">
                  <span className="text-mono text-xs text-accent">/{s.code}</span>
                  <span className="label">{s.duration}</span>
                </div>

                <div className="md:col-span-9">
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
                    {s.name}
                  </h3>
                  <p className="mt-4 text-muted leading-relaxed max-w-2xl">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
