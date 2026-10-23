import type { ReactNode } from 'react'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { ScrollReveal } from '@/components/site/scroll-reveal'

export function ContentPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-28">
        <h1 className="sr-only">{title} — Appoint Funnels</h1>
        {children}
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}