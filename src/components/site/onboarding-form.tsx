import { useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

export type Field = {
  name: string
  label: string
  help?: string
  placeholder?: string
  type?: 'text' | 'email' | 'tel' | 'url' | 'number' | 'textarea' | 'select'
  options?: string[]
  required?: boolean
}

export type FieldGroup = { title: string; intro?: string; fields: Field[] }

const inputClasses =
  'w-full rounded-xl border border-input bg-secondary px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-shadow focus:outline-none focus:ring-2 focus:ring-brand'

export function OnboardingForm({
  eyebrow,
  title,
  intro,
  groups,
}: {
  eyebrow: string
  title: string
  intro: string
  groups: FieldGroup[]
}) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
      <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{intro}</p>

      {submitted ? (
        <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-12 text-center">
          <CheckCircle2 className="h-12 w-12 text-brand" aria-hidden="true" />
          <h3 className="font-heading text-2xl font-bold text-foreground">Onboarding received</h3>
          <p className="text-sm text-card-foreground">Thanks! We&apos;ll review your answers and get started.</p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="mt-12 flex flex-col gap-8"
        >
          {groups.map((group, gi) => (
            <fieldset key={group.title} className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <legend className="sr-only">{group.title}</legend>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                {String(gi + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 font-heading text-2xl font-bold text-foreground">{group.title}</h3>
              {group.intro && <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.intro}</p>}
              <div className="mt-6 flex flex-col gap-5">
                {group.fields.map((f) => (
                  <div key={f.name}>
                    <label htmlFor={f.name} className="text-sm font-semibold text-foreground">
                      {f.label}
                      {f.required && <span className="text-brand"> *</span>}
                    </label>
                    {f.help && <p className="mt-1 text-xs leading-5 text-muted-foreground">{f.help}</p>}
                    <div className="mt-2">
                      {f.type === 'textarea' ? (
                        <textarea id={f.name} name={f.name} rows={4} required={f.required} maxLength={3000} placeholder={f.placeholder} className={inputClasses} />
                      ) : f.type === 'select' ? (
                        <select id={f.name} name={f.name} required={f.required} defaultValue="" className={inputClasses}>
                          <option value="" disabled>Select one</option>
                          {f.options?.map((o) => <option key={o}>{o}</option>)}
                        </select>
                      ) : (
                        <input id={f.name} name={f.name} type={f.type ?? 'text'} required={f.required} maxLength={500} placeholder={f.placeholder} className={inputClasses} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
          ))}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Submit onboarding
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      )}
    </section>
  )
}

const size = ['Solo / 1–10 employees', 'Small (11–50)', 'Mid-size (51–500)', 'Enterprise (500+)', 'Mixed']

export const sharedGroups: FieldGroup[] = [
  {
    title: 'Your business',
    fields: [
      { name: 'full_name', label: 'Your full name', required: true },
      { name: 'company', label: 'Company name', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true },
      { name: 'website', label: 'Website', type: 'url', placeholder: 'https://' },
    ],
  },
  {
    title: 'Offer & targeting',
    fields: [
      { name: 'niches', label: 'Niches to target', type: 'textarea', required: true, placeholder: 'e.g. Commercial property managers, dental clinics, logistics companies' },
      { name: 'offer', label: 'Services and products you offer', type: 'textarea', required: true, help: 'Describe it in one simple sentence.', placeholder: 'We provide HVAC services to commercial properties' },
      { name: 'usp', label: 'What makes you different?', type: 'textarea', placeholder: 'Guarantees, speed, pricing, results, years in business…' },
      { name: 'avg_deal', label: 'Average deal / client value', placeholder: 'e.g. $5,000' },
    ],
  },
  {
    title: 'Ideal Customer Profile (ICP)',
    intro: "This is the 'perfect customer' profile — the person or company you most want to work with.",
    fields: [
      { name: 'icp_industry', label: '(a) What industry they work in', required: true },
      { name: 'icp_size', label: '(b) How big their company is', type: 'select', options: size, required: true },
      { name: 'icp_geo', label: '(c) Which geographic areas they are in', required: true, placeholder: 'e.g. Texas, Florida — USA' },
      { name: 'icp_decision', label: '(d) Who makes the buying decision', required: true, placeholder: "e.g. 'Operations Manager', 'IT Director', 'Owner'" },
    ],
  },
]
