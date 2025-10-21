export default function Contacto() {
  return (
    <section id="contacto" className="container-px mx-auto py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Cuéntanos tu idea</h2>
        <p className="mt-2 text-white/70">Respondemos en 24–48 horas hábiles.</p>
      </div>

      <form className="mx-auto mt-10 grid max-w-2xl gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-sm">Nombre</span>
            <input required type="text" className="w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/40 focus:border-ring focus:ring-ring" placeholder="Tu nombre" />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm">Email</span>
            <input required type="email" className="w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/40 focus:border-ring focus:ring-ring" placeholder="nombre@correo.com" />
          </label>
        </div>
        <label className="block">
          <span className="mb-1 block text-sm">Mensaje</span>
          <textarea rows={5} className="w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/40 focus:border-ring focus:ring-ring" placeholder="Contanos sobre el proyecto"></textarea>
        </label>
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/50">GDPR‑friendly · reCAPTCHA v3</span>
          <button type="submit" className="btn-primary">Enviar</button>
        </div>
      </form>
    </section>
  )
}