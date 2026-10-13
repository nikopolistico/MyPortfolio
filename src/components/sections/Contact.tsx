import { Mail } from 'lucide-react'
import { Github, Linkedin } from '@/components/icons'
import { useState } from 'react'
import { toast } from 'sonner'
import { GlowCard } from '@/components/effects/GlowCard'
import { Reveal } from '@/components/effects/Reveal'
import { Section } from '@/components/Section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { profile } from '@/data/portfolio'

// Optional: paste a Formspree / Getform / Basin endpoint to send without a backend.
// Leave '' and the form opens the visitor's email app instead.
const FORM_ENDPOINT = ''

export function Contact() {
  const [sending, setSending] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>

    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio message from ${data.name}`)
      const body = encodeURIComponent(`${data.message}\n\n${data.name} (${data.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      toast.info('Opening your email app to send the message.')
      return
    }

    setSending(true)
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(String(res.status))
      toast.success('Message sent. I will reply soon.')
      form.reset()
    } catch {
      toast.error(`Message not sent. Email me at ${profile.email} instead.`)
    } finally {
      setSending(false)
    }
  }

  const links = [
    { label: 'Email', href: `mailto:${profile.email}`, text: profile.email, Icon: Mail },
    { label: 'GitHub', href: profile.github, text: 'GitHub', Icon: Github },
    { label: 'LinkedIn', href: profile.linkedin, text: 'LinkedIn', Icon: Linkedin },
  ]

  return (
    <Section id="contact" title="Get in touch" intro="Have a project or a role in mind? Send a message.">
      <div className="grid gap-4 md:grid-cols-5">
        <Reveal index={0} className="md:col-span-3">
          <GlowCard>
            <form onSubmit={onSubmit} className="space-y-4 p-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" autoComplete="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} required />
              </div>
              <Button type="submit" disabled={sending} className="glow-primary">
                {sending ? 'Sending…' : 'Send message'}
              </Button>
            </form>
          </GlowCard>
        </Reveal>

        <Reveal index={1} className="md:col-span-2">
          <GlowCard className="h-full">
            <ul className="space-y-2 p-6">
              {links.map(({ label, href, text, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-accent"
                  >
                    <Icon className="glow-icon size-5 text-primary" aria-hidden />
                    <span className="sr-only">{label}: </span>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </GlowCard>
        </Reveal>
      </div>
    </Section>
  )
}
