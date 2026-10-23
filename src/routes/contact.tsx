import { createFileRoute } from '@tanstack/react-router'
import { ContentPage } from '@/components/site/content-page'
import { Contact } from '@/components/site/contact'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact — Appoint Funnels' },
      { name: 'description', content: 'Contact Appoint Funnels or book a discovery call to discuss your B2B lead generation goals.' },
      { property: 'og:title', content: 'Contact — Appoint Funnels' },
      { property: 'og:description', content: 'Contact Appoint Funnels or book a discovery call to discuss your B2B lead generation goals.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <ContentPage title="Contact">
      <Contact />
    </ContentPage>
  )
}
