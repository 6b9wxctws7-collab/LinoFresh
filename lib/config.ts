/**
 * Zentrale Platzhalter-Konfiguration.
 * Diese Werte sind bewusst Platzhalter und können später ersetzt werden.
 */
export const siteConfig = {
  name: "LinoFresh",
  subtitle: "Mobile Autopflege Basel",
  slogan: "Dein Auto wird sauber. Du bleibst, wo du bist.",
  url: "https://linofresh.ch",

  // Kontaktdaten (Platzhalter)
  phoneDisplay: "+41 XX XXX XX XX",
  // Nur Ziffern, für tel:- und wa.me-Links. Später durch echte Nummer ersetzen.
  phoneRaw: "41000000000",
  email: "hallo@linofresh.ch",
  location: "Basel, Schweiz",
} as const;

/**
 * Aktueller Rabatt / Aktionscode.
 * `active` auf false setzen, um Aktionsbalken und Hinweise auszublenden.
 */
export const promo = {
  active: true,
  code: "FRESH20",
  amount: "CHF 20",
  headline: "Neukunden-Aktion",
  description: "CHF 20 Rabatt auf deine erste Innenreinigung",
} as const;

/**
 * Baut einen WhatsApp-Link (wa.me) mit vorbereiteter Nachricht.
 */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * Baut einen mailto-Link mit Betreff und Body als Fallback.
 */
export function buildMailtoLink(subject: string, body: string): string {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
