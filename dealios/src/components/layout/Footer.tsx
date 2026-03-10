import { MapPin, Phone, Mail } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

export function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { href: '#how-it-works', label: t('nav.howItWorks') },
    { href: '#deals', label: t('nav.deals') },
    { href: '#stores', label: t('nav.stores') },
    { href: '#about', label: t('nav.about') },
  ]

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-3">
              <span className="text-2xl font-black text-primary">deal</span>
              <span className="text-2xl font-black text-accent">ios</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-accent mb-4 text-xs uppercase tracking-widest">
              {t('footer.links')}
            </h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-accent mb-4 text-xs uppercase tracking-widest">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin size={14} className="text-accent mt-0.5 shrink-0" />
                <span>Surrey, BC · Burnaby, BC · Calgary, AB</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <Phone size={14} className="text-accent shrink-0" />
                <a href="tel:+16045550194" className="hover:text-accent transition-colors cursor-pointer">
                  (604) 555-0194
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <Mail size={14} className="text-accent shrink-0" />
                <a href="mailto:hello@dealios.ca" className="hover:text-accent transition-colors cursor-pointer">
                  hello@dealios.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/30">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
