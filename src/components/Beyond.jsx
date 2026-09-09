import { beyondWork } from '../data/resume'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Beyond() {
  return (
    <section id="beyond" className="section">
      <div className="container">
        <SectionHeading eyebrow="Away from the keyboard" title="Beyond the lab" />

        <div className="beyond-grid">
          {beyondWork.map((item, i) => (
            <Reveal as="div" className="beyond-card" delay={i * 100} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
