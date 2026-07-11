import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von LinoFresh – Mobile Autopflege Basel.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutz">
      <p>
        Der Schutz deiner persönlichen Daten ist uns wichtig. Die folgenden
        Angaben sind Platzhalter und werden vor dem Livegang vervollständigt.
      </p>

      <h2>Verantwortliche Stelle</h2>
      <p>
        LinoFresh – Mobile Autopflege Basel
        <br />
        E-Mail: {siteConfig.email}
      </p>

      <h2>Erhebung von Daten</h2>
      <p>
        Diese Website nutzt kein serverseitiges Kontaktformular. Wenn du das
        Formular absendest, werden deine Angaben lokal in eine WhatsApp- oder
        E-Mail-Nachricht übernommen, die du selbst versendest. Es werden dabei
        keine Daten auf dieser Website gespeichert.
      </p>

      <h2>Deine Rechte</h2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung und Löschung deiner Daten.
        Wende dich dazu an die oben genannte Kontaktadresse.
      </p>
    </LegalLayout>
  );
}
