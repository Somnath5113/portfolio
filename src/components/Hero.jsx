import { profile } from '../data/resume'
import OggyGhibli from './OggyGhibli'
import CockroachesGhibli from './CockroachesGhibli'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* soft light blooms */}
      <div className="hero-mesh-orb hero-mesh-orb--a" aria-hidden="true" />
      <div className="hero-mesh-orb hero-mesh-orb--b" aria-hidden="true" />

      {/* drifting leaves */}
      <div className="hero-leaves" aria-hidden="true">
        {Array.from({ length: 7 }).map((_, i) => (
          <span key={i} className="hero-leaf" style={{ '--i': i }} />
        ))}
      </div>

      <div className="container hero-content">
        {/* Studio Ghibli Oggy & Cockroaches Mascot Display */}
        <div className="hero-ghibli-badge hero-anim" style={{ animationDelay: '0ms' }}>
          <div className="ghibli-mascot-group">
            <OggyGhibli variant="flying" size={90} className="hero-oggy" />
            <div className="hero-roaches">
              <CockroachesGhibli character="joey" size={42} />
              <CockroachesGhibli character="deedee" size={44} />
              <CockroachesGhibli character="marky" size={42} />
            </div>
          </div>
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
          <a className="btn btn-ghost" href="/resume.html" target="_blank" rel="noreferrer">
            Résumé
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

