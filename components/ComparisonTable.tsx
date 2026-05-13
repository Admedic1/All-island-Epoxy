import { Check, X } from "lucide-react";

const rows: { label: string; us: boolean; bigBox: boolean; generic: boolean }[] =
  [
    { label: "Owner on every job", us: true, bigBox: false, generic: false },
    { label: "10+ years experience", us: true, bigBox: false, generic: true },
    { label: "Professional equipment", us: true, bigBox: true, generic: true },
    { label: "Premium materials", us: true, bigBox: false, generic: false },
    { label: "Licensed & insured", us: true, bigBox: true, generic: true },
    { label: "Same-day install (most homes)", us: true, bigBox: false, generic: false },
    { label: "Local Long Island company", us: true, bigBox: false, generic: true },
  ];

function Cell({ ok }: { ok: boolean }) {
  return (
    <div className="flex justify-center">
      {ok ? (
        <Check className="h-6 w-6 text-forest-light" aria-label="Yes" />
      ) : (
        <X className="h-6 w-6 text-red-500" aria-label="No" />
      )}
    </div>
  );
}

export function ComparisonTable() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-red-600">
          Compare
        </p>
        <h2 className="mt-3 text-3xl font-black text-zinc-950 md:text-4xl">
          Why Choose All Island Epoxy?
        </h2>
        <p className="mt-4 text-zinc-600">
          A quick, honest look at what you actually get when the owner is on
          your job.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-900/10">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50 text-left text-xs font-black uppercase tracking-widest text-zinc-500">
              <th className="px-4 py-4">Feature</th>
              <th className="px-4 py-4 text-forest">All Island Epoxy</th>
              <th className="px-4 py-4">Big Box / DIY</th>
              <th className="px-4 py-4">Generic Contractor</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.label}
                className="border-b border-zinc-100 last:border-0"
              >
                <td className="px-4 py-4 font-semibold text-zinc-900">{r.label}</td>
                <td className="px-4 py-4">
                  <Cell ok={r.us} />
                </td>
                <td className="px-4 py-4">
                  <Cell ok={r.bigBox} />
                </td>
                <td className="px-4 py-4">
                  <Cell ok={r.generic} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
