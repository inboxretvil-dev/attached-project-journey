import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowUpRight, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'


const sections = [
  {
    title: 'Information we collect',
    paragraphs: [
      'We collect the information you give us directly, such as your name, email address, phone number, and business details when you contact us, book a call, or become a client. We also collect the project information needed to deliver our services, such as offer details, target audience, and campaign content.',
      'When you visit this website, standard technical information such as your browser type, device, and pages visited may be collected through ordinary website analytics to help us understand and improve the site.',
    ],
  },
  {
    title: 'How we use your information',
    paragraphs: [
      'We use client information only as reasonably necessary to deliver the agreed services, configure campaigns, operate connected tools, communicate about the project, and provide support. We may also use your contact details to respond to enquiries and, where you have asked us to, send you information about our services.',
      'We do not sell your personal information. Client data is shared only with the third-party platforms needed to run your project, such as email, SMS, inbox, warm-up, scheduling, and automation tools, and only to the extent required to deliver the service.',
    ],
  },
  {
    title: 'Client outreach data',
    paragraphs: [
      'Clients are responsible for ensuring that the contact data and content they provide may be used lawfully for the intended outreach. Where we manage campaigns on your behalf, you remain responsible for the lawfulness of the contact lists and messaging you ask us to use.',
      'We handle outreach data only for the purpose of running your campaigns and do not use it for our own marketing or share it with other clients.',
    ],
  },
  {
    title: 'Account access and security',
    paragraphs: [
      'Clients should not provide passwords or sensitive personal information through ordinary email. Where access to a third-party account is required, access should be shared through the platform’s approved invitation or permission system wherever available.',
      'We take reasonable technical and organisational measures to protect the information we hold. No method of transmission or storage is completely secure, so we cannot guarantee absolute security, but we limit access to what is needed to deliver your project.',
    ],
  },
  {
    title: 'Retention and your rights',
    paragraphs: [
      'We keep client information for as long as needed to deliver the services, meet legal or accounting requirements, and resolve disputes. When information is no longer needed, we delete or anonymise it within a reasonable period.',
      'You can ask us at any time to access, correct, or delete your personal information, or to stop using it for marketing. To make a request, contact us at appointfunnels@gmail.com and we will respond within a reasonable timeframe.',
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
              Privacy policy
            </div>
            <h1 className="mt-5 text-balance font-heading text-4xl font-bold tracking-tight sm:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              How Appoint Funnels collects, uses, and protects your information
              when you use this website and our services.
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
              <li>We only collect what we need to deliver your project.</li>
              <li>We never sell your personal information.</li>
              <li>Outreach data is used only for your campaigns.</li>
              <li>You can ask us to access, correct, or delete your data.</li>
            </ul>
            <a
              href="mailto:appointfunnels@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Ask a privacy question
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
              <strong className="text-foreground">Important:</strong> This page is a plain-language privacy policy and does not replace legal advice. Please have it reviewed by a qualified lawyer for the jurisdictions where you operate. For our service delivery and cancellation terms, see our <Link to="/terms" className="font-semibold text-brand hover:underline">Terms of Service</Link>.
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
      { title: 'Privacy Policy — Appoint Funnels' },
      { name: 'description', content: 'How Appoint Funnels collects, uses, and protects your personal information across our website and services.' },
      { property: 'og:title', content: 'Privacy Policy — Appoint Funnels' },
      { property: 'og:description', content: 'How Appoint Funnels collects, uses, and protects your personal information across our website and services.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: PrivacyPage,
})
