import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Benefits from './components/Benefits.jsx'
import ForWho from './components/ForWho.jsx'
import Features from './components/Features.jsx'
import Testimonials from './components/Testimonials.jsx'
import Integrations from './components/Integrations.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx' // tu página nueva

function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <ForWho />
      <Features />
      <Testimonials />
      <Integrations />
      <Pricing />
      <FAQ />
      <Contacto />
    </>
  )
}

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="*" element={
          <main className="container-px mx-auto py-16">
            <h1 className="text-3xl font-bold">Página no encontrada</h1>
            <p className="mt-2 text-white/70">Volver al <a className="underline" href="/">inicio</a>.</p>
          </main>
        } />
      </Routes>
      <Footer />
    </div>
  )
}
