import { MessageSquareText, Sparkles, Star, ChevronDown } from 'lucide-react'

function SkeletonLine({ className = '' }: { className?: string }) {
  return <span className={`mock-shimmer block h-2 rounded-full bg-mock-line ${className}`} />
}

function Stage({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative flex h-72 items-center justify-center overflow-hidden rounded-2xl bg-mock-surface px-4 sm:h-80"
    >
      {children}
    </div>
  )
}

function Popover({
  icon,
  title,
  points,
}: {
  icon: React.ReactNode
  title: string
  points: string[]
}) {
  return (
    <div className="mock-float absolute inset-x-0 top-1/2 z-10 mx-auto w-[86%] max-w-sm -translate-y-1/2 rounded-xl border border-mock-line bg-mock-panel p-4 shadow-[0_18px_40px_-12px_rgba(28,25,23,0.28)]">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-semibold text-mock-ink">
          {icon}
          {title}
        </span>
        <ChevronDown className="h-3.5 w-3.5 shrink-0 text-mock-ink" aria-hidden="true" />
      </div>
      <ul className="mt-3 flex flex-col gap-2.5 pl-4">
        {points.map((point) => (
          <li key={point} className="list-disc text-xs leading-relaxed text-mock-ink/80">
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function EmailMockup() {
  return (
    <Stage label="Unified inbox showing a cold email campaign reply with an AI overview summarising the prospect's response">
      <div className="mock-drift w-[78%] max-w-xs rounded-xl border border-mock-line bg-mock-panel p-4 opacity-70">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-mock-ink">
            Re: Cold outreach — Sarah
          </span>
          <Star className="h-3.5 w-3.5 text-mock-muted" aria-hidden="true" />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <SkeletonLine className="w-4/5" />
          <SkeletonLine className="w-3/5" />
        </div>
        <div className="mt-28 flex flex-col gap-2 sm:mt-32">
          <SkeletonLine className="w-3/5" />
          <SkeletonLine className="w-2/5" />
        </div>
      </div>
      <Popover
        icon={<Sparkles className="h-4 w-4" aria-hidden="true" />}
        title="Cold Email AI Overview"
        points={[
          'Sarah replied to step 2 of the cold email sequence and asked about pricing.',
          'AI auto-personalized the follow-up and booked a call for Thursday at 2 PM.',
        ]}
      />
    </Stage>
  )
}

export function SmsMockup() {
  return (
    <Stage label="Cold SMS conversation thread with an AI summary showing a qualified lead and booked call">
      <div className="mock-drift w-[78%] max-w-xs rounded-xl border border-mock-line bg-mock-panel p-4 opacity-70">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-mock-ink">
            Mike R. · Cold SMS Lead
          </span>
          <span className="text-[10px] text-mock-muted">SMS Campaign</span>
        </div>
        <div className="mt-4 flex flex-col gap-2.5">
          <span className="mock-shimmer h-6 w-3/5 rounded-2xl rounded-bl-sm bg-mock-line" />
          <span className="mock-shimmer ml-auto h-6 w-2/3 rounded-2xl rounded-br-sm bg-mock-ink/60" />
        </div>
        <div className="mt-28 flex flex-col gap-3 sm:mt-32">
          <span className="mock-shimmer h-6 w-1/2 rounded-2xl rounded-bl-sm bg-mock-line" />
          <span className="mock-shimmer ml-auto h-6 w-2/5 rounded-2xl rounded-br-sm bg-mock-ink/60" />
        </div>
      </div>
      <Popover
        icon={<MessageSquareText className="h-4 w-4" aria-hidden="true" />}
        title="Cold SMS Lead Qualified"
        points={[
          'Mike replied to the cold SMS blast and wants 10+ more roofing jobs a month.',
          'AI qualified him automatically and booked a 15-min call for tomorrow at 11 AM.',
        ]}
      />
    </Stage>
  )
}
