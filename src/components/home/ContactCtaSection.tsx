import Link from "next/link";

export function ContactCtaSection() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="space-y-4 border-t border-zinc-200 pt-10"
    >
      <p className="text-sm font-medium tracking-wide text-zinc-500">
        İletişim
      </p>
      <h2
        id="contact-heading"
        className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl"
      >
        Süreç, ürünler veya işbirliği hakkında bilgi almak için bizimle
        iletişime geçebilirsiniz.
      </h2>
      <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
        Sipariş talepleri, toptan satış görüşmeleri ve genel sorularınız için
        iletişim sayfamızı kullanın. Talepler şu an sınırlı ölçekte
        değerlendirilmektedir.
      </p>
      <div>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-50 hover:bg-zinc-800"
        >
          İletişim sayfasına git
        </Link>
      </div>
    </section>
  );
}
