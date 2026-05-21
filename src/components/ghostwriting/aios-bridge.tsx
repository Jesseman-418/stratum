"use client";

import { motion } from "framer-motion";

export function GhostAiosBridge() {
  return (
    <section
      id="studio"
      className="hairline-top py-28 md:py-40 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-3 flex items-start gap-4">
            <span className="text-mono text-xs text-accent">/04</span>
            <span className="label">Behind the curtain</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-9"
          >
            <h2 className="text-[clamp(2rem,5vw,4.25rem)] font-medium tracking-[-0.03em] leading-[1] max-w-4xl">
              The studio runs on its own{" "}
              <span className="italic font-light text-accent">AIOS</span>.
            </h2>

            <p className="mt-8 max-w-2xl text-base md:text-lg text-muted leading-relaxed">
              Stratum can ghostwrite at this volume because there is an operating
              layer underneath. Twenty-three slash commands, sixteen skills, six
              MCP servers — one workspace governs voice training, drafting,
              repurposing, and analytics. Most clients never see it. A few want
              their own.
            </p>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border hairline-top hairline-bottom">
              {[
                ["23", "Slash commands"],
                ["16", "Active skills"],
                ["6", "MCP servers"],
                ["2hr", "Ops loop"],
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
            </div>

            <div className="mt-16 hairline-top pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <p className="text-sm text-muted max-w-md leading-relaxed">
                Want the operating layer that runs your ghostwriting installed
                inside <em>your</em> business?
              </p>
              <a
                href="/"
                className="group inline-flex items-center justify-center gap-3 border border-border text-mono text-xs tracking-[0.18em] uppercase px-6 py-4 hover:border-accent hover:text-accent transition-colors"
              >
                See Stratum Studio
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
