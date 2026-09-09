import { projects } from '../data/resume'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Two problems I couldn't stop thinking about"
          lede="Case studies, not bullet points — here's the problem, what I built, and what happened."
        />

        <div className="case-studies">
          {projects.map((project, i) => (
            <Reveal as="article" className="case-card" delay={i * 100} key={project.title}>
              <span className="case-period">{project.period}</span>
              <h3 className="case-title">{project.title}</h3>
              <p className="case-subtitle">{project.subtitle}</p>

              <div className="case-block">
                <span className="case-label">The problem</span>
                <p>{project.problem}</p>
              </div>
              <div className="case-block">
                <span className="case-label">What I built</span>
                <p>{project.solution}</p>
              </div>
              <div className="case-block case-block-impact">
                <span className="case-label">The impact</span>
                <p>{project.impact}</p>
              </div>

              <div className="chapter-tags">
                {project.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
