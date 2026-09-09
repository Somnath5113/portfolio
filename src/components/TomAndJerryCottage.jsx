import React from 'react'

/**
 * TomAndJerryCottage - Studio Ghibli Tree Stump Mousehole & Cat Nook
 * Cozy Ghibli landscape element placed on rolling hills
 */
export default function TomAndJerryCottage({ className = '', style }) {
  return (
    <div className={`tom-jerry-cottage ${className}`} style={style} title="Tom & Jerry Ghibli Cottage">
      <svg
        viewBox="0 0 280 240"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          {/* Wood Bark Gradient */}
          <linearGradient id="barkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#854d0e" />
            <stop offset="50%" stopColor="#78350f" />
            <stop offset="100%" stopColor="#451a03" />
          </linearGradient>

          {/* Mossy Green Top */}
          <linearGradient id="mossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="60%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          {/* Lantern Glow */}
          <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>

          {/* Shadow */}
          <filter id="cottageShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="8" stdDeviation="5" floodColor="#0f172a" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* ── 1. Main Tree Stump Base ── */}
        <g filter="url(#cottageShadow)">
          {/* Trunk Body */}
          <path d="M 50 100 C 40 180 30 220 20 230 L 260 230 C 250 220 240 180 230 100 C 180 85 100 85 50 100 Z" fill="url(#barkGrad)" />

          {/* Bark Textures */}
          <path d="M 70 120 Q 65 160 60 210" stroke="#451a03" strokeWidth="3" fill="none" opacity="0.6" />
          <path d="M 110 115 Q 105 165 100 220" stroke="#451a03" strokeWidth="3" fill="none" opacity="0.6" />
          <path d="M 170 115 Q 175 165 180 220" stroke="#451a03" strokeWidth="3" fill="none" opacity="0.6" />
          <path d="M 210 120 Q 215 160 220 210" stroke="#451a03" strokeWidth="3" fill="none" opacity="0.6" />

          {/* Lush Ghibli Mossy Canopy Roof */}
          <ellipse cx="140" cy="95" rx="100" ry="25" fill="url(#mossGrad)" />
          <path d="M 40 95 C 40 60 240 60 240 95 Z" fill="url(#mossGrad)" />

          {/* Tiny Red Ghibli Toadstool Mushrooms on top */}
          <g transform="translate(100, 50)">
            <rect x="18" y="15" width="4" height="12" fill="#fef08a" rx="2" />
            <path d="M 8 15 C 8 2 32 2 32 15 Z" fill="#ef4444" />
            <circle cx="15" cy="8" r="1.8" fill="#ffffff" />
            <circle cx="25" cy="10" r="1.5" fill="#ffffff" />
          </g>

          <g transform="translate(150, 55)">
            <rect x="12" y="10" width="3.5" height="10" fill="#fef08a" rx="1" />
            <path d="M 5 10 C 5 0 23 0 23 10 Z" fill="#f97316" />
            <circle cx="10" cy="5" r="1.2" fill="#ffffff" />
            <circle cx="17" cy="6" r="1" fill="#ffffff" />
          </g>

          {/* ── 2. Jerry's Arch Mousehole Door ── */}
          <g transform="translate(110, 150)">
            <path d="M 0 0 C 0 -25 60 -25 60 0 L 60 75 L 0 75 Z" fill="#1e293b" stroke="#78350f" strokeWidth="4" />
            {/* Wooden Door Frame */}
            <path d="M 8 75 L 8 10 C 8 -12 52 -12 52 10 L 52 75" stroke="#facc15" strokeWidth="3" fill="none" />
            {/* Brass Door Knob */}
            <circle cx="45" cy="38" r="4.5" fill="#fde047" stroke="#ca8a04" strokeWidth="1" />
            {/* Tiny Cheese Welcome Mat */}
            <rect x="-4" y="73" width="68" height="8" fill="#facc15" rx="3" />
          </g>

          {/* ── 3. Tom's Cat Nook Window ── */}
          <g transform="translate(175, 125)">
            <circle cx="20" cy="20" r="18" fill="url(#lanternGlow)" stroke="#78350f" strokeWidth="3" />
            <line x1="20" y1="2" x2="20" y2="38" stroke="#78350f" strokeWidth="2" />
            <line x1="2" y1="20" x2="38" y2="20" stroke="#78350f" strokeWidth="2" />
          </g>

          {/* ── 4. Glowing Acorn Lantern hanging on Branch ── */}
          <g transform="translate(50, 130)">
            <path d="M 0 -10 Q -15 -10 -20 15" stroke="#78350f" strokeWidth="3" fill="none" />
            {/* Acorn Lantern */}
            <path d="M -26 15 Q -20 5 -14 15 Z" fill="#78350f" />
            <ellipse cx="-20" cy="24" rx="8" ry="10" fill="url(#lanternGlow)" stroke="#ca8a04" strokeWidth="1.5" />
          </g>

          {/* ── 5. Ghibli Flowers & Clover Patch at Base ── */}
          <g className="cottage-flowers">
            <line x1="35" y1="230" x2="35" y2="195" stroke="#15803d" strokeWidth="3" />
            <circle cx="35" cy="195" r="6" fill="#f472b6" />
            <circle cx="35" cy="195" r="2.5" fill="#fef08a" />

            <line x1="245" y1="230" x2="245" y2="200" stroke="#15803d" strokeWidth="3" />
            <circle cx="245" cy="200" r="6" fill="#38bdf8" />
            <circle cx="245" cy="200" r="2.5" fill="#fef08a" />
          </g>
        </g>
      </svg>
    </div>
  )
}
