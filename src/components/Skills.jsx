import { skills } from '../data/resume'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Toolbox"
          title="What I reach for"
          lede="The stack behind everything above — picked up on the job, not just in class."
        />

        <div className="skills-grid">
          {Object.entries(skills).map(([group, items], i) => (
            <Reveal as="div" className="skill-group" delay={i * 80} key={group}>
              <h3>{group}</h3>
              <div className="skill-tags">
                {items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
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
