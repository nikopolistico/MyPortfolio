import { Compass, Hammer } from 'lucide-react'
import { GlowCard } from '@/components/effects/GlowCard'
import { Reveal } from '@/components/effects/Reveal'
import { Section } from '@/components/Section'
import { profile } from '@/data/portfolio'

export function About() {
  const initials = profile.name.split(' ').map((n) => n[0]).join('')
  return (
    <Section id="about" title="About me">
      <div className="grid gap-4 md:grid-cols-3">
        <Reveal index={0} className="md:col-span-2">
          <GlowCard className="h-full">
            <div className="space-y-3 p-6 text-lg leading-relaxed">
              {profile.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </GlowCard>
        </Reveal>

        <Reveal index={1} className="md:row-span-2">
          <GlowCard className="h-full">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                loading="lazy"
                width={480}
                height={600}
                className="h-full min-h-64 w-full object-cover"
              />
            ) : (
              <div
                role="img"
                aria-label={`Photo placeholder for ${profile.name}`}
                className="grid h-full min-h-64 place-items-center font-[family-name:var(--font-display)] text-7xl font-semibold text-primary/70"
              >
                {initials}
              </div>
            )}
          </GlowCard>
        </Reveal>

        <Reveal index={2}>
          <GlowCard className="h-full">
            <div className="p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Hammer className="glow-icon size-5 text-primary" aria-hidden /> What I build
              </h3>
              <ul className="mt-3 space-y-1.5 text-muted-foreground">
                {profile.building.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </GlowCard>
        </Reveal>

        <Reveal index={3}>
          <GlowCard className="h-full">
            <div className="p-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Compass className="glow-icon size-5 text-primary" aria-hidden /> What I am looking for
              </h3>
              <p className="mt-3 text-muted-foreground">{profile.lookingFor}</p>
            </div>
          </GlowCard>
        </Reveal>
      </div>
    </Section>
  )
}
