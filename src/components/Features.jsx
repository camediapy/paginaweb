export default function Features() {
  const items = [
    { title: 'CMS opcional', desc: 'Editá contenido sin tocar código (Sanity/Strapi/Contentful).' },
    { title: 'SEO técnico', desc: 'Metadatos, sitemap, robots y estructura semántica para posicionar mejor.' },
    { title: 'Formularios con archivos', desc: 'Adjuntos (CV/brief), reCAPTCHA y envío a email/DB/WhatsApp.' },
    { title: 'Reservas y pagos', desc: 'Integraciones con Mercado Pago/Pagopar/Stripe según el caso.' },
    { title: 'Accesibilidad', desc: 'Buenas prácticas A11y para una experiencia inclusiva.' },
    { title: 'Hosting & CI', desc: 'Deploy en Vercel con previews por rama y performance estable.' },
  ];

  return (
    <section id="features" className="container-px mx-auto py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Características que te van a gustar</h2>
        <p className="mt-2 text-white/70">Tecnología moderna al servicio del negocio.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-white/10 bg-card p-6">
            <h3 className="text-base font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-white/70">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}