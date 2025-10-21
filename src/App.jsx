import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Benefits from './components/Benefits.jsx';
import ForWho from './components/ForWho.jsx';
import Features from './components/Features.jsx';
import Testimonials from './components/Testimonials.jsx';
import Integrations from './components/Integrations.jsx';
import Pricing from './components/Pricing.jsx';
import FAQ from './components/FAQ.jsx';
import Contacto from './components/Contacto.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <ForWho />
        <Features />
        <Testimonials />
        <Integrations />
        <Pricing />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}