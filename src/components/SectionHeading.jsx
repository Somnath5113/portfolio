import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, lede }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {lede && <p className="section-lede">{lede}</p>}
    </Reveal>
  )
}
