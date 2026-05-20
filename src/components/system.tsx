"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";

const pillars = [
  {
    code: "01",
    name: "Skills",
    body: "Reusable, model-invokable capabilities. A skill teaches your AIOS how to write a DM, audit a funnel, or run a workflow — once, then forever.",
  },
  {
    code: "02",
    name: "Slash Commands",
    body: "Personal shortcuts. /daily-brief. /ghost. /quick-prospect. Each one is a tuned prompt + tool chain, named in your language.",
  },
  {
    code: "03",
    name: "Hooks",
    body: "Triggered behaviour. Pre-commit lint. Post-message auto-log. Stop-event summaries. The system runs maintenance in the background.",
  },
  {
    code: "04",
    name: "MCP Wiring",
    body: "Direct integrations with Gmail, Notion, Slack, Apollo, Vercel, custom APIs. Your agent reaches into your stack natively, not through copy-paste.",
  },
  {
    code: "05",
    name: "Sub-Agents",
    body: "Specialised workers. A research agent. A writing agent. A reviewer. Each carries its own context, model, and tools — orchestrated from the main loop.",
  },
  {
    code: "06",
    name: "Cloud Routines",
    body: "Scheduled agents that run while you sleep. Weekly recompute. Daily brief. Macro audits. The system keeps moving without you.",
  },
];

export function System() {
  return (
    <section id="system" className="hairline-top py-28 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="03"
          eyebrow="The System"
          title={
            <>
              Six layers of <span className="italic font-light text-accent">leverage</span>,
              composed into one AIOS.
            </>
          }
          description="Every Stratum build assembles these primitives into a workspace that feels like an extension of how you think. Nothing generic. Nothing borrowed."
        />

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border hairline-top hairline-bottom">
          {pillars.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-background p-8 md:p-10 flex flex-col gap-6 hover:bg-surface transition-colors duration-500"
            >
              <div className="flex items-center justify-between">
                <span className="text-mono text-xs text-accent">/{p.code}</span>
                <span className="block h-px w-10 bg-border group-hover:bg-accent transition-colors" />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                {p.name}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Manifesto line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-24 hairline-top pt-10 grid md:grid-cols-12 gap-6"
        >
          <span className="label md:col-span-3">Manifesto</span>
          <p className="md:col-span-9 text-2xl md:text-3xl tracking-tight leading-snug max-w-3xl">
            Software shouldn&apos;t be a place you visit. It should be the layer
            you operate from —{" "}
            <span className="italic font-light text-accent">
              custom-fit, ambient, and quietly accumulating leverage every day.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
