import { createContext, useState, type ReactNode } from 'react'

type Lang = 'en' | 'fr'

const translations = {
  en: {
    // Header
    'nav.howItWorks': 'How It Works',
    'nav.deals': 'Deals',
    'nav.stores': 'Find a Store',
    'nav.about': 'About',
    // Hero
    'hero.tag': "Canada's Discount Superstore",
    'hero.headline': 'Massive Deals. Every Day.',
    'hero.accentWord': 'Deals',
    'hero.sub':
      'Find top brands at up to 70% off retail price. Liquidation deals on appliances, furniture, electronics & more.',
    'hero.cta.primary': 'Find Deals Near Me',
    'hero.cta.secondary': 'How It Works',
    'hero.stat.savings': 'Max savings',
    'hero.stat.locations': 'BC & AB locations',
    'hero.stat.arrivals': 'New arrivals',
    // Ticker
    'ticker.text':
      'UP TO 70% OFF  ·  $2 DEALS  ·  NEW ARRIVALS DAILY  ·  50% OFF TAGS  ·  AS-MARKED DEALS  ·  BRAND NAME LIQUIDATION  ·',
    // ValueProps
    'valueprops.title': 'Why Shop at Dealios?',
    'vp.1.title': 'Up to 70% Off',
    'vp.1.body':
      "Genuine liquidation pricing on brand-name products. Not a sale — real closeout deals every day.",
    'vp.2.title': 'New Arrivals Daily',
    'vp.2.body':
      "Inventory changes constantly. Visit often to find the best deals before they're gone.",
    'vp.3.title': 'Top Brands',
    'vp.3.body':
      "Samsung, LG, Dyson, KitchenAid and more. Brand names you trust at prices you won't believe.",
    'vp.4.title': '$2 Flash Deals',
    'vp.4.body':
      'Red-tagged items start at just $2. Check the store daily for these incredible grab-and-go steals.',
    // HowItWorks
    'hiw.title': 'How Our Pricing Works',
    'hiw.sub':
      'Every item has a coloured tag that tells you exactly how deep the discount goes.',
    'hiw.green.label': '50% OFF',
    'hiw.green.desc':
      'Green tags mean half off the original retail price — automatically applied at checkout.',
    'hiw.red.label': '$2 Deals',
    'hiw.red.desc':
      'Red-tagged items are priced at just $2. First come, first served — these fly off the shelves.',
    'hiw.purple.label': '70% OFF',
    'hiw.purple.desc':
      'Purple tags are our deepest markdown — 70% off original retail. Always our best value.',
    'hiw.blue.label': 'As Marked',
    'hiw.blue.desc':
      'Blue tags are individually priced. Check the sticker for the deal — always below market value.',
    // DealOfTheDay
    'dotd.badge': 'Deal of the Day',
    'dotd.title': 'Samsung 65" 4K QLED Smart TV',
    'dotd.desc':
      'Crystal-clear 4K QLED display, Tizen OS with built-in streaming apps, and smart home integration. Limited stock.',
    'dotd.original': 'Original: $1,899',
    'dotd.savings': 'You save $1,230!',
    'dotd.expires': 'Deal expires in:',
    'dotd.cta': 'Get This Deal',
    // StoreSection
    'stores.title': 'Find Your Nearest Dealios',
    'stores.sub': 'Locations across British Columbia and Alberta.',
    'stores.hours': 'Store Hours',
    'stores.phone': 'Phone',
    'stores.directions': 'Get Directions',
    'stores.map': 'Interactive map coming soon',
    // Newsletter
    'newsletter.title': 'Get Deals in Your Inbox',
    'newsletter.sub':
      'Subscribe for weekly deal alerts, new arrival notifications, and exclusive member offers.',
    'newsletter.placeholder': 'your@email.com',
    'newsletter.cta': 'Subscribe',
    'newsletter.success': "You're in! Watch your inbox for deals.",
    // Footer
    'footer.tagline': "Canada's favourite discount superstore.",
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2026 Dealios. All rights reserved.',
  },
  fr: {
    // Header
    'nav.howItWorks': 'Comment ça marche',
    'nav.deals': 'Offres',
    'nav.stores': 'Trouver un magasin',
    'nav.about': 'À propos',
    // Hero
    'hero.tag': 'Le supermarché de rabais du Canada',
    'hero.headline': 'Des aubaines massives. Chaque jour.',
    'hero.accentWord': 'aubaines',
    'hero.sub':
      "Trouvez les meilleures marques à jusqu'à 70% de rabais. Liquidation sur électros, meubles et plus.",
    'hero.cta.primary': 'Trouver des offres près de moi',
    'hero.cta.secondary': 'Comment ça marche',
    'hero.stat.savings': 'Économies max',
    'hero.stat.locations': 'emplacements BC & AB',
    'hero.stat.arrivals': 'Nouvelles arrivées',
    // Ticker
    'ticker.text':
      "JUSQU'À 70% DE RABAIS  ·  OFFRES À 2 $  ·  NOUVEAUTÉS QUOTIDIENNES  ·  ÉTIQUETTES 50%  ·  PRIX MARQUÉS  ·  LIQUIDATION  ·",
    // ValueProps
    'valueprops.title': 'Pourquoi magasiner chez Dealios?',
    'vp.1.title': "Jusqu'à 70% de rabais",
    'vp.1.body':
      'Vrai prix de liquidation sur des produits de marque. Pas une vente — de vraies aubaines chaque jour.',
    'vp.2.title': 'Nouvelles arrivées quotidiennes',
    'vp.2.body':
      "L'inventaire change constamment. Visitez souvent pour les meilleures offres avant qu'elles disparaissent.",
    'vp.3.title': 'Grandes marques',
    'vp.3.body':
      'Samsung, LG, Dyson, KitchenAid et plus. Des marques connues à des prix incroyables.',
    'vp.4.title': 'Offres éclair à 2 $',
    'vp.4.body':
      "Les articles à étiquette rouge débutent à seulement 2 $. Vérifiez le magasin tous les jours.",
    // HowItWorks
    'hiw.title': 'Comment fonctionne notre tarification',
    'hiw.sub':
      "Chaque article a une étiquette colorée qui vous indique l'ampleur du rabais.",
    'hiw.green.label': '50% DE RABAIS',
    'hiw.green.desc':
      'Les étiquettes vertes signifient la moitié du prix de détail — appliqué automatiquement à la caisse.',
    'hiw.red.label': 'Offres à 2 $',
    'hiw.red.desc':
      'Les articles à étiquette rouge sont à 2 $. Premier arrivé, premier servi.',
    'hiw.purple.label': '70% DE RABAIS',
    'hiw.purple.desc':
      'Les étiquettes violettes sont notre remise la plus profonde — 70% du prix de détail original.',
    'hiw.blue.label': 'Prix marqué',
    'hiw.blue.desc':
      "Les étiquettes bleues sont à prix individuels. Vérifiez l'autocollant pour l'aubaine.",
    // DealOfTheDay
    'dotd.badge': 'Offre du jour',
    'dotd.title': 'Samsung Téléviseur 65" 4K QLED',
    'dotd.desc':
      "Écran QLED 4K cristallin, Tizen OS avec applications de streaming intégrées. Stock limité.",
    'dotd.original': 'Original: 1 899 $',
    'dotd.savings': 'Vous économisez 1 230 $!',
    'dotd.expires': "L'offre expire dans :",
    'dotd.cta': 'Obtenir cette offre',
    // StoreSection
    'stores.title': 'Trouvez votre Dealios le plus proche',
    'stores.sub': 'Emplacements en Colombie-Britannique et en Alberta.',
    'stores.hours': 'Heures du magasin',
    'stores.phone': 'Téléphone',
    'stores.directions': 'Obtenir des directions',
    'stores.map': 'Carte interactive bientôt disponible',
    // Newsletter
    'newsletter.title': 'Recevez les offres dans votre boîte mail',
    'newsletter.sub':
      "Abonnez-vous pour les alertes d'offres hebdomadaires et les notifications de nouvelles arrivées.",
    'newsletter.placeholder': 'votre@courriel.com',
    'newsletter.cta': "S'abonner",
    'newsletter.success': 'Vous êtes inscrit! Surveillez votre boîte mail.',
    // Footer
    'footer.tagline': 'Le supermarché de rabais préféré du Canada.',
    'footer.links': 'Liens rapides',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2025 Dealios. Tous droits réservés.',
  },
} as const

type TranslationKey = keyof typeof translations.en

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const t = (key: TranslationKey): string => {
    const dict = translations[lang] as Record<string, string>
    const fallback = translations.en as Record<string, string>
    return dict[key] ?? fallback[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageContext, LanguageProvider }
export type { Lang, TranslationKey }
