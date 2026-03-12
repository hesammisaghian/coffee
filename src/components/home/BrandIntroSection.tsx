"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const BRAND_STAGES = [
  {
    id: "1",
    eyebrow: "Aşama 1",
    title: "Marka kökeni",
    description:
      "Kahve çekirdeklerimiz, seçili üreticilerden izlenebilir ve sürdürülebilir bir tedarik zinciriyle gelir.",
    imageSrc: "/images/brand-stage-1.jpg",
  },
  {
    id: "2",
    eyebrow: "Aşama 2",
    title: "İşleme yaklaşımı",
    description:
      "Kontrollü fermantasyon, hassas sıcaklık ve zaman yönetimiyle her lotu aynı dikkatle işleriz.",
    imageSrc: "/images/brand-stage-2.jpg",
  },
  {
    id: "3",
    eyebrow: "Aşama 3",
    title: "Duyusal profil",
    description:
      "Tat profili; gövde, asidite ve tatlılık arasında dengeli, temiz ve uzun bir fincan sunacak şekilde tasarlanır.",
    imageSrc: "/images/brand-stage-3.jpg",
  },
  {
    id: "4",
    eyebrow: "Aşama 4",
    title: "Servis deneyimi",
    description:
      "Son fincan, evde ya da barda, aynı standartta ve aynı karakterde bir deneyim yaratmak için düşünülür.",
    imageSrc: "/images/brand-stage-4.jpg",
  },
] as const;

const NUM_STAGES = BRAND_STAGES.length;

export function BrandIntroSection() {
  const [activeStage, setActiveStage] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateActiveStage = useCallback(() => {
    if (!sectionRef.current) return;

    const viewportCenter = window.innerHeight / 2;

    for (let i = 0; i < stageRefs.current.length; i++) {
      const el = stageRefs.current[i];
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
        setActiveStage(i);
        return;
      }
    }

    const first = stageRefs.current[0];
    if (first && first.getBoundingClientRect().bottom > viewportCenter) {
      setActiveStage(0);
    }
  }, []);

  useEffect(() => {
    const runAfterPaint = () =>
      requestAnimationFrame(() => updateActiveStage());
    runAfterPaint();
    window.addEventListener("scroll", updateActiveStage, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveStage);
  }, [updateActiveStage]);

  return (
    <section
      ref={sectionRef}
      aria-label="Marka tanıtımı"
      className="border-t border-zinc-200 pt-8"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Desktop: sticky media on the left, scroll-driven text on the right */}
        <div className="hidden gap-10 lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left: sticky media box (fixed panel) */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="relative h-[420px] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm">
                {BRAND_STAGES.map((stage, index) => (
                  <div
                    key={stage.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === activeStage ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={stage.imageSrc}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: heading + scrollable text boxes that drive the stage */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium tracking-wide text-zinc-500">
                Marka hikayesi
              </p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                Markanın karakteri ve yaklaşımı
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                Aşağı kaydıkça, markanın kökeninden fincan deneyimine kadar
                uzanan dört aşamalı hikaye adım adım açılır. Sol taraftaki
                görsel panel her adımda aynı çerçevede kalır.
              </p>
            </div>

            {BRAND_STAGES.map((stage, index) => (
              <div
                key={stage.id}
                ref={(el) => {
                  stageRefs.current[index] = el;
                }}
                className="border-b border-zinc-100 pb-10 last:border-b-0 last:pb-0"
              >
                <div
                  className={`rounded-2xl border px-6 py-5 transition-colors ${
                    activeStage === index
                      ? "border-zinc-400 bg-white"
                      : "border-zinc-200 bg-white"
                  }`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    {stage.eyebrow}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked cards, simple layout, no sticky */}
        <div className="space-y-8 lg:hidden">
          <div className="pt-4">
            <p className="text-sm font-medium tracking-wide text-zinc-500">
              Marka hikayesi
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight text-zinc-900">
              Dört adımda marka yaklaşımı
            </h2>
          </div>

          {BRAND_STAGES.map((stage) => (
            <div
              key={stage.id}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
            >
              <div className="relative h-48 bg-zinc-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={stage.imageSrc}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-6 py-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {stage.eyebrow}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
