import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg">RM Engineering & Architectural Design</h3>
          <p className="mt-2 text-sm text-gray-400">
            Innovación, precisión y cumplimiento normativo en cada proyecto.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Servicios</h4>
          <ul className="space-y-2 text-sm">
            <li>Arquitectura & BIM</li>
            <li>Diseño & Análisis Sísmico</li>
            <li>Hidrosanitarias</li>
            <li>Eléctricas & NFPA</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: ing.civil.arq.ricardo.morales@gmail.com</li>
            <li>Cel: +507 66074960</li>
            <li>Panamá</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Redes Sociales</h4>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} RM Engineering & Architectural Design. Todos los derechos reservados.
      </div>
    </footer>
  );
}
