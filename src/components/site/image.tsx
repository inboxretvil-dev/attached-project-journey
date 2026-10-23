import type { ImgHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean
  priority?: boolean
  quality?: number
  sizes?: string
}

/** Drop-in replacement for the source project's image component. */
export function Image({ fill, priority, quality: _q, className, ...rest }: Props) {
  return (
    <img
      {...rest}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={cn(fill && 'absolute inset-0 h-full w-full', className)}
    />
  )
}
