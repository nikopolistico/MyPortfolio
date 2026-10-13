import { GraduationCap } from 'lucide-react'
import { GlowCard } from '@/components/effects/GlowCard'
import { Reveal } from '@/components/effects/Reveal'
import { Section } from '@/components/Section'
import { Badge } from '@/components/ui/badge'
import { education } from '@/data/portfolio'

export function Education() {
  return (
    <Section id="education" title="Education" intro="Undergraduate degree finished, graduate study underway.">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.degree} index={i}>
            <GlowCard className="h-full">
              <div className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <GraduationCap className="glow-icon size-7 text-primary" aria-hidden />
                  <Badge variant={e.status === 'In progress' ? 'default' : 'secondary'}>{e.status}</Badge>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{e.degree}</h3>
                <p className="text-muted-foreground">{e.school}</p>
                <p className="mt-3 text-sm">
                  <span className="font-medium">{e.note}</span>
                  <span className="text-muted-foreground"> · {e.year}</span>
                </p>
                {'thesis' in e && e.thesis && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Thesis:</span> {e.thesis}
                  </p>
                )}
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
