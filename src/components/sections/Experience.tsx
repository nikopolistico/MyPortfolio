import { Briefcase } from 'lucide-react'
import { GlowCard } from '@/components/effects/GlowCard'
import { Reveal } from '@/components/effects/Reveal'
import { Section } from '@/components/Section'
import { experience } from '@/data/portfolio'

export function Experience() {
  return (
    <Section id="experience" title="Experience" intro="Roles, internships, and freelance work.">
      <div className="grid gap-4 md:grid-cols-2">
        {experience.map((e, i) => (
          <Reveal key={e.role + e.period} index={i}>
            <GlowCard className="h-full">
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <Briefcase className="glow-icon size-6 text-primary" aria-hidden />
                  <span className="text-sm text-muted-foreground">{e.period}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold">{e.role}</h3>
                <p className="text-muted-foreground">{e.org}</p>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground marker:text-primary">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
