import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/site/image'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Systems', to: '/systems' },
  { label: 'Process', to: '/process' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Results', to: '/results' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
  { label: 'Contact', to: '/contact' },
  { label: 'book-call', to: '/book-call' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border bg-background/60 px-5 py-3 backdrop-blur-xl">
        <Link to="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-2.5">
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
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 rounded-full bg-secondary/50 p-1 lg:flex"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: 'bg-secondary text-foreground' }}
              inactiveProps={{ className: 'text-muted-foreground hover:text-foreground' }}
              className="rounded-full px-2 py-2 text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
           <Button
             variant="ghost"
             size="icon"
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex rounded-full p-2 text-foreground lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
           </Button>
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
                <Link
                  to={link.to}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: 'bg-secondary text-foreground' }}
                  onClick={() => {
                    setOpen(false)
                  }}
                  className="block rounded-xl px-4 py-3 text-sm text-card-foreground hover:bg-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
