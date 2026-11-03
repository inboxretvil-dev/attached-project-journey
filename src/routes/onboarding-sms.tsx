import { createFileRoute } from '@tanstack/react-router'
import { ContentPage } from '@/components/site/content-page'
import { OnboardingForm, sharedGroups, type FieldGroup } from '@/components/site/onboarding-form'

const t = 'Cold SMS Onboarding — Appoint Funnels'
const d = 'Onboarding form for Appoint Funnels cold SMS clients: offer, ideal customer profile, lists and messaging.'

const groups: FieldGroup[] = [
  ...sharedGroups,
  {
    title: 'Cold SMS setup',
    fields: [
      { name: 'sms_list', label: 'Do you have a contact list?', type: 'select', options: ['Yes, I have a list', 'No, build one for me', 'Partly'] },
      { name: 'sms_list_size', label: 'Approx. number of contacts', type: 'number' },
      { name: 'sms_number', label: 'Preferred sending area code / country', placeholder: 'e.g. 512 — USA' },
      { name: 'sms_crm', label: 'CRM you use', placeholder: 'GoHighLevel, HubSpot, none…' },
      { name: 'sms_a2p', label: 'A2P 10DLC / business registration status', type: 'select', options: ['Already registered', 'Not registered', 'Not sure'] },
      { name: 'sms_hours', label: 'Business hours & time zone for replies', placeholder: 'Mon–Fri 9am–5pm CST' },
      { name: 'sms_cta', label: 'What should leads do next?', type: 'select', options: ['Book a call', 'Get a quote', 'Reply for info', 'Other'] },
      { name: 'sms_booking', label: 'Booking calendar link', type: 'url' },
      { name: 'sms_tone', label: 'Message tone & any example texts', type: 'textarea' },
      { name: 'sms_avoid', label: 'Words, claims or areas to avoid', type: 'textarea' },
      { name: 'sms_goal', label: 'Goal (appointments per month)', type: 'number' },
      { name: 'notes', label: 'Anything else we should know?', type: 'textarea' },
    ],
  },
]

export const Route = createFileRoute('/onboarding-sms')({
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
    <ContentPage title="Cold SMS Onboarding">
      <OnboardingForm eyebrow="Cold SMS" title="Cold SMS Onboarding" intro="Fill this in so we can build and launch your cold SMS system." groups={groups} />
    </ContentPage>
  ),
})
