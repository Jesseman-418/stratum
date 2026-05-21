"use server";

import { Resend } from "resend";

const TO_EMAIL = "njessemandevamirtham@gmail.com";

type AiosForm = {
  source: "aios";
  name: string;
  email: string;
  role: string;
  tier: string;
  loop: string;
};

type GhostForm = {
  source: "ghostwriting";
  name: string;
  email: string;
  role: string;
  handle: string;
  tier: string;
  post: string;
};

export type ContactForm = AiosForm | GhostForm;

export async function sendContact(
  form: ContactForm
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!form.name?.trim() || !form.email?.trim()) {
    return { ok: false, error: "Name and email required." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      error:
        "Email service not configured. Reach Jesseman directly at " +
        TO_EMAIL,
    };
  }

  const resend = new Resend(apiKey);
  const fromAddress =
    process.env.RESEND_FROM ?? "Stratum <onboarding@resend.dev>";

  const subject =
    form.source === "aios"
      ? `[Stratum AIOS] ${form.name} — ${form.tier || "tier TBD"}`
      : `[Stratum Content] ${form.name} — ${form.tier || "rewrite request"}`;

  const lines =
    form.source === "aios"
      ? [
          `Name: ${form.name}`,
          `Email: ${form.email}`,
          `Role: ${form.role}`,
          `Tier: ${form.tier}`,
          ``,
          `The loop they want deleted:`,
          form.loop || "(not provided)",
        ]
      : [
          `Name: ${form.name}`,
          `Email: ${form.email}`,
          `Role: ${form.role}`,
          `Handle / where they post: ${form.handle}`,
          `Tier: ${form.tier}`,
          ``,
          `Post to rewrite:`,
          form.post || "(not provided)",
        ];

  try {
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: TO_EMAIL,
      replyTo: form.email,
      subject,
      text: lines.join("\n"),
    });

    if (error) {
      return { ok: false, error: error.message ?? "Send failed." };
    }

    return { ok: true };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error.";
    return { ok: false, error: msg };
  }
}
