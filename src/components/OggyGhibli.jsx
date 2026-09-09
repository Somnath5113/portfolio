import React from 'react'

/**
 * OggyGhibli - Vector Studio Ghibli styled Oggy the Cat
 * Props:
 *  - variant: 'flying' | 'sitting' | 'bubble' | 'sleeping'
 *  - size: number (default 120)
 *  - className: string
 */
export default function OggyGhibli({ variant = 'flying', size = 140, className = '', onClick }) {
  return (
    <div
      className={`oggy-ghibli-container oggy-ghibli--${variant} ${className}`}
      style={{ width: size, height: size }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      title="Oggy (Studio Ghibli Edition) - Click for magic!"
    >
      <svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Oggy Ghibli Cat"
      >
        <defs>
          {/* Oggy Fur Gradient */}
          <radialGradient id="oggyBodyGrad" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#6ba4e8" />
            <stop offset="60%" stopColor="#3b72b8" />
            <stop offset="100%" stopColor="#28528a" />
          </radialGradient>

          {/* Belly Gradient */}
          <radialGradient id="oggyBellyGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="80%" stopColor="#f4eedb" />
            <stop offset="100%" stopColor="#e2d6b5" />
          </radialGradient>

          {/* Red Nose Glow */}
          <radialGradient id="oggyNoseGrad" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#ff7b7b" />
            <stop offset="50%" stopColor="#e74c3c" />
            <stop offset="100%" stopColor="#a91b0d" />
          </radialGradient>

          {/* Dandelion / Leaf Gradient */}
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a8e063" />
            <stop offset="100%" stopColor="#56ab2f" />
          </linearGradient>

          {/* Ghibli Bubble Glow */}
          <radialGradient id="bubbleGrad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
            <stop offset="40%" stopColor="rgba(186, 230, 253, 0.4)" />
            <stop offset="80%" stopColor="rgba(244, 114, 182, 0.25)" />
            <stop offset="100%" stopColor="rgba(125, 211, 252, 0.5)" />
          </radialGradient>

          {/* Soft Shadow */}
          <filter id="ghibliShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="6" stdDeviation="4" floodColor="#1e293b" floodOpacity="0.25" />
          </filter>

          {/* Soft Glow */}
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {variant === 'bubble' && (
          /* Floating Ghibli Soap Bubble */
          <g className="oggy-bubble-bg">
            <circle cx="100" cy="100" r="88" fill="url(#bubbleGrad)" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2" />
            <ellipse cx="65" cy="55" rx="18" ry="8" fill="#ffffff" opacity="0.6" transform="rotate(-30 65 55)" />
            <circle cx="140" cy="135" r="5" fill="#ffffff" opacity="0.5" />
          </g>
        )}

        {variant === 'flying' && (
          /* Ghibli Flying Leaf / Dandelion Seed Glider */
          <g className="oggy-glider" filter="url(#ghibliShadow)">
            {/* Dandelion Parachute Stem */}
            <path d="M100 20 L100 75" stroke="#785938" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Dandelion Fluff Tufts */}
            <g opacity="0.9" fill="none" stroke="#ffffff" strokeWidth="1.8">
              <path d="M100 20 L60 2 M100 20 L75 0 M100 20 L90 -5 M100 20 L100 -6 M100 20 L110 -5 M100 20 L125 0 M100 20 L140 2" />
              <path d="M100 20 L68 10 M100 20 L84 5 M100 20 L116 5 M100 20 L132 10" />
            </g>
            <circle cx="100" cy="20" r="4" fill="#fef08a" />
            
            {/* Small Floating Leaves */}
            <path d="M45 40 Q 55 35 60 45 Q 50 50 45 40 Z" fill="url(#leafGrad)" />
            <path d="M145 35 Q 155 30 160 40 Q 150 45 145 35 Z" fill="url(#leafGrad)" />
          </g>
        )}

        {/* --- OGGY CHARACTER BODY --- */}
        <g className="oggy-body-group" filter="url(#ghibliShadow)">
          {/* Tail */}
          <path
            d="M 145 140 Q 185 145 175 110 Q 168 95 155 105"
            fill="none"
            stroke="url(#oggyBodyGrad)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          {/* Tail Tip (White) */}
          <circle cx="155" cy="105" r="7" fill="#ffffff" />

          {/* Main Round Cute Body */}
          <ellipse cx="100" cy="125" rx="52" ry="46" fill="url(#oggyBodyGrad)" />

          {/* Ghibli Soft Cream Belly */}
          <ellipse cx="100" cy="130" rx="34" ry="30" fill="url(#oggyBellyGrad)" />

          {/* Feet */}
          <ellipse cx="72" cy="166" rx="14" ry="10" fill="url(#oggyBodyGrad)" />
          <ellipse cx="128" cy="166" rx="14" ry="10" fill="url(#oggyBodyGrad)" />
          <ellipse cx="72" cy="170" rx="9" ry="5" fill="#ffffff" opacity="0.9" />
          <ellipse cx="128" cy="170" rx="9" ry="5" fill="#ffffff" opacity="0.9" />

          {/* Arms */}
          <path d="M54 125 Q 40 135 48 150 Q 56 155 64 140 Z" fill="url(#oggyBodyGrad)" />
          <path d="M146 125 Q 160 135 152 150 Q 144 155 136 140 Z" fill="url(#oggyBodyGrad)" />
          {/* White Paws */}
          <circle cx="46" cy="146" r="6" fill="#ffffff" />
          <circle cx="154" cy="146" r="6" fill="#ffffff" />

          {/* --- HEAD & EARS --- */}
          {/* Left Ear */}
          <path d="M62 68 Q 45 35 68 45 Q 76 58 74 70 Z" fill="url(#oggyBodyGrad)" />
          <path d="M63 65 Q 52 42 67 48 Z" fill="#ffb6c1" opacity="0.8" />

          {/* Right Ear */}
          <path d="M138 68 Q 155 35 132 45 Q 124 58 126 70 Z" fill="url(#oggyBodyGrad)" />
          <path d="M137 65 Q 148 42 133 48 Z" fill="#ffb6c1" opacity="0.8" />

          {/* Head Sphere */}
          <ellipse cx="100" cy="78" rx="46" ry="38" fill="url(#oggyBodyGrad)" />

          {/* Muzzle (White fluffy cheeks) */}
          <ellipse cx="86" cy="88" rx="16" ry="12" fill="#ffffff" />
          <ellipse cx="114" cy="88" rx="16" ry="12" fill="#ffffff" />
          
          {/* Cute Whiskers */}
          <path d="M 66 86 Q 45 84 35 80" stroke="#3b72b8" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 65 92 Q 46 94 38 98" stroke="#3b72b8" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 134 86 Q 155 84 165 80" stroke="#3b72b8" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 135 92 Q 154 94 162 98" stroke="#3b72b8" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Big Iconic Red Nose */}
          <circle cx="100" cy="82" r="11" fill="url(#oggyNoseGrad)" />
          <circle cx="96" cy="78" r="3.5" fill="#ffffff" opacity="0.85" />

          {/* Ghibli Expressive Eyes */}
          {/* Left Eye */}
          <g className="oggy-eye">
            <ellipse cx="80" cy="66" rx="11" ry="14" fill="#ffffff" stroke="#28528a" strokeWidth="1.5" />
            {/* Iris */}
            <ellipse cx="82" cy="67" rx="7" ry="9" fill="#1e293b" />
            <ellipse cx="82" cy="67" rx="5" ry="7" fill="#0f172a" />
            {/* Ghibli Starry Highlights */}
            <circle cx="79" cy="63" r="3" fill="#ffffff" />
            <circle cx="84" cy="71" r="1.5" fill="#ffffff" />
          </g>

          {/* Right Eye */}
          <g className="oggy-eye">
            <ellipse cx="120" cy="66" rx="11" ry="14" fill="#ffffff" stroke="#28528a" strokeWidth="1.5" />
            {/* Iris */}
            <ellipse cx="118" cy="67" rx="7" ry="9" fill="#1e293b" />
            <ellipse cx="118" cy="67" rx="5" ry="7" fill="#0f172a" />
            {/* Ghibli Starry Highlights */}
            <circle cx="115" cy="63" r="3" fill="#ffffff" />
            <circle cx="120" cy="71" r="1.5" fill="#ffffff" />
          </g>

          {/* Cute Smile / Mouth */}
          <path d="M 92 93 Q 100 100 108 93" fill="none" stroke="#28528a" strokeWidth="2.5" strokeLinecap="round" />
          {/* Soft Cheek Blush */}
          <ellipse cx="70" cy="80" rx="7" ry="4" fill="#f472b6" opacity="0.45" />
          <ellipse cx="130" cy="80" rx="7" ry="4" fill="#f472b6" opacity="0.45" />
        </g>
      </svg>
    </div>
  )
}
