export default function Pricing() {
  const tiers = [
    { name: 'Starter', price: 'USD 600', cta: 'Empezar', features: ['Landing 1 página', 'Copy base', 'Analítica básica', 'Entrega 1–2 semanas'] },
    { name: 'Pro', price: 'USD 1.400', cta: 'Cotizar Pro', featured: true, features: ['3–5 páginas', 'SEO técnico', 'Formularios + reCAPTCHA', 'Eventos de analítica', 'Previews por rama'] },
    { name: 'Plus', price: 'USD 2.400', cta: 'Hablemos', features: ['E-commerce / reservas', 'Pagos online', 'CMS headless', 'Soporte de lanzamiento'] },
  ];

  return (
    <section id="precios" className="container-px mx-auto py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Precios guía</h2>
        <p className="mt-2 text-white/70">Elegí el plan que mejor encaja. Ajustamos según alcance real.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
        {tiers.map(t => (
          <div key={t.name} className={`rounded-2xl border border-white/10 bg-card p-6 ${t.featured ? 'ring-1 ring-primary/40' : ''}`}>
            {t.featured && <div className="chip mb-3">Recomendado</div>}
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <p className="mt-2 text-3xl font-black tracking-tight">{t.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {t.features.map(f => <li key={f}>• {f}</li>)}
            </ul>
            <a href="#contacto" className="btn-primary mt-6 w-full justify-center">{t.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
}