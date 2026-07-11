# LinoFresh – Mobile Autopflege Basel

Moderne, vollständig responsive One-Page-Website für **LinoFresh**, eine mobile
Autopflege-Firma in Basel. Die Seite bewirbt die mobile Autoinnenreinigung und
führt Besucher schnell zur Terminanfrage.

> **Slogan:** Dein Auto wird sauber. Du bleibst, wo du bist.

## Tech-Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **lucide-react** (einzige Icon-Bibliothek)
- Keine Datenbank, kein Backend – Kontaktformular öffnet WhatsApp oder E-Mail
- Direkt auf **Vercel** deploybar

## Projektstruktur

```
app/
  layout.tsx          # Metadata, Open Graph, Fonts, globale Struktur
  page.tsx            # One-Page-Zusammenbau aller Sektionen
  globals.css         # Tailwind + Basis-Styles, Fokuszustände
  robots.ts           # SEO: robots.txt
  sitemap.ts          # SEO: sitemap.xml
  impressum/page.tsx  # Platzhalter-Impressum
  datenschutz/page.tsx# Platzhalter-Datenschutz
components/
  Header.tsx          # Sticky Header, Desktop-Nav, mobiles Hamburger-Menü
  Hero.tsx            # Hero mit CTA, Vertrauenspunkten, Preisbox
  CarGraphic.tsx      # Abstrakte Auto-Grafik mit Sparkle-Elementen (Inline-SVG)
  Services.tsx        # Preiskarten + Zusatzleistungen
  Process.tsx         # Ablauf in 4 Schritten (dunkler Bereich)
  ServiceArea.tsx     # Einsatzgebiet + Infobox "Das brauchen wir vor Ort"
  Benefits.tsx        # Vier Vorteil-Karten
  FAQ.tsx             # Barrierearmes Accordion
  Contact.tsx         # Kontaktformular -> WhatsApp / mailto
  Footer.tsx          # Footer mit dynamischem Jahr
  WhatsAppButton.tsx  # Floating WhatsApp-Button
  LegalLayout.tsx     # Layout für die rechtlichen Platzhalter-Seiten
lib/
  config.ts           # Kontakt-Platzhalter + WhatsApp/mailto-Helfer
  data.ts             # Lokale Datenobjekte: Pakete, FAQ, Einsatzgebiete, …
public/
  linofresh-logo.png  # Logo
```

## Lokale Entwicklung

Voraussetzung: **Node.js 18.18+** (empfohlen: Node 20 oder 22).

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Entwicklungsserver starten
npm run dev
# -> http://localhost:3000

# 3. Produktions-Build prüfen
npm run build
npm run start
```

## Anpassen (Platzhalter ersetzen)

Alle Platzhalter für Kontakt und Preise liegen zentral:

- **Kontaktdaten** – `lib/config.ts`
  - `phoneDisplay` – angezeigte Telefonnummer (`+41 XX XXX XX XX`)
  - `phoneRaw` – nur Ziffern, für `tel:` und `wa.me` (z. B. `41791234567`)
  - `email` – E-Mail-Adresse
  - `url` – finale Domain (für SEO / Open Graph)
- **Preise & Inhalte** – `lib/data.ts`
  - Pakete (`CHF XX`), Zusatzleistungen, Ablauf, Einsatzgebiete, FAQ
- **Logo** – `public/linofresh-logo.png` austauschen (gleicher Dateiname)

Das Kontaktformular baut beim Absenden eine vorbereitete **WhatsApp-Nachricht**
(`wa.me`). Über den Button „Stattdessen per E-Mail" lässt sich alternativ eine
**mailto**-E-Mail mit denselben Formulardaten öffnen.

## Deployment auf Vercel

1. Repository zu GitHub pushen.
2. Auf [vercel.com](https://vercel.com) mit „New Project" das Repository
   importieren.
3. Vercel erkennt Next.js automatisch – keine zusätzliche Konfiguration nötig
   (Build: `next build`, Output: automatisch).
4. **Deploy** klicken. Fertig.

Alternativ per CLI:

```bash
npm i -g vercel
vercel        # Preview-Deployment
vercel --prod # Produktions-Deployment
```

## Hinweise

- Schweizer Schreibweise (z. B. „Fussmatten"), Preise in **CHF**.
- Keine erfundenen Kundenbewertungen oder Sternebewertungen.
- Keine rechtlich riskanten Werbeaussagen.
- Preise und Kontaktdaten sind bewusst Platzhalter.
