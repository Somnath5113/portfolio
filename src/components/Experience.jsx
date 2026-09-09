import { chapters } from '../data/resume'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Four internships, four different problems"
          lede="Each one dropped me into a system I didn't build and asked me to make it better."
        />

        <div className="chapters">
          {chapters.map((chapter, i) => (
            <Reveal as="article" className="chapter-card" delay={i * 80} key={chapter.company}>
              <div className="chapter-head">
                <div>
                  <h3>{chapter.company}</h3>
                  <p className="chapter-role">{chapter.role}</p>
                </div>
                <span className="chapter-period">{chapter.period}</span>
              </div>

              <p className="chapter-hook">"{chapter.hook}"</p>
              <p className="chapter-story">{chapter.story}</p>

              <div className="chapter-metrics">
                {chapter.metrics.map((m) => (
                  <span className="metric-pill" key={m}>
                    {m}
                  </span>
                ))}
              </div>

              <div className="chapter-tags">
                {chapter.tags.map((t) => (
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
