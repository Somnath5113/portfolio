import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `end` when the element enters the viewport.
 * Handles strings like "250+", "99.9%", "41%" — extracts the numeric part,
 * animates it, then re-appends the suffix.
 */
export function useCountUp(end, duration = 1800) {
  const ref = useRef(null)
  const [display, setDisplay] = useState('0')
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          observer.unobserve(el)

          const str = String(end)
          // Extract leading number (int or float) and the rest as suffix
          const match = str.match(/^([\d.]+)(.*)$/)
          if (!match) {
            setDisplay(str)
            return
          }

          const target = parseFloat(match[1])
          const suffix = match[2] || ''
          const isFloat = match[1].includes('.')
          const startTime = performance.now()

          const tick = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = eased * target

            if (isFloat) {
              const decimals = (match[1].split('.')[1] || '').length
              setDisplay(current.toFixed(decimals) + suffix)
            } else {
              setDisplay(Math.round(current) + suffix)
            }

            if (progress < 1) {
              requestAnimationFrame(tick)
            }
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return { ref, display }
}
