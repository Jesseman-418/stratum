"use client";

const phrases = [
  "Skills",
  "Slash Commands",
  "Hooks",
  "MCP Wiring",
  "Sub-Agents",
  "Cloud Routines",
  "Custom Memory",
  "Output Styles",
  "CLAUDE.md",
  "Auto-Logs",
];

export function Marquee() {
  return (
    <div className="hairline-top hairline-bottom py-5 overflow-hidden bg-surface">
      <div className="flex whitespace-nowrap marquee">
        {[...phrases, ...phrases, ...phrases].map((p, i) => (
          <div key={i} className="flex items-center gap-10 px-6">
            <span className="text-mono text-sm tracking-[0.2em] uppercase text-muted">
              {p}
            </span>
            <span className="text-accent/40">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
