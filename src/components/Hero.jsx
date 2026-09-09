import { profile } from '../data/resume'
import OggyGhibli from './OggyGhibli'
import CockroachesGhibli from './CockroachesGhibli'
import TomGhibli from './TomGhibli'
import JerryGhibli from './JerryGhibli'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* soft light blooms */}
      <div className="hero-mesh-orb hero-mesh-orb--a" aria-hidden="true" />
      <div className="hero-mesh-orb hero-mesh-orb--b" aria-hidden="true" />

      {/* drifting leaves */}
      <div className="hero-leaves" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="hero-leaf" style={{ '--i': i }} />
        ))}
      </div>

      <div className="container hero-content">
        {/* Studio Ghibli Full Cartoon Mascot Display (Tom, Jerry, Oggy & Cockroaches) */}
        <div className="hero-ghibli-badge hero-anim" style={{ animationDelay: '0ms' }}>
          <div className="ghibli-mascot-group">
            <JerryGhibli variant="running" size={54} className="hero-jerry" />
            <TomGhibli variant="flying" size={72} className="hero-tom" />
            <OggyGhibli variant="flying" size={78} className="hero-oggy" />
            <div className="hero-roaches">
              <CockroachesGhibli character="joey" size={38} />
              <CockroachesGhibli character="deedee" size={40} />
              <CockroachesGhibli character="marky" size={38} />
            </div>
          </div>
          <span className="badge-text">Studio Ghibli Cartoon World 🍃✨</span>
        </div>

        <p className="eyebrow hero-anim" style={{ animationDelay: '100ms' }}>
          Once upon a build…
        </p>
        <h1 className="hero-name hero-anim" style={{ animationDelay: '200ms' }}>
          {profile.name}
          <svg className="hero-name-underline" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
            <path d="M2 8C60 3 120 3 150 6s90 4 148-2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </h1>
        <h2 className="hero-role hero-anim" style={{ animationDelay: '300ms' }}>
          {profile.role}
        </h2>
        <p className="hero-tagline hero-anim" style={{ animationDelay: '420ms' }}>
          {profile.tagline}
        </p>

        <div className="hero-actions hero-anim" style={{ animationDelay: '550ms' }}>
          <a
            className="btn btn-primary"
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Begin the story
          </a>
        </div>
      </div>

      <a
        className="scroll-cue"
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        aria-label="Scroll to About section"
      >
        <span />
      </a>
    </section>
  )
}
