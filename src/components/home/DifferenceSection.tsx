export function DifferenceSection() {
  const conventional = [
    "Çekirdek çoğunlukla kavurma aşamasında ele alınır.",
    "Fermantasyon doğal veya geleneksel yöntemlere bırakılır.",
    "Kimyasal veya yapay katkı kullanımı yaygın olabilir.",
    "Tutarlı fincan profili daha zor hedeflenir.",
  ];

  const thisProcess = [
    "Yeşil çekirdek kontrollü sıvı fermantasyonla işlenir.",
    "Sıcaklık, süre ve oksijen seviyesi tanımlı parametrelerle yönetilir.",
    "Kimyasal katkı ve yapay aroma kullanılmaz.",
    "Daha dengeli ve tutarlı fincan profili hedeflenir.",
  ];

  return (
    <section
      aria-labelledby="difference-heading"
      className="space-y-8 border-t border-zinc-200 pt-8"
    >
      <div>
        <p className="text-sm font-medium tracking-wide text-zinc-500">
          Neyi değiştiriyor?
        </p>
        <h2
          id="difference-heading"
          className="mt-1 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl"
        >
          Geleneksel kahve üretiminden farkımız: çekirdeği yeşilden itibaren
          kontrollü bir süreçle işliyoruz.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
        {/* Left: conventional approach */}
        <div className="space-y-4 rounded-lg border border-zinc-200 bg-white px-5 py-5 sm:px-6 sm:py-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Geleneksel yaklaşım
          </h3>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-600">
            {conventional.map((point, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: this process */}
        <div className="space-y-4 rounded-lg border border-zinc-200 bg-white px-5 py-5 sm:px-6 sm:py-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-700">
            Bu süreç
          </h3>
          <ul className="space-y-2 text-sm leading-relaxed text-zinc-600">
            {thisProcess.map((point, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
