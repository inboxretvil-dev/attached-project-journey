import { Rocket, Workflow, Network } from 'lucide-react'

const stats = [
  '5+ Years Experience',
  '40+ Systems Deployed',
  '40+ Happy Agencies',
  '100% Performance Guarantee',
]

const steps = [
  {
    icon: Rocket,
    step: 'Step 1',
    title: 'Attract Prime Leads',
    description:
      'We deploy multi-channel outbound systems that put your offer in front of thousands of verified, in-market decision-makers every single week.',
  },
  {
    icon: Workflow,
    step: 'Step 2',
    title: 'Activate Conversions',
    description:
      'AI agents handle every reply, objection, and follow-up instantly — qualifying prospects and booking sales calls directly onto your calendar.',
  },
  {
    icon: Network,
    step: 'Step 3',
    title: 'Scale With Systems',
    description:
      'Once the engine is validated, we expand domains, channels, and volume — compounding pipeline without adding headcount.',
  },
]

export function Framework() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 flex flex-wrap justify-center gap-4">
          {stats.map((stat) => (
            <div
              key={stat}
              className="flex items-center justify-center rounded-full border border-border bg-secondary/40 px-6 py-4 text-center text-sm font-semibold text-card-foreground"
            >
              {stat}
            </div>
          ))}
        </div>

        <h2 className="font-heading text-balance text-center text-4xl font-bold text-foreground sm:text-5xl">
          Our <span className="text-brand">3-STEP</span> Growth Framework
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-colors hover:border-brand/50"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex rounded-2xl border border-brand/30 bg-brand/10 p-4">
                  <item.icon className="h-7 w-7 text-brand" aria-hidden="true" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {item.step}
                </span>
              </div>
              <h3 className="font-heading mt-6 text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-card-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
