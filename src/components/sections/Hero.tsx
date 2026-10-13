import { Download, Globe, Mail, Monitor, Smartphone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/portfolio'

const platformIcon = { Mobile: Smartphone, Web: Globe, Desktop: Monitor } as const

export function Hero() {
  return (
    <section id="home" aria-labelledby="home-title" className="relative isolate overflow-hidden">
      {/* Aurora blobs: slow drift, one accent hue + a cool counterpart */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="aurora-a absolute -left-24 -top-24 size-[28rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgb(var(--glow) / calc(var(--glow-strength) * 0.9)), transparent 70%)' }}
        />
        <div
          className="aurora-b absolute -right-20 top-10 size-[26rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgb(70 110 255 / calc(var(--glow-strength) * 0.7)), transparent 70%)' }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <ul className="flex flex-wrap gap-2" aria-label="Platforms I build for">
            {profile.platforms.map((p) => {
              const Icon = platformIcon[p as keyof typeof platformIcon]
              return (
                <li
                  key={p}
                  className="flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-sm"
                >
                  <Icon className="glow-icon size-4 text-primary" aria-hidden />
                  {p}
                </li>
              )
            })}
          </ul>

          <h1 id="home-title" className="mt-6 text-5xl font-semibold leading-[1.02] sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl text-muted-foreground sm:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-xl text-lg">{profile.headline}</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden /> {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="glow-primary">
              <a href="#projects">View projects</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.cv} download>
                <Download /> Download CV
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contact">
                <Mail /> Contact me
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
