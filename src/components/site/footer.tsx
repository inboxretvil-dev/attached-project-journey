import { Image } from '@/components/site/image'
import { Link } from '@tanstack/react-router'
import { Mail, Phone } from 'lucide-react'

const contactLinks = [
  { icon: Phone, label: '+330 312 0032', href: 'tel:+3303120032' },
  {
    icon: Mail,
    label: 'appointfunnels@gmail.com',
    href: 'mailto:appointfunnels@gmail.com',
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <Image
            src="/images/logo-mark.png"
            alt=""
            width={240}
            height={89}
            className="h-6 w-auto"
          />
          <span className="font-heading font-bold text-foreground">
            Appoint Funnels
          </span>
        </div>

        <nav
          aria-label="Contact details"
          className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-5"
        >
          {contactLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {label}
            </a>
          ))}
          <a
            href="https://facebook.com/appointfunnelsuk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Appoint Funnels on Facebook"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
            </svg>
            Facebook
          </a>
        </nav>

        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:items-end">
          <Link to="/privacy" className="transition-colors hover:text-foreground">
            Privacy & Service Policy
          </Link>
          <p>© {new Date().getFullYear()} Appoint Funnels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
