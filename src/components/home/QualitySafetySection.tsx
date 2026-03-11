const PROOF_BLOCKS = [
  {
    title: "Lot ve güvenlik",
    text: "Kullanılan lotlar depolama koşulları, nem oranı ve olası küf veya aflatoksin riskleri açısından incelenir. İzlenebilir ve sağlıklı lotlar tercih edilir.",
  },
  {
    title: "Katkısız süreç",
    text: "Fermantasyon sürecinde kimyasal katkı maddesi veya yapay aroma kullanılmaz. Çekirdeğin doğal yapısı korunarak daha temiz bir fincan profili hedeflenir.",
  },
  {
    title: "Ölçüm ve tutarlılık",
    text: "Sürecin farklı aşamaları ölçülür ve kayıt altına alınır. Fincan profillerinin mümkün olduğunca tutarlı kalması hedeflenir.",
  },
] as const;

export function QualitySafetySection() {
  return (
    <section
      aria-labelledby="quality-safety-heading"
      className="space-y-8 border-t border-zinc-200 pt-8"
    >
      <div>
        <p className="text-sm font-medium tracking-wide text-zinc-500">
          Kalite ve güvenlik
        </p>
        <h2
          id="quality-safety-heading"
          className="mt-1 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl"
        >
          Kontrol, güvenlik ve süreç disiplini üretim yaklaşımımızın temelinde
          yer alır.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
        {PROOF_BLOCKS.map((block, index) => (
          <div
            key={index}
            className="rounded-lg border border-zinc-200 bg-white px-5 py-4 sm:px-6 sm:py-5"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-700">
              {block.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              {block.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
