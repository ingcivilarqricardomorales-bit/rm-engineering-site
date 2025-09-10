import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">Contacto</h2>
        <p className="text-gray-600 mb-8">
          Cuéntanos sobre tu proyecto. Respondemos entre 24 y 72 horas hábiles.
        </p>

        {/* FORMULARIO Netlify: SIN preventDefault, SIN fetch */}
       <form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/success.html"
  acceptCharset="UTF-8"
  className="space-y-5 bg-white p-6 rounded-2xl shadow-lg ring-1 ring-black/5"
>
  <input type="hidden" name="form-name" value="contact" />
  {/* ... tus inputs name/email/subject/message ... */}
</form>
          {/* Requerido por Netlify Forms */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot (anti-bots) */}
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Asunto
            </label>
            <input
              type="text"
              name="subject"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Ej. Cotización / Consultoría / Proyecto"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              name="message"
              required
              rows={6}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Describe de forma breve tu proyecto, plazos y alcance…"
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
