import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/hooks/useLanguage'
import { DEAL_OF_THE_DAY } from '@/data/mock-deals'

interface TimeLeft {
  h: number
  m: number
  s: number
}

function useCountdown() {
  const [time, setTime] = useState<TimeLeft>({ h: 5, m: 47, s: 23 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev
        s -= 1
        if (s < 0) { s = 59; m -= 1 }
        if (m < 0) { m = 59; h -= 1 }
        if (h < 0) { h = 23; m = 59; s = 59 }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')
  return `${pad(time.h)}:${pad(time.m)}:${pad(time.s)}`
}

export function DealOfTheDay() {
  const { t } = useLanguage()
  const countdown = useCountdown()
  const deal = DEAL_OF_THE_DAY

  return (
    <section className="py-16 bg-background" aria-label="Deal of the Day">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, hsl(220 25% 12%) 0%, hsl(220 25% 18%) 100%)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* ── Visual side ───────────────────────────────── */}
            <div className="relative bg-gradient-to-br from-primary/25 to-transparent flex items-center justify-center p-12 min-h-64">
              <div className="absolute top-5 left-5">
                <Badge variant="accent" className="text-sm font-black px-3 py-1 shadow-lg">
                  {t('dotd.badge')}
                </Badge>
              </div>

              {/* TV illustration */}
              <div className="w-full max-w-[280px]">
                <div className="bg-gray-900 rounded-xl aspect-video flex items-center justify-center shadow-2xl ring-4 ring-white/10">
                  <div className="w-4/5 h-4/5 rounded-lg bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.25em] mb-1">
                        Samsung
                      </div>
                      <div className="text-white/15 text-[8px] uppercase tracking-widest">
                        4K QLED
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 mx-auto h-4 bg-gray-800 rounded-b-lg" />
                <div className="w-2/5 mx-auto h-2 bg-gray-700 rounded-full mt-1" />
              </div>
            </div>

            {/* ── Details side ──────────────────────────────── */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-black text-white mb-2 leading-tight">
                {t('dotd.title')}
              </h3>
              <p className="text-white/55 text-sm mb-6 leading-relaxed">
                {t('dotd.desc')}
              </p>

              {/* Pricing */}
              <div className="mb-4">
                <p className="text-white/35 text-sm line-through mb-1">{t('dotd.original')}</p>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="font-marker text-5xl text-accent leading-none">
                    ${deal.dealPrice}
                  </span>
                  <span className="inline-flex items-center bg-primary/25 text-primary border border-primary/40 rounded-full px-3 py-1 text-sm font-bold">
                    {t('dotd.savings')}
                  </span>
                </div>
              </div>

              {/* Countdown */}
              <div
                className="flex items-center gap-2 mb-7 text-white/55 text-sm"
                aria-label={`Deal expires in ${countdown}`}
              >
                <Clock size={15} className="text-accent shrink-0" aria-hidden />
                <span>{t('dotd.expires')}</span>
                <span
                  className="font-mono font-black text-accent text-lg tabular-nums"
                  aria-live="polite"
                >
                  {countdown}
                </span>
              </div>

              <a href="#stores">
                <Button
                  size="lg"
                  variant="accent"
                  className="w-full sm:w-auto gap-2 font-black shadow-lg shadow-accent/20 hover:shadow-accent/40"
                >
                  <ShoppingBag size={18} aria-hidden />
                  {t('dotd.cta')}
                </Button>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
