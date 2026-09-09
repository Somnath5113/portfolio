import { useEffect, useRef } from 'react'
import OggyGhibliHouse from './OggyGhibliHouse'
import TomAndJerryCottage from './TomAndJerryCottage'
import { JackLeafPlane, BobBulldog } from './OggyGhibliFriends'

/* Whimsical Oggy Cat-Ear Cloud & Cheese Cloud */
function GhibliCloud({ className, style, variant = 'cat' }) {
  return (
    <svg className={className} style={style} viewBox="0 0 240 100" aria-hidden="true">
      {variant === 'cat' ? (
        /* Cloud with soft cute cat ears */
        <path
          fill="var(--cloud)"
          d="M 30 80 Q 25 35 55 45 Q 85 10 120 40 Q 155 10 185 45 Q 215 35 210 80 Z"
        />
      ) : (
        /* Cheese wedge cloud */
        <g fill="var(--cloud)">
          <path d="M 20 80 L 160 20 L 220 80 Z" />
          <circle cx="90" cy="65" r="10" fill="rgba(255, 230, 150, 0.4)" />
          <circle cx="140" cy="55" r="7" fill="rgba(255, 230, 150, 0.4)" />
          <circle cx="170" cy="72" r="8" fill="rgba(255, 230, 150, 0.4)" />
        </g>
      )}
    </svg>
  )
}

/* Rolling watercolour Ghibli hills with Oggy and Tom & Jerry cottages */
function Hills() {
  return (
    <div className="scene-hills-wrap">
      <svg className="scene-hills" viewBox="0 0 1440 420" preserveAspectRatio="none" aria-hidden="true">
        <path className="scene-hill scene-hill--far" fill="var(--hill-far)"
          d="M0 210c180-70 320-70 520-20s360 90 560 40 260-70 360-40v230H0z" />
        <path className="scene-hill scene-hill--mid" fill="var(--hill-mid)"
          d="M0 300c220-90 380-40 620 10s420 40 620-30 200-10 200-10v180H0z" />
        <path className="scene-hill scene-hill--near" fill="var(--hill-near)"
          d="M0 360c260-60 420 30 720 30s520-80 720-20v70H0z" />
      </svg>

      {/* 🐱🐭 Tom & Jerry Ghibli Tree Stump Cottage (Left Meadow) */}
      <div className="scene-tom-jerry-cottage-container">
        <TomAndJerryCottage />
      </div>

      {/* 🏡 Oggy's Studio Ghibli Cottage (Right Meadow) */}
      <div className="scene-oggy-house-container">
        <OggyGhibliHouse />
      </div>

      {/* 🐶 Bob the Bulldog Sleeping by his Doghouse */}
      <div className="scene-bob-container">
        <BobBulldog size={85} />
      </div>
    </div>
  )
}

export default function SceneBackground() {
  const rootRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const root = rootRef.current
    if (!root) return undefined

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        root.style.setProperty('--p-far', `${y * -0.04}px`)
        root.style.setProperty('--p-mid', `${y * -0.09}px`)
        root.style.setProperty('--p-near', `${y * -0.16}px`)
        root.style.setProperty('--p-sky', `${y * 0.06}px`)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="scene" ref={rootRef} aria-hidden="true">
      <div className="scene-sky" />
      <div className="scene-stars" />
      <div className="scene-sun">
        <span className="scene-sun-glow" />
      </div>

      {/* ✈️ Jack in his Leaf Plane Flying in Sky */}
      <div className="scene-jack-sky">
        <JackLeafPlane size={110} />
      </div>

      <div className="scene-clouds">
        <GhibliCloud className="scene-cloud scene-cloud--1" variant="cat" />
        <GhibliCloud className="scene-cloud scene-cloud--2" variant="cheese" />
        <GhibliCloud className="scene-cloud scene-cloud--3" variant="cat" />
        <GhibliCloud className="scene-cloud scene-cloud--4" variant="cheese" />
      </div>

      <Hills />

      {/* Drifting Soot Sprites */}
      <div className="scene-sprites">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="soot" style={{
            left: `${(i * 5.8 + 2) % 100}%`,
            animationDelay: `${(i * 1.4) % 12}s`,
            animationDuration: `${12 + (i % 5) * 4}s`,
            transform: `scale(${0.5 + (i % 4) * 0.22})`,
          }} />
        ))}
      </div>
    </div>
  )
}
