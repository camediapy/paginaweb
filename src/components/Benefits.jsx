export default function Benefits() {
  const items = [
    {
      title: 'Más leads y ventas',
      desc: 'Estructura de página probada + copy de conversión para captar contactos desde el día uno.'
    },
    {
      title: 'Velocidad 90+ Lighthouse',
      desc: 'Stack moderno (Vite + React + Tailwind v4) con buenas prácticas de performance y accesibilidad.'
    },
    {
      title: 'Medición real',
      desc: 'Analytics y eventos clave desde el lanzamiento para entender qué funciona y optimizar.'
    },
  ];

  return (
    <section id="beneficios" className="container-px mx-auto py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Lo que obtenés</h2>
        <p className="mt-2 text-white/70">Beneficios claros que impactan en tu negocio.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-white/10 bg-card p-6">
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-white/70">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}