import Link from "next/link";

export function Footer() {
  return (
    <footer className="hairline-top px-6 lg:px-10 py-14 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/stratum-mark-knockout.svg"
                alt=""
                aria-hidden="true"
                className="h-6 w-6"
              />
              <span className="text-mono text-sm tracking-[0.2em]">STRATUM</span>
            </div>
            <p className="text-muted text-sm max-w-sm leading-relaxed">
              Personalized AI operating systems for solo operators. Built on
              Claude Code. Signed Jesseman.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="label">Studio</span>
            <Link href="/#tiers" className="text-sm hover:text-accent transition-colors">
              Tiers
            </Link>
            <Link href="/#system" className="text-sm hover:text-accent transition-colors">
              System
            </Link>
            <Link href="/#case" className="text-sm hover:text-accent transition-colors">
              Case study
            </Link>
            <Link href="/#process" className="text-sm hover:text-accent transition-colors">
              Process
            </Link>
            <a
              href="https://stratum-content.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              Stratum Content →
            </a>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="label">Signal</span>
            <a
              href="mailto:njessemandevamirtham@gmail.com"
              className="text-sm hover:text-accent transition-colors"
            >
              njessemandevamirtham@gmail.com
            </a>
            <span className="text-sm text-muted">Chennai · UTC+5:30</span>
            <span className="text-sm text-muted">
              Reply window &lt; 24h
            </span>
          </div>
        </div>

        <div className="hairline-top pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <span className="text-mono text-[11px] tracking-[0.18em] uppercase text-muted">
            © {new Date().getFullYear()} Stratum Studio · All systems quietly active
          </span>
          <span className="text-mono text-[11px] tracking-[0.18em] uppercase text-muted">
            v1.0 · Built inside its own AIOS
          </span>
        </div>
      </div>
    </footer>
  );
}
