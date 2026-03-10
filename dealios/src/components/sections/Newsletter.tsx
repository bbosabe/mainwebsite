import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/hooks/useLanguage'

export function Newsletter() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section className="py-16 bg-secondary" aria-label="Newsletter signup">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-5"
            aria-hidden
          >
            <Mail size={24} className="text-accent" />
          </div>

          <h2 className="text-3xl font-black text-white mb-2">
            {t('newsletter.title')}
          </h2>
          <p className="text-white/55 mb-7 text-sm leading-relaxed">
            {t('newsletter.sub')}
          </p>

          {submitted ? (
            <motion.div
              className="flex items-center justify-center gap-2 text-accent font-semibold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              role="status"
              aria-live="polite"
            >
              <CheckCircle size={20} aria-hidden />
              <span>{t('newsletter.success')}</span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
              aria-label="Newsletter subscription form"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder={t('newsletter.placeholder')}
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/35 focus-visible:ring-accent flex-1"
                autoComplete="email"
              />
              <Button
                type="submit"
                variant="accent"
                className="font-black shrink-0"
              >
                {t('newsletter.cta')}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
