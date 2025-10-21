import FeatureCard from './FeatureCard.jsx'

export default function Hero() {
  return (
    <section className="relative isolate">
      {/* blobs de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 mask-fade-b">
        <div className="absolute -left-10 -top-24 h-80 w-80 rounded-full bg-primary/30 blur-3xl"/>
        <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-accent/30 blur-3xl"/>
      </div>

      <div className="container-px mx-auto flex min-h-[72vh] flex-col items-center justify-center text-center">
        <span className="chip mb-4">Studio web · React · Branding</span>
        <h1 className="mx-auto max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
          Sitios rápidos, diseño pulido, <span className="text-accent">resultados reales</span>.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          En Camedia pasamos tu marca al siguiente nivel: experiencias web a medida y diseño de redes sociales. Todo optimizado para convertir visitantes en clientes.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#contacto" className="btn-primary">Pedir presupuesto</a>
          <a href="#portfolio" className="btn-ghost">Ver trabajos</a>
        </div>
        <div className="mt-10 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
          <FeatureCard title="Performance primero" desc="Lighthouse 90+ de base con optimización de assets y Web Vitals."/>
          <FeatureCard title="Diseño consistente" desc="Tokens @theme y componentes reusables."/>
        </div>
      </div>
    </section>
  )
}