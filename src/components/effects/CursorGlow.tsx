import { useEffect, useRef, useState } from 'react'

/**
 * Cursor effects, fine-pointer devices only (disabled on touch):
 *  - soft radial spotlight following the mouse
 *  - dot grid that lights up near the cursor
 * Strengths come from CSS vars (--spot-strength, --glow) so dark/light differ.
 */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const spot = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setEnabled(mq.matches && !reduce.matches)
    update()
    mq.addEventListener('change', update)
    reduce.addEventListener('change', update)
    return () => {
      mq.removeEventListener('change', update)
      reduce.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    let raf = 0
    const root = document.documentElement
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        root.style.setProperty('--mx', `${e.clientX}px`)
        root.style.setProperty('--my', `${e.clientY}px`)
        spot.current?.style.setProperty('opacity', '1')
      })
    }
    const leave = () => spot.current?.style.setProperty('opacity', '0')
    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
    }
  }, [enabled])

  return (
    <>
      {/* Dot grid: always on (static), lit near cursor when enabled. Sits behind content. */}
      <div aria-hidden className="bg-grid pointer-events-none fixed inset-0 z-0" />
      {enabled && <div aria-hidden className="bg-grid-lit pointer-events-none fixed inset-0 z-0" />}
      {enabled && (
        <div
          ref={spot}
          aria-hidden
          className="pointer-events-none fixed inset-0 z-40 opacity-0 transition-opacity duration-300"
          style={{
            background:
              'radial-gradient(420px circle at var(--mx, -999px) var(--my, -999px), rgb(var(--glow) / var(--spot-strength)), transparent 70%)',
          }}
        />
      )}
    </>
  )
}
