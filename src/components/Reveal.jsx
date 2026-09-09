import { useReveal } from '../hooks/useReveal'

export default function Reveal({ as: Tag = 'div', delay = 0, variant = 'fade-up', className = '', children, ...rest }) {
  const ref = useReveal(variant)
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
