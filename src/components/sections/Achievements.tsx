import { Trophy } from 'lucide-react'
import { Counter } from '@/components/effects/Counter'
import { GlowCard } from '@/components/effects/GlowCard'
import { Reveal } from '@/components/effects/Reveal'
import { Section } from '@/components/Section'
import { achievements, certificates, profile, projects } from '@/data/portfolio'

export function Achievements() {
  const years = Math.max(1, new Date().getFullYear() - profile.yearsStarted)
  const stats = [
    { value: years, suffix: '+', label: 'Years building software' },
    { value: projects.length, suffix: '', label: 'Projects shipped' },
    { value: certificates.length, suffix: '', label: 'Certificates earned' },
  ]

  return (
    <Section id="achievements" title="Achievements" intro="Milestones so far, and the numbers behind them.">
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} index={i}>
            <GlowCard className="h-full">
              <div className="p-6">
                <p className="font-[family-name:var(--font-display)] text-5xl font-semibold text-primary">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>

      <ol className="mt-4 grid gap-4 md:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.title} index={i + 3} className="list-none">
            <li className="h-full list-none">
              <GlowCard className="h-full">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <Trophy className="glow-icon size-5 text-primary" aria-hidden />
                    <span className="text-sm text-muted-foreground">{a.year}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.detail}</p>
                </div>
              </GlowCard>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
