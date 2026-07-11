import { Truck, Receipt, ShieldCheck, UserRound, type LucideIcon } from "lucide-react";
import { benefits } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  mobile: Truck,
  transparent: Receipt,
  thorough: ShieldCheck,
  personal: UserRound,
};

export default function Benefits() {
  return (
    <section className="bg-navy-50/60 py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Vorteile</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Autopflege, die in deinen Alltag passt
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div
                key={benefit.title}
                className="card p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/70">
                  {benefit.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
