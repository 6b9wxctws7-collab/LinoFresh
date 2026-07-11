"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Häufige Fragen
          </h2>
          <p className="mt-4 text-navy-800/70">
            Noch etwas offen? Schreib uns – wir helfen gerne weiter.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-navy-100 overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-teal-50/50"
                  >
                    <span className="text-base font-semibold text-navy-900">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      aria-hidden="true"
                      className={`flex-none text-teal-600 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  hidden={!isOpen}
                  className="px-6 pb-5 text-sm leading-relaxed text-navy-800/75"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
