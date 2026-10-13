import { BrainCircuit, Cloud, Database, Layout, Server, Smartphone, type LucideIcon } from 'lucide-react'
import { GlowCard } from '@/components/effects/GlowCard'
import { Reveal } from '@/components/effects/Reveal'
import { Section } from '@/components/Section'
import { Badge } from '@/components/ui/badge'
import { toolGroups } from '@/data/portfolio'
import { adaptiveIcons, techIcons } from '@/lib/tech-icons'
import { cn } from '@/lib/utils'

// Icon per group — keys must match `group` names in src/data/portfolio.ts.
const icons: Record<string, LucideIcon> = {
  Frontend: Layout,
  Backend: Server,
  'Mobile & Desktop': Smartphone,
  Database: Database,
  'DevOps & Cloud': Cloud,
  'AI & Data': BrainCircuit,
}

export function Tech() {
  return (
    <Section id="tech" title="Tools and tech stack" intro="What I reach for, grouped by where it runs.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {toolGroups.map((g, i) => {
          const Icon = icons[g.group] ?? Layout
          return (
            <Reveal key={g.group} index={i}>
              <GlowCard className="h-full">
                <div className="p-5">
                  <h3 className="flex items-center gap-2 text-lg font-semibold">
                    <Icon className="glow-icon size-5 text-primary" aria-hidden /> {g.group}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <li key={t.name}>
                        <Badge variant="secondary" className="gap-2 px-2.5 py-1.5 text-sm font-normal">
                          {techIcons[t.icon] && (
                            <img
                              src={techIcons[t.icon]}
                              alt=""
                              width={18}
                              height={18}
                              loading="lazy"
                              className={cn('glow-icon size-[18px]', adaptiveIcons.has(t.icon) && 'dark:brightness-0 dark:invert')}
                            />
                          )}
                          {t.name}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
