import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Mail, Phone } from 'lucide-react'

const inputClasses =
  'w-full rounded-xl border border-input bg-secondary px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-shadow focus:outline-none focus:ring-2 focus:ring-brand focus:shadow-[0_0_20px_rgba(44,132,195,0.25)]'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-6xl font-bold leading-none text-foreground sm:text-8xl">
            {"Let's"}
            <br />
            <span className="text-brand drop-shadow-[0_0_30px_rgba(44,132,195,0.6)]">
              Talk!
            </span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-card-foreground">
            Tell us about your pipeline goals and we&apos;ll map out the exact
            system architecture to hit them. No pressure, no fluff — just a
            clear plan.
          </p>

          <a
            href="https://cal.com/appointfunnels/discoverycall"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary py-3.5 pl-8 pr-3 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a call
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>

          <div className="mt-8 flex flex-col gap-3 text-sm text-card-foreground">
            <a
              href="tel:+3303120032"
              className="flex items-center gap-2.5 transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
              +330 312 0032
            </a>
            <a
              href="mailto:appointfunnels@gmail.com"
              className="flex items-center gap-2.5 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
              appointfunnels@gmail.com
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle2 className="h-12 w-12 text-brand" aria-hidden="true" />
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Message Sent
              </h3>
              <p className="text-sm leading-relaxed text-card-foreground">
                Thanks for reaching out. We&apos;ll get back to you within 24
                hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="flex flex-col gap-4"
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Work Email"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className={inputClasses}
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send Message
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
