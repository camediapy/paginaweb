"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validation/contact";
import { sendContactEmail } from "../actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    await sendContactEmail(data);
    reset();
    alert("Mensaje enviado. ¡Gracias!");
  };

  return (
    <section className="relative">
      {/* fondo suave (no requiere tokens) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_500px_at_20%_-10%,rgba(99,102,241,.08),transparent),radial-gradient(1000px_400px_at_120%_10%,rgba(59,130,246,.08),transparent)]" />

      <div className="container relative py-20">
        {/* encabezado */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Hablemos de tu proyecto
          </h1>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">
            Contanos qué necesitás y te respondemos en 24–48 h hábiles.
          </p>
        </div>

        {/* layout del bloque principal */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* columna izquierda con highlights (opcional) */}
          <div className="hidden md:flex flex-col justify-center gap-4">
            <Feature k="Tiempo de entrega" v="2–4 semanas" />
            <Feature k="Stack" v="Next.js + Tailwind" />
            <Feature k="SEO & Performance" v=">90 Lighthouse" />
          </div>

          {/* formulario */}
          <Card className="rounded-2xl border border-black/10 shadow-xl">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input
                    id="nombre"
                    placeholder="Tu nombre"
                    {...register("nombre")}
                  />
                  {errors.nombre && (
                    <p className="text-sm text-red-500">{errors.nombre.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    rows={6}
                    placeholder="Contanos brevemente tu idea, plazos y objetivos…"
                    {...register("mensaje")}
                  />
                  {errors.mensaje && (
                    <p className="text-sm text-red-500">{errors.mensaje.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitSuccessful}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? "Enviando…" : isSubmitSuccessful ? "Enviado" : "Enviar"}
                </Button>

                <p className="text-xs text-muted-foreground">
                  Al enviar, aceptás que usemos tus datos para responder a tu consulta.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

/** pill/chip de highlight */
function Feature({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/60 p-4 backdrop-blur dark:border-white/10 dark:bg-white/5">
      <span className="inline-flex h-2 w-2 rounded-full bg-black/70 dark:bg-white/70" />
      <div>
        <p className="text-sm text-muted-foreground">{k}</p>
        <p className="text-base font-medium leading-tight">{v}</p>
      </div>
    </div>
  );
}
