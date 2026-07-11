import { MapPin, Zap, Droplets, Move, CloudRain } from "lucide-react";
import { serviceAreas, requirements } from "@/lib/data";

const reqIcons = [Zap, Droplets, Move, CloudRain];

export default function ServiceArea() {
  return (
    <section id="einsatzgebiet" className="py-16 md:py-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Einsatzgebiet */}
          <div>
            <p className="eyebrow">Einsatzgebiet</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Basel zuerst. Kurze Wege, bessere Termine.
            </h2>
            <p className="mt-4 text-navy-800/70">
              Zum Start bedienen wir Basel-Stadt sowie ausgewählte Orte in der
              direkten Umgebung. Weitere Gebiete können nach Absprache angefragt
              werden.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 bg-white px-3.5 py-1.5 text-sm font-medium text-navy-900 shadow-soft"
                >
                  <MapPin size={13} className="text-teal-600" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>

            <a href="#kontakt" className="btn-primary mt-8">
              Termin anfragen
            </a>
          </div>

          {/* Infobox: Das brauchen wir vor Ort */}
          <div className="rounded-3xl border border-teal-100 bg-teal-50/60 p-7 sm:p-8">
            <h3 className="text-lg font-bold text-navy-900">
              Das brauchen wir vor Ort
            </h3>
            <ul className="mt-6 flex flex-col gap-5">
              {requirements.map((req, index) => {
                const Icon = reqIcons[index];
                return (
                  <li key={req.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-white text-teal-600 shadow-soft">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-navy-900">{req.label}</p>
                      <p className="text-sm text-navy-800/70">{req.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
