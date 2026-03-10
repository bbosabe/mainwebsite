import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TickerMarquee } from '@/components/sections/TickerMarquee'
import { ValueProps } from '@/components/sections/ValueProps'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { DealOfTheDay } from '@/components/sections/DealOfTheDay'
import { StoreSection } from '@/components/sections/StoreSection'
import { Newsletter } from '@/components/sections/Newsletter'

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TickerMarquee />
        <ValueProps />
        <HowItWorks />
        <DealOfTheDay />
        <StoreSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
