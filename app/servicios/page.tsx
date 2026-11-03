import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Headset,
  SearchCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Conoce las soluciones de repuestos automotrices, orientación y consultas de productos de IKOMI Perú.",
};

const servicios = [
  {
    titulo: "Repuestos automotrices",
    descripcion:
      "Explora componentes y piezas para el mantenimiento de vehículos comerciales y de transporte.",
    imagen: "/images/servicio-repuestos.jpg",
    icono: Boxes,
    numero: "01",
  },
  {
    titulo: "Orientación especializada",
    descripcion:
      "Consulta información para encontrar alternativas de repuestos de acuerdo con tus necesidades.",
    imagen: "/images/servicio-asesoria.jpg",
    icono: SearchCheck,
    numero: "02",
  },
  {
    titulo: "Consulta de productos",
    descripcion:
      "Contáctanos para solicitar información sobre las diferentes líneas de repuestos.",
    imagen: "/images/servicio-consulta.jpg",
    icono: Headset,
    numero: "03",
  },
];

const pasos = [
  {
    icono: SearchCheck,
    titulo: "Explora",
    texto: "Revisa las categorías de nuestro catálogo.",
  },
  {
    icono: ClipboardCheck,
    titulo: "Selecciona",
    texto: "Identifica el repuesto que necesitas.",
  },
  {
    icono: Headset,
    titulo: "Consulta",
    texto: "Solicita información mediante nuestro contacto.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Banner fotográfico */}
      <section className="relative flex min-h-[480px] items-center overflow-hidden bg-slate-950 text-white">
        <Image
          src="/images/hero-camiones.jpg"
          alt="Camión de transporte en carretera"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/30" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-red-400">
              <span className="h-0.5 w-9 bg-red-500" />
              Soluciones automotrices
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Todo lo que necesitas para seguir avanzando.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Descubre nuestras líneas de repuestos y soluciones
              orientadas al sector del transporte.
            </p>

            <Link
              href="/productos"
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-red-600 px-7 py-4 font-bold transition hover:bg-red-700"
            >
              Explorar catálogo
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Presentación de servicios */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="font-bold uppercase tracking-widest text-red-600">
                Lo que ofrecemos
              </span>

              <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-5xl">
                Soluciones pensadas para tu vehículo.
              </h2>
            </div>

            <p className="max-w-sm leading-8 text-slate-600">
              Información clara, variedad de componentes
              y una experiencia de consulta sencilla.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {servicios.map((servicio) => {
              const Icono = servicio.icono;

              return (
                <article
                  key={servicio.numero}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={servicio.imagen}
                      alt={servicio.titulo}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    <span className="absolute right-5 top-5 rounded-lg bg-white/90 px-3 py-2 text-sm font-bold text-slate-900">
                      {servicio.numero}
                    </span>
                  </div>

                  <div className="relative p-7">
                    <div className="-mt-14 mb-6 flex h-14 w-14 items-center justify-center rounded-xl border-4 border-white bg-red-600 text-white shadow-lg">
                      <Icono size={25} />
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-950">
                      {servicio.titulo}
                    </h3>

                    <p className="mt-4 min-h-24 leading-7 text-slate-600">
                      {servicio.descripcion}
                    </p>

                    <Link
                      href="/contacto"
                      className="mt-6 inline-flex items-center gap-2 font-bold text-red-600 transition-all group-hover:gap-4"
                    >
                      Solicitar información
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Franja de beneficios */}
      <section className="bg-[#101722] px-6 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            { icono: BadgeCheck, texto: "Información de productos" },
            { icono: ShieldCheck, texto: "Atención orientada al cliente" },
            { icono: Truck, texto: "Enfoque en vehículos de transporte" },
          ].map(({ icono: Icono, texto }) => (
            <div key={texto} className="flex items-center gap-4">
              <Icono className="shrink-0 text-red-500" size={32} />
              <span className="font-semibold">{texto}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Proceso de consulta */}
      <section className="bg-[#F4F5F7] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <span className="font-bold uppercase tracking-widest text-red-600">
            Proceso sencillo
          </span>

          <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-5xl">
            Encuentra lo que necesitas.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pasos.map(({ icono: Icono, titulo, texto }, index) => (
              <div
                key={titulo}
                className="rounded-2xl border border-slate-200 bg-white p-9 text-left shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <Icono className="text-red-600" size={35} />
                  <span className="text-4xl font-black text-slate-100">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-extrabold text-slate-950">
                  {titulo}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section className="bg-red-600 px-6 py-20 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">
              ¿Buscas un repuesto específico?
            </h2>
            <p className="mt-4 max-w-xl text-red-100">
              Explora nuestro catálogo o comunícate para
              solicitar más información.
            </p>
          </div>

          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 rounded-lg bg-white px-7 py-4 font-bold text-red-600 transition hover:bg-slate-100"
          >
            Contáctanos
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
