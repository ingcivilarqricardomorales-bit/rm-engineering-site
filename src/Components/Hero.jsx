import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Fondo decorativo */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(1200px 600px at -10% -10%, rgba(31,106,86,0.15), transparent 60%), radial-gradient(1000px 500px at 110% 110%, rgba(217,163,37,0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-block rounded-full bg-white shadow px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-black/10">
            Ingeniería + Arquitectura
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
            Diseños integrados para resultados <span className="text-amber-600">medibles</span>
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-xl">
            Cumplimiento estricto de UPC/IPC, NFPA/NEC, ASCE 7 y mejores prácticas PMI.
            Optimizamos costo, tiempo y calidad con enfoque en desempeño.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-sm ring-1 ring-black/10 text-white"
              style={{ backgroundColor: "#1f6a56" }}
            >
              Solicitar cotización
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold ring-1 ring-black/10 hover:bg-black/5"
            >
              Ver casos de estudio
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-3xl border border-black/10 bg-white/80 p-6 shadow-xl">
            <img src="/logo.svg" alt="Logo RM Engineering & Architectural Design" className="w-full h-auto object-contain" />
            <p className="mt-4 text-center text-sm text-gray-600">
              Ingeniería estructural, eléctrica e hidrosanitaria con enfoque integral.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
