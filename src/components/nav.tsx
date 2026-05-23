"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Tiers", href: "#tiers" },
  { label: "System", href: "#system" },
  { label: "Case", href: "#case" },
  { label: "Clients", href: "#clients" },
  { label: "Process", href: "#process" },
  { label: "Initiate", href: "#contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/60 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <img
            src="/stratum-mark-knockout.svg"
            alt=""
            aria-hidden="true"
            className="h-6 w-6 transition-transform group-hover:rotate-3"
          />
          <span className="text-mono text-sm tracking-[0.2em] font-medium">
            STRATUM
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-mono text-[11px] tracking-[0.18em] uppercase text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-mono text-[11px] tracking-[0.18em] uppercase border border-border px-3 py-1.5 hover:border-accent hover:text-accent transition-colors"
        >
          Start a build →
        </a>
      </div>
    </motion.header>
  );
}
