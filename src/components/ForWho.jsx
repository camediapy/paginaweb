export default function ForWho() {
  const segments = [
    { title: 'Negocios locales', desc: 'Cafeterías, panaderías y comercios con menú/servicios y reservas simples.' },
    { title: 'Profesionales', desc: 'Doctores, arquitectos y consultores con agenda, testimonios y autoridad.' },
    { title: 'Música & cultura', desc: 'Bandas y artistas con EPK, fechas, galería y streaming embebido.' },
    { title: 'E-commerce pequeño', desc: 'Catálogo acotado, pagos locales, checkout claro y métricas para crecer.' },
  ];

  return (
    <section id="para-quien" className="container-px mx-auto py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">¿Para quién?</h2>
        <p className="mt-2 text-white/70">Casos donde nuestra propuesta rinde al máximo.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {segments.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-card p-6">
            <h3 className="text-base font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-white/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}