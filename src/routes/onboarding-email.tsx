import { createFileRoute } from '@tanstack/react-router'
import { ContentPage } from '@/components/site/content-page'
import { OnboardingForm, sharedGroups, type FieldGroup } from '@/components/site/onboarding-form'

const t = 'Cold Email Onboarding — Appoint Funnels'
const d = 'Onboarding form for Appoint Funnels cold email clients: offer, ideal customer profile, domains and campaigns.'

const groups: FieldGroup[] = [
  ...sharedGroups,
  {
    title: 'Cold email setup',
    fields: [
      { name: 'em_domains', label: 'Do you want us to buy new sending domains?', type: 'select', options: ['Yes, buy them for me', 'I will buy them', 'I already have domains'], required: true },
      { name: 'em_domain_ideas', label: 'Preferred domain names (or existing ones)', type: 'textarea', placeholder: 'getacmehvac.com, tryacmehvac.com' },
      { name: 'em_sender', label: 'Sender name(s) to show on emails', required: true },
      { name: 'em_list', label: 'Do you have a lead list?', type: 'select', options: ['Yes, I have a list', 'No, build one for me', 'Partly'], required: true },
      { name: 'em_tools', label: 'Tools you already use', placeholder: 'Instantly, Smartlead, Apollo, Google Workspace…' },
      { name: 'em_case', label: 'Case studies, results or testimonials we can mention', type: 'textarea' },
      { name: 'em_cta', label: 'What should leads do next?', type: 'select', options: ['Book a call', 'Reply for info', 'Get a quote', 'Other'], required: true },
      { name: 'em_booking', label: 'Booking calendar link', type: 'url' },
      { name: 'em_reply', label: 'Who handles replies?', type: 'select', options: ['You (Appoint Funnels)', 'Our team', 'Both'] },
      { name: 'em_avoid', label: 'Companies, competitors or areas to exclude', type: 'textarea' },
      { name: 'em_goal', label: 'Goal (appointments per month)', type: 'number' },
      { name: 'notes', label: 'Anything else we should know?', type: 'textarea' },
    ],
  },
]

export const Route = createFileRoute('/onboarding-email')({
  head: () => ({
    meta: [
      { title: t },
      { name: 'description', content: d },
      { property: 'og:title', content: t },
      { property: 'og:description', content: d },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: () => (
    <ContentPage title="Cold Email Onboarding">
      <OnboardingForm eyebrow="Cold Email" title="Cold Email Onboarding" intro="Fill this in so we can set up your domains, inboxes and cold email campaigns." groups={groups} />
    </ContentPage>
  ),
})
