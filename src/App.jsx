import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

export default function App() {
  const services = [
    {
      title: "Arquitectura & BIM",
      desc:
        "Anteproyecto, modelado BIM (ISO-19650), planos constructivos y especificaciones técnicas.",
      bullets: ["Eficiencia energética", "Coordinación multidisciplinaria", "Normativa local"],
    },
    {
      title: "Estructuras & Sismo",
      desc:
        "Análisis/diseño según ASCE 7, ACI/AISC. Optimización por desempeño y revisión independiente.",
      bullets: ["Modelos lineales/no lineales", "Pórticos, muros, cimentaciones", "QA/QC estructural"],
    },
    {
      title: "Hidrosanitarias",
      desc:
        "Sistemas de agua potable, pluvial y sanitaria cumpliendo UPC/IPC. Memorias Ténicas e isométricos.",
      bullets: ["Cálculo de caudal/DFU", "Trampas de grasa, PTAR", "Detalles y especificaciones"],
    },
    {
      title: "Eléctricas & NFPA",
      desc:
        "Diseño BT/MT según NEC (NFPA 70). Alumbrado, tomacorrientes, tableros y protecciones.",
      bullets: ["Cortocircuito y caída de tensión", "Selectividad/Coordinación", "Puesta a tierra, GFCI/AFCI"],
    },
    {
      title: "Gerencia de Proyectos",
      desc:
        "Planificación y control con PMI/Lean. Cronograma, presupuesto, entregables y trazabilidad.",
      bullets: ["Matrices RACI", "Gestión de riesgos", "Control de calidad"],
    },
    {
      title: "Peritajes & Auditorías",
      desc:
        "Inspecciones, diagnósticos y peritajes técnicos con informe y plan de acción.",
      bullets: ["Patologías de obra", "Cumplimiento normativo", "Valoración de riesgos"],
    },
  ];

  const projects = [
    {
      title: "Microsoft Project",
      tag: "Diagrama de Gantt",
      metric: "Ruta Crítica",
      img: "/msp.png",
    },
    {
      title: "Precios Unitarios",
      tag: "CAPAC-SUNTRAC",
      metric: "Rendimientos",
      img: "/pu.png",
    },
    {
      title: "Planos Y Memórias Técnicas",
      tag: "CSI",
      metric: "Estándares en la construcción",
      img: "/p.png",
    },
    {
      title: "Trámites De Construcción",
      tag: "Entidades Públicas y Privadas",
      metric: "Permisos De Construcción y Ocupación",
      img: "/t.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Barra de navegación responsive */}
      <Navbar />

      {/* Sección principal */}
      <Hero />

      {/* Servicios */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold">Servicios</h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          Soluciones con entregables verificables. Incluimos memoria de cálculo,
          planos, especificaciones y checklist de cumplimiento.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Proyectos / Portafolio */}
      <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold">Casos de estudio</h2>
          <a href="#contact" className="text-sm underline underline-offset-4 hover:opacity-80">
            ¿Tienes un reto? Conversemos →
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((c) => (
            <figure
              key={c.title}
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <div className="text-xs opacity-90">{c.tag}</div>
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-xs text-amber-300">{c.metric}</div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* Contacto (compatible con Netlify Forms) */}
      <section id="contact" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl border border-black/10 bg-white shadow-sm p-8">
          <h2 className="text-3xl font-bold">Contacto</h2>
          <p className="mt-2 text-gray-600">
            Cuéntanos sobre tu proyecto. Respondemos entre 24 y 72 horas hábiles.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="mt-8 grid gap-4"
            onSubmit={(e) => {
              e.currentTarget.reset();
              alert("¡Gracias! Hemos recibido tu mensaje.");
            }}
          >
            {/* Netlify hidden inputs */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Nombre</label>
                <input
                  required
                  name="name"
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Asunto</label>
              <input
                name="subject"
                className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Mensaje</label>
              <textarea
                required
                name="message"
                rows={5}
                className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                className="rounded-xl px-6 py-3 font-semibold shadow-sm bg-amber-500 text-white hover:opacity-90"
              >
                Enviar solicitud
              </button>
              <a
                href="https://wa.me/+50766074960"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-4"
              >
                WhatsApp
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}