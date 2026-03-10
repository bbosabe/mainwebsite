import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { cn } from '@/lib/utils'

export function Header() {
  const { t, lang, setLang } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const navLinks = [
    { href: '#how-it-works', label: t('nav.howItWorks') },
    { href: '#deals', label: t('nav.deals') },
    { href: '#stores', label: t('nav.stores') },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-secondary/95 backdrop-blur-md shadow-xl'
          : 'bg-secondary'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center cursor-pointer" aria-label="Dealios home">
            <span className="text-2xl font-black tracking-tight text-primary leading-none">
              deal
            </span>
            <span className="text-2xl font-black tracking-tight text-accent leading-none">
              ios
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-white/80 hover:text-accent transition-colors duration-200 rounded-md hover:bg-white/10 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* EN/FR toggle */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5" role="group" aria-label="Language selector">
              {(['en', 'fr'] as const).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={cn(
                    'px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer uppercase',
                    lang === l
                      ? 'bg-accent text-secondary'
                      : 'text-white/70 hover:text-white'
                  )}
                  aria-pressed={lang === l}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="w-9 h-9 flex items-center justify-center rounded-full text-white/70 hover:text-accent hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-white/70 hover:text-accent hover:bg-white/10 transition-colors duration-200 cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-secondary border-t border-white/10">
          <nav
            className="max-w-[1200px] mx-auto px-4 py-3 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-white/80 hover:text-accent hover:bg-white/10 rounded-md transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
