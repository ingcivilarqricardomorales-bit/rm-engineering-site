import React, { useCallback } from "react";

export default function Contact() {
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const fd = new FormData(form);
    // Requerido por Netlify al enviar por fetch
    fd.append("form-name", "contact");

    const body = new URLSearchParams(fd).toString();

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      // Éxito – limpia y redirige a “gracias”
      form.reset();
      window.location.href = "/success.html";
    } catch {
      alert("No se pudo enviar. Intenta nuevamente.");
    }
  }, []);

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-3xl border border-black/10 bg-white shadow-sm p-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">Contacto</h2>
        <p className="text-gray-600 mb-8">
          Cuéntanos sobre tu proyecto. Respondemos entre 24 y 72 horas hábiles.
        </p>

        <form
          name="contact"
          method="POST"
          action="/success.html"           // fallback si no hay JS
          data-netlify="true"
          netlify-honeypot="bot-field"
          acceptCharset="UTF-8"
          onSubmit={handleSubmit}
          className="space-y-5 bg-white p-6 rounded-2xl shadow-lg ring-1 ring-black/5"
        >
          {/* Requeridos por Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Asunto</label>
            <input
              type="text"
              name="subject"
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Ej. Cotización / Consultoría / Proyecto"
              defaultValue="Solicitud de cotización"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea
              name="message"
              required
              rows={6}
              className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Describe brevemente tu proyecto, plazos y alcance…"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white shadow-sm hover:bg-amber-600"
            >
              Enviar solicitud
            </button>

            <a
              href="https://wa.me/50700000000?text=Hola%20RM%20Engineering,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto."
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
