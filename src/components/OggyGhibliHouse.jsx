import React from 'react'

/**
 * OggyGhibliHouse - Vector Studio Ghibli styled Oggy's House
 * Iconic yellow walls, magenta roof, chimney smoke rings & Ghibli garden
 */
export default function OggyGhibliHouse({ className = '', style }) {
  return (
    <div className={`oggy-ghibli-house ${className}`} style={style} title="Oggy's Ghibli Cottage">
      <svg
        viewBox="0 0 320 280"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          {/* Yellow Wall Watercolor Gradient */}
          <linearGradient id="wallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff085" />
            <stop offset="60%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>

          {/* Roof Magenta Gradient */}
          <linearGradient id="roofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="60%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#be185d" />
          </linearGradient>

          {/* Door Gradient */}
          <linearGradient id="doorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a16207" />
            <stop offset="100%" stopColor="#713f12" />
          </linearGradient>

          {/* Glass Glow */}
          <radialGradient id="windowGlow" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#38bdf8" />
          </radialGradient>

          {/* Soft Shadow */}
          <filter id="houseShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#1e293b" floodOpacity="0.22" />
          </filter>
        </defs>

        {/* ── Chimney & Ghibli Smoke ── */}
        <g className="house-chimney">
          <rect x="210" y="45" width="26" height="50" fill="#94a3b8" rx="3" filter="url(#houseShadow)" />
          <rect x="206" y="40" width="34" height="10" fill="#64748b" rx="2" />
          {/* Smoke Rings */}
          <g className="smoke-puff-group">
            <circle cx="223" cy="30" r="8" fill="#ffffff" opacity="0.75" className="smoke-puff puff-1" />
            <circle cx="228" cy="15" r="12" fill="#ffffff" opacity="0.6" className="smoke-puff puff-2" />
            <circle cx="235" cy="-2" r="16" fill="#ffffff" opacity="0.4" className="smoke-puff puff-3" />
          </g>
        </g>

        {/* ── Main House Body & Roof ── */}
        <g filter="url(#houseShadow)">
          {/* Main House Wall */}
          <rect x="50" y="110" width="220" height="140" fill="url(#wallGrad)" rx="12" />

          {/* Ghibli Triangle Roof */}
          <path d="M 30 115 L 160 25 L 290 115 Z" fill="url(#roofGrad)" />
          {/* Roof Overhang Trim */}
          <path d="M 22 118 L 160 20 L 298 118 L 290 128 L 160 34 L 30 128 Z" fill="#9d174d" />
          
          {/* Roof Shimmer Tiles Pattern */}
          <path d="M 80 85 Q 95 75 110 85" stroke="#fbcfe8" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 130 65 Q 145 55 160 65" stroke="#fbcfe8" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 180 85 Q 195 75 210 85" stroke="#fbcfe8" strokeWidth="2" fill="none" opacity="0.6" />

          {/* ── Windows ── */}
          {/* Attic Round Window */}
          <circle cx="160" cy="72" r="18" fill="url(#windowGlow)" stroke="#9d174d" strokeWidth="4" />
          <line x1="160" y1="54" x2="160" y2="90" stroke="#9d174d" strokeWidth="2.5" />
          <line x1="142" y1="72" x2="178" y2="72" stroke="#9d174d" strokeWidth="2.5" />

          {/* Ground Floor Windows with Green Shutters */}
          {/* Left Window */}
          <g transform="translate(72, 135)">
            <rect x="0" y="0" width="36" height="42" fill="url(#windowGlow)" rx="4" stroke="#713f12" strokeWidth="3" />
            <line x1="18" y1="0" x2="18" y2="42" stroke="#713f12" strokeWidth="2" />
            <line x1="0" y1="21" x2="36" y2="21" stroke="#713f12" strokeWidth="2" />
            {/* Green Shutters */}
            <rect x="-12" y="0" width="12" height="42" fill="#15803d" rx="2" />
            <rect x="36" y="0" width="12" height="42" fill="#15803d" rx="2" />
          </g>

          {/* Right Window */}
          <g transform="translate(212, 135)">
            <rect x="0" y="0" width="36" height="42" fill="url(#windowGlow)" rx="4" stroke="#713f12" strokeWidth="3" />
            <line x1="18" y1="0" x2="18" y2="42" stroke="#713f12" strokeWidth="2" />
            <line x1="0" y1="21" x2="36" y2="21" stroke="#713f12" strokeWidth="2" />
            {/* Green Shutters */}
            <rect x="-12" y="0" width="12" height="42" fill="#15803d" rx="2" />
            <rect x="36" y="0" width="12" height="42" fill="#15803d" rx="2" />
          </g>

          {/* ── Front Door ── */}
          <g transform="translate(138, 160)">
            <path d="M 0 0 C 0 -12 44 -12 44 0 L 44 90 L 0 90 Z" fill="url(#doorGrad)" stroke="#451a03" strokeWidth="3" />
            {/* Brass Knob */}
            <circle cx="34" cy="45" r="4" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
            {/* Welcome Mat */}
            <rect x="-6" y="86" width="56" height="10" fill="#15803d" rx="3" />
          </g>

          {/* Cockroach Secret Mousehole Tunnel at Base */}
          <path d="M 58 250 A 10 10 0 0 1 78 250 Z" fill="#1e293b" />
          <path d="M 238 250 A 10 10 0 0 1 258 250 Z" fill="#1e293b" />

          {/* ── Ghibli Garden & Sunflowers at Base ── */}
          {/* Sunflowers */}
          <g className="house-sunflower-1">
            <line x1="38" y1="250" x2="38" y2="210" stroke="#15803d" strokeWidth="3.5" />
            <circle cx="38" cy="210" r="7" fill="#713f12" />
            <circle cx="38" cy="210" r="14" fill="none" stroke="#facc15" strokeWidth="5" strokeDasharray="4 4" />
          </g>

          <g className="house-sunflower-2">
            <line x1="282" y1="250" x2="282" y2="215" stroke="#15803d" strokeWidth="3.5" />
            <circle cx="282" cy="215" r="7" fill="#713f12" />
            <circle cx="282" cy="215" r="14" fill="none" stroke="#facc15" strokeWidth="5" strokeDasharray="4 4" />
          </g>
        </g>
      </svg>
    </div>
  )
}
