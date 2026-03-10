import { motion } from 'framer-motion'
import { Tag, RefreshCw, Star, Zap } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import type { TranslationKey } from '@/contexts/LanguageContext'

type IconName = 'Tag' | 'RefreshCw' | 'Star' | 'Zap'

const ICON_MAP = { Tag, RefreshCw, Star, Zap }

interface Prop {
  titleKey: TranslationKey
  bodyKey: TranslationKey
  border: string
  iconBg: string
  iconColor: string
  icon: IconName
}

const PROPS: Prop[] = [
  {
    titleKey: 'vp.1.title',
    bodyKey: 'vp.1.body',
    border: 'border-l-primary',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    icon: 'Tag',
  },
  {
    titleKey: 'vp.2.title',
    bodyKey: 'vp.2.body',
    border: 'border-l-accent',
    iconBg: 'bg-accent/20',
    iconColor: 'text-secondary',
    icon: 'RefreshCw',
  },
  {
    titleKey: 'vp.3.title',
    bodyKey: 'vp.3.body',
    border: 'border-l-tag-purple',
    iconBg: 'bg-purple-100',
    iconColor: 'text-tag-purple',
    icon: 'Star',
  },
  {
    titleKey: 'vp.4.title',
    bodyKey: 'vp.4.body',
    border: 'border-l-tag-blue',
    iconBg: 'bg-blue-100',
    iconColor: 'text-tag-blue',
    icon: 'Zap',
  },
]

export function ValueProps() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-background" id="deals">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            {t('valueprops.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROPS.map((prop, i) => {
            const Icon = ICON_MAP[prop.icon]
            return (
              <motion.div
                key={prop.titleKey}
                className={`bg-white dark:bg-white/5 rounded-xl p-6 border-l-4 ${prop.border} shadow-sm hover:shadow-md transition-shadow duration-200`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div
                  className={`w-10 h-10 ${prop.iconBg} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon size={20} className={prop.iconColor} aria-hidden />
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">
                  {t(prop.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(prop.bodyKey)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
