import React from 'react'

/**
 * JerryGhibli - Vector Studio Ghibli styled Jerry the Mouse
 * Props:
 *  - variant: 'flying' | 'running' | 'bubble' | 'sitting'
 *  - size: number (default 100)
 *  - className: string
 *  - onClick: function
 */
export default function JerryGhibli({ variant = 'flying', size = 100, className = '', onClick }) {
  return (
    <div
      className={`jerry-ghibli-container jerry-ghibli--${variant} ${className}`}
      style={{ width: size, height: size }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      title="Jerry (Studio Ghibli Mouse) - Click for Ghibli magic!"
    >
      <svg
        viewBox="0 0 180 180"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Jerry Ghibli Mouse"
      >
        <defs>
          {/* Jerry Warm Honey Brown Gradient */}
          <radialGradient id="jerryBodyGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="60%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#92400e" />
          </radialGradient>

          {/* Belly Cream */}
          <radialGradient id="jerryBellyGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="80%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>

          {/* Ears Pink Glow */}
          <radialGradient id="jerryEarGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fca5a5" />
            <stop offset="80%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#ef4444" />
          </radialGradient>

          {/* Golden Ghibli Cheese Gradient */}
          <linearGradient id="cheeseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="60%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>

          {/* Ghibli Leaf Glider Gradient */}
          <linearGradient id="jerryLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>

          {/* Bubble Glow */}
          <radialGradient id="jerryBubbleGrad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.85)" />
            <stop offset="40%" stopColor="rgba(253, 224, 71, 0.35)" />
            <stop offset="80%" stopColor="rgba(134, 239, 172, 0.25)" />
            <stop offset="100%" stopColor="rgba(56, 189, 248, 0.45)" />
          </radialGradient>

          {/* Soft Shadow */}
          <filter id="jerryShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="1" dy="4" stdDeviation="3" floodColor="#451a03" floodOpacity="0.25" />
          </filter>
        </defs>

        {variant === 'bubble' && (
          <g className="jerry-bubble-bg">
            <circle cx="90" cy="90" r="78" fill="url(#jerryBubbleGrad)" stroke="rgba(255, 255, 255, 0.75)" strokeWidth="2" />
            <ellipse cx="60" cy="50" rx="15" ry="7" fill="#ffffff" opacity="0.65" transform="rotate(-30 60 50)" />
          </g>
        )}

        {variant === 'flying' && (
          /* Jerry Riding a Studio Ghibli Leaf Glider */
          <g className="jerry-leaf-glider" filter="url(#jerryShadow)">
            {/* Big Green Ghibli Leaf */}
            <path d="M 20 110 C 10 50 140 20 165 70 C 140 120 40 140 20 110 Z" fill="url(#jerryLeafGrad)" />
            {/* Leaf Veins */}
            <path d="M 20 110 Q 90 75 165 70" fill="none" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 60 92 Q 80 70 100 70" fill="none" stroke="#15803d" strokeWidth="1.5" />
            <path d="M 90 80 Q 110 60 130 62" fill="none" stroke="#15803d" strokeWidth="1.5" />
          </g>
        )}

        {/* ════════ JERRY MAIN BODY ════════ */}
        <g className="jerry-body-group" filter="url(#jerryShadow)">
          {/* Tail */}
          <path
            d="M 125 125 Q 160 130 150 100 Q 140 85 155 75"
            fill="none"
            stroke="#d97706"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Cute Round Body */}
          <ellipse cx="90" cy="115" rx="36" ry="34" fill="url(#jerryBodyGrad)" />

          {/* Creamy Belly */}
          <ellipse cx="90" cy="118" rx="22" ry="20" fill="url(#jerryBellyGrad)" />

          {/* Feet */}
          <ellipse cx="72" cy="145" rx="10" ry="7" fill="url(#jerryBodyGrad)" />
          <ellipse cx="108" cy="145" rx="10" ry="7" fill="url(#jerryBodyGrad)" />
          <ellipse cx="72" cy="148" rx="6" ry="4" fill="#fde68a" />
          <ellipse cx="108" cy="148" rx="6" ry="4" fill="#fde68a" />

          {/* ════════ GOLDEN GHIBLI CHEESE WEDGE ════════ */}
          {(variant === 'running' || variant === 'sitting') && (
            <g className="jerry-cheese-wedge" transform="translate(100, 100)">
              <path d="M 0 0 L 45 -20 L 40 25 Z" fill="url(#cheeseGrad)" stroke="#b45309" strokeWidth="1.5" />
              <circle cx="20" cy="-2" r="4" fill="#b45309" opacity="0.3" />
              <circle cx="32" cy="10" r="3" fill="#b45309" opacity="0.3" />
              <circle cx="12" cy="12" r="3.5" fill="#b45309" opacity="0.3" />
            </g>
          )}

          {/* ════════ HEAD & OVERSIZED EARS ════════ */}
          {/* Left Oversized Mouse Ear */}
          <circle cx="56" cy="52" r="24" fill="url(#jerryBodyGrad)" />
          <circle cx="58" cy="54" r="15" fill="url(#jerryEarGrad)" opacity="0.9" />

          {/* Right Oversized Mouse Ear */}
          <circle cx="124" cy="52" r="24" fill="url(#jerryBodyGrad)" />
          <circle cx="122" cy="54" r="15" fill="url(#jerryEarGrad)" opacity="0.9" />

          {/* Head Sphere */}
          <ellipse cx="90" cy="72" rx="32" ry="28" fill="url(#jerryBodyGrad)" />

          {/* Cheeks & Snout */}
          <ellipse cx="90" cy="80" rx="18" ry="12" fill="url(#jerryBellyGrad)" />

          {/* Whiskers */}
          <path d="M 68 80 Q 48 78 40 72" stroke="#78350f" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 67 85 Q 50 87 42 90" stroke="#78350f" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 112 80 Q 132 78 140 72" stroke="#78350f" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 113 85 Q 130 87 138 90" stroke="#78350f" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Nose */}
          <circle cx="90" cy="75" r="4.5" fill="#78350f" />
          <circle cx="88.5" cy="73.5" r="1.5" fill="#ffffff" />

          {/* ════════ EXPRESSIVE GHIBLI EYES ════════ */}
          {/* Left Eye */}
          <g className="jerry-eye">
            <ellipse cx="78" cy="62" rx="8" ry="11" fill="#ffffff" stroke="#451a03" strokeWidth="1" />
            <ellipse cx="79" cy="63" rx="5.5" ry="7.5" fill="#451a03" />
            <circle cx="77" cy="59" r="2.5" fill="#ffffff" />
            <circle cx="81" cy="66" r="1.2" fill="#ffffff" />
          </g>

          {/* Right Eye */}
          <g className="jerry-eye">
            <ellipse cx="102" cy="62" rx="8" ry="11" fill="#ffffff" stroke="#451a03" strokeWidth="1" />
            <ellipse cx="101" cy="63" rx="5.5" ry="7.5" fill="#451a03" />
            <circle cx="99" cy="59" r="2.5" fill="#ffffff" />
            <circle cx="103" cy="66" r="1.2" fill="#ffffff" />
          </g>

          {/* Cute Mischievous Smile */}
          <path d="M 84 86 Q 90 92 96 86" fill="none" stroke="#451a03" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="68" cy="74" rx="5" ry="3" fill="#f87171" opacity="0.45" />
          <ellipse cx="112" cy="74" rx="5" ry="3" fill="#f87171" opacity="0.45" />
        </g>
      </svg>
    </div>
  )
}
