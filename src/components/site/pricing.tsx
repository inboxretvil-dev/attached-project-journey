import { ArrowUpRight, Check, X } from 'lucide-react'

const plans = [
  {
    phase: 'Days 1–45',
    title: 'Free Trial',
    price: '$0',
    unit: 'service charges',
    points: [
      'We build, launch, and prove the system',
      'Paid contract starts only after agreed results are delivered',
    ],
  },
  {
    phase: 'Upfront',
    title: 'Tools Investment',
    price: '$150',
    unit: 'paid directly for tools',
    points: [
      'Covers the software stack that runs your campaigns',
      '$45/month recurring from month 2 onward',
    ],
    featured: true,
  },
  {
    phase: 'After trial',
    title: 'System Handover',
    price: '$1,000',
    unit: 'one-time',
    points: [
      'Applies only once trial results are delivered',
      'Full training and control of the system',
      'Lifetime free support for system issues',
    ],
  },
]

const noCommission = [
  'Revenue from referrals that customer sends you later',
  'Upsells or cross-sells to that customer',
]

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="mb-14 text-center">
        <span className="inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
          Pricing
        </span>
        <h2 className="font-heading mt-5 text-balance text-4xl font-bold text-foreground sm:text-5xl">
          You pay when it works
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-card-foreground">
          A free trial to prove results, a one-time handover, and a commission
          only on deals we generate.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.title}
            className={`flex flex-col gap-6 rounded-3xl border p-7 ${
              plan.featured
                ? 'border-brand/60 bg-secondary shadow-[0_0_60px_-10px_rgba(44,132,195,0.35)]'
                : 'border-border bg-card'
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-lg font-bold text-foreground">
                {plan.title}
              </h3>
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                {plan.phase}
              </span>
            </div>
            <p className="flex items-baseline gap-2">
              <span className="font-heading text-5xl font-bold text-foreground">
                {plan.price}
              </span>
              <span className="text-sm text-muted-foreground">{plan.unit}</span>
            </p>
            <ul className="flex flex-col gap-3 border-t border-border pt-6">
              {plan.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-card-foreground"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <article className="mt-5 grid gap-8 rounded-3xl border border-border bg-card p-7 sm:p-10 lg:grid-cols-[auto_1fr_1fr] lg:items-center lg:gap-12">
        <div className="flex flex-col gap-1">
          <h3 className="font-heading text-lg font-bold text-foreground">
            Performance Commission
          </h3>
          <p className="font-heading text-6xl font-bold text-brand">15%</p>
          <p className="text-sm text-muted-foreground">of original deal value</p>
        </div>

        <div className="flex flex-col gap-3 text-sm leading-relaxed text-card-foreground">
          <p>
            Charged only after you receive payment from a customer generated
            through the campaign.
          </p>
          <p>
            Due within 24 hours of payment confirmation. Late payment may pause
            active outreach until the balance is settled.
          </p>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background/50 p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            No commission on
          </p>
          <ul className="flex flex-col gap-2.5">
            {noCommission.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-card-foreground"
              >
                <X
                  className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </article>

      <div className="mt-10 flex justify-center">
        <a
          href="https://cal.com/appointfunnels/discoverycall"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-full bg-primary py-3.5 pl-8 pr-3 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Start your free trial
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  )
}
