export default function FAQ() {
  const faqs = [
    { q: '¿Cuánto tarda?', a: 'Starter: 1–2 semanas; Pro: 2–4; Plus: 3–6, según alcance y contenidos listos.' },
    { q: '¿Qué necesito preparar?', a: 'Logo, estilo deseado, textos/fotos iniciales y referencias si las hay.' },
    { q: '¿Puedo editar el contenido?', a: 'Sí, con CMS headless opcional; si no, pedinos cambios puntuales.' },
    { q: '¿El SEO viene incluido?', a: 'Base técnica (metas, OG, sitemap, robots, schema simple) y guía de contenidos.' },
    { q: '¿Hosting y dominio?', a: 'Hosting en Vercel; dominio a cargo del cliente (te asistimos en la conexión).' },
    { q: '¿Pagos online?', a: 'Stripe/Mercado Pago en Plus (o Pro si es simple).' },
    { q: '¿Soporte post-lanzamiento?', a: 'Incluimos soporte de salida; planes de mantenimiento opcionales.' },
  ];

  return (
    <section id="faq" className="container-px mx-auto py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Preguntas frecuentes</h2>
        <p className="mt-2 text-white/70">Respuestas claras para empezar sin dudas.</p>
      </div>
      <div className="mx-auto mt-10 max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-card">
        {faqs.map((f, i) => (
          <details key={i} className="group p-6">
            <summary className="cursor-pointer text-base font-semibold">{f.q}</summary>
            <p className="mt-2 text-sm text-white/70">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}