import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/config";

export default function WhatsAppButton() {
  const href = buildWhatsAppLink(
    "Hallo LinoFresh, ich interessiere mich für eine mobile Autoinnenreinigung.",
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinoFresh über WhatsApp kontaktieren"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-teal-500 px-4 py-3.5 text-sm font-semibold text-white shadow-card-hover transition-all duration-200 hover:bg-teal-600 hover:shadow-card active:scale-95"
    >
      <MessageCircle size={20} aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
