import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Tiers } from "@/components/tiers";
import { System } from "@/components/system";
import { CaseStudy } from "@/components/case-study";
import { Clients } from "@/components/clients";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Tiers />
        <System />
        <CaseStudy />
        <Clients />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
