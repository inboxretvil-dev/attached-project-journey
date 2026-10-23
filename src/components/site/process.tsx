import {
  ScanSearch,
  ShieldCheck,
  PenLine,
  Send,
  CalendarCheck,
  Handshake,
} from 'lucide-react'

const steps = [
  {
    icon: ScanSearch,
    title: 'Scraping',
    description:
      'We build a targeted list of decision-makers that match your ideal customer profile, pulled from multiple data sources.',
  },
  {
    icon: ShieldCheck,
    title: 'Verification',
    description:
      'Every contact is validated so emails land in the inbox and numbers reach real people — protecting your domains and sender reputation.',
  },
  {
    icon: PenLine,
    title: 'Personalization',
    description:
      'AI writes a unique opener for each prospect based on their company, role, and recent activity, so outreach never reads like a template.',
  },
  {
    icon: Send,
    title: 'Campaign Launch',
    description:
      'Sequences go live across cold email and SMS on warmed infrastructure, with volume ramped safely and monitored daily.',
  },
  {
    icon: CalendarCheck,
    title: 'Appointments',
    description:
      'AI agents handle replies, answer questions, and book qualified prospects straight onto your calendar.',
  },
  {
    icon: Handshake,
    title: 'Close',
    description:
      'Your team walks into calls with warm, pre-qualified buyers. You close the deal — we keep the pipeline full.',
  },
]

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="mb-14 text-center">
        <span className="inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
          The System Process
        </span>
        <h2 className="font-heading mt-5 text-balance text-4xl font-bold text-foreground sm:text-5xl">
          From a cold list to a closed deal
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-card-foreground">
          Six stages, run end to end by our team and AI agents.
        </p>
      </div>

      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-card p-7 transition-colors hover:border-brand/50"
          >
            <div className="flex items-center justify-between">
              <div className="inline-flex rounded-2xl border border-brand/30 bg-brand/10 p-3.5">
                <step.icon className="h-6 w-6 text-brand" aria-hidden="true" />
              </div>
              <span
                aria-hidden="true"
                className="font-heading text-5xl font-bold text-secondary transition-colors group-hover:text-brand/30"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-xl font-bold text-foreground">
                <span className="sr-only">{`Step ${i + 1}: `}</span>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-card-foreground">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
