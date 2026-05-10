"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/FadeInStagger";

const steps = [
  {
    number: "01",
    title: "Consulta",
    description: "Conocemos tu espacio, necesidades y referencias visuales.",
    time: "Gratuita, sin compromiso",
  },
  {
    number: "02",
    title: "Diseño",
    description: "Renders 3D y planos técnicos con materiales y acabados definidos.",
    time: "1-2 semanas",
  },
  {
    number: "03",
    title: "Fabricación",
    description: "Producción con tecnología CNC y materiales premium en taller.",
    time: "6 semanas",
  },
  {
    number: "04",
    title: "Instalación",
    description: "Montaje profesional en sitio con acabados perfectos.",
    time: "5 días",
  },
];

const projects = [
  {
    eyebrow: "COCINA · ESQUEMA L",
    title: "Residencia Cumbres",
    detail: "Mérida, 2024",
  },
  {
    eyebrow: "CLÓSET MASTER",
    title: "Casa Aldea",
    detail: "Yucatán, 2024",
  },
  {
    eyebrow: "COCINA CON ISLA",
    title: "Departamento Altabrisa",
    detail: "Mérida, 2023",
  },
  {
    eyebrow: "BAÑO PRINCIPAL",
    title: "Residencia Conkal",
    detail: "Yucatán, 2024",
  },
  {
    eyebrow: "PUERTAS INTERIORES",
    title: "Casa Temozón",
    detail: "Yucatán, 2023",
  },
  {
    eyebrow: "COCINA INTEGRAL",
    title: "Loft Centro",
    detail: "Mérida, 2024",
  },
];

const plans = [
  {
    badge: "PREMIUM",
    badgeClass: "bg-black text-white",
    title: "Idera Premium",
    subtitle: "La máxima expresión de calidad y diseño",
    features: [
      "Maderas naturales: Parota, Tzalam, Encino",
      "MDF de alta gama y cubiertas en cuarzo o granito exótico",
      "Herrajes con sistema Gola o push-to-open",
      "Personalización total e integración LED",
    ],
    idealFor:
      "Residencias de alto nivel, proyectos boutique, arquitectos de autor.",
  },
  {
    badge: "PLUS",
    badgeClass: "bg-gray-100 text-gray-700",
    title: "Idera Plus",
    subtitle: "Diseño y durabilidad a precio competitivo",
    features: [
      "MDF premium: Syncro Clay, Breeze, Pecan",
      "Cubiertas de granito estándar o cuarzo accesible",
      "Herrajes con cierre suave y jaladeras modernas",
      "Diseño modular adaptable y estilo contemporáneo",
    ],
    idealFor:
      "Vivienda media-alta, desarrollos residenciales, constructoras con valor agregado.",
  },
];

const reasons = [
  {
    number: "01",
    title: "5 años de garantía",
    description: "Materiales, herrajes y mano de obra incluidos en cada proyecto.",
  },
  {
    number: "02",
    title: "Tecnología CNC",
    description: "Precisión milimétrica en cada corte y ensamble.",
  },
  {
    number: "03",
    title: "+500 proyectos",
    description: "Más de una década entregando hogares completos en Mérida.",
  },
  {
    number: "04",
    title: "Cotización 24-48h",
    description: "Respondemos rápido, siempre. Sin demoras innecesarias.",
  },
];

const products = [
  {
    slug: "cocinas",
    name: "Cocinas",
    subtitle: "Esquemas L, U e islas con acabados premium",
    capacity: "30+ por mes",
    placeholder: "FOTO COCINA",
  },
  {
    slug: "closets",
    name: "Clósets",
    subtitle: "Sistemas modulares con herrajes de cierre suave",
    capacity: "80+ por mes",
    placeholder: "FOTO CLÓSET",
  },
  {
    slug: "banos",
    name: "Baños",
    subtitle: "Vanidades a medida resistentes a la humedad",
    capacity: "Personalizados",
    placeholder: "FOTO BAÑO",
  },
  {
    slug: "puertas",
    name: "Puertas",
    subtitle: "Interiores y exteriores con chapas naturales",
    capacity: "1000+ por mes",
    placeholder: "FOTO PUERTA",
  },
];

const stats = [
  { value: "5 años", label: "de garantía" },
  { value: "CNC", label: "precisión milimétrica" },
  { value: "+500", label: "proyectos entregados" },
  { value: "24-48h", label: "cotización" },
];

const statBorder = [
  "border-r border-b border-gray-200 md:border-b-0",
  "border-b border-gray-200 md:border-b-0 md:border-r",
  "border-r border-gray-200",
  "",
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col md:flex-row">
        {/* Left: copy */}
        <div className="flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24 py-20 md:py-0 md:w-1/2">
          <FadeIn delay={0}>
            <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-6">
              FÁBRICA · MÉRIDA, YUCATÁN
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-black mb-6">
              Cocinas a medida, fabricadas para durar
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
              Diseño, fabricación CNC e instalación con garantía de 5 años.
            </p>
          </FadeIn>
          <FadeIn delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5219992171749?text=Hola%20Idera%2C%20me%20interesa%20una%20cotización"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-900 transition-colors"
              >
                Solicitar cotización
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center border border-black text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-50 transition-colors"
              >
                Ver proyectos
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right: image placeholder */}
        <FadeIn
          delay={0.3}
          className="md:w-1/2 bg-gray-100 min-h-72 md:min-h-full flex items-center justify-center"
        >
          <span className="text-gray-400 text-xs uppercase tracking-[0.2em] font-medium">
            FOTO COCINA PREMIUM
          </span>
        </FadeIn>
      </section>

      {/* ── Stats strip ────────────────────────────────────── */}
      <StaggerContainer className="border-t border-b border-gray-200 grid grid-cols-2 md:grid-cols-4">
        {stats.map((item, i) => (
          <StaggerItem
            key={i}
            className={`flex flex-col items-center justify-center py-10 px-6 text-center ${statBorder[i]}`}
          >
            <span className="text-2xl font-bold text-black">{item.value}</span>
            <span className="text-gray-400 text-sm mt-1">{item.label}</span>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* ── Products ───────────────────────────────────────── */}
      <section className="px-8 sm:px-12 md:px-16 lg:px-24 py-24 md:py-32">
        <FadeIn className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-4">
            Cuatro líneas, una sola obsesión
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Cocinas, clósets, baños y puertas fabricados con la misma precisión
            y materiales premium.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product) => (
            <StaggerItem key={product.slug}>
              <a
                href={`/${product.slug}`}
                className="group bg-gray-50 flex flex-col h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
              >
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-xs uppercase tracking-[0.2em] font-medium">
                    {product.placeholder}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-black">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                    {product.subtitle}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-xs text-gray-400 uppercase tracking-[0.15em]">
                      Capacidad mensual
                    </span>
                    <span className="text-sm font-semibold text-black">
                      {product.capacity}
                    </span>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── Por qué Idera ──────────────────────────────────── */}
      <section className="px-8 sm:px-12 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <FadeIn className="md:w-2/5 md:sticky md:top-32 md:self-start">
            <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-6">
              — LA DIFERENCIA
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-black">
              Calidad que se mide en años, no en meses
            </h2>
          </FadeIn>

          <StaggerContainer className="md:w-3/5 flex flex-col">
            {reasons.map((item, i) => (
              <StaggerItem
                key={item.number}
                className={`flex gap-6 md:gap-8 pb-8 ${
                  i < reasons.length - 1 ? "border-b border-gray-200 mb-8" : ""
                }`}
              >
                <span className="font-serif text-2xl md:text-3xl text-gray-300 leading-none pt-0.5 tabular-nums shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Premium vs Plus ────────────────────────────────── */}
      <section className="bg-gray-50 px-8 sm:px-12 md:px-16 lg:px-24 py-24 md:py-32">
        <FadeIn className="mb-14">
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-6">
            — DOS LÍNEAS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-4">
            El nivel de calidad que tu proyecto necesita
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl">
            Misma fábrica, misma precisión CNC, misma garantía. Lo que cambia
            son los materiales y el nivel de personalización.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {plans.map((plan) => (
            <StaggerItem key={plan.badge}>
              <div className="bg-white border border-gray-200 p-8 md:p-10 flex flex-col hover:shadow-md transition-shadow duration-200">
                <span
                  className={`self-start text-xs font-medium uppercase tracking-[0.15em] px-3 py-1 rounded-sm mb-6 ${plan.badgeClass}`}
                >
                  {plan.badge}
                </span>
                <h3 className="text-2xl font-bold text-black tracking-tight">
                  {plan.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 mb-8">
                  {plan.subtitle}
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span className="text-gray-300 mt-0.5 leading-none select-none">
                        •
                      </span>
                      <span className="text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto border-t border-gray-200 pt-6">
                  <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-2">
                    IDEAL PARA
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {plan.idealFor}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── Nuestro Proceso ────────────────────────────────── */}
      <section className="bg-gray-50 px-8 sm:px-12 md:px-16 lg:px-24 py-24 md:py-32">
        <FadeIn className="mb-16">
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-6">
            — CÓMO TRABAJAMOS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-4">
            Cuatro pasos, cero sorpresas
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Desde la primera consulta hasta la entrega final, sabes exactamente
            qué pasa en cada etapa.
          </p>
        </FadeIn>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-6 border-t border-gray-200 pointer-events-none" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <span className="relative z-10 inline-block bg-gray-50 pr-4 font-serif text-5xl text-gray-300 leading-none">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-black mt-5">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">
                  {step.description}
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-[0.1em] mt-4">
                  {step.time}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Galería de proyectos ───────────────────────────── */}
      <section
        id="proyectos"
        className="px-8 sm:px-12 md:px-16 lg:px-24 py-24 md:py-32"
      >
        <FadeIn className="mb-14">
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-6">
            — PROYECTOS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-4">
            Trabajos que hablan por sí solos
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Cada cocina, clóset y mueble que sale del taller cuenta una
            historia. Estas son algunas.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <StaggerItem key={i}>
              <a href="#" className="group block">
                <div className="overflow-hidden aspect-[4/5]">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
                    <span className="text-gray-400 text-xs uppercase tracking-[0.2em] font-medium">
                      PROYECTO {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-xs text-gray-400 uppercase tracking-[0.15em] mb-1">
                    {project.eyebrow}
                  </p>
                  <h3 className="text-base font-semibold text-black">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-0.5">{project.detail}</p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="flex justify-center mt-16">
          <a
            href="/proyectos"
            className="inline-flex items-center justify-center border border-black text-black px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-50 transition-colors"
          >
            Ver todos los proyectos
          </a>
        </FadeIn>
      </section>

      {/* ── Cierre con WhatsApp ────────────────────────────── */}
      <section className="bg-zinc-900 text-white min-h-[80vh] flex items-center justify-center px-8 py-32 md:py-40">
        <div className="flex flex-col items-center text-center max-w-4xl">
          <FadeIn delay={0}>
            <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-8">
              — EMPIEZA TU PROYECTO
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              ¿Lista la cocina de tus sueños?
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mt-6 leading-relaxed">
              Solicita tu cotización por WhatsApp. Te respondemos en menos de 48
              horas con un plan claro y un presupuesto detallado.
            </p>
          </FadeIn>
          <FadeIn delay={0.45}>
            <a
              href="https://wa.me/5219992171749?text=Hola%20Idera%2C%20me%20interesa%20una%20cotización"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-white text-black px-10 py-5 text-lg font-medium rounded-md hover:bg-gray-200 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 shrink-0"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar cotización
            </a>
          </FadeIn>
          <FadeIn delay={0.55}>
            <p className="text-sm text-gray-600 mt-4 tracking-wide">
              Sin compromiso · Respuesta garantizada en 24-48h
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
