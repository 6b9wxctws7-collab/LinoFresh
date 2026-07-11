/**
 * Stilisierte, self-contained Karte des Einsatzgebiets (ca. 10 km um Basel).
 * Reines Inline-SVG – keine externen Kartendienste, kein API-Key, keine Tiles.
 * Positionen sind schematisch an der realen Lage der Orte orientiert.
 */

type Place = {
  name: string;
  x: number;
  y: number;
  anchor: "start" | "middle" | "end";
  dx: number;
  dy: number;
  center?: boolean;
};

const places: Place[] = [
  { name: "Basel", x: 220, y: 205, anchor: "start", dx: 14, dy: 5, center: true },
  { name: "Riehen", x: 285, y: 140, anchor: "start", dx: 12, dy: 4 },
  { name: "Allschwil", x: 130, y: 225, anchor: "end", dx: -12, dy: 4 },
  { name: "Binningen", x: 195, y: 272, anchor: "middle", dx: 0, dy: 20 },
  { name: "Muttenz", x: 315, y: 235, anchor: "start", dx: 12, dy: 4 },
  { name: "Münchenstein", x: 250, y: 302, anchor: "start", dx: 12, dy: 4 },
];

export default function MapBasel() {
  const cx = 220;
  const cy = 205;
  const radius = 165;

  return (
    <div className="rounded-3xl border border-navy-100 bg-white p-4 shadow-card sm:p-5">
      <div className="flex items-center justify-between px-1 pb-3">
        <p className="text-sm font-semibold text-navy-900">Einsatzgebiet</p>
        <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
          ca. 10 km um Basel
        </span>
      </div>

      <svg
        viewBox="0 0 440 400"
        className="h-auto w-full"
        role="img"
        aria-label="Schematische Karte des Einsatzgebiets: rund 10 Kilometer rund um Basel, inklusive Riehen, Allschwil, Binningen, Muttenz und Münchenstein."
      >
        <defs>
          <radialGradient id="mapbg" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#EAFBFA" />
            <stop offset="100%" stopColor="#F2F5F8" />
          </radialGradient>
        </defs>

        {/* Hintergrund */}
        <rect x="0" y="0" width="440" height="400" rx="20" fill="url(#mapbg)" />

        {/* Rhein (dezent, stilisiert) */}
        <path
          d="M270 392 Q225 300 235 220 Q243 150 150 70"
          fill="none"
          stroke="#A4EBE7"
          strokeWidth="14"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* 10-km-Radius */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="#10B8B0"
          fillOpacity="0.06"
          stroke="#10B8B0"
          strokeWidth="2"
          strokeDasharray="7 7"
        />

        {/* Radius-Linie mit Beschriftung */}
        <line
          x1={cx}
          y1={cy}
          x2={cx}
          y2={cy - radius}
          stroke="#0C817B"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <g>
          <rect
            x={cx - 34}
            y={cy - radius - 22}
            width="68"
            height="22"
            rx="11"
            fill="#0D2238"
          />
          <text
            x={cx}
            y={cy - radius - 7}
            textAnchor="middle"
            fontSize="12"
            fontWeight="700"
            fill="#FFFFFF"
          >
            ≈ 10 km
          </text>
        </g>

        {/* Orte */}
        {places.map((p) => (
          <g key={p.name}>
            {p.center ? (
              <>
                <circle cx={p.x} cy={p.y} r="11" fill="#0D2238" opacity="0.15" />
                <circle cx={p.x} cy={p.y} r="7" fill="#0D2238" />
                <circle cx={p.x} cy={p.y} r="2.5" fill="#10B8B0" />
              </>
            ) : (
              <>
                <circle cx={p.x} cy={p.y} r="5.5" fill="#10B8B0" />
                <circle cx={p.x} cy={p.y} r="2" fill="#FFFFFF" />
              </>
            )}
            <text
              x={p.x + p.dx}
              y={p.y + p.dy}
              textAnchor={p.anchor}
              fontSize="14"
              fontWeight={p.center ? 700 : 600}
              fill="#0D2238"
            >
              {p.name}
            </text>
          </g>
        ))}
      </svg>

      <p className="px-1 pt-2 text-xs text-navy-800/60">
        Schematische Darstellung. Weitere Orte gerne auf Anfrage.
      </p>
    </div>
  );
}
