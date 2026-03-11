"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const STEPS = [
  {
    id: 1,
    title: "Yeşil çekirdek seçimi",
    body: "Sürece dahil edilen çekirdekler; bölge, depolama koşulları, nem oranı ve olası küf veya aflatoksin riskleri açısından incelenir. Takip edilebilir ve sağlıklı lotlar tercih edilir.",
  },
  {
    id: 2,
    title: "Kontrollü sıvı fermantasyon",
    body: "Çekirdekler tanımlı parametrelere sahip bir sıvı ortamda fermantasyona alınır. Doğal meyve ve bitki kaynaklı bileşenler bu süreci destekleyebilir; kimyasal katkı veya yapay aroma kullanılmaz.",
  },
  {
    id: 3,
    title: "Düşük oksijen / anaerobik faz",
    body: "Fermantasyon sürecinde oksijen seviyesi sınırlı tutulur. Sıcaklık ve süre kontrolü, istenmeyen keskinliklerin ve kusurların oluşmasını sınırlamayı hedefler.",
  },
  {
    id: 4,
    title: "Kurutma",
    body: "Fermantasyon sonrası çekirdekler kontrollü koşullarda kurutulur. Nem ve sıcaklık takip edilerek çekirdeğin yapısı korunur.",
  },
  {
    id: 5,
    title: "Kavurma",
    body: "Kurutulmuş çekirdekler, hedeflenen fincan profiline göre kavurma sürecinden geçirilir. Her lot tutarlılık için değerlendirilir.",
  },
  {
    id: 6,
    title: "Fincan profili",
    body: "Her lot fincan dengesini değerlendirmek için tadım süreçlerinden geçirilir. Amaç, daha dengeli, yumuşak içimli ve tutarlı profiller elde etmektir.",
  },
] as const;

/** Replaceable media: set to a path or URL per step, or use one image for all. When empty, placeholder is shown. */
const PROCESS_STEP_IMAGES: (string | undefined)[] = [
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];

export function ProcessStoryStickySection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const updateActiveStep = useCallback(() => {
    if (!sectionRef.current) return;
    const viewportCenter = window.innerHeight / 2;

    for (let i = 0; i < stepRefs.current.length; i++) {
      const el = stepRefs.current[i];
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
        setActiveStep(i);
        return;
      }
    }
    // If we're above all steps (intro visible), keep first step as active
    const firstStep = stepRefs.current[0];
    if (firstStep && firstStep.getBoundingClientRect().bottom > viewportCenter) {
      setActiveStep(0);
    }
  }, []);

  useEffect(() => {
    const runAfterPaint = () => requestAnimationFrame(() => updateActiveStep());
    runAfterPaint();
    window.addEventListener("scroll", updateActiveStep, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveStep);
  }, [updateActiveStep]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="process-story-heading"
      className="border-t border-zinc-200 pt-8"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: scrollable step list */}
        <div className="space-y-0">
          <div className="pb-8">
            <p className="text-sm font-medium tracking-wide text-zinc-500">
              Üretim süreci
            </p>
            <h2
              id="process-story-heading"
              className="mt-1 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl"
            >
              Yeşil çekirdekten fincana: kontrollü süreç
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600">
              Üretim yaklaşımı, yeşil kahve çekirdeğinin kontrollü sıvı
              fermantasyon ortamında işlenmesine dayanır. Süreç boyunca sıcaklık,
              süre ve oksijen seviyesi dikkatle kontrol edilir.
            </p>
          </div>

          {STEPS.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="min-h-[45vh] border-b border-zinc-100 py-10 last:border-b-0"
            >
              <div
                className={`rounded-lg border px-5 py-4 transition-colors ${
                  activeStep === index
                    ? "border-zinc-400 bg-zinc-50"
                    : "border-zinc-200 bg-white"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Adım {step.id}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: sticky media panel */}
        <div className="relative lg:block">
          <div className="sticky top-8 min-h-[50vh] lg:min-h-[60vh]">
            <div className="flex h-full min-h-[300px] flex-col justify-center rounded-lg border border-zinc-200 bg-zinc-50/60 p-6 lg:min-h-[50vh]">
              {PROCESS_STEP_IMAGES[activeStep] ? (
                <div className="h-full w-full overflow-hidden rounded-md bg-zinc-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={PROCESS_STEP_IMAGES[activeStep]}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 text-center">
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                    Adım {STEPS[activeStep].id}
                  </span>
                  <span className="text-lg font-semibold text-zinc-700">
                    {STEPS[activeStep].title}
                  </span>
                  <div
                    className="mt-4 h-32 w-full max-w-xs rounded bg-zinc-100/90"
                    aria-hidden
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
