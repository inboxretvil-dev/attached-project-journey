import { createFileRoute } from '@tanstack/react-router'
import { ContentPage } from '@/components/site/content-page'
import { Services } from '@/components/site/services'
import { CaseStudies } from '@/components/site/case-studies'

export const Route = createFileRoute('/systems')({
  head: () => ({
    meta: [
      { title: 'Systems — Appoint Funnels' },
      { name: 'description', content: 'Explore Appoint Funnels AI cold SMS, email list activation, and cold email systems for B2B client acquisition.' },
      { property: 'og:title', content: 'Systems — Appoint Funnels' },
      { property: 'og:description', content: 'Explore Appoint Funnels AI cold SMS, email list activation, and cold email systems for B2B client acquisition.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: SystemsPage,
})

function SystemsPage() {
  return (
    <ContentPage title="Systems">
      <Services />
      <CaseStudies />
    </ContentPage>
  )
}
