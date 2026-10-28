import { createFileRoute } from '@tanstack/react-router'
import { ExternalLink } from 'lucide-react'
import { ContentPage } from '@/components/site/content-page'
import { Button } from '@/components/ui/button'

const bookingUrl = 'https://cal.com/appointfunnels/discoverycall'

export const Route = createFileRoute('/book-call')({
  head: () => ({
    meta: [
      { title: 'book-call — Appoint Funnels' },
      { name: 'description', content: 'Book your Appoint Funnels discovery call. Choose an available date and time through Cal.com.' },
      { property: 'og:title', content: 'book-call — Appoint Funnels' },
      { property: 'og:description', content: 'Choose an available date and time for your Appoint Funnels discovery call.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: BookCallPage,
})

function BookCallPage() {
  return (
    <ContentPage title="book-call">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:pt-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">book-call</h1>
          <Button asChild variant="outline">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              Cal.com <ExternalLink aria-hidden="true" />
            </a>
          </Button>
        </div>
        <iframe
          src={`${bookingUrl}?embed=true&theme=dark&layout=month_view`}
          title="Appoint Funnels discoverycall — Cal.com booking calendar"
          className="h-[980px] w-full border-0 bg-background sm:h-[780px]"
          allow="payment"
          data-lenis-prevent
        />
      </section>
    </ContentPage>
  )
}