"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";

const metrics = [
  { value: "23", label: "Slash commands" },
  { value: "16", label: "Active skills" },
  { value: "6", label: "MCP servers" },
  { value: "2", label: "Operating domains" },
];

const log = [
  "06:42 · /log-weight → daily-log.md updated",
  "07:30 · /daily-brief → 3 priorities surfaced",
  "09:12 · /quick-prospect → research dossier compiled",
  "11:05 · /implement → site update shipped to prod",
  "14:38 · /report → weekly metrics rolled up",
  "19:00 · cloud routine → Sunday macro recompute scheduled",
];

export function CaseStudy() {
  return (
    <section id="case" className="hairline-top py-28 md:py-40 px-6 lg:px-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="04"
          eyebrow="Signature build"
          title={
            <>
              The operator&apos;s own{" "}
              <span className="accent-word">AIOS</span>.
            </>
          }
          description="Stratum is built by an operator who lives inside the system they sell. The studio's first case study is the studio itself."
        />

        <div className="mt-20 grid lg:grid-cols-12 gap-px bg-border hairline-top hairline-bottom">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-background p-8 md:p-12 flex flex-col gap-8"
          >
            <div className="flex items-center gap-3">
              <span className="block h-px w-8 bg-accent" />
              <span className="text-mono text-xs tracking-[0.2em] uppercase">
                Jesseman&apos;s AIOS · live
              </span>
            </div>

            <h3 className="text-3xl md:text-5xl font-medium tracking-[-0.02em] leading-[1.05]">
              One workspace runs an entire business and a 90-day body
              protocol — without a SaaS subscription in sight.
            </h3>

            <p className="text-muted leading-relaxed max-w-2xl">
              Prospect dossiers, research synthesis, sales workflows, Indian
              macro framework, six-day lift plan, daily logs, and a caveman
              output style — all governed by a single CLAUDE.md and
              twenty-three slash commands. Every input compounds into the
              next morning&apos;s brief.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border hairline-top hairline-bottom">
              {metrics.map((m) => (
                <div key={m.label} className="bg-background p-5 flex flex-col gap-1">
                  <span className="text-mono text-3xl font-light tracking-tight">
                    {m.value}
                  </span>
                  <span className="label">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="hairline-top pt-6">
              <p className="label mb-3">Outcome</p>
              <p className="text-base md:text-lg leading-relaxed max-w-2xl">
                Two-hour ops loop instead of eight. Operator inputs auto-log
                to a case-study library. Health and business share one source
                of truth. The studio runs as proof.
              </p>
            </div>
          </motion.div>

          {/* Right: terminal log */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-background p-8 md:p-12 flex flex-col gap-5"
          >
            <div className="flex items-center justify-between hairline-bottom pb-4">
              <span className="text-mono text-xs tracking-[0.18em] uppercase text-muted">
                /var/log/aios
              </span>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-muted-2" />
                <span className="h-2 w-2 rounded-full bg-muted-2" />
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
            </div>

            <ul className="flex flex-col gap-3 text-mono text-[13px] leading-relaxed">
              {log.map((line, i) => (
                <motion.li
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="text-muted hover:text-foreground transition-colors"
                >
                  <span className="text-accent mr-2">›</span>
                  {line}
                </motion.li>
              ))}
              <li className="text-muted">
                <span className="text-accent mr-2">›</span>
                <span className="blink">_</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
