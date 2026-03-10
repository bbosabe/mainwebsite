import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'
import type { TranslationKey } from '@/contexts/LanguageContext'

interface TagConfig {
  bg: string
  border: string
  labelKey: TranslationKey
  descKey: TranslationKey
  examplePrice: string
  originalPrice: string
}

const TAGS: TagConfig[] = [
  {
    bg: 'bg-tag-green',
    border: 'border-tag-green/20',
    labelKey: 'hiw.green.label',
    descKey: 'hiw.green.desc',
    examplePrice: '$349',
    originalPrice: '$699',
  },
  {
    bg: 'bg-tag-red',
    border: 'border-tag-red/20',
    labelKey: 'hiw.red.label',
    descKey: 'hiw.red.desc',
    examplePrice: '$2',
    originalPrice: '$45',
  },
  {
    bg: 'bg-tag-purple',
    border: 'border-tag-purple/20',
    labelKey: 'hiw.purple.label',
    descKey: 'hiw.purple.desc',
    examplePrice: '$149',
    originalPrice: '$499',
  },
  {
    bg: 'bg-tag-blue',
    border: 'border-tag-blue/20',
    labelKey: 'hiw.blue.label',
    descKey: 'hiw.blue.desc',
    examplePrice: '$39',
    originalPrice: '$130',
  },
]

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-muted" id="how-it-works">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3">
            {t('hiw.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t('hiw.sub')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TAGS.map((tag, i) => (
            <motion.article
              key={tag.labelKey}
              className={`bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-sm border ${tag.border} hover:shadow-lg transition-shadow duration-200`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Coloured header band */}
              <div className={`${tag.bg} px-5 py-4 flex items-center justify-between`}>
                <span className="text-white font-black text-lg leading-tight">
                  {t(tag.labelKey)}
                </span>
                <div className="bg-white/25 rounded-md px-2 py-0.5 text-white text-[10px] font-black tracking-widest uppercase">
                  TAG
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <p className="text-foreground text-sm leading-relaxed mb-5">
                  {t(tag.descKey)}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-marker text-3xl text-foreground">
                    {tag.examplePrice}
                  </span>
                  <span className="text-muted-foreground text-xs line-through">
                    {tag.originalPrice}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
