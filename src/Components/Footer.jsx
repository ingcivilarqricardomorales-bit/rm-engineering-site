import React from "react";

export default function Footer() {
  const user = "ing.civil.arq.ricardo.morales";
  const domain = "gmail.com";
  const mail = `${user}@${domain}`;

  // Añade espacios invisibles tras cada punto y el arroba
  // para permitir quiebres elegantes si el correo es muy largo
  const prettyMail = mail
    .replaceAll(".", ".\u200B")
    .replace("@", "@\u200B");

  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Columna 1 */}
        <div>
          <h3 className="font-semibold text-lg">
            RM Engineering & Architectural Design
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            Innovación, precisión y cumplimiento normativo en cada proyecto.
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <h4 className="font-semibold mb-3">Servicios</h4>
          <ul className="space-y-2 text-sm">
            <li>Arquitectura & BIM</li>
            <li>Diseño & Análisis Sísmico</li>
            <li>Hidrosanitarias</li>
            <li>Eléctricas & NFPA</li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h4 className="font-semibold mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a
                href={`mailto:${mail}`}
                className="hover:text-white break-words md:whitespace-nowrap"
                aria-label="Enviar correo electrónico"
              >
                {prettyMail}
              </a>
            </li>
            <li>Celular: +507 66074960</li>
            <li>Panamá</li>
          </ul>
        </div>

        {/* Columna 4 */}
        <div>
          <h4 className="font-semibold mb-3">Redes Sociales</h4>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RM Engineering & Architectural Design. Todos los derechos reservados.
      </div>
    </footer>
  );
}
