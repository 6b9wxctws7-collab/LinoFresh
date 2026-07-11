import { MapPin, BadgeCheck, Home, Sparkles } from "lucide-react";
import CarGraphic from "@/components/CarGraphic";

const trustPoints = [
  { icon: Home, label: "Vor-Ort-Service" },
  { icon: BadgeCheck, label: "Faire Festpreise" },
  { icon: MapPin, label: "Basel & Umgebung" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-white to-white"
    >
      {/* Dezente Hintergrund-Deko */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-50 blur-3xl"
      />

      <div className="container-page relative py-14 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text-Spalte */}
          <div className="animate-fade-up">
            <p className="eyebrow">
              <Sparkles size={14} aria-hidden="true" />
              Mobile Autopflege in Basel
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
              Dein Auto wird sauber.{" "}
              <span className="text-teal-600">Du bleibst, wo du bist.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-800/80 sm:text-lg">
              Professionelle Innenreinigung direkt bei dir zu Hause oder am
              Arbeitsplatz. Bequem, gründlich und transparent.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#kontakt" className="btn-primary">
                Termin anfragen
              </a>
              <a href="#leistungen" className="btn-secondary">
                Pakete ansehen
              </a>
            </div>

            {/* Vertrauenspunkte */}
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {trustPoints.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium text-navy-800"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <Icon size={15} aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Grafik-Spalte */}
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <CarGraphic />

            {/* Preisbox */}
            <div className="absolute -bottom-5 left-4 rounded-2xl border border-navy-100 bg-white/95 px-5 py-4 shadow-card backdrop-blur sm:left-8">
              <p className="text-xs font-medium uppercase tracking-wide text-teal-700">
                Innenreinigung
              </p>
              <p className="mt-0.5 text-lg font-bold text-navy-900">
                Ab CHF 89
                <span className="ml-1 text-sm font-medium text-navy-800/60">
                  pro Reinigung
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
