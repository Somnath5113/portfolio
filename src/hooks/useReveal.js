import { useEffect, useRef } from 'react'

export function useReveal(variant = 'fade-up', options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    // Apply the variant class
    if (variant && !el.classList.contains(`reveal--${variant}`)) {
      el.classList.add(`reveal--${variant}`)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [variant, options])

  return ref
}
