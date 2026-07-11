/**
 * Lokale Datenobjekte für Leistungen, Ablauf, Einsatzgebiete, Vorteile und FAQ.
 * Preise sind bewusst Platzhalter (CHF XX) und können später ersetzt werden.
 */

export type ServicePackage = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  label?: string;
  features: string[];
  featured?: boolean;
};

export const packages: ServicePackage[] = [
  {
    id: "basic",
    name: "Basic",
    price: "CHF 89",
    features: [
      "Innenraum saugen",
      "Cockpit und Oberflächen",
      "Scheiben innen",
      "Fussmatten reinigen",
    ],
  },
  {
    id: "intensiv",
    name: "Intensiv",
    label: "Beliebt",
    price: "CHF 149",
    featured: true,
    features: [
      "Alles aus Basic",
      "Kofferraum",
      "Detailreinigung",
      "Leichte Fleckenbehandlung",
    ],
  },
  {
    id: "tiefenreinigung",
    name: "Tiefenreinigung",
    price: "ab CHF 219",
    features: [
      "Polster- oder Teppichwäsche",
      "Intensive Fleckenbehandlung",
      "Geruchsneutralisierung",
      "Individuelle Aufwandseinschätzung",
    ],
  },
];

export const addOns: string[] = [
  "Tierhaare",
  "Lederpflege",
  "Kindersitz",
  "SUV / 7-Sitzer",
  "Starke Verschmutzung",
];

export type ProcessStep = {
  step: number;
  title: string;
  text: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Fotos senden",
    text: "Du schickst Fahrzeugmodell, Standort und einige Innenraumfotos.",
  },
  {
    step: 2,
    title: "Preis bestätigen",
    text: "Du erhältst einen transparenten Preis und einen passenden Termin.",
  },
  {
    step: 3,
    title: "Wir reinigen",
    text: "Wir kommen mit Ausrüstung und Wasser direkt zu deinem Fahrzeug.",
  },
  {
    step: 4,
    title: "Sauber losfahren",
    text: "Nach der Abnahme ist dein Auto wieder frisch und gepflegt.",
  },
];

export const serviceAreas: string[] = [
  "Basel",
  "Riehen",
  "Allschwil",
  "Binningen",
  "Muttenz",
  "Münchenstein",
];

export type Requirement = {
  label: string;
  text: string;
};

export const requirements: Requirement[] = [
  { label: "Strom", text: "Eine erreichbare 230-V-Steckdose." },
  { label: "Wasser", text: "Bringen wir selbst mit." },
  { label: "Platz", text: "Genügend Raum, um die Türen vollständig zu öffnen." },
  {
    label: "Wetter",
    text: "Idealerweise ein überdachter Stellplatz bei Regen.",
  },
];

export type Benefit = {
  title: string;
  text: string;
  icon: "mobile" | "transparent" | "thorough" | "personal";
};

export const benefits: Benefit[] = [
  {
    title: "Mobil",
    text: "Kein Warten bei der Aufbereitung. Wir kommen zu dir.",
    icon: "mobile",
  },
  {
    title: "Transparent",
    text: "Klare Preise nach Fotos und Zustand des Fahrzeugs.",
    icon: "transparent",
  },
  {
    title: "Gründlich",
    text: "Saubere Abläufe, passende Produkte und kontrollierte Ergebnisse.",
    icon: "thorough",
  },
  {
    title: "Persönlich",
    text: "Direkter Kontakt und ein fester Ansprechpartner.",
    icon: "personal",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Braucht ihr einen Wasseranschluss?",
    answer:
      "Nein. Für die Innenreinigung bringen wir das benötigte Wasser selbst mit.",
  },
  {
    question: "Braucht ihr Strom?",
    answer:
      "Ja. Zum Start benötigen wir eine erreichbare 230-V-Steckdose für Sauger und Reinigungsgeräte.",
  },
  {
    question: "Wie lange dauert eine Reinigung?",
    answer:
      "Je nach Paket und Verschmutzung dauert die Reinigung ungefähr 1 bis 4 Stunden.",
  },
  {
    question: "Was ist bei Tierhaaren oder starken Flecken?",
    answer:
      "Bitte vorab Fotos senden. So können wir Aufwand und möglichen Zuschlag transparent einschätzen.",
  },
  {
    question: "Reinigt ihr auch aussen?",
    answer:
      "Zum Start konzentriert sich LinoFresh auf professionelle Innenreinigung.",
  },
];
