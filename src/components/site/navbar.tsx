import { useState } from 'react'
import { Image } from '@/components/site/site/image'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '/about' },
  { label: 'Systems', href: '#systems' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [active, setActive] = useState('Home')
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border bg-background/60 px-5 py-3 backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={240}
            height={89}
            priority
            className="h-7 w-auto"
          />
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            Appoint Funnels
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 rounded-full bg-secondary/50 p-1 lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                active === link.label
                  ? 'bg-secondary text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://cal.com/appointfunnels/discoverycall"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Book Intro Call
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex rounded-full p-2 text-foreground lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-background/90 p-4 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActive(link.label)
                    setOpen(false)
                  }}
                  className="block rounded-xl px-4 py-3 text-sm text-card-foreground hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
