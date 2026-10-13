import { animate, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'

/** Counts from 0 to `to` the first time it scrolls into view. */
export function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || !inView) return
    if (reduce) {
      el.textContent = `${to}${suffix}`
      return
    }
    const controls = animate(0, to, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => { el.textContent = `${Math.round(v)}${suffix}` },
    })
    return () => controls.stop()
  }, [inView, reduce, to, suffix])

  return <span ref={ref}>0{suffix}</span>
}
