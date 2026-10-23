import { createFileRoute } from '@tanstack/react-router'
import { ContentPage } from '@/components/site/content-page'
import { Testimonials } from '@/components/site/testimonials'

export const Route = createFileRoute('/results')({
  head: () => ({
    meta: [
      { title: 'Results — Appoint Funnels' },
      { name: 'description', content: 'Explore client results and testimonials for Appoint Funnels AI-powered lead generation systems.' },
      { property: 'og:title', content: 'Results — Appoint Funnels' },
      { property: 'og:description', content: 'Explore client results and testimonials for Appoint Funnels AI-powered lead generation systems.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: ResultsPage,
})

function ResultsPage() {
  return (
    <ContentPage title="Results">
      <Testimonials />
    </ContentPage>
  )
}
