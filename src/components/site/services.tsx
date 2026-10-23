import { ArrowUpRight, MessageSquareText, DatabaseZap, MailCheck } from 'lucide-react'

const services = [
  {
    icon: MessageSquareText,
    title: 'AI Cold SMS Systems',
    description:
      'High-converting automated mobile conversational sequences that target decision-makers direct to cell. Every reply is handled by trained AI agents that qualify, nurture, and book — around the clock.',
  },
  {
    icon: DatabaseZap,
    title: 'AI Email List Activation',
    description:
      'Immediate reactivation loops deployed on old or dormant databases to unlock hidden cash reserves effortlessly. Turn cold contact lists into a live revenue channel within days.',
  },
  {
    icon: MailCheck,
    title: 'AI Cold Emailing Systems',
    description:
      'High-volume, hyper-personalized, clean domain infrastructure delivering inbox-ready outreach scaled via advanced LLM agents. Built for deliverability first, volume second.',
  },
]

export function Services() {
  return (
    <section id="systems" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
            Systems
          </span>
          <h2 className="font-heading mt-5 text-balance text-4xl font-bold text-foreground sm:text-5xl">
            What we are offering
          </h2>
        </div>
        <a
          href="#contact"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get in Touch
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group rounded-3xl border border-border bg-card p-8 transition-colors hover:border-brand/50"
          >
            <div className="inline-flex rounded-2xl border border-brand/30 bg-brand/10 p-4">
              <service.icon className="h-7 w-7 text-brand" aria-hidden="true" />
            </div>
            <h3 className="font-heading mt-6 text-xl font-bold text-foreground">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-card-foreground">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
