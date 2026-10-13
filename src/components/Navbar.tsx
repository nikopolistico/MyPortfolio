import { Menu, Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Switch } from '@/components/ui/switch'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { profile } from '@/data/portfolio'
import { cn } from '@/lib/utils'

const links = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'tech', label: 'Tech' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar({ theme, onToggleTheme }: { theme: 'dark' | 'light'; onToggleTheme: () => void }) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    document.querySelectorAll('main section[id]').forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const themeSwitch = (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="flex items-center gap-2">
          <Sun className="size-4 text-muted-foreground" aria-hidden />
          <Switch
            checked={theme === 'dark'}
            onCheckedChange={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          />
          <Moon className="size-4 text-muted-foreground" aria-hidden />
        </span>
      </TooltipTrigger>
      <TooltipContent>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</TooltipContent>
    </Tooltip>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
          {profile.name.split(' ')[0]}
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={cn(
                  'rounded-md px-3 py-1.5 text-sm transition-colors hover:text-foreground',
                  active === l.id
                    ? 'glow-primary bg-accent font-medium text-accent-foreground'
                    : 'text-muted-foreground',
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {themeSwitch}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="px-4 pt-4">Menu</SheetTitle>
              <SheetDescription className="sr-only">Jump to a section</SheetDescription>
              <ul className="flex flex-col px-2">
                {links.map((l) => (
                  <li key={l.id}>
                    <SheetClose asChild>
                      <a
                        href={`#${l.id}`}
                        className={cn(
                          'block rounded-md px-3 py-3 text-base',
                          active === l.id ? 'bg-accent font-medium text-accent-foreground' : 'text-muted-foreground',
                        )}
                      >
                        {l.label}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
