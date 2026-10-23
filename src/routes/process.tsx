import { createFileRoute } from '@tanstack/react-router'
import { ContentPage } from '@/components/site/content-page'
import { Process } from '@/components/site/process'
import { Framework } from '@/components/site/framework'

export const Route = createFileRoute('/process')({
  head: () => ({
    meta: [
      { title: 'Process — Appoint Funnels' },
      { name: 'description', content: 'Discover the Appoint Funnels process and framework for building and launching AI-powered client acquisition systems.' },
      { property: 'og:title', content: 'Process — Appoint Funnels' },
      { property: 'og:description', content: 'Discover the Appoint Funnels process and framework for building and launching AI-powered client acquisition systems.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: ProcessPage,
})

function ProcessPage() {
  return (
    <ContentPage title="Process">
      <Process />
      <Framework />
    </ContentPage>
  )
}
