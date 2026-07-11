import { Tag } from "lucide-react";
import { promo } from "@/lib/config";

export default function PromoBar() {
  if (!promo.active) return null;

  return (
    <div className="bg-navy-900 text-white">
      <div className="container-page">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 py-2 text-center text-xs font-medium sm:text-sm">
          <Tag size={14} className="text-teal-300" aria-hidden="true" />
          <span>
            {promo.headline}: {promo.description} mit Code
          </span>
          <span className="rounded-md bg-teal-500 px-2 py-0.5 font-bold tracking-wide text-white">
            {promo.code}
          </span>
        </p>
      </div>
    </div>
  );
}
