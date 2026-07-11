import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-100 bg-white">
      <div className="container-page py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/linofresh-logo.png"
              alt="LinoFresh Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl"
            />
            <div>
              <p className="text-lg font-extrabold text-navy-900">LinoFresh</p>
              <p className="text-sm text-teal-700">{siteConfig.subtitle}</p>
            </div>
          </div>

          <nav aria-label="Footer-Navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-navy-800">
              <li>
                <a href="#leistungen" className="hover:text-teal-600">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-teal-600">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="/impressum" className="hover:text-teal-600">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-teal-600">
                  Datenschutz
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-navy-100 pt-6">
          <p className="text-sm text-navy-800/60">
            © {year} LinoFresh · Mobile Autopflege Basel. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
