import { profile } from '../data/resume'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* animated gradient mesh orbs */}
      <div className="hero-mesh-orb hero-mesh-orb--a" aria-hidden="true" />
      <div className="hero-mesh-orb hero-mesh-orb--b" aria-hidden="true" />
      <div className="hero-mesh-orb hero-mesh-orb--c" aria-hidden="true" />

      {/* dot-grid texture */}
      <svg className="hero-dot-grid" aria-hidden="true" width="100%" height="100%">
        <defs>
          <pattern id="dot-pattern" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>

      <div className="container hero-content">
        <p className="eyebrow hero-anim" style={{ animationDelay: '0ms' }}>Hi, I'm</p>
        <h1 className="hero-name hero-anim" style={{ animationDelay: '100ms' }}>
          {profile.name}
        </h1>
        <h2 className="hero-role hero-anim" style={{ animationDelay: '200ms' }}>
          {profile.role}
        </h2>
        <p className="hero-tagline hero-anim" style={{ animationDelay: '350ms' }}>
          {profile.tagline}
        </p>

        <div className="hero-actions hero-anim" style={{ animationDelay: '500ms' }}>
          <a
            className="btn btn-primary"
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View Projects
          </a>
          <a className="btn btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">
            Download Resume
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
