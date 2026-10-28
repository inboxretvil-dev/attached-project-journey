import { Image } from '@/components/site/image'

export function Testimonials() {
  return (
    <section id="results" className="relative overflow-hidden py-24 sm:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span className="font-heading select-none whitespace-nowrap text-[18vw] font-bold uppercase tracking-tighter text-foreground/[0.04]">
          Testimonials
        </span>
      </div>

      <div className="relative mx-auto max-w-3xl px-4">
        <figure className="relative rounded-3xl border border-border bg-card p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-24 w-24 rounded-tl-3xl border-l-2 border-t-2 border-brand shadow-[inset_12px_12px_40px_-20px_rgba(44,132,195,0.6)]"
          />
          <blockquote>
            <p className="text-pretty text-xl italic leading-relaxed text-foreground sm:text-2xl">
              {'"Appoint Funnels rebuilt our entire outbound motion in under three weeks. We went from 2 booked calls a month to 27 — without hiring a single SDR. The system just runs."'}
            </p>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Image
              src="/images/avatar-1.png"
              alt="Portrait of Marcus Hale"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-foreground">Marcus Hale</p>
              <p className="text-sm text-muted-foreground">
                Founder, Northbeam Consulting
              </p>
            </div>
          </figcaption>
        </figure>

        <div className="mt-8 rounded-2xl border border-border bg-card/60 p-6 text-sm leading-6 text-muted-foreground">
          <p className="font-semibold text-foreground">A note on our reviews and results</p>
          <p className="mt-2">
            We had many more testimonials on our old Facebook page, but that page was banned in the past, so a lot of those reviews were lost.
          </p>
          <p className="mt-2">
            When a client stops working with us, we also cancel the subscriptions and tools for their account. That's why the numbers shown in our CRM can go up and down over time — but the data is real, never fake.
          </p>
        </div>
      </div>
    </section>
  )
}
