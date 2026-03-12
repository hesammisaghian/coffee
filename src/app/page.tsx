import { HeroSection } from "../components/home/HeroSection";
import { BrandIntroSection } from "../components/home/BrandIntroSection";
import { DifferenceSection } from "../components/home/DifferenceSection";
import { BrandProcessVideoSection } from "../components/home/BrandProcessVideoSection";
import { ProcessStoryStickySection } from "../components/home/ProcessStoryStickySection";
import { QualitySafetySection } from "../components/home/QualitySafetySection";
import { SustainabilitySection } from "../components/home/SustainabilitySection";
import { ContactCtaSection } from "../components/home/ContactCtaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Hero: full-bleed (or prepared for full-bleed); not inside content container */}
      <section aria-label="Hero">
        <HeroSection />
      </section>

      {/* Constrained content area: all sections below hero */}
      <div className="mx-auto flex max-w-4xl flex-col gap-16 px-6 py-16 sm:py-20">
        <BrandIntroSection />
        <DifferenceSection />
        <BrandProcessVideoSection />
        <ProcessStoryStickySection />
        <QualitySafetySection />
        <SustainabilitySection />
        <ContactCtaSection />
      </div>
    </main>
  );
}
