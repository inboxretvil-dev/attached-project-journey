import { Image } from '@/components/site/image'
import { ArrowUpRight, Star } from 'lucide-react'

const tickerItems = [
  'AI LEAD GENERATION AGENCY',
  'COLD INFRASTRUCTURE',
  'SCALE',
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-0 sm:pt-40">
      {/* Faint vertical columns */}
      <div
        aria-hidden="true"
        className="hero-columns pointer-events-none absolute inset-x-0 top-0 h-[520px]"
      />

      {/* Radial glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(44,132,195,0.18), transparent 70%)',
        }}
      />

      {/* Glow rising from the bottom of the hero */}
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute inset-x-0 bottom-0 h-[420px] origin-bottom"
        style={{
          background:
            'radial-gradient(ellipse 75% 100% at 50% 118%, rgba(44,132,195,0.5), rgba(27,58,107,0.28) 45%, transparent 72%)',
        }}
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <h1 className="font-heading text-[clamp(1.25rem,8.7vw,2.75rem)] font-medium leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {[
            'AI sales systems that',
            'fill your calendar with',
            'booked, qualified',
          ].map((line, i) => (
            <span
              key={line}
              className="animate-fade-up block whitespace-nowrap"
              style={{ animationDelay: `${0.05 + i * 0.12}s` }}
            >
              {line}
            </span>
          ))}
          <span
            className="animate-fade-up block whitespace-nowrap"
            style={{ animationDelay: '0.41s' }}
          >
            <span className="relative mt-[0.08em] inline-block px-[0.14em]">
              <span
                aria-hidden="true"
                className="animate-highlight absolute inset-x-0 top-[0.06em] bottom-[-0.02em] bg-brand"
              />
              <span className="relative text-background">appointments.</span>
            </span>
          </span>
        </h1>
        <p
          className="animate-fade-up mx-auto mt-6 max-w-xl text-pretty text-[clamp(0.875rem,4.4vw,1.0625rem)] leading-relaxed text-muted-foreground sm:text-base"
          style={{ animationDelay: '0.5s' }}
        >
          AI systems that generate leads, book appointments, and scale your
          pipeline. Built for{' '}
          <strong className="font-semibold text-foreground">B2B</strong>{' '}
          companies ready to dominate their market.
        </p>

        <dl className="mt-10 grid w-full max-w-xs grid-cols-2 gap-x-4 gap-y-8 sm:max-w-2xl sm:grid-cols-4">
          {[
            { value: '30+', label: 'satisfied clients' },
            { value: '200K+', label: 'outbound outreaches' },
            { value: '95%+', label: 'inbox placement' },
            { value: '24/7', label: 'AI working for you' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="animate-fade-up flex flex-col items-center gap-1"
              style={{ animationDelay: `${0.62 + i * 0.1}s` }}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-heading text-[clamp(1.5rem,7.7vw,1.875rem)] font-medium text-foreground sm:text-4xl">
                {stat.value}
              </dd>
              <span className="text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </dl>

        <div
          className="animate-fade-up mt-12 flex justify-center"
          style={{ animationDelay: '1.05s' }}
        >
          <a
            href="https://cal.com/appointfunnels/discoverycall"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-primary py-3.5 pl-8 pr-3 text-base font-semibold text-primary-foreground shadow-[0_8px_40px_-8px_rgba(37,99,235,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_50px_-6px_rgba(37,99,235,0.9)]"
          >
            {"Let's talk"}
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>

      {/* Scrolling ticker with floating badge */}
      <div className="relative mt-24 border-y border-border py-6">
        <div className="flex overflow-hidden" aria-hidden="true">
          <div className="animate-ticker flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
            {[...Array(2)].map((_, dup) =>
              [...Array(3)].map((_, rep) =>
                tickerItems.map((item, i) => (
                  <span
                    key={`${dup}-${rep}-${i}`}
                    className="flex items-center gap-8 font-heading text-3xl font-bold uppercase tracking-wider text-muted-foreground/40 sm:text-5xl"
                  >
                    {item}
                    <span className="text-brand">•</span>
                  </span>
                )),
              ),
            )}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center sm:left-12">
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-background/70 px-5 py-4 backdrop-blur-xl">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((n) => (
                <Image
                  key={n}
                  src={`/images/avatar-${n}.png`}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brand text-brand"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-1 text-sm font-semibold text-foreground">
                30+ Satisfied Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
