import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowUpRight, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'


const sections = [
  {
    title: 'Service delivery and external dependencies',
    paragraphs: [
      'Appoint Funnels builds and manages lead-generation systems using third-party platforms, including cold email, SMS, inbox, warm-up, and automation tools. Some parts of a project therefore depend on internet connectivity, third-party availability, account approvals, platform limits, and external policy changes.',
      'If internet interruption, a third-party outage, account restriction, technical issue, unusually high workload, or another dependency outside our reasonable control delays the project, the delivery date may be extended. Fees paid for third-party tools are tool costs and are not amounts held by Appoint Funnels for refund.',
    ],
  },
  {
    title: 'Platform and warm-up rule changes',
    paragraphs: [
      'Google, cold email providers, SMS providers, inbox platforms, and other tools may change their rules, requirements, limits, warm-up periods, or approval processes at any time. This can affect sending volume, campaign launch dates, deliverability, integrations, and other project milestones.',
      'Where a platform changes its rules or requires additional warm-up time, including where emails cannot yet be sent because a warm-up period has been extended, Appoint Funnels may extend the contract delivery period without cancellation or penalty from the client. We will continue to work within the updated platform requirements and communicate material changes where practical.',
    ],
  },
  {
    title: 'Contract period and cancellation',
    paragraphs: [
      'The contract cannot be cancelled during the agreed contract period, including where a campaign is delayed, emails or messages are temporarily not sending, a warm-up period is extended, or a third-party tool causes an error. Delays or errors connected to external tools do not automatically create a right to cancel or receive a refund.',
      'If the client requests cancellation before the agreed contract end date, the client remains responsible for all third-party tool costs committed or paid for the project, plus a cancellation fee equal to 30% of the contract value. These amounts cover costs already incurred, reserved capacity, setup work, and the cancellation administration involved in closing the project early.',
      'After one day from the start of the contract, third-party tool costs are non-refundable. Any cancellation request remains subject to the outstanding tool costs and the 30% contract cancellation fee described above.',
    ],
  },
  {
    title: 'Privacy and account access',
    paragraphs: [
      'We use client information only as reasonably necessary to deliver the agreed services, configure campaigns, operate connected tools, communicate about the project, and provide support. Clients are responsible for ensuring that the contact data and content they provide may be used lawfully for the intended outreach.',
      'Clients should not provide passwords or sensitive personal information through ordinary email. Where access to a third-party account is required, access should be shared through the platform’s approved invitation or permission system wherever available.',
    ],
  },
]

function PrivacyPage() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-background pt-28 text-foreground">
      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Appoint Funnels
          </Link>

          <div className="mt-14 max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Policy & terms
            </div>
            <h1 className="mt-5 text-balance font-heading text-4xl font-bold tracking-tight sm:text-6xl">
              Privacy & Service Policy
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              The operating terms for project delivery, third-party tools,
              platform changes, privacy, and contract cancellation.
            </p>
            <p className="mt-5 text-sm text-muted-foreground">
              Last updated: October 2026
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <aside className="h-fit rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-8">
            <p className="text-sm font-semibold text-foreground">Quick summary</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm leading-6 text-muted-foreground">
              <li>Third-party delays can extend delivery dates.</li>
              <li>Tool costs are non-refundable project costs.</li>
              <li>Platform rule changes do not cancel the contract.</li>
              <li>Early cancellation includes a 30% contract fee.</li>
            </ul>
            <a
              href="mailto:appointfunnels@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Ask a policy question
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </aside>

          <div className="flex flex-col gap-12">
            {sections.map((section, index) => (
              <article key={section.title} className="border-b border-border pb-12 last:border-0">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  0{index + 1}
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-5 flex flex-col gap-4 text-base leading-7 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}

            <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6 text-sm leading-6 text-muted-foreground">
              <strong className="text-foreground">Important:</strong> This page is a plain-language service policy and does not replace a signed client contract or legal advice. The signed contract controls if there is any conflict. Please have these terms reviewed by a qualified lawyer for the jurisdiction where your contract is formed.
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy & Service Policy — Appoint Funnels' },
      { name: 'description', content: 'Appoint Funnels privacy, service delivery, third-party tool, and contract cancellation policy.' },
      { property: 'og:title', content: 'Privacy & Service Policy — Appoint Funnels' },
      { property: 'og:description', content: 'Appoint Funnels privacy, service delivery, third-party tool, and contract cancellation policy.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: PrivacyPage,
})
