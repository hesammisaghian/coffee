"use client";

/**
 * Pinned scroll narrative Hero: tall outer section (300vh), sticky inner viewport (100vh).
 * Text content advances through stages as the user scrolls; then normal page scroll continues.
 */
import { useCallback, useEffect, useRef, useState } from "react";

const HERO_BACKGROUND_IMAGE: string | undefined = undefined;
const HERO_VIDEO_PATH = "/videos/Cinematic_macro_shot_202601101458_8k9iu.mp4";

const HERO_STAGES: { line: string }[] = [
  { line: "Yeşil kahvenin kontrollü sıvı fermantasyonla işlendiği bir üretim yaklaşımı." },
  { line: "Fermantasyon odaklı bir kahve üretim modeli." },
  {
    line:
      "Yeşil çekirdek, kontrollü sıvı fermantasyon ve düşük oksijen süreci. Kimyasal katkı ve yapay aroma yok.",
  },
  { line: "Doğal yapı. Dengeli fincan." },
];

const NUM_STAGES = HERO_STAGES.length;

export function HeroSection() {
  const [activeStage, setActiveStage] = useState(0);
  const outerRef = useRef<HTMLElement | null>(null);

  const updateStage = useCallback(() => {
    const el = outerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const sectionHeight = el.offsetHeight;
    const scrollableHeight = sectionHeight - viewportHeight;
    if (scrollableHeight <= 0) {
      setActiveStage(0);
      return;
    }
    const progress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
    const index = Math.min(
      NUM_STAGES - 1,
      Math.floor(progress * NUM_STAGES)
    );
    setActiveStage(index);
  }, []);

  useEffect(() => {
    const runAfterPaint = () => requestAnimationFrame(() => updateStage());
    runAfterPaint();
    window.addEventListener("scroll", updateStage, { passive: true });
    return () => window.removeEventListener("scroll", updateStage);
  }, [updateStage]);

  return (
    <section
      ref={outerRef}
      className="relative"
      style={{ minHeight: "300vh" }}
      aria-label="Hero"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0c0c0c]">
        {/* Background: image or video */}
        <div className="absolute inset-0">
          {HERO_BACKGROUND_IMAGE ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={HERO_BACKGROUND_IMAGE}
              alt=""
              className="h-full w-full object-cover"
              sizes="100vw"
            />
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
              aria-hidden
            >
              <source src={HERO_VIDEO_PATH} type="video/mp4" />
            </video>
          )}
        </div>

        {/* Overlay for text readability */}
        <div
          className="absolute inset-0 z-[1] bg-black/40"
          aria-hidden
        />

        {/* Content: single line per stage, opacity transition on change */}
        <div className="relative z-10 flex min-h-full flex-col justify-between py-20 sm:py-24">
          <div className="mx-auto w-full max-w-4xl px-6">
            <div className="max-w-xl transition-opacity duration-300">
              <p
                key={activeStage}
                className="text-2xl font-medium leading-[1.22] tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-[1.2]"
              >
                {HERO_STAGES[activeStage].line}
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-4xl px-6">
            <p
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500"
              aria-hidden
            >
              Aşağı kaydır
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
