import { Award, ExternalLink } from 'lucide-react'
import { GlowCard } from '@/components/effects/GlowCard'
import { Reveal } from '@/components/effects/Reveal'
import { Section } from '@/components/Section'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { certificates } from '@/data/portfolio'

export function Certificates() {
  return (
    <Section id="certificates" title="Certificates" intro="Credentials you can verify at the source.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((c, i) => (
          <Reveal key={c.name} index={i}>
            <GlowCard className="h-full">
              <div className="flex h-full flex-col p-5">
                <Award className="glow-icon size-7 text-primary" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold">{c.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {c.issuer} · {c.year}
                </p>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button asChild variant="outline" size="sm" className="mt-4 w-fit">
                      <a href={c.url} target="_blank" rel="noopener noreferrer">
                        Verify <ExternalLink aria-hidden />
                        <span className="sr-only"> {c.name}</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Opens the issuer's verification page</TooltipContent>
                </Tooltip>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
