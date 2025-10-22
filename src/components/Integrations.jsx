export default function Integrations() {
  const tools = [
    'React', 'Vite', 'Tailwind v4', 'Vercel / Cloudflare Pages',
    'Stripe / Pagopar', 'Sanity / Strapi / Contentful',
    'Resend / EmailJS', 'WhatsApp',
  ];

  return (
    <section id="integraciones" className="container-px mx-auto py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Herramientas e integraciones</h2>
        <p className="mt-2 text-white/70">Nos integramos con tu stack actual o proponemos el ideal.</p>
      </div>
      <ul
        className="
          mx-auto mt-10 grid max-w-5xl gap-3 text-sm text-white/80
          justify-center
          grid-cols-[repeat(auto-fit,minmax(16rem,16rem))]
        "
      >
        {tools.map(t => (
          <li key={t} className="rounded-2xl border border-white/10 bg-card p-4">
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}