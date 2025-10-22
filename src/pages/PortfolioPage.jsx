export default function PortfolioPage() {
  const works = [
    { name: 'Cafetería & Panadería', tag: 'Landing', url: '#' },
    { name: 'Taller Luthier', tag: 'Sitio + pagos', url: '#' },
    { name: 'Plantasia', tag: 'Sitio web', url: '#' },
    { name: 'Progheads_PY', tag: 'Blog musical', url: '#' },
    { name: 'Portfolio Fedebarriosd', tag: 'Portfolio', url: '#' },
    // sumar más trabajos reales cuando estén listos
  ]

  return (
    <main className="container-px mx-auto py-16">
      <div className="mx-auto max-w-3xl">
        <span className="chip">Camedia · Portfolio</span>
        <h1 className="mt-3 text-4xl font-black tracking-tight">Trabajos y casos</h1>
        <p className="mt-2 text-white/70">
          Una selección de proyectos. Problema → solución → resultado. Si querés ver algo puntual, escribinos.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {works.map(w => (
          <a key={w.name} href={w.url} className="group rounded-2xl border border-white/10 bg-card p-6 transition hover:scale-[1.01]">
            <div className="aspect-16/10 w-full rounded-xl bg-gradient-to-tr from-primary/30 to-accent/30" />
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-base font-semibold">{w.name}</h3>
              <span className="chip">{w.tag}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-card p-6">
        <h2 className="text-lg font-semibold">¿Querés un caso a medida?</h2>
        <p className="mt-2 text-sm text-white/70">
          Contanos sobre tu rubro y te enviamos un mini caso con ideas y paths de mejora.
        </p>
        <a href="#contacto" className="btn-primary mt-4 inline-flex">Pedir propuesta</a>
      </div>
    </main>
  )
}
