import { profile } from '../data/resume'
import Reveal from './Reveal'

export default function Contact() {
  const year = new Date().getFullYear()

  return (
    <section id="contact" className="section contact-section">
      {/* floating gradient orbs for atmosphere */}
      <div className="hero-mesh-orb hero-mesh-orb--a" aria-hidden="true" />
      <div className="hero-mesh-orb hero-mesh-orb--b" aria-hidden="true" />

      <div className="container">
        <Reveal className="contact-card" variant="scale-in">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Got something worth building?</h2>
          <p className="section-lede">
            I'm always up for a conversation about vision, agents, or anything that involves
            making a model earn its keep in production.
          </p>
          <a className="btn btn-primary contact-btn" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </Reveal>

        <footer className="site-footer">
          <span>© {year} {profile.name}</span>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  )
}
