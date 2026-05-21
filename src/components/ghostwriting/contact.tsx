"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "../section-header";

export function GhostContact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="hairline-top py-28 md:py-40 px-6 lg:px-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="05"
          eyebrow="Initialise"
          title={
            <>
              Send one post. Get a free{" "}
              <span className="italic font-light text-accent">rewrite</span> back.
            </>
          }
          description="Sixty-second intake. You get a personally rewritten version of one of your recent posts within 24 hours — no retainer talk until you've seen the work."
        />

        <div className="mt-20 grid lg:grid-cols-12 gap-px bg-border hairline-top hairline-bottom">
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
                Free rewrite back in &lt; 24 hours.
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
                <li>— You want a content tool, not a service.</li>
                <li>— You don&apos;t have 30+ posts to train on.</li>
                <li>— You want raw AI shipped, no edit pass.</li>
              </ul>
            </div>
          </motion.div>

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
                  Jesseman will send back a free rewrite within 24 hours.
                  If the rewrite lands, we&apos;ll talk retainer. If not, no
                  follow-up, no funnel.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="flex flex-col gap-8"
              >
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field
                  label="What do you do (one sentence)"
                  name="role"
                  placeholder="e.g. solo founder, B2B SaaS for ops teams"
                  required
                />
                <Field
                  label="Where you post (handle or URL)"
                  name="handle"
                  placeholder="LinkedIn / X / IG handle, newsletter, etc."
                  required
                />
                <Select
                  label="Which tier feels right"
                  name="tier"
                  options={[
                    "Stratum · Lite — $1,500/mo",
                    "Stratum · Operator — $3,000/mo",
                    "Stratum · Studio — $7,500/mo",
                    "Just the free rewrite for now",
                  ]}
                />
                <Field
                  label="Paste one recent post you want rewritten"
                  name="post"
                  as="textarea"
                  rows={5}
                  placeholder="Paste the full text of a recent post. The rewrite comes back to your email within 24 hours."
                />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 hairline-top pt-8">
                  <span className="text-mono text-[11px] tracking-[0.18em] uppercase text-muted">
                    No funnel. No drip. One human reply.
                  </span>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 bg-foreground text-background text-mono text-xs tracking-[0.18em] uppercase px-7 py-4 hover:bg-accent transition-colors"
                  >
                    Send the post
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
