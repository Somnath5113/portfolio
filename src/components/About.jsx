import { bio, journey } from '../data/resume'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="More than a line on a resume"
          lede="A quick look at how I got here, and what I actually care about."
        />

        <div className="about-grid">
          <Reveal className="about-bio" delay={100}>
            {bio.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </Reveal>

          <div className="timeline">
            {journey.map((step, i) => (
              <Reveal as="div" className="timeline-item" delay={150 + i * 100} key={step.year}>
                <div className="timeline-marker" />
                <div className="timeline-body">
                  <span className="timeline-year">{step.year}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
