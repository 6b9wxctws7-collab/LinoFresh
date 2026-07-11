import { Check, Plus, Tag } from "lucide-react";
import { packages, addOns } from "@/lib/data";
import { promo } from "@/lib/config";

export default function Services() {
  return (
    <section id="leistungen" className="py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Leistungen</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Klare Pakete ohne Überraschungen
          </h2>
          <p className="mt-4 text-navy-800/70">
            Wähle das passende Paket. Den finalen Preis bestätigen wir nach
            deinen Fotos und dem Zustand des Fahrzeugs.
          </p>

          {promo.active && (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-navy-900">
              <Tag size={15} className="text-teal-600" aria-hidden="true" />
              {promo.headline}: {promo.amount} Rabatt mit Code
              <span className="font-bold text-teal-700">{promo.code}</span>
            </p>
          )}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover ${
                pkg.featured
                  ? "border-teal-500 bg-white shadow-card ring-1 ring-teal-500/30"
                  : "border-navy-100 bg-white shadow-card"
              }`}
            >
              {pkg.label && (
                <span className="absolute -top-3 right-6 rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-white shadow-soft">
                  {pkg.label}
                </span>
              )}

              <h3 className="text-xl font-bold text-navy-900">{pkg.name}</h3>
              <p className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-navy-900">
                  {pkg.price}
                </span>
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-navy-800">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-teal-100 text-teal-700">
                      <Check size={13} aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={`mt-7 w-full ${
                  pkg.featured ? "btn-primary" : "btn-secondary"
                }`}
              >
                Termin anfragen
              </a>
            </div>
          ))}
        </div>

        {/* Zusatzleistungen */}
        <div className="mt-12 rounded-3xl bg-teal-50/70 p-7 sm:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Zusatzleistungen nach Absprache
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {addOns.map((addOn) => (
              <li
                key={addOn}
                className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-white px-3.5 py-1.5 text-sm font-medium text-navy-900 shadow-soft"
              >
                <Plus size={13} className="text-teal-600" aria-hidden="true" />
                {addOn}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
