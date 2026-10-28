import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Check, Copy, ExternalLink } from 'lucide-react'
import { ContentPage } from '@/components/site/content-page'
import { Button } from '@/components/ui/button'

const bookingUrl = 'https://cal.com/appointfunnels/discoverycall'

export const Route = createFileRoute('/book-call')({
  head: () => ({
    meta: [
      { title: 'book-call — Appoint Funnels' },
      {
        name: 'description',
        content:
          'Book your Appoint Funnels discovery call. Choose an available date and time through Cal.com.',
      },
      { property: 'og:title', content: 'book-call — Appoint Funnels' },
      {
        property: 'og:description',
        content:
          'Choose an available date and time for your Appoint Funnels discovery call.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: BookCallPage,
})

function BookCallPage() {
  const [copied, setCopied] = useState(false)

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(bookingUrl)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <ContentPage title="book-call">
      <section className="mx-auto max-w-3xl px-4 pb-24 pt-10 sm:pt-16">
        <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
          book-call
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Grab a time on the calendar below — it opens the Cal.com booking page.
        </p>

        <div className="mt-8 rounded-3xl border border-border bg-card/50 p-5 sm:p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Booking link
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-0 flex-1 break-all font-mono text-sm text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground sm:text-base"
            >
              {bookingUrl}
            </a>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={copyLink}
              className="shrink-0 rounded-full"
            >
              {copied ? (
                <>
                  <Check aria-hidden="true" /> Copied
                </>
              ) : (
                <>
                  <Copy aria-hidden="true" /> Copy
                </>
              )}
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                Open booking page <ExternalLink aria-hidden="true" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Opens in a new tab — pick a date and time there.
            </p>
          </div>
        </div>
      </section>
    </ContentPage>
  )
}
