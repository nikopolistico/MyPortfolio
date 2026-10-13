import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Magic-card style container: 1px border whose glow gradient tracks the cursor.
 * Pure CSS vars (--x/--y) so there is no React re-render on mouse move.
 */
export function GlowCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - r.left}px`)
    el.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={cn('group relative rounded-xl bg-border p-px', className)}
    >
      {/* border glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(240px circle at var(--x, 50%) var(--y, 50%), rgb(var(--glow) / calc(var(--glow-strength) * 2)), transparent 70%)',
        }}
      />
      <div className="relative h-full overflow-hidden rounded-[calc(var(--radius-xl)-1px)] bg-card">
        {/* faint inner fill */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(320px circle at var(--x, 50%) var(--y, 50%), rgb(var(--glow) / calc(var(--glow-strength) * 0.25)), transparent 70%)',
          }}
        />
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  )
}
