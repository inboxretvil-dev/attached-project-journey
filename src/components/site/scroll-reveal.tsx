import { useEffect } from 'react'

const TEXT_TARGETS = 'main section:not(#home) :is(h2, h2 + p, blockquote, form)'
const CARD_TARGETS =
  'main section:not(#home) :is(article, figure, ol > li, ul > li, [class*="rounded-3xl"]), footer > div'

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const cards = Array.from(document.querySelectorAll<HTMLElement>(CARD_TARGETS))
    const texts = Array.from(
      document.querySelectorAll<HTMLElement>(TEXT_TARGETS),
    ).filter((el) => !cards.some((card) => card !== el && card.contains(el)))

    const targets = [...texts, ...cards].filter(
      (el, _, all) => !all.some((other) => other !== el && other.contains(el)),
    )

    targets.forEach((el) => {
      const isCard = cards.includes(el)
      const siblings = Array.from(el.parentElement?.children ?? []).filter(
        (child) => targets.includes(child as HTMLElement),
      )
      const index = Math.max(0, siblings.indexOf(el))
      el.classList.add('reveal', isCard ? 'reveal-card' : 'reveal-text')
      el.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 180}ms`)
      el.style.setProperty('--reveal-tilt', index % 2 === 0 ? '-2deg' : '2deg')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
