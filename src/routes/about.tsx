import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@/components/site/image'
import { ArrowUpRight } from 'lucide-react'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'


function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-28">
        <section className="relative overflow-hidden px-5 pb-24 pt-12 sm:px-8 lg:pb-32 lg:pt-20">
          <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(var(--border)_0.8px,transparent_0.8px)] [background-size:22px_22px]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[360px_1fr] lg:gap-20">
            <div className="overflow-hidden rounded-3xl border border-border bg-secondary shadow-[0_24px_70px_-35px_rgba(0,0,0,0.55)]">
              <div className="relative aspect-square overflow-hidden bg-[#c2bfc0]">
                <Image
                  src="/images/ziauddin-shah.png"
                  alt="Ziauddin Shah, Founder and CEO of Appoint Funnels"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="bg-foreground px-6 py-5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-background">
                Founder &amp; CEO
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand">About Appoint Funnels</p>
              <h1 className="mt-5 max-w-2xl font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Ziauddin Shah
              </h1>
              <p className="mt-4 text-lg font-semibold text-foreground/80">Founder &amp; CEO</p>
              <div className="mt-10 flex max-w-2xl flex-col gap-6 text-base leading-8 text-card-foreground sm:text-lg">
                <p className="italic">&quot;My journey into AI-driven business solutions started with a simple belief: every business, regardless of size, deserves access to cutting-edge technology that can transform their growth trajectory.&quot;</p>
                <p className="italic">&quot;At Appoint Funnels, we&apos;re not just building AI tools—we&apos;re creating opportunities. Our mission is to democratize AI technology and make it accessible, affordable, and effective for businesses worldwide.&quot;</p>
                <p className="italic">&quot;I&apos;m passionate about helping entrepreneurs and business owners scale their operations without the overwhelming complexity. Let&apos;s build something amazing together.&quot;</p>
              </div>
              <a
                href="https://cal.com/appointfunnels/discoverycall"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary py-3.5 pl-7 pr-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Book a discovery call
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}



export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Ziauddin Shah — Appoint Funnels' },
      { name: 'description', content: 'Meet Ziauddin Shah, Founder and CEO of Appoint Funnels, building practical AI systems for ambitious businesses.' },
      { property: 'og:title', content: 'About Ziauddin Shah — Appoint Funnels' },
      { property: 'og:description', content: 'Meet Ziauddin Shah, Founder and CEO of Appoint Funnels, building practical AI systems for ambitious businesses.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: AboutPage,
})
