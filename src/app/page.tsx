import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="container py-16 space-y-16">
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Diseño y desarrollo web <span className="text-primary">a medida</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Sitios rápidos, accesibles y listos para convertir. Trabajamos el
            diseño y el código en equipo.
          </p>
          <div className="flex gap-3">
            <Button asChild size="lg"><Link href="/contacto">Empezar proyecto</Link></Button>
            <Button asChild variant="secondary" size="lg"><Link href="/portafolio">Ver trabajos</Link></Button>
          </div>
        </div>

        <Card className="bg-card border-border rounded-2xl">
          <CardContent className="p-8 grid grid-cols-2 gap-6">
            {[
              ["Performance", ">90 Lighthouse"],
              ["SEO", "Ready"],
              ["Entrega", "2–4 semanas"],
              ["Stack", "Next.js + Tailwind"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-border p-4">
                <p className="text-sm text-muted-foreground">{k}</p>
                <p className="text-xl font-semibold">{v}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
