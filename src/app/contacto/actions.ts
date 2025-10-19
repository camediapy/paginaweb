"use server";

import { contactSchema } from "@/lib/validation/contact";

type Data = { nombre: string; email: string; mensaje: string };

export async function sendContactEmail(raw: Data) {
  // valida en servidor
  const data = contactSchema.parse(raw);

  if (!process.env.RESEND_API_KEY) {
    console.warn("[sendContactEmail] Falta RESEND_API_KEY. Mock:", data);
    return { ok: true, mocked: true };
  }

  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: process.env.CONTACT_FROM ?? "Camedia <onboarding@resend.dev>",
    to: [process.env.CONTACT_TO ?? "tuemail@camedia.studio"],
    subject: `Nuevo contacto: ${data.nombre}`,
    text:
      `Nombre: ${data.nombre}\n` +
      `Email: ${data.email}\n\n` +
      `Mensaje:\n${data.mensaje}\n`,
  });

  return { ok: true };
}
