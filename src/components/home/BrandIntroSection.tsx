export function BrandIntroSection() {
  return (
    <section
      aria-labelledby="brand-introduction-heading"
      className="space-y-3"
    >
      <h2
        id="brand-introduction-heading"
        className="text-xl font-semibold tracking-tight"
      >
        Marka hakkında
      </h2>
      <p className="max-w-2xl text-sm text-zinc-600">
        Bu proje, sadece yeni bir kahve ürünü değil; yeşil kahve çekirdeğini{" "}
        kontrollü sıvı fermantasyonla yeniden ele alan, süreç odaklı bir yaklaşım.
        Amaç, katkısız, tutarlı, daha yumuşak ve daha okunabilir bir fincan profili
        yaratmak.
      </p>
    </section>
  );
}
