export function ProcessPlaceholderSection() {
  return (
    <section
      aria-labelledby="production-process-heading"
      className="space-y-4 border-t border-zinc-200 pt-8"
    >
      <h2
        id="production-process-heading"
        className="text-xl font-semibold tracking-tight"
      >
        How we treat the coffee
      </h2>

      <div className="max-w-2xl space-y-3 text-sm text-zinc-600">
        <p>
          This brand is built around a simple idea: if we control what happens to the
          green coffee in liquid form, we can shape the cup in a more precise and
          repeatable way.
        </p>

        <ol className="space-y-2">
          <li>
            <span className="font-medium text-zinc-800">1. Green coffee selection.</span>{" "}
            Lots are screened for origin, moisture and storage before they ever touch a
            tank.
          </li>
          <li>
            <span className="font-medium text-zinc-800">
              2. Controlled liquid fermentation.
            </span>{" "}
            Green beans move into a measured liquid environment with carefully chosen
            natural inputs.
          </li>
          <li>
            <span className="font-medium text-zinc-800">
              3. Low-oxygen / anaerobic phase.
            </span>{" "}
            Time, temperature and oxygen are kept within a tight window so flavor builds
            without unwanted defects.
          </li>
          <li>
            <span className="font-medium text-zinc-800">
              4. Drying, roasting and cup outcome.
            </span>{" "}
            After fermentation, beans are dried, roasted and cupped to make sure the
            clarity, sweetness and texture we designed for actually show up in the cup.
          </li>
        </ol>
      </div>
    </section>
  );
}
