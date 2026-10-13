import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { profile } from '@/data/portfolio'

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
      <Separator />
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. {profile.location}.
        </p>
        <Button asChild variant="ghost" size="sm">
          <a href="#home">
            <ArrowUp /> Back to top
          </a>
        </Button>
      </div>
    </footer>
  )
}
