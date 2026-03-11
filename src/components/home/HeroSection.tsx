/**
 * Hero section: full-viewport intro with background media slot and overlay text.
 * Media is replaceable: set HERO_BACKGROUND_IMAGE to a path or URL when available.
 * When empty, a neutral background is used so structure and layout stay stable.
 */
const HERO_BACKGROUND_IMAGE: string | undefined = undefined;

export function HeroSection() {
  return (
    <header className="relative flex min-h-[90vh] w-full flex-col justify-between overflow-hidden">
      {/* Background layer: image if provided, else neutral treatment */}
      <div className="absolute inset-0 bg-zinc-800">
        {HERO_BACKGROUND_IMAGE ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={HERO_BACKGROUND_IMAGE}
            alt=""
            className="h-full w-full object-cover"
            sizes="100vw"
          />
        ) : (
          <div
            className="h-full w-full opacity-90"
            style={{
              background:
                "linear-gradient(135deg, rgb(39 39 42) 0%, rgb(24 24 27) 50%, rgb(9 9 11) 100%)",
            }}
          />
        )}
      </div>

      {/* Overlay for text contrast */}
      <div
        className="absolute inset-0 bg-black/30"
        aria-hidden
      />

      {/* Content: overlay text + scroll cue */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-between px-6 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto w-full max-w-4xl">
          <p className="text-sm font-medium tracking-wide text-zinc-300">
            Yeşil kahvenin kontrollü sıvı fermantasyonla işlendiği bir üretim
            yaklaşımı.
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Fermantasyon odaklı bir kahve üretim modeli.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-200 sm:text-lg">
            Yeşil çekirdek, kontrollü sıvı fermantasyon ve düşük oksijen süreci.
            Kimyasal katkı ve yapay aroma yok; doğal yapı ve dengeli fincan
            hedeflenir.
          </p>
        </div>

        <div className="mt-12 flex justify-start">
          <span
            className="text-xs font-medium uppercase tracking-widest text-zinc-400"
            aria-hidden
          >
            Aşağı kaydır
          </span>
        </div>
      </div>
    </header>
  );
}
