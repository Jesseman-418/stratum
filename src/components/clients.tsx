"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const featured = {
  code: "F/001",
  name: "Kaval",
  url: "https://kaval.chat",
  domain: "kaval.chat",
  byline: "Anuranjan · CEO",
  status: "Live · in production",
  scope: "Landing site development",
  brief:
    "Operator-grade landing build for a conversational AI product. Component system, hero/feature/CTA copy, and live deploy on Vercel — shipped end-to-end with the AIOS stack the studio runs on.",
  stack: ["Next.js 16", "Tailwind v4", "Framer Motion", "Vercel"],
  deliverables: [
    "Landing site architecture",
    "Component library + design tokens",
    "Edge deploy + custom domain",
    "Performance + SEO baseline",
  ],
  metrics: [
    ["1", "Site shipped"],
    ["7", "Bespoke sections"],
    ["100", "Lighthouse target"],
    ["∞", "Edits via Claude Code"],
  ],
};

const pipeline = [
  {
    code: "P/002",
    label: "AI agent founder · NYC",
    detail: "Pre-launch ops layer + content engine",
    status: "Audit booked",
    when: "Week of 2026-05-26",
  },
  {
    code: "P/003",
    label: "Newsletter operator · 18K subs",
    detail: "Sunday cloud routine + weekly digest pipeline",
    status: "Proposal sent",
    when: "Awaiting countersign",
  },
  {
    code: "P/004",
    label: "SaaS founder · post-seed",
    detail: "Founder AIOS — sales, comms, briefs",
    status: "In discussion",
    when: "Discovery this week",
  },
  {
    code: "P/005",
    label: "Creator · 65K on X",
    detail: "Voice-trained ghostwriting handoff + studio install",
    status: "Audit complete",
    when: "Scoping the Operator tier",
  },
];

export function Clients() {
  return (
    <section
      id="clients"
      className="hairline-top py-24 md:py-32 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-14 md:mb-20">
          <div className="md:col-span-3 flex items-start gap-4">
            <span className="text-mono text-xs text-accent">/04b</span>
            <span className="label">Field work</span>
          </div>
          <div className="md:col-span-9 flex flex-col gap-5">
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-medium tracking-[-0.025em] leading-[1.05] max-w-3xl">
              One live build.{" "}
              <span className="italic font-light text-accent">
                Four more in motion.
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted max-w-2xl leading-relaxed">
              Operator-grade landing sites delivered alongside the AIOS build.
              The featured project below is live. The pipeline behind it is the
              current bench.
            </p>
          </div>
        </div>

        {/* Featured — Kaval */}
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-12 gap-px bg-border hairline-top hairline-bottom"
        >
          {/* Left: narrative */}
          <div className="lg:col-span-5 bg-background p-8 md:p-12 flex flex-col gap-7">
            <div className="flex items-center justify-between">
              <span className="text-mono text-xs text-accent">
                /{featured.code}
              </span>
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="text-mono text-[10px] tracking-[0.18em] uppercase text-accent">
                  {featured.status}
                </span>
              </span>
            </div>

            <Link
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3"
            >
              <h3 className="text-5xl md:text-6xl font-medium tracking-[-0.02em] leading-[0.95] group-hover:text-accent transition-colors">
                {featured.name}
                <span className="text-mono text-xl ml-2 align-top inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </h3>
              <span className="text-mono text-xs tracking-[0.16em] uppercase text-muted group-hover:text-foreground transition-colors">
                {featured.domain}
              </span>
            </Link>

            <p className="text-base text-muted leading-relaxed max-w-md">
              {featured.brief}
            </p>

            <div className="hairline-top pt-6 flex flex-col gap-3">
              <span className="label">Deliverables</span>
              <ul className="flex flex-col gap-2">
                {featured.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-baseline gap-3 text-sm md:text-base"
                  >
                    <span className="text-accent text-mono text-xs">§</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hairline-top pt-5 flex flex-wrap gap-2">
              {featured.stack.map((s) => (
                <span
                  key={s}
                  className="text-mono text-[10.5px] tracking-[0.14em] uppercase border border-border px-2.5 py-1 text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-auto hairline-top pt-5">
              <span className="label">Byline</span>
              <p className="text-mono text-sm mt-1 text-muted">
                {featured.byline}
              </p>
            </div>
          </div>

          {/* Right: browser mockup */}
          <div className="lg:col-span-7 bg-surface p-6 md:p-10 flex flex-col gap-5">
            <BrowserMockup url={featured.domain} />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border hairline-top hairline-bottom">
              {featured.metrics.map(([n, l]) => (
                <div
                  key={l}
                  className="bg-background p-5 flex flex-col gap-1"
                >
                  <span className="text-mono text-3xl font-light tracking-tight">
                    {n}
                  </span>
                  <span className="label">{l}</span>
                </div>
              ))}
            </div>

            <Link
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-3 hairline-top pt-5 text-mono text-xs tracking-[0.16em] uppercase text-muted hover:text-accent transition-colors"
            >
              <span>Open the live build</span>
              <span className="group-hover:translate-x-1 transition-transform">
                {featured.domain} →
              </span>
            </Link>
          </div>
        </motion.article>

        {/* Pipeline */}
        <div className="mt-20 md:mt-28">
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-10">
            <span className="label md:col-span-3">Current pipeline</span>
            <p className="md:col-span-9 text-base md:text-lg text-muted max-w-2xl leading-relaxed">
              Four operators inside the funnel right now. Audit booked through
              proposal sent. Names redacted until contracts countersign.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border hairline-top hairline-bottom">
            {pipeline.map((p, i) => (
              <motion.div
                key={p.code}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="bg-background p-6 md:p-7 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-mono text-[11px] tracking-[0.16em] uppercase text-muted">
                    /{p.code}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="block h-1.5 w-1.5 rounded-full bg-muted-2" />
                    <span className="text-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                      {p.status}
                    </span>
                  </span>
                </div>

                <h4 className="text-xl md:text-2xl font-medium tracking-tight">
                  {p.label}
                </h4>
                <p className="text-sm text-muted leading-relaxed">{p.detail}</p>

                <div className="mt-auto hairline-top pt-3 flex items-center justify-between text-mono text-[11px] tracking-[0.14em] uppercase text-muted">
                  <span>Window</span>
                  <span>{p.when}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-mono text-[11px] tracking-[0.16em] uppercase text-muted">
            Pipeline visible at the prospect&apos;s permission. Specifics on the call.
          </p>
        </div>
      </div>
    </section>
  );
}

function BrowserMockup({ url }: { url: string }) {
  return (
    <div className="border border-border bg-background overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]">
      {/* Chrome bar */}
      <div className="hairline-bottom px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="block h-2.5 w-2.5 rounded-full bg-muted-2" />
          <span className="block h-2.5 w-2.5 rounded-full bg-muted-2" />
          <span className="block h-2.5 w-2.5 rounded-full bg-muted-2" />
        </div>
        <div className="flex-1 mx-2 px-3 py-1 border border-border bg-surface flex items-center gap-2">
          <span className="text-mono text-[10px] text-muted">↗</span>
          <span className="text-mono text-xs text-muted truncate">
            https://{url}
          </span>
        </div>
        <span className="text-mono text-[10px] tracking-[0.18em] uppercase text-accent">
          Live
        </span>
      </div>

      {/* Faux content — hero composition */}
      <div className="aspect-[16/10] relative bg-gradient-to-br from-surface to-background p-8 md:p-12 flex flex-col justify-end gap-5 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 70% 30%, rgba(196,167,106,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="border-r border-border/40 last:border-r-0"
            />
          ))}
        </div>
        <span className="relative text-mono text-[10.5px] tracking-[0.22em] uppercase text-accent">
          · Conversational AI
        </span>
        <h4 className="relative text-3xl md:text-5xl font-medium tracking-[-0.025em] leading-[1.02] max-w-md">
          Talk to your data.{" "}
          <span className="italic font-light text-accent">Get answers back.</span>
        </h4>
        <p className="relative text-sm text-muted max-w-sm">
          Built on the Stratum AIOS stack. Shipped end-to-end with the studio.
        </p>
        <div className="relative flex flex-wrap gap-2 mt-1">
          <span className="text-mono text-[10px] tracking-[0.14em] uppercase border border-border px-2.5 py-1.5">
            Start chatting →
          </span>
          <span className="text-mono text-[10px] tracking-[0.14em] uppercase border border-border px-2.5 py-1.5 text-muted">
            See the demo
          </span>
        </div>

        {/* tick markers */}
        <span className="absolute top-3 right-4 text-mono text-[10px] text-muted">
          / 001
        </span>
      </div>
    </div>
  );
}
