import { motion } from 'framer-motion'
import { MapPin, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/useLanguage'
import { MOCK_DEALS } from '@/data/mock-deals'

const TAG_COLORS: Record<string, string> = {
  green: 'bg-tag-green',
  red: 'bg-tag-red',
  purple: 'bg-tag-purple',
  blue: 'bg-tag-blue',
}

const HERO_CARDS = MOCK_DEALS.slice(0, 3)

export function Hero() {
  const { t } = useLanguage()
  const headlineWords = t('hero.headline').split(' ')

  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 65% 40%, hsl(358 75% 30%) 0%, hsl(220 25% 10%) 55%, hsl(220 25% 7%) 100%)',
      }}
      aria-label="Hero"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-primary/5 blur-2xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text content ─────────────────────────── */}
          <div>
            {/* Tag pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 bg-accent/15 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden />
                {t('hero.tag')}
              </span>
            </motion.div>

            {/* Staggered word-reveal headline */}
            <h1 className="flex flex-wrap gap-x-4 text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-5">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                >
                  {word.includes(t('hero.accentWord')) ? (
                    <span className="text-accent">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Subheading */}
            <motion.p
              className="text-lg text-white/65 leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              {t('hero.sub')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href="#stores">
                <Button
                  size="xl"
                  className="shimmer-btn font-black shadow-lg shadow-accent/20 hover:shadow-accent/40"
                  style={{ color: 'hsl(var(--secondary))' }}
                >
                  <MapPin size={20} aria-hidden />
                  {t('hero.cta.primary')}
                </Button>
              </a>
              <a href="#how-it-works">
                <Button size="xl" variant="outline" className="font-bold">
                  {t('hero.cta.secondary')}
                  <ChevronDown size={18} aria-hidden />
                </Button>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              aria-label="Key statistics"
            >
              {[
                { value: '70%', labelKey: 'hero.stat.savings' as const },
                { value: '3', labelKey: 'hero.stat.locations' as const },
                { value: 'Daily', labelKey: 'hero.stat.arrivals' as const },
              ].map(stat => (
                <div key={stat.labelKey}>
                  <div className="text-2xl font-black text-accent">{stat.value}</div>
                  <div className="text-xs text-white/45 font-medium mt-0.5">
                    {t(stat.labelKey)}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Floating deal cards ─────────────────── */}
          <div className="relative hidden lg:flex flex-col gap-5 items-end pr-4" aria-label="Featured deals">
            {HERO_CARDS.map((deal, i) => (
              <motion.div
                key={deal.id}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3 + i * 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.9,
                }}
              >
              <motion.div
                className="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-5 w-72 shadow-2xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.45 + i * 0.15, ease: 'easeOut' }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm leading-tight mb-1 truncate">
                      {deal.title}
                    </p>
                    <p className="text-white/40 text-xs">{deal.category}</p>
                  </div>
                  <span
                    className={`${TAG_COLORS[deal.tagType] ?? 'bg-primary'} text-white text-xs font-black px-2.5 py-1 rounded-full whitespace-nowrap shrink-0`}
                  >
                    {deal.tagLabel}
                  </span>
                </div>
                <div className="flex items-end gap-2 mt-3">
                  <span className="font-marker text-2xl text-accent">
                    ${deal.dealPrice}
                  </span>
                  <span className="text-white/35 text-xs line-through mb-0.5">
                    ${deal.originalPrice}
                  </span>
                </div>
              </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      >
        <ChevronDown className="text-white/25" size={26} />
      </motion.div>
    </section>
  )
}
