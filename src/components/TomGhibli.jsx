import React from 'react'

/**
 * TomGhibli - Vector Studio Ghibli styled Tom the Cat
 * Props:
 *  - variant: 'flying' | 'running' | 'bubble' | 'sitting'
 *  - size: number (default 130)
 *  - className: string
 *  - onClick: function
 */
export default function TomGhibli({ variant = 'flying', size = 130, className = '', onClick }) {
  return (
    <div
      className={`tom-ghibli-container tom-ghibli--${variant} ${className}`}
      style={{ width: size, height: size }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      title="Tom (Studio Ghibli Cat) - Click for Ghibli magic!"
    >
      <svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Tom Ghibli Cat"
      >
        <defs>
          {/* Tom Fur Gradient */}
          <radialGradient id="tomFurGrad" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="60%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1e293b" />
          </radialGradient>

          {/* Tom White Chest Patch */}
          <radialGradient id="tomChestGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="80%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </radialGradient>

          {/* Golden Yellow Ghibli Eyes */}
          <radialGradient id="tomEyeGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="60%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#854d0e" />
          </radialGradient>

          {/* Balloon / Umbrella Glider Gradient */}
          <linearGradient id="tomBalloonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="50%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#e11d48" />
          </linearGradient>

          {/* Ghibli Soap Bubble Glow */}
          <radialGradient id="tomBubbleGrad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.85)" />
            <stop offset="40%" stopColor="rgba(192, 132, 252, 0.35)" />
            <stop offset="80%" stopColor="rgba(244, 114, 182, 0.25)" />
            <stop offset="100%" stopColor="rgba(56, 189, 248, 0.45)" />
          </radialGradient>

          {/* Soft Drop Shadow */}
          <filter id="tomShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="6" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.3" />
          </filter>
        </defs>

        {variant === 'bubble' && (
          <g className="tom-bubble-bg">
            <circle cx="100" cy="100" r="88" fill="url(#tomBubbleGrad)" stroke="rgba(255, 255, 255, 0.75)" strokeWidth="2" />
            <ellipse cx="65" cy="55" rx="18" ry="8" fill="#ffffff" opacity="0.65" transform="rotate(-30 65 55)" />
            <circle cx="145" cy="135" r="6" fill="#ffffff" opacity="0.5" />
          </g>
        )}

        {variant === 'flying' && (
          /* Tom Floating on Studio Ghibli Hot-Air Striped Balloon */
          <g className="tom-balloon-glider" filter="url(#tomShadow)">
            {/* Balloon Ropes */}
            <line x1="75" y1="55" x2="90" y2="78" stroke="#78350f" strokeWidth="2" />
            <line x1="125" y1="55" x2="110" y2="78" stroke="#78350f" strokeWidth="2" />

            {/* Ghibli Hot Air Balloon Top */}
            <path d="M 60 40 C 40 10 160 10 140 40 C 130 55 115 62 100 62 C 85 62 70 55 60 40 Z" fill="url(#tomBalloonGrad)" />
            {/* Stripes on Balloon */}
            <path d="M 85 18 C 75 30 75 48 85 58" fill="none" stroke="#fef08a" strokeWidth="3" opacity="0.8" />
            <path d="M 115 18 C 125 30 125 48 115 58" fill="none" stroke="#fef08a" strokeWidth="3" opacity="0.8" />
            {/* Shine */}
            <ellipse cx="75" cy="24" rx="8" ry="4" fill="#ffffff" opacity="0.6" transform="rotate(-20 75 24)" />
          </g>
        )}

        {/* ════════ TOM MAIN BODY ════════ */}
        <g className="tom-body-group" filter="url(#tomShadow)">
          {/* Swooping Tail */}
          <path
            d="M 148 135 Q 188 120 178 95 Q 165 75 150 90"
            fill="none"
            stroke="url(#tomFurGrad)"
            strokeWidth="15"
            strokeLinecap="round"
          />
          {/* White Tail Tip */}
          <circle cx="150" cy="90" r="7.5" fill="#ffffff" />

          {/* Main Body */}
          <ellipse cx="100" cy="126" rx="50" ry="44" fill="url(#tomFurGrad)" />

          {/* White Chest & Belly Patch */}
          <ellipse cx="100" cy="130" rx="32" ry="28" fill="url(#tomChestGrad)" />

          {/* Feet */}
          <ellipse cx="74" cy="166" rx="14" ry="10" fill="url(#tomFurGrad)" />
          <ellipse cx="126" cy="166" rx="14" ry="10" fill="url(#tomFurGrad)" />
          {/* White Paws */}
          <ellipse cx="74" cy="170" rx="9" ry="5" fill="#ffffff" />
          <ellipse cx="126" cy="170" rx="9" ry="5" fill="#ffffff" />

          {/* Arms */}
          {variant === 'running' ? (
            /* Holding a Wooden Ghibli Broom/Mallet */
            <g>
              <path d="M 50 125 Q 35 130 45 145" fill="none" stroke="url(#tomFurGrad)" strokeWidth="12" strokeLinecap="round" />
              <path d="M 150 125 Q 165 130 155 145" fill="none" stroke="url(#tomFurGrad)" strokeWidth="12" strokeLinecap="round" />
              {/* Wooden Broom Handle */}
              <line x1="30" y1="165" x2="160" y2="105" stroke="#78350f" strokeWidth="4.5" strokeLinecap="round" />
              {/* Straw Broom End */}
              <path d="M 160 105 L 180 92 L 185 115 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
            </g>
          ) : (
            <g>
              <path d="M 52 125 Q 38 135 48 150 Z" fill="url(#tomFurGrad)" />
              <path d="M 148 125 Q 162 135 152 150 Z" fill="url(#tomFurGrad)" />
              <circle cx="46" cy="146" r="6" fill="#ffffff" />
              <circle cx="154" cy="146" r="6" fill="#ffffff" />
            </g>
          )}

          {/* ════════ HEAD & EARS ════════ */}
          {/* Left Ear */}
          <path d="M 60 70 Q 38 32 64 42 Q 74 56 72 72 Z" fill="url(#tomFurGrad)" />
          <path d="M 61 66 Q 48 40 63 46 Z" fill="#f472b6" opacity="0.8" />

          {/* Right Ear */}
          <path d="M 140 70 Q 162 32 136 42 Q 126 56 128 72 Z" fill="url(#tomFurGrad)" />
          <path d="M 139 66 Q 152 40 137 46 Z" fill="#f472b6" opacity="0.8" />

          {/* Head Shape */}
          <ellipse cx="100" cy="78" rx="44" ry="36" fill="url(#tomFurGrad)" />

          {/* Fluffy White Cheeks/Muzzle */}
          <ellipse cx="85" cy="88" rx="16" ry="12" fill="#ffffff" />
          <ellipse cx="115" cy="88" rx="16" ry="12" fill="#ffffff" />

          {/* Whiskers */}
          <path d="M 65 86 Q 42 84 32 78" stroke="#94a3b8" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 64 92 Q 44 94 35 98" stroke="#94a3b8" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 135 86 Q 158 84 168 78" stroke="#94a3b8" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 136 92 Q 156 94 165 98" stroke="#94a3b8" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Red/Brown Nose */}
          <ellipse cx="100" cy="81" rx="8" ry="6" fill="#ef4444" />
          <circle cx="97" cy="79" r="2.5" fill="#ffffff" opacity="0.85" />

          {/* ════════ EXPRESSIVE GHIBLI EYES ════════ */}
          {/* Left Eye */}
          <g className="tom-eye">
            <ellipse cx="80" cy="65" rx="11" ry="14" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
            <ellipse cx="82" cy="66" rx="7.5" ry="9.5" fill="url(#tomEyeGrad)" />
            <ellipse cx="82" cy="66" rx="4" ry="6" fill="#0f172a" />
            <circle cx="79" cy="62" r="3" fill="#ffffff" />
            <circle cx="84" cy="70" r="1.5" fill="#ffffff" />
          </g>

          {/* Right Eye */}
          <g className="tom-eye">
            <ellipse cx="120" cy="65" rx="11" ry="14" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
            <ellipse cx="118" cy="66" rx="7.5" ry="9.5" fill="url(#tomEyeGrad)" />
            <ellipse cx="118" cy="66" rx="4" ry="6" fill="#0f172a" />
            <circle cx="115" cy="62" r="3" fill="#ffffff" />
            <circle cx="120" cy="70" r="1.5" fill="#ffffff" />
          </g>

          {/* Playful Ghibli Smile */}
          <path d="M 91 93 Q 100 100 109 93" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="68" cy="80" rx="6" ry="3.5" fill="#fb7185" opacity="0.4" />
          <ellipse cx="132" cy="80" rx="6" ry="3.5" fill="#fb7185" opacity="0.4" />
        </g>
      </svg>
    </div>
  )
}
