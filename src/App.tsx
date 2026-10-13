import { CursorGlow } from '@/components/effects/CursorGlow'
import { ScrollProgress } from '@/components/effects/ScrollProgress'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { About } from '@/components/sections/About'
import { Achievements } from '@/components/sections/Achievements'
import { Certificates } from '@/components/sections/Certificates'
import { Contact } from '@/components/sections/Contact'
import { Education } from '@/components/sections/Education'
import { Experience } from '@/components/sections/Experience'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Tech } from '@/components/sections/Tech'
import { Toaster } from '@/components/ui/sonner'
import { useTheme } from '@/hooks/use-theme'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <CursorGlow />
      <ScrollProgress />
      <div className="relative z-10">
        <Navbar theme={theme} onToggleTheme={toggle} />
        <main id="main">
          <Hero />
          <About />
          <Education />
          <Achievements />
          <Certificates />
          <Tech />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
      <Toaster theme={theme} />
    </>
  )
}
