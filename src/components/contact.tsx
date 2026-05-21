"use client";

import { motion } from "framer-motion";
import { useState, useTransition } from "react";
import { SectionHeader } from "./section-header";
import { sendContact } from "@/lib/actions";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <section id="contact" className="hairline-top py-28 md:py-40 px-6 lg:px-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="06"
          eyebrow="Initialise"
          title={
            <>
              Tell Stratum what your operating layer should{" "}
              <span className="italic font-light text-accent">do</span>.
            </>
          }
          description="Sixty-second intake. You get a personal reply with a free 15-minute Loom teardown of how your workflow would look as an AIOS — within 24 hours."
        />

        <div className="mt-20 grid lg:grid-cols-12 gap-px bg-border hairline-top hairline-bottom">
          {/* Left: meta */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 bg-background p-8 md:p-12 flex flex-col gap-10"
          >
            <div>
              <p className="label mb-2">Direct</p>
              <a
                href="mailto:njessemandevamirtham@gmail.com"
                className="text-mono text-base hover:text-accent transition-colors"
              >
                njessemandevamirtham@gmail.com
              </a>
            </div>
            <div>
              <p className="label mb-2">Studio</p>
              <p className="text-sm leading-relaxed">
                Chennai, India.
                <br />
                Operating in UTC, GMT, EST, PST.
              </p>
            </div>
            <div>
              <p className="label mb-2">Response</p>
              <p className="text-sm leading-relaxed">
                &lt; 24 hours.
                <br />
                Personal reply, signed Jesseman.
              </p>
            </div>
            <div>
              <p className="label mb-2">Or skip the form</p>
              <a
                href="https://calendly.com/njessemandevamirtham/stratum-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-mono text-sm border-b border-foreground/30 pb-1 hover:border-accent hover:text-accent transition-colors"
              >
                Book a 15-min call
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
            <div className="hairline-top pt-8 mt-auto">
              <p className="label mb-2">Not a fit if</p>
              <ul className="text-sm text-muted leading-relaxed flex flex-col gap-1">
                <li>— You want a SaaS subscription, not a build.</li>
                <li>— You want a template, not a tailored system.</li>
                <li>— You don&apos;t already run from a laptop.</li>
              </ul>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-8 bg-background p-8 md:p-12"
          >
            {sent ? (
              <div className="flex flex-col gap-6 min-h-[400px] justify-center">
                <span className="text-mono text-xs text-accent">/ACK</span>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight max-w-xl">
                  Signal received.
                </h3>
                <p className="text-muted max-w-md leading-relaxed">
                  Jesseman will reply within 24 hours with a free Loom
                  teardown of what your AIOS could look like.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setError(null);
                  const data = new FormData(e.currentTarget);
                  startTransition(async () => {
                    const res = await sendContact({
                      source: "aios",
                      name: String(data.get("name") ?? ""),
                      email: String(data.get("email") ?? ""),
                      role: String(data.get("role") ?? ""),
                      tier: String(data.get("tier") ?? ""),
                      loop: String(data.get("loop") ?? ""),
                    });
                    if (res.ok) setSent(true);
                    else setError(res.error);
                  });
                }}
                className="flex flex-col gap-8"
              >
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field
                  label="What do you do (one sentence)"
                  name="role"
                  placeholder="e.g. solo founder, B2B coaching for fintech ops"
                  required
                />
                <Select
                  label="Which tier feels right"
                  name="tier"
                  options={[
                    "Stratum · Lite — $1,500",
                    "Stratum · Operator — $4,500 + $1K/mo",
                    "Stratum · Studio — $15,000",
                    "Not sure yet",
                  ]}
                />
                <Field
                  label="The recurring loop you'd love to delete first"
                  name="loop"
                  as="textarea"
                  rows={3}
                  placeholder="The thing you do 5x a week and resent every time."
                />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 hairline-top pt-8">
                  <span className="text-mono text-[11px] tracking-[0.18em] uppercase text-muted">
                    {error
                      ? `Error: ${error}`
                      : "No funnel. No drip. One human reply."}
                  </span>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="group inline-flex items-center justify-center gap-3 bg-foreground text-background text-mono text-xs tracking-[0.18em] uppercase px-7 py-4 hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPending ? "Sending…" : "Send the signal"}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  as?: "input" | "textarea";
  rows?: number;
};

function Field({ label, name, type = "text", required, placeholder, as = "input", rows = 3 }: FieldProps) {
  const base =
    "w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-base placeholder:text-muted-2 transition-colors";
  return (
    <label className="flex flex-col gap-2">
      <span className="label">{label}</span>
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={rows}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="label">{label}</span>
      <select
        name={name}
        defaultValue={options[options.length - 1]}
        className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-base appearance-none cursor-pointer"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-background text-foreground">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
