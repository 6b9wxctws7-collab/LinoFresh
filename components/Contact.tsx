"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import {
  siteConfig,
  promo,
  buildWhatsAppLink,
  buildMailtoLink,
} from "@/lib/config";
import { packages } from "@/lib/data";

type FormState = {
  name: string;
  phone: string;
  vehicle: string;
  paket: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  vehicle: "",
  paket: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);

  function buildMessage(): string {
    const lines = [
      "Neue Anfrage über linofresh.ch",
      "",
      `Name: ${form.name || "-"}`,
      `Telefon: ${form.phone || "-"}`,
      `Fahrzeug: ${form.vehicle || "-"}`,
      `Paket: ${form.paket || "-"}`,
      `Nachricht: ${form.message || "-"}`,
    ];
    if (promo.active) {
      lines.push(`Rabattcode: ${promo.code}`);
    }
    return lines.join("\n");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = buildMessage();

    // Bevorzugt WhatsApp öffnen; als Fallback steht der E-Mail-Link bereit.
    const whatsappUrl = buildWhatsAppLink(message);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  function handleMailFallback() {
    const mailto = buildMailtoLink("Anfrage LinoFresh", buildMessage());
    window.location.href = mailto;
  }

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <section id="kontakt" className="py-16 md:py-24">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card">
          <div className="grid lg:grid-cols-5">
            {/* Info-Spalte */}
            <div className="bg-navy-900 p-8 text-white lg:col-span-2 lg:p-10">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-300">
                Kontakt
              </p>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Schick uns dein Fahrzeug und deinen Wunschtermin.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Telefonnummer, E-Mail-Adresse und WhatsApp-Link sind aktuell
                Platzhalter und können später ersetzt werden.
              </p>

              <ul className="mt-8 flex flex-col gap-5">
                <li className="flex items-center gap-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-white/10 text-teal-300">
                    <Phone size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/50">
                      Telefon
                    </p>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="font-semibold hover:text-teal-300"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-white/10 text-teal-300">
                    <Mail size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/50">
                      E-Mail
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-semibold hover:text-teal-300"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-white/10 text-teal-300">
                    <MapPin size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/50">
                      Ort
                    </p>
                    <p className="font-semibold">{siteConfig.location}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Formular-Spalte */}
            <div className="p-8 lg:col-span-3 lg:p-10">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-navy-900">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="rounded-xl border border-navy-200 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-800/40 focus-visible:border-teal-500"
                      placeholder="Vor- und Nachname"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-navy-900">
                      Telefonnummer
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="rounded-xl border border-navy-200 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-800/40 focus-visible:border-teal-500"
                      placeholder="+41 XX XXX XX XX"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="vehicle" className="text-sm font-medium text-navy-900">
                      Fahrzeug
                    </label>
                    <input
                      id="vehicle"
                      name="vehicle"
                      type="text"
                      value={form.vehicle}
                      onChange={(e) => update("vehicle", e.target.value)}
                      className="rounded-xl border border-navy-200 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-800/40 focus-visible:border-teal-500"
                      placeholder="z. B. VW Golf"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="paket" className="text-sm font-medium text-navy-900">
                      Paket
                    </label>
                    <select
                      id="paket"
                      name="paket"
                      value={form.paket}
                      onChange={(e) => update("paket", e.target.value)}
                      className="rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 focus-visible:border-teal-500"
                    >
                      <option value="">Bitte wählen</option>
                      {packages.map((pkg) => (
                        <option key={pkg.id} value={pkg.name}>
                          {pkg.name}
                        </option>
                      ))}
                      <option value="Noch unklar">Noch unklar</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-navy-900">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="resize-y rounded-xl border border-navy-200 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-800/40 focus-visible:border-teal-500"
                    placeholder="Standort, Wunschtermin und kurze Beschreibung des Zustands."
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button type="submit" className="btn-primary sm:w-auto">
                    <Send size={16} aria-hidden="true" />
                    Anfrage vorbereiten
                  </button>
                  <button
                    type="button"
                    onClick={handleMailFallback}
                    className="btn-secondary sm:w-auto"
                  >
                    <Mail size={16} aria-hidden="true" />
                    Stattdessen per E-Mail
                  </button>
                </div>

                <p className="flex items-center gap-1.5 text-xs text-navy-800/60">
                  <MessageCircle size={13} className="text-teal-600" aria-hidden="true" />
                  Beim Absenden öffnet sich eine vorbereitete WhatsApp-Nachricht
                  mit deinen Angaben.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
