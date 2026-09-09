import React from 'react'

/**
 * OggyGhibliFriends - Vector Studio Ghibli Jack (Green Cat in Leaf Plane) & Bob (Sleeping Bulldog)
 */
export function JackLeafPlane({ size = 110, className = '' }) {
  return (
    <div className={`jack-plane-container ${className}`} style={{ width: size, height: size * 0.7 }}>
      <svg viewBox="0 0 160 110" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <linearGradient id="jackBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="planeWood" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>

        {/* ── Wooden Ghibli Leaf Plane ── */}
        <g opacity="0.95">
          {/* Propeller Spinner */}
          <circle cx="145" cy="65" r="5" fill="#f59e0b" />
          <ellipse cx="145" cy="65" rx="3" ry="18" fill="#ffffff" opacity="0.85" className="jack-propeller" />

          {/* Plane Wings */}
          <path d="M 40 50 L 130 50 L 120 40 L 50 40 Z" fill="#22c55e" />
          <path d="M 40 80 L 130 80 L 120 90 L 50 90 Z" fill="#15803d" />

          {/* Plane Body */}
          <path d="M 20 65 Q 40 52 140 60 Q 142 65 140 70 Q 40 78 20 65 Z" fill="url(#planeWood)" />
          {/* Tail Fin */}
          <path d="M 20 65 L 5 45 L 30 60 Z" fill="#ef4444" />

          {/* ── Jack (Green Cat Pilot) ── */}
          <g transform="translate(70, 22)">
            {/* Ears */}
            <path d="M 12 18 L 4 2 L 20 10 Z" fill="url(#jackBody)" />
            <path d="M 28 18 L 36 2 L 20 10 Z" fill="url(#jackBody)" />

            {/* Head */}
            <ellipse cx="20" cy="24" rx="16" ry="14" fill="url(#jackBody)" />

            {/* Pilot Goggles */}
            <rect x="8" y="16" width="24" height="10" fill="#78350f" rx="4" />
            <circle cx="14" cy="21" r="4" fill="#67e8f9" />
            <circle cx="26" cy="21" r="4" fill="#67e8f9" />

            {/* White Muzzle & Red Nose */}
            <ellipse cx="20" cy="30" rx="7" ry="5" fill="#ffffff" />
            <circle cx="20" cy="27" r="2.5" fill="#ef4444" />
          </g>
        </g>
      </svg>
    </div>
  )
}

export function BobBulldog({ size = 90, className = '' }) {
  return (
    <div className={`bob-bulldog-container ${className}`} style={{ width: size, height: size * 0.85 }}>
      <svg viewBox="0 0 140 120" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <linearGradient id="bobBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
        </defs>

        {/* ── Doghouse ── */}
        <path d="M 15 110 L 15 65 L 45 40 L 75 65 L 75 110 Z" fill="#9a3412" />
        <path d="M 8 68 L 45 35 L 82 68" stroke="#7c2d12" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M 30 110 A 15 15 0 0 1 60 110 Z" fill="#1e293b" />
        <text x="45" y="60" fontSize="10" fontWeight="bold" fill="#fef08a" textAnchor="middle">BOB</text>

        {/* ── Sleeping Bob Bulldog ── */}
        <g transform="translate(55, 60)">
          {/* Round Body */}
          <ellipse cx="40" cy="35" rx="28" ry="20" fill="url(#bobBody)" />
          {/* Spiked Collar */}
          <path d="M 22 28 Q 28 42 38 35" stroke="#ef4444" strokeWidth="6" fill="none" />
          <circle cx="25" cy="32" r="1.5" fill="#ffffff" />
          <circle cx="31" cy="37" r="1.5" fill="#ffffff" />

          {/* Sleeping Head */}
          <circle cx="20" cy="25" r="18" fill="url(#bobBody)" />
          {/* Droopy Jowls */}
          <ellipse cx="14" cy="30" rx="9" ry="7" fill="#fde047" />
          <ellipse cx="26" cy="30" rx="9" ry="7" fill="#fde047" />
          <ellipse cx="20" cy="24" rx="5" ry="4" fill="#1e293b" /> {/* Nose */}

          {/* Closed Sleeping Eyes (Zzz) */}
          <path d="M 10 20 Q 14 24 18 20" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 22 20 Q 26 24 30 20" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Floating Zzz Bubbles */}
        <g className="bob-zzz">
          <text x="105" y="45" fontSize="14" fontWeight="bold" fill="#38bdf8" opacity="0.8">Z</text>
          <text x="116" y="30" fontSize="18" fontWeight="bold" fill="#38bdf8" opacity="0.6">Z</text>
          <text x="128" y="14" fontSize="22" fontWeight="bold" fill="#38bdf8" opacity="0.4">z</text>
        </g>
      </svg>
    </div>
  )
}
