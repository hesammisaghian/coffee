export function ProductsPlaceholderSection() {
  return (
    <section
      aria-labelledby="coffee-products-heading"
      className="space-y-3 border-t border-zinc-200 pt-8"
    >
      <h2
        id="coffee-products-heading"
        className="text-xl font-semibold tracking-tight"
      >
        Coffee products (placeholder)
      </h2>
      <p className="max-w-2xl text-sm text-zinc-600">
        This area will evolve into a clean overview of available coffees and links to
        dedicated product detail pages. For now, it simply marks the position of that
        future structure on the homepage.
      </p>
    </section>
  );
}
