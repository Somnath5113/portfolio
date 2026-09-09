import React from 'react'

/**
 * CockroachesGhibli - Vector Studio Ghibli styled Joey, Dee Dee & Marky
 * Props:
 *  - character: 'joey' | 'deedee' | 'marky' | 'all'
 *  - size: number
 *  - className: string
 *  - onClick: function
 */
export default function CockroachesGhibli({ character = 'joey', size = 80, className = '', onClick }) {
  return (
    <div
      className={`cockroach-ghibli cockroach--${character} ${className}`}
      style={{ width: size, height: size }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      title={`${character.toUpperCase()} (Studio Ghibli Cockroach) - Click me!`}
    >
      <svg
        viewBox="0 0 160 160"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        aria-label={`${character} cockroach`}
      >
        <defs>
          {/* Joey Colors */}
          <radialGradient id="joeyBodyGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="70%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#581c87" />
          </radialGradient>
          <radialGradient id="joeyFaceGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#eab308" />
          </radialGradient>

          {/* Dee Dee Colors */}
          <radialGradient id="deedeeBodyGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="70%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#9a3412" />
          </radialGradient>
          <radialGradient id="deedeeFaceGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#22c55e" />
          </radialGradient>

          {/* Marky Colors */}
          <radialGradient id="markyBodyGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="70%" stopColor="#059669" />
            <stop offset="100%" stopColor="#064e3b" />
          </radialGradient>
          <radialGradient id="markyFaceGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#db2777" />
          </radialGradient>

          {/* Fairy Wing Glow */}
          <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.85)" />
            <stop offset="50%" stopColor="rgba(192, 232, 255, 0.6)" />
            <stop offset="100%" stopColor="rgba(253, 224, 71, 0.4)" />
          </linearGradient>

          {/* Shadow */}
          <filter id="roachShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="4" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* ════════ JOEY (PURPLE & YELLOW LEADER) ════════ */}
        {(character === 'joey' || character === 'all') && (
          <g className="roach-joey-group" filter="url(#roachShadow)">
            {/* Antennae */}
            <path d="M 70 42 Q 40 10 25 18" stroke="#9333ea" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 90 42 Q 120 10 135 18" stroke="#9333ea" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="25" cy="18" r="3.5" fill="#fde047" />
            <circle cx="135" cy="18" r="3.5" fill="#fde047" />

            {/* Wings */}
            <ellipse cx="52" cy="85" rx="18" ry="34" fill="url(#wingGrad)" transform="rotate(-25 52 85)" stroke="rgba(255,255,255,0.7)" />
            <ellipse cx="108" cy="85" rx="18" ry="34" fill="url(#wingGrad)" transform="rotate(25 108 85)" stroke="rgba(255,255,255,0.7)" />

            {/* Body */}
            <ellipse cx="80" cy="98" rx="28" ry="38" fill="url(#joeyBodyGrad)" />
            {/* Belly Stripes */}
            <path d="M 60 92 Q 80 88 100 92" stroke="#581c87" strokeWidth="2.5" fill="none" />
            <path d="M 58 106 Q 80 102 102 106" stroke="#581c87" strokeWidth="2.5" fill="none" />
            <path d="M 62 120 Q 80 116 98 120" stroke="#581c87" strokeWidth="2.5" fill="none" />

            {/* Head */}
            <circle cx="80" cy="56" r="22" fill="url(#joeyFaceGrad)" />

            {/* Joey Red Eyes */}
            <circle cx="70" cy="52" r="7" fill="#ef4444" stroke="#991b1b" strokeWidth="1" />
            <circle cx="90" cy="52" r="7" fill="#ef4444" stroke="#991b1b" strokeWidth="1" />
            <circle cx="68" cy="50" r="2.5" fill="#ffffff" />
            <circle cx="88" cy="50" r="2.5" fill="#ffffff" />

            {/* Pink Nose/Mouth */}
            <ellipse cx="80" cy="62" rx="4" ry="3" fill="#ec4899" />
            <path d="M 76 67 Q 80 71 84 67" stroke="#713f12" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Joey holding tiny Ghibli leaf banner */}
            <path d="M 80 105 Q 110 90 125 100" stroke="#15803d" strokeWidth="2" fill="none" />
            <path d="M 125 100 Q 138 85 130 110 Q 115 112 125 100 Z" fill="#4ade80" />
          </g>
        )}

        {/* ════════ DEE DEE (ORANGE & GREEN CHUBBY FOODIE) ════════ */}
        {character === 'deedee' && (
          <g className="roach-deedee-group" filter="url(#roachShadow)">
            {/* Cute Curly Antennae */}
            <path d="M 72 45 Q 45 20 30 35 Q 25 45 35 48" stroke="#ea580c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 88 45 Q 115 20 130 35 Q 135 45 125 48" stroke="#ea580c" strokeWidth="2.5" fill="none" strokeLinecap="round" />

            {/* Wings */}
            <ellipse cx="48" cy="90" rx="20" ry="32" fill="url(#wingGrad)" transform="rotate(-30 48 90)" stroke="rgba(255,255,255,0.7)" />
            <ellipse cx="112" cy="90" rx="20" ry="32" fill="url(#wingGrad)" transform="rotate(30 112 90)" stroke="rgba(255,255,255,0.7)" />

            {/* Chubby Round Body */}
            <ellipse cx="80" cy="102" rx="36" ry="36" fill="url(#deedeeBodyGrad)" />
            {/* Belly segments */}
            <ellipse cx="80" cy="108" rx="22" ry="18" fill="#ffedd5" opacity="0.8" />

            {/* Head */}
            <ellipse cx="80" cy="58" rx="24" ry="20" fill="url(#deedeeFaceGrad)" />

            {/* Dee Dee Big Blue Eyes */}
            <circle cx="68" cy="54" r="8" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />
            <circle cx="92" cy="54" r="8" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1" />
            <circle cx="66" cy="51" r="3" fill="#ffffff" />
            <circle cx="90" cy="51" r="3" fill="#ffffff" />

            {/* Open Mouth eating Onigiri Riceball */}
            <ellipse cx="80" cy="67" rx="5" ry="4" fill="#991b1b" />

            {/* Onigiri / Cheese held in paws */}
            <path d="M 70 85 L 90 85 L 80 72 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <path d="M 73 85 L 87 85 L 80 88 Z" fill="#1e293b" /> {/* Nori sheet */}
          </g>
        )}

        {/* ════════ MARKY (GREEN TALL & SLENDER DREAMY) ════════ */}
        {character === 'marky' && (
          <g className="roach-marky-group" filter="url(#roachShadow)">
            {/* Extra Long Dreamy Antennae */}
            <path d="M 72 40 Q 30 -5 15 15" stroke="#059669" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 88 40 Q 130 -5 145 15" stroke="#059669" strokeWidth="2" fill="none" strokeLinecap="round" />
            <polygon points="15,15 12,20 18,20" fill="#f472b6" />
            <polygon points="145,15 142,20 148,20" fill="#f472b6" />

            {/* Wings */}
            <ellipse cx="50" cy="80" rx="14" ry="40" fill="url(#wingGrad)" transform="rotate(-15 50 80)" stroke="rgba(255,255,255,0.7)" />
            <ellipse cx="110" cy="80" rx="14" ry="40" fill="url(#wingGrad)" transform="rotate(15 110 80)" stroke="rgba(255,255,255,0.7)" />

            {/* Slender Tall Body */}
            <ellipse cx="80" cy="95" rx="22" ry="45" fill="url(#markyBodyGrad)" />

            {/* Head */}
            <ellipse cx="80" cy="50" rx="20" ry="18" fill="url(#markyFaceGrad)" />

            {/* Marky Pink Eyes */}
            <circle cx="70" cy="48" r="7.5" fill="#f43f5e" stroke="#881337" strokeWidth="1" />
            <circle cx="90" cy="48" r="7.5" fill="#f43f5e" stroke="#881337" strokeWidth="1" />
            <circle cx="68" cy="45" r="2.5" fill="#ffffff" />
            <circle cx="88" cy="45" r="2.5" fill="#ffffff" />

            {/* Dreamy Smile */}
            <path d="M 74 58 Q 80 64 86 58" stroke="#881337" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Holding a Ghibli Flower */}
            <path d="M 80 95 Q 60 110 45 105" stroke="#15803d" strokeWidth="2" fill="none" />
            <circle cx="45" cy="105" r="6" fill="#f472b6" />
            <circle cx="45" cy="105" r="2.5" fill="#fde047" />
          </g>
        )}
      </svg>
    </div>
  )
}
