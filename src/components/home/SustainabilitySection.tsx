export function SustainabilitySection() {
  return (
    <section
      aria-labelledby="sustainability-heading"
      className="space-y-4 border-t border-zinc-200 pt-8"
    >
      <p className="text-sm font-medium tracking-wide text-zinc-500">
        Sürdürülebilir yaklaşım
      </p>
      <h2
        id="sustainability-heading"
        className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl"
      >
        Üretim süreci yalnızca fincan kalitesine değil, çevresel etkilere de
        dikkat edecek şekilde tasarlanır.
      </h2>
      <div className="max-w-2xl space-y-2 text-sm leading-relaxed text-zinc-600">
        <p>
          Kontrollü fermantasyon yaklaşımı, geleneksel bazı yöntemlere kıyasla
          daha az su kullanımı ve daha düşük çevresel ayak izi hedefler.
        </p>
        <p>
          Kalite korunurken kaynakların daha verimli kullanılması amaçlanır.
        </p>
      </div>
    </section>
  );
}
