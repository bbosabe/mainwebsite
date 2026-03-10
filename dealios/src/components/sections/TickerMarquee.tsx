import { useLanguage } from '@/hooks/useLanguage'

export function TickerMarquee() {
  const { t } = useLanguage()
  const text = t('ticker.text')

  return (
    <div
      className="bg-secondary border-y border-white/10 py-3 overflow-hidden"
      aria-label="Promotional ticker"
    >
      <div
        className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]"
        style={{ width: 'max-content' }}
        aria-live="off"
      >
        {/* Duplicate 4× for seamless loop */}
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-accent font-bold text-sm tracking-widest pr-16"
            aria-hidden={i > 0}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
