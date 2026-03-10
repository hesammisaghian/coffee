import { HeroSection } from "../components/home/HeroSection";
import { BrandIntroSection } from "../components/home/BrandIntroSection";
import { ProcessStorySection } from "../components/home/ProcessStorySection";
import { ContactCtaSection } from "../components/home/ContactCtaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-16 px-6 py-16 sm:py-20">
        <HeroSection />
        <BrandIntroSection />
        <ProcessStorySection />
        <ContactCtaSection />
      </div>
    </main>
  );
}
