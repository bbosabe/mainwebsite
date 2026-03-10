import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/hooks/useLanguage'
import { MOCK_STORES } from '@/data/mock-stores'
import { cn } from '@/lib/utils'

export function StoreSection() {
  const { t } = useLanguage()
  const [activeIdx, setActiveIdx] = useState(0)
  const store = MOCK_STORES[activeIdx]

  return (
    <section className="py-16 bg-muted" id="stores">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">
            {t('stores.title')}
          </h2>
          <p className="text-muted-foreground">{t('stores.sub')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── Store picker + details ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {/* Location tabs */}
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Store locations">
              {MOCK_STORES.map((s, i) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={activeIdx === i}
                  onClick={() => setActiveIdx(i)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    activeIdx === i
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white dark:bg-white/10 text-foreground hover:bg-primary/10 border border-border'
                  )}
                >
                  {s.city}, {s.province}
                </button>
              ))}
            </div>

            {/* Active store card */}
            {store && (
              <div className="bg-white dark:bg-white/5 rounded-xl p-6 shadow-sm border border-border">
                <h3 className="font-black text-xl text-foreground mb-4">{store.name}</h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="text-primary mt-0.5 shrink-0" aria-hidden />
                    <div>
                      <p className="text-sm font-medium text-foreground">{store.address}</p>
                      <p className="text-sm text-muted-foreground">{store.city}, {store.province}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Clock size={16} className="text-primary mt-0.5 shrink-0" aria-hidden />
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5">
                        {t('stores.hours')}
                      </p>
                      <p className="text-sm text-foreground">{store.hours.weekdays}</p>
                      <p className="text-sm text-foreground">{store.hours.saturday}</p>
                      <p className="text-sm text-foreground">{store.hours.sunday}</p>
                    </div>
                  </li>

                  <li className="flex items-center gap-3">
                    <Phone size={16} className="text-primary shrink-0" aria-hidden />
                    <a
                      href={`tel:+1${store.phone.replace(/\D/g, '')}`}
                      className="text-sm text-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {store.phone}
                    </a>
                  </li>
                </ul>

                <a
                  href={store.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6"
                >
                  <Button size="default" className="gap-2">
                    <ExternalLink size={15} aria-hidden />
                    {t('stores.directions')}
                  </Button>
                </a>
              </div>
            )}
          </motion.div>

          {/* ── Map placeholder ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-white/5 rounded-xl shadow-sm border border-border overflow-hidden min-h-80 flex flex-col items-center justify-center gap-3 text-muted-foreground"
            role="img"
            aria-label="Map placeholder"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin size={32} className="text-primary/60" aria-hidden />
            </div>
            <p className="text-sm font-medium">{t('stores.map')}</p>
            <p className="text-xs text-muted-foreground/60">Google Maps integration</p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
