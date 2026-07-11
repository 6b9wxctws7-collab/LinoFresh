import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="container-page py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-600"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Zurück zur Startseite
        </Link>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          {title}
        </h1>
        <div className="mt-6 flex flex-col gap-4 text-navy-800/80 [&_h2]:mt-6 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-navy-900">
          {children}
        </div>
      </div>
    </main>
  );
}
