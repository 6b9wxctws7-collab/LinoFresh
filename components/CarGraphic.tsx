/**
 * Moderne, abstrakte Fahrzeug-Grafik mit Sparkle-Elementen.
 * Rein dekorativ – als Inline-SVG ohne externe Assets für gute Performance.
 */
export default function CarGraphic() {
  return (
    <div
      className="relative mx-auto aspect-[5/4] w-full max-w-lg rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 p-6 shadow-card-hover sm:p-8"
      role="img"
      aria-label="Stilisierte Darstellung eines frisch gereinigten Fahrzeugs"
    >
      {/* Türkis-Glanz */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
      >
        <div className="absolute -right-10 top-6 h-40 w-40 rounded-full bg-teal-500/20 blur-2xl" />
        <div className="absolute -bottom-8 left-8 h-32 w-32 rounded-full bg-teal-400/15 blur-2xl" />
      </div>

      <svg
        viewBox="0 0 400 320"
        className="relative h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {/* Boden-Schatten */}
        <ellipse cx="200" cy="250" rx="150" ry="16" fill="#081625" opacity="0.6" />

        {/* Karosserie */}
        <path
          d="M60 200 Q70 150 110 140 L150 120 Q180 108 220 110 L280 118 Q320 126 345 160 L360 195 Q364 210 350 214 L70 214 Q56 214 60 200 Z"
          fill="#10B8B0"
        />
        <path
          d="M60 200 Q70 150 110 140 L150 120 Q180 108 220 110 L280 118 Q320 126 345 160 L360 195 Q364 210 350 214 L70 214 Q56 214 60 200 Z"
          fill="url(#body)"
          opacity="0.35"
        />

        {/* Fenster */}
        <path
          d="M138 138 L160 124 Q182 114 210 116 L206 150 L142 150 Q134 150 138 138 Z"
          fill="#0D2238"
          opacity="0.85"
        />
        <path
          d="M218 116 L272 122 Q300 128 318 150 L222 150 Z"
          fill="#0D2238"
          opacity="0.85"
        />

        {/* Türlinie */}
        <line x1="210" y1="150" x2="210" y2="210" stroke="#0D2238" strokeWidth="2" opacity="0.3" />

        {/* Räder */}
        <g>
          <circle cx="128" cy="214" r="30" fill="#0D2238" />
          <circle cx="128" cy="214" r="13" fill="#10B8B0" />
          <circle cx="128" cy="214" r="5" fill="#EAFBFA" />
        </g>
        <g>
          <circle cx="292" cy="214" r="30" fill="#0D2238" />
          <circle cx="292" cy="214" r="13" fill="#10B8B0" />
          <circle cx="292" cy="214" r="5" fill="#EAFBFA" />
        </g>

        {/* Glanzstreifen auf der Karosserie */}
        <path
          d="M90 196 Q200 176 340 196"
          stroke="#EAFBFA"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Sparkle-Elemente */}
        <g className="animate-sparkle-slow" style={{ transformOrigin: "300px 90px" }}>
          <path
            d="M300 74 L305 88 L319 93 L305 98 L300 112 L295 98 L281 93 L295 88 Z"
            fill="#EAFBFA"
          />
        </g>
        <g
          className="animate-sparkle-slow [animation-delay:700ms]"
          style={{ transformOrigin: "110px 100px" }}
        >
          <path
            d="M110 90 L113 99 L122 102 L113 105 L110 114 L107 105 L98 102 L107 99 Z"
            fill="#6FDDD7"
          />
        </g>
        <g
          className="animate-sparkle-slow [animation-delay:1400ms]"
          style={{ transformOrigin: "340px 150px" }}
        >
          <path
            d="M340 143 L342 149 L348 151 L342 153 L340 159 L338 153 L332 151 L338 149 Z"
            fill="#EAFBFA"
          />
        </g>

        <defs>
          <linearGradient id="body" x1="60" y1="110" x2="360" y2="214" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#10B8B0" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
