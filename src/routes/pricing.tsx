import { createFileRoute } from '@tanstack/react-router'
import { ContentPage } from '@/components/site/content-page'
import { Pricing } from '@/components/site/pricing'

export const Route = createFileRoute('/pricing')({
  head: () => ({
    meta: [
      { title: 'Pricing — Appoint Funnels' },
      { name: 'description', content: 'View Appoint Funnels pricing and packages for AI-powered B2B lead generation systems.' },
      { property: 'og:title', content: 'Pricing — Appoint Funnels' },
      { property: 'og:description', content: 'View Appoint Funnels pricing and packages for AI-powered B2B lead generation systems.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: PricingPage,
})

function PricingPage() {
  return (
    <ContentPage title="Pricing">
      <Pricing />
    </ContentPage>
  )
}
