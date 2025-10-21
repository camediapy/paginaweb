export default function Testimonials() {
  const items = [
    { quote: 'Lanzamos en tiempo récord y empezamos a recibir consultas el mismo día.', name: 'Sonia', role: 'Dueña', company: 'Barrio Cafe', rating: 5 },
    { quote: 'Los pagos de seña y el formulario ordenaron turnos y consultas.', name: 'Erik Hansen', role: 'Luthier', company: 'Espacio Hansen', rating: 5 },
    { quote: 'El EPK y las reseñas integradas nos abrieron puertas con salas y prensa.', name: 'Felipao', role: 'Baterista', company: 'Kieng Creemkeson', rating: 4 },
  ];

  return (
    <section id="testimonios" className="container-px mx-auto py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Testimonios</h2>
        <p className="mt-2 text-white/70">Confianza que se gana con resultados.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((t, i) => (
          <figure key={i} className="rounded-2xl border border-white/10 bg-card p-6">
            <div className="text-yellow-400">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
            <blockquote className="mt-3 text-sm text-white/80">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-xs text-white/60">{t.name} · {t.role} · {t.company}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}