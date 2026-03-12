const PROCESS_VIDEO_PATH = "/videos/process-cinematic.mp4";

export function BrandProcessVideoSection() {
  return (
    <section
      className="w-full border-t border-zinc-200 py-20 lg:py-24"
      aria-label="Üretim süreci videosu"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
            Üretimin akışı
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            Kontrollü süreç, görünür hale gelir.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            Yeşil çekirdekten başlayan üretim yaklaşımı; zaman, sıcaklık ve akış
            kontrolüyle ilerler.
          </p>
        </div>

        <div className="relative mt-8 h-[320px] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm lg:h-[56vh] lg:min-h-[420px] lg:max-h-[640px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            aria-label="Üretim süreci sinematik videosu"
          >
            <source src={PROCESS_VIDEO_PATH} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" aria-hidden />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-start px-6 pb-5 pt-10">
            <p className="text-sm font-medium text-white sm:text-base">
              Kontrollü sıvı fermantasyon süreci
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

