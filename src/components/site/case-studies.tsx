import { ArrowUpRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { EmailMockup, SmsMockup } from '@/components/site/card-mockups'

const cases = [
  {
    title: 'AI Cold SMS Engine',
    description:
      'A direct-to-cell conversational system that opens dialogues with decision-makers at scale. Automated qualification sequences book meetings straight into your calendar while reply-handling agents keep every thread warm.',
    Mockup: SmsMockup,
  },
  {
    title: 'AI Cold Email Engine',
    description:
      'Clean-domain, inbox-ready outreach architecture delivering thousands of hyper-personalized emails daily. Deliverability monitoring, domain rotation, and LLM-driven personalization keep response rates compounding.',
    Mockup: EmailMockup,
  },
]

export function CaseStudies() {
  return (
    <section id="architecture" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="mb-14 text-center">
        <span className="inline-block rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
          Core Outcomes
        </span>
        <h2 className="font-heading mt-5 text-balance text-4xl font-bold text-foreground sm:text-5xl">
          What We Build
        </h2>
      </div>

      <div className="flex flex-col gap-8 sm:gap-10">
        {cases.map(({ title, description, Mockup }) => (
          <article
            key={title}
            className="grid items-center gap-10 overflow-hidden rounded-3xl border border-border bg-secondary p-7 sm:p-12 lg:grid-cols-2"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                {title}
              </h3>
              <p className="mt-4 leading-relaxed text-card-foreground">{description}</p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Learn More
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <Mockup />
          </article>
        ))}
      </div>
    </section>
  )
}
