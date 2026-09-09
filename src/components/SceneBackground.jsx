import { useEffect, useRef } from 'react'

/* Soft hand-drawn cloud shape */
function Cloud({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 220 90" aria-hidden="true">
      <path
        fill="var(--cloud)"
        d="M30 78c-18 0-28-12-28-26 0-13 10-24 24-25 3-16 17-27 34-27 13 0 25 7 31 18 4-2 9-3 14-3 14 0 25 10 27 23 12 2 21 12 21 25 0 15-12 26-28 26H30z"
      />
    </svg>
  )
}

/* Rolling watercolour hills with a parallax offset */
function Hills() {
  return (
    <svg className="scene-hills" viewBox="0 0 1440 420" preserveAspectRatio="none" aria-hidden="true">
      <path className="scene-hill scene-hill--far" fill="var(--hill-far)"
        d="M0 210c180-70 320-70 520-20s360 90 560 40 260-70 360-40v230H0z" />
      <path className="scene-hill scene-hill--mid" fill="var(--hill-mid)"
        d="M0 300c220-90 380-40 620 10s420 40 620-30 200-10 200-10v180H0z" />
      <path className="scene-hill scene-hill--near" fill="var(--hill-near)"
        d="M0 360c260-60 420 30 720 30s520-80 720-20v70H0z" />
    </svg>
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

      <div className="scene-clouds">
        <Cloud className="scene-cloud scene-cloud--1" />
        <Cloud className="scene-cloud scene-cloud--2" />
        <Cloud className="scene-cloud scene-cloud--3" />
        <Cloud className="scene-cloud scene-cloud--4" />
      </div>

      <Hills />

      {/* drifting soot sprites (susuwatari) */}
      <div className="scene-sprites">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="soot" style={{
            left: `${(i * 7 + 4) % 100}%`,
            animationDelay: `${(i * 1.7) % 12}s`,
            animationDuration: `${13 + (i % 5) * 4}s`,
            transform: `scale(${0.5 + (i % 4) * 0.22})`,
          }} />
        ))}
      </div>
    </div>
  )
}
