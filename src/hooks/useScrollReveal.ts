import { useEffect, useRef } from 'react'

/**
 * Observes all [data-reveal] elements inside the ref container.
 * When they scroll into view, the class "is-visible" is added,
 * triggering the CSS animation.
 */
export function useScrollReveal() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = root.querySelectorAll('[data-reveal]')

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target) // animate once
          }
        })
      },
      { threshold: 0.15 }
    )

    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return ref
}
