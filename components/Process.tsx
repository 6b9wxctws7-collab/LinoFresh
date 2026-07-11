import { Camera, ClipboardCheck, Sparkles, Car } from "lucide-react";
import { processSteps } from "@/lib/data";

const icons = [Camera, ClipboardCheck, Sparkles, Car];

export default function Process() {
  return (
    <section id="ablauf" className="bg-navy-900 py-16 text-white md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-300">
            Ablauf
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Einfach buchen. Wir kommen vorbei.
          </h2>
          <p className="mt-4 text-white/70">
            In vier unkomplizierten Schritten von der Anfrage zum frisch
            gepflegten Fahrzeug.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <li
                key={step.step}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors duration-200 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-500 text-white shadow-soft">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="text-3xl font-extrabold text-white/15">
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {step.text}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-12 text-center">
          <a href="#kontakt" className="btn-primary">
            Termin anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
