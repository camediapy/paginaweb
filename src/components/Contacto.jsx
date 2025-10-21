import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/movkzzvg";

export default function Contacto() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // extras útiles
    data.append("_subject", "Nuevo contacto desde Camedia");
    data.append("_origin", window.location.href);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        const j = await res.json().catch(() => ({}));
        setErrorMsg(
          j?.errors?.map((e) => e.message).join(" • ") ||
            "No pudimos enviar tu mensaje. Probá de nuevo."
        );
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Error de red. Verificá tu conexión e intentá otra vez.");
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="container-px mx-auto py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold">Contanos tu idea</h2>
        <p className="mt-2 text-white/70">
          Respondemos en 24–48 horas hábiles.
        </p>
      </div>

      {/* Mensajes de estado */}
      {status === "success" && (
        <p className="mx-auto mt-6 max-w-2xl rounded-xl border border-white/10 bg-card p-4 text-sm text-emerald-300">
          ✅ ¡Gracias! Recibimos tu mensaje. Te vamos a escribir pronto.
        </p>
      )}
      {status === "error" && (
        <p className="mx-auto mt-6 max-w-2xl rounded-xl border border-white/10 bg-card p-4 text-sm text-red-300">
          ❌ {errorMsg}
        </p>
      )}

      <form onSubmit={onSubmit} className="mx-auto mt-10 grid max-w-2xl gap-4">
        {/* Honeypot: si lo completa un bot, podremos descartarlo en Formspree */}
        <label className="hidden">
          No completar este campo:
          <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
        </label>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-sm">Nombre</span>
            <input
              required
              type="text"
              name="name"
              className="w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/40 focus:border-ring focus:ring-ring"
              placeholder="Tu nombre"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm">Email</span>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/40 focus:border-ring focus:ring-ring"
              placeholder="nombre@correo.com"
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-1 block text-sm">Mensaje</span>
          <textarea
            required
            rows={5}
            name="message"
            className="w-full rounded-xl border-white/10 bg-white/5 text-white placeholder-white/40 focus:border-ring focus:ring-ring"
            placeholder="Contanos sobre el proyecto (objetivo, plazos, referencias)…"
          ></textarea>
        </label>

        {/* Campos opcionales que ayudan en la primera respuesta */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-sm">Tipo de proyecto</span>
            <select
              name="project_type"
              className="w-full rounded-xl border-white/10 bg-white/5 text-white focus:border-ring focus:ring-ring"
              defaultValue=""
            >
              <option value="" disabled>
                Elegí una opción
              </option>
              <option>Landing</option>
              <option>Sitio 3–5 páginas</option>
              <option>E-commerce / Reservas</option>
              <option>Otro</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-sm">Presupuesto estimado</span>
            <select
              name="budget"
              className="w-full rounded-xl border-white/10 bg-white/5 text-white focus:border-ring focus:ring-ring"
              defaultValue=""
            >
              <option value="" disabled>
                Seleccionar
              </option>
              <option>USD 600–1.000</option>
              <option>USD 1.000–2.000</option>
              <option>USD 2.000+</option>
            </select>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-white/50">
            Protegido por medidas anti-spam. Al enviar aceptás nuestra política
            de privacidad.
          </span>
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary disabled:opacity-60"
          >
            {status === "loading" ? "Enviando…" : "Enviar"}
          </button>
        </div>
      </form>
    </section>
  );
}
