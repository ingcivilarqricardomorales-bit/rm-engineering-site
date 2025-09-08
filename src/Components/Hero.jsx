import React from "react";

export default function Hero() {
  return (
   <section id="home" className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      {/* VIDEO DE FONDO */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/RenderVirtual.jpg"
      >
        <source src="/RenderVirtual.webm" type="video/webm" />
        <source src="/RenderVirtual.mp4"  type="video/mp4"  />
      </video>

      {/* Capa para contraste de texto */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
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
            <img src="/logo.png" alt="Logo RM Engineering & Architectural Design" className="w-full h-auto object-contain" />
            <p className="mt-4 text-center text-sm text-gray-600">
              Ingeniería estructural, eléctrica e hidrosanitaria con enfoque integral.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
