import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von LinoFresh – Mobile Autopflege Basel.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <p>
        Die folgenden Angaben sind Platzhalter und werden vor dem Livegang durch
        die tatsächlichen Kontakt- und Firmendaten ersetzt.
      </p>

      <h2>Angaben zum Anbieter</h2>
      <p>
        LinoFresh – Mobile Autopflege Basel
        <br />
        {siteConfig.location}
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: {siteConfig.phoneDisplay}
        <br />
        E-Mail: {siteConfig.email}
      </p>

      <h2>Haftungshinweis</h2>
      <p>
        Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität wird keine Gewähr
        übernommen.
      </p>
    </LegalLayout>
  );
}
