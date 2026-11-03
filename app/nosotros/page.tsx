import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { imagenes } from "@/data/imagenes";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Handshake,
  ShieldCheck,
  Target,
  Truck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la propuesta corporativa de IKOMI Perú y nuestro enfoque en repuestos automotrices.",
};

const valores = [
  {
    title: "Compromiso",
    description:
      "Buscamos responder a las necesidades de nuestros clientes con responsabilidad.",
    icon: Handshake,
  },
  {
    title: "Calidad",
    description:
      "Valoramos las soluciones que contribuyen al mantenimiento de los vehículos.",
    icon: BadgeCheck,
  },
  {
    title: "Confianza",
    description:
      "Promovemos una comunicación clara y una atención cercana.",
    icon: ShieldCheck,
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Banner con imagen externa diferente a Inicio */}
      <section className="relative flex min-h-[470px] items-center overflow-hidden bg-slate-950 text-white">
        <Image
          src={imagenes.nosotros}
          alt="Almacén industrial relacionado con la distribución de productos"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/30" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <span className="mb-5 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-red-400">
              <span className="h-0.5 w-10 bg-red-500" />
              Nuestra empresa
            </span>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Conoce el mundo detrás de IKOMI Perú.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Una propuesta enfocada en soluciones de repuestos
              automotrices para acompañar al sector del transporte.
            </p>
          </div>
        </div>
      </section>

      {/* Presentación corporativa */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="relative h-[420px] overflow-hidden rounded-3xl bg-slate-100 sm:h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1621782866606-05bfd58a26c2?auto=format&fit=crop&w=1100&q=85"
                alt="Componentes mecánicos en el motor de un automóvil"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-sm sm:right-auto">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-600 text-white">
                <Wrench size={27} />
              </div>

              <div>
                <p className="font-extrabold text-slate-950">
                  Sector automotriz
                </p>
                <p className="text-sm text-slate-600">
                  Repuestos y componentes
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-red-600">
              <span className="h-0.5 w-9 bg-red-600" />
              ¿Quiénes somos?
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Más que repuestos.
              <span className="block text-red-600">
                Soluciones para avanzar.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-slate-600">
              IKOMI Perú es una empresa dedicada a la
              comercialización de repuestos automotrices,
              orientada a las necesidades de mantenimiento
              y reparación de vehículos.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Mediante esta plataforma digital presentamos
              nuestras líneas de productos, marcas y servicios
              de una manera accesible y organizada.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <Truck
                  className="shrink-0 text-red-600"
                  size={25}
                />
                <span className="font-semibold text-slate-800">
                  Enfoque en vehículos de transporte
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Target
                  className="shrink-0 text-red-600"
                  size={25}
                />
                <span className="font-semibold text-slate-800">
                  Soluciones para diferentes necesidades
                </span>
              </div>
            </div>

            <Link
              href="/productos"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-red-600 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-red-700"
            >
              Conoce nuestros productos
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Propuesta corporativa */}
      <section className="bg-[#0B101A] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-red-400">
              Nuestra propuesta
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
              Impulsamos cada camino con soluciones.
            </h2>
          </div>

          <div className="border-l-4 border-red-600 pl-7">
            <p className="text-lg leading-9 text-slate-300">
              Buscamos facilitar el acceso a información sobre
              repuestos automotrices y brindar una experiencia
              de consulta clara, moderna y accesible.
            </p>
          </div>
        </div>
      </section>

      {/* Valores corporativos */}
      <section className="bg-[#F4F5F7] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              Nuestros valores
            </span>

            <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-5xl">
              Principios que nos representan
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Valores propuestos para comunicar nuestro
              enfoque de atención y servicio.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {valores.map(
              ({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="group rounded-2xl border border-slate-200 bg-white p-9 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                    <Icon size={30} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-8 text-2xl font-extrabold text-slate-950">
                    {title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {description}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
              ¿Listo para encontrar tu próximo repuesto?
            </h2>

            <p className="mt-4 text-slate-600">
              Explora nuestro catálogo y conoce las alternativas.
            </p>
          </div>

          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 rounded-xl bg-red-600 px-7 py-4 font-bold text-white transition hover:bg-red-700"
          >
            Contáctanos
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
