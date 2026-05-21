import type { Metadata } from "next";
import { GhostNav } from "@/components/ghostwriting/nav";
import { GhostHero } from "@/components/ghostwriting/hero";
import { GhostTiers } from "@/components/ghostwriting/tiers";
import { GhostHowItWorks } from "@/components/ghostwriting/how-it-works";
import { GhostAiosBridge } from "@/components/ghostwriting/aios-bridge";
import { GhostContact } from "@/components/ghostwriting/contact";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "STRATUM · Ghostwriting — We write your posts. You hit publish.",
  description:
    "Done-for-you ghostwriting via AI delivery. Voice trained on your last 30 posts, Jesseman edits every draft. Three tiers: $1,500 / $3,000 / $7,500 per month.",
  openGraph: {
    title: "STRATUM · Ghostwriting — We write your posts. You hit publish.",
    description:
      "Done-for-you ghostwriting via AI delivery. Three tiers per month.",
  },
};

export default function Ghostwriting() {
  return (
    <>
      <GhostNav />
      <main className="flex-1">
        <GhostHero />
        <GhostHowItWorks />
        <GhostTiers />
        <GhostAiosBridge />
        <GhostContact />
      </main>
      <Footer />
    </>
  );
}
