import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { CaseStudies } from '@/components/site/case-studies'
import { Services } from '@/components/site/services'
import { Process } from '@/components/site/process'
import { Framework } from '@/components/site/framework'
import { Pricing } from '@/components/site/pricing'
import { Testimonials } from '@/components/site/testimonials'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'
import { ScrollReveal } from '@/components/site/scroll-reveal'

const title = 'Appoint Funnels — B2B AI Lead Generation Systems'
const description =
  'High-velocity client acquisition engines. AI cold SMS, email list activation, and cold email infrastructure for B2B companies ready to scale.'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Page,
})

function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <Services />
        <Process />
        <Framework />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
