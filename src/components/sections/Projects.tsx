import { Globe, Monitor, Smartphone, SquareArrowOutUpRight } from 'lucide-react'
import { Github } from '@/components/icons'
import { useState } from 'react'
import { GlowCard } from '@/components/effects/GlowCard'
import { Reveal } from '@/components/effects/Reveal'
import { Section } from '@/components/Section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { projects, type Platform, type Project } from '@/data/portfolio'

const filters = ['All', 'Web', 'Mobile', 'Desktop'] as const
const platformIcon = { Web: Globe, Mobile: Smartphone, Desktop: Monitor } satisfies Record<Platform, unknown>

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const Icon = platformIcon[p.platform]
  return (
    <Reveal index={index}>
      <GlowCard className="h-full">
        <div className="flex h-full flex-col p-5">
          {/* TODO: replace this placeholder with an <img> screenshot (lazy-loaded) */}
          <div
            role="img"
            aria-label={`Screenshot placeholder for ${p.title}`}
            className="grid aspect-video place-items-center rounded-lg bg-muted text-muted-foreground"
          >
            <Icon className="glow-icon size-8 text-primary/80" aria-hidden />
          </div>

          <div className="mt-4 flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <Badge variant="outline">{p.platform}</Badge>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{p.problem}</p>
          <p className="mt-3 text-sm">
            <span className="font-medium">Role:</span> <span className="text-muted-foreground">{p.role}</span>
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech used">
            {p.stack.map((s) => (
              <li key={s}>
                <Badge variant="secondary" className="font-normal">{s}</Badge>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="glow-primary">Case study</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{p.title}</DialogTitle>
                  <DialogDescription>
                    {p.platform} · {p.role}
                  </DialogDescription>
                </DialogHeader>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-primary">Problem</dt>
                    <dd className="text-muted-foreground">{p.caseStudy.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-primary">Solution</dt>
                    <dd className="text-muted-foreground">{p.caseStudy.solution}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-primary">Result</dt>
                    <dd className="text-muted-foreground">{p.caseStudy.result}</dd>
                  </div>
                </dl>
              </DialogContent>
            </Dialog>
            <Button asChild size="sm" variant="outline">
              <a href={p.demo} target="_blank" rel="noopener noreferrer">
                <SquareArrowOutUpRight /> Live demo<span className="sr-only"> of {p.title}</span>
              </a>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <a href={p.repo} target="_blank" rel="noopener noreferrer">
                <Github /> GitHub<span className="sr-only"> repo of {p.title}</span>
              </a>
            </Button>
          </div>
        </div>
      </GlowCard>
    </Reveal>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const shown = projects.filter((p) => filter === 'All' || p.platform === filter)

  return (
    <Section id="projects" title="Projects" intro="Selected work across web, mobile, and desktop.">
      <Tabs value={filter} onValueChange={(v) => setFilter(v as (typeof filters)[number])}>
        <TabsList aria-label="Filter projects by platform">
          {filters.map((f) => (
            <TabsTrigger key={f} value={f}>
              {f}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
        {shown.length === 0 && (
          <p className="text-muted-foreground">No {filter.toLowerCase()} projects yet. Add one in src/data/portfolio.ts.</p>
        )}
      </div>
    </Section>
  )
}
