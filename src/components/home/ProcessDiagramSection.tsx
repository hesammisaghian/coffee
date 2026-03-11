const steps = [
  "Yeşil çekirdek",
  "Kontrollü sıvı fermantasyon",
  "Düşük oksijen / anaerobik faz",
  "Kurutma",
  "Kavurma",
  "Fincan profili",
] as const;

export function ProcessDiagramSection() {
  return (
    <section
      aria-labelledby="process-diagram-heading"
      className="space-y-4 border-t border-zinc-200 pt-8"
    >
      <h2
        id="process-diagram-heading"
        className="text-xl font-semibold tracking-tight"
      >
        Süreç akışı
      </h2>

      <ol className="max-w-2xl">
        {steps.map((label, index) => (
          <li key={label} className="relative pl-6">
            <div
              className="absolute left-0 top-3 h-2 w-2 rounded-full bg-zinc-300"
              aria-hidden
            />

            {index < steps.length - 1 && (
              <div
                className="absolute left-[3px] top-6 h-full w-px bg-zinc-200"
                aria-hidden
              />
            )}

            <div className="rounded-lg border border-zinc-200 bg-white px-4 py-3">
              <p className="text-sm font-medium text-zinc-800">{label}</p>
              {index < steps.length - 1 && (
                <p className="mt-2 text-xs text-zinc-400" aria-hidden>
                  ↓
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
