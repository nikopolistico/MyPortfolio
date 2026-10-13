import type { ReactNode } from 'react'
import { Reveal } from '@/components/effects/Reveal'

/** Shared section shell: anchor id (for the navbar), heading, one-line intro. */
export function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string
  title: string
  intro?: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <Reveal className="mb-8 max-w-xl">
        <h2 id={`${id}-title`} className="text-3xl font-semibold sm:text-4xl">{title}</h2>
        {intro && <p className="mt-2 text-muted-foreground">{intro}</p>}
      </Reveal>
      {children}
    </section>
  )
}
