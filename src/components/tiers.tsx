"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";

const tiers = [
  {
    code: "T1",
    name: "Lite",
    tagline: "Gateway build.",
    price: "$1,500",
    cadence: "one-time",
    timeline: "3 days",
    description:
      "A taste of the operating layer. Custom CLAUDE.md, three tuned skills, two slash commands, setup guide.",
    includes: [
      "Personalised CLAUDE.md",
      "3 custom skills",
      "2 slash commands",
      "Setup + handoff guide",
    ],
    for: "Operators sizing up the system.",
  },
  {
    code: "T2",
    name: "Operator",
    tagline: "The full workspace.",
    price: "$4,500",
    cadence: "+ $1,000/mo tuning",
    timeline: "14 days",
    featured: true,
    description:
      "End-to-end AIOS built around how you actually run the business. Skills, commands, hooks, MCP wiring, monthly tuning.",
    includes: [
      "Full domain-tuned CLAUDE.md",
      "5–10 custom skills",
      "5–8 slash commands",
      "Hooks + auto-loggers",
      "MCP wiring (Gmail / Notion / Slack / etc.)",
      "Monthly tuning sprints",
      "1 case-study artifact",
    ],
    for: "Solo founders, coaches, consultants ($5–50K/mo).",
  },
  {
    code: "T3",
    name: "Studio",
    tagline: "Custom infrastructure.",
    price: "$15,000",
    cadence: "or $3K/mo × 6",
    timeline: "45–60 days",
    description:
      "Bespoke MCP servers, multi-agent workflows, cron-scheduled cloud routines, and deep integration with your stack.",
    includes: [
      "Everything in Operator",
      "Custom MCP servers",
      "Multi-agent workflows",
      "Scheduled cloud routines",
      "Stack-deep integrations",
      "Quarterly tune-ups × 12mo",
    ],
    for: "Operators $50K+/mo, agencies, productized services.",
  },
];

export function Tiers() {
  return (
    <section id="tiers" className="hairline-top py-28 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="02"
          eyebrow="Strategic Tiers"
          title={
            <>
              One gateway, three depths of{" "}
              <span className="accent-word">build</span>.
            </>
          }
          description="Stratum scales from a sixty-minute Discovery session to a fully bespoke agent infrastructure. Pick the rung that matches your stage."
        />

        {/* Discovery — rung 0 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-20 hairline-top hairline-bottom bg-background"
        >
          <div className="grid lg:grid-cols-12 gap-6 md:gap-10 p-8 md:p-10">
            <div className="lg:col-span-3 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-mono text-xs text-accent">/T0</span>
                <span className="text-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                  60 minutes
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                Stratum<span className="text-muted-2"> · </span>
                <span className="italic font-light">Discovery</span>
              </h3>
              <p className="text-sm text-muted">
                Start here. One hour, your business, my screen.
              </p>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-2 justify-center">
              <div className="flex items-baseline gap-2">
                <span className="text-mono text-4xl md:text-5xl font-light tracking-tight">
                  $250
                </span>
                <span className="text-mono text-xs text-muted">one-time</span>
              </div>
              <p className="text-xs text-muted">
                Credited toward Lite or Operator if you proceed within 14 days.
              </p>
            </div>

            <div className="lg:col-span-4">
              <p className="label mb-3">What happens</p>
              <ul className="flex flex-col gap-2 text-sm">
                {[
                  "Live audit of your current workflow loops",
                  "Tactical AIOS sketch — skills, commands, hooks",
                  "Tier-fit recommendation (or a no, honestly)",
                  "Recording + notes you keep, no obligation",
                ].map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="text-accent mt-1">+</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end gap-3">
              <p className="label">For</p>
              <p className="text-sm">Operators sizing up before a build.</p>
              <a
                href="https://calendly.com/njessemandevamirtham/stratum-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex items-center gap-2 text-mono text-xs tracking-[0.18em] uppercase border-b border-foreground/30 pb-1 hover:border-accent hover:text-accent transition-colors"
              >
                Book the hour
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 md:mt-16">
          <p className="label mb-6">Or skip ahead — the three builds</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-border hairline-top hairline-bottom">
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
