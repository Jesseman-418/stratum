"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const clients = [
  {
    code: "C1",
    name: "Kaval",
    url: "https://kaval.chat",
    scope: "Landing site development",
    contact: "Anuranjan · CEO",
    stack: "Next.js · Vercel",
    status: "Live",
  },
];

export function Clients() {
  return (
    <section
      id="clients"
      className="hairline-top py-20 md:py-28 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
          <div className="md:col-span-3 flex items-start gap-4">
            <span className="text-mono text-xs text-accent">/04b</span>
            <span className="label">Client builds</span>
          </div>
          <p className="md:col-span-9 text-base md:text-lg text-muted max-w-2xl leading-relaxed">
            Operator-grade landing sites delivered alongside the AIOS build.
            Same hand, same standard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border hairline-top hairline-bottom">
          {clients.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-background p-8 md:p-10 flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-mono text-xs text-accent">/{c.code}</span>
                <span className="text-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                  {c.status}
                </span>
              </div>

              <Link
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3"
              >
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight group-hover:text-accent transition-colors">
                  {c.name}{" "}
                  <span className="text-mono text-base text-muted group-hover:text-accent transition-colors">
                    ↗
                  </span>
                </h3>
                <span className="text-mono text-[11px] tracking-[0.18em] uppercase text-muted">
                  {c.url.replace("https://", "")}
                </span>
              </Link>

              <div className="hairline-top pt-5 grid grid-cols-2 gap-px bg-border">
                <div className="bg-background p-4 flex flex-col gap-1">
                  <span className="label">Scope</span>
                  <span className="text-sm">{c.scope}</span>
                </div>
                <div className="bg-background p-4 flex flex-col gap-1">
                  <span className="label">Stack</span>
                  <span className="text-sm">{c.stack}</span>
                </div>
              </div>

              <span className="text-mono text-[11px] tracking-[0.18em] uppercase text-muted">
                {c.contact}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
