
import type { Metadata } from "next";
import Link from "next/link";

import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProductCategories from "@/components/ProductCategories";
import { imagenes } from "@/data/imagenes";

import {
  ArrowUpRight,
  ArrowRight,
  Wrench,
  Headset,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Descubre IKOMI Perú, soluciones en repuestos automotrices para vehículos de trabajo y transporte.",
};

const soluciones = [
  {
    number: "01",
    title: "Repuestos automotrices",
    description:
      "Componentes para el mantenimiento y reparación de vehículos de trabajo y transporte.",
    href: "/productos",
    label: "Explorar productos",
    icon: Wrench,
  },
  {
    number: "02",
    title: "Asesoría especializada",
    description:
      "Orientación para encontrar alternativas de repuestos según las necesidades de tu vehículo.",
    href: "/servicios",
    label: "Nuestros servicios",
    icon: Headset,
  },
  {
    number: "03",
    title: "Marcas y soluciones",
    description:
      "Conoce las marcas y líneas de productos que forman parte de nuestra propuesta comercial.",
    href: "/marcas",
    label: "Ver marcas",
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Banner principal con imagen externa */}
      <Hero
        image={imagenes.inicio}
        imageAlt="Camión de transporte circulando por carretera"
        title="La fuerza detrás de cada kilómetro."
        description="Repuestos automotrices para mantener tu vehículo en movimiento. Descubre nuestra selección de componentes y soluciones para el sector del transporte."
        buttonText="Explorar catálogo"
        buttonHref="/productos"
      />

      {/* Categorías con fotografías */}
      <ProductCategories />

      {/* Soluciones y servicios */}
      <section className="bg-[#F4F5F7] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <SectionTitle
                title="Soluciones que mantienen todo en movimiento."
                subtitle="Conoce nuestras principales líneas de soluciones para el sector automotriz."
              />
            </div>

            <Link
              href="/servicios"
              className="inline-flex w-fit items-center gap-3 border-b-2 border-red-600 pb-2 text-sm font-bold uppercase tracking-wide text-slate-900 transition-colors hover:text-red-600"
            >
              Todos los servicios
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Tarjetas con iconos */}
          <div className="grid gap-6 md:grid-cols-3">
            {soluciones.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative flex min-h-[350px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl hover:shadow-slate-900/10"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                      <Icon size={30} strokeWidth={1.8} />
                    </div>

                    <span className="text-4xl font-black text-slate-100">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-red-600 transition-all group-hover:gap-4"
                  >
                    {item.label}
                    <ArrowRight size={18} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Presentación corporativa */}
      <section className="bg-[#0B101A] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              <span className="h-[2px] w-8 bg-red-500" />
              Sobre nosotros
            </span>

            <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Más que repuestos.
              <span className="block text-red-500">
                Soluciones para avanzar.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              En IKOMI Perú buscamos facilitar el acceso a
              repuestos automotrices mediante una propuesta
              comercial enfocada en las necesidades del transporte.
            </p>

            <div className="mt-8 flex items-center gap-3 text-slate-300">
              <ShieldCheck
                size={24}
                className="shrink-0 text-red-500"
              />
              <span>
                Compromiso con la atención y la calidad.
              </span>
            </div>

            <Link
              href="/nosotros"
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-red-600 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
            >
              Conoce nuestra empresa
              <ArrowUpRight size={20} />
            </Link>
          </div>

          {/* Tarjeta corporativa */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl sm:p-14">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-600/15 blur-3xl" />

            <span className="relative text-5xl font-black tracking-tight text-white sm:text-7xl">
              IKOMI<span className="text-red-500">.</span>
            </span>

            <div className="relative mt-8 h-1 w-20 bg-red-600" />

            <p className="relative mt-8 max-w-sm text-xl font-medium leading-9 text-slate-300">
              Compromiso con la calidad, la atención y las
              soluciones para el sector automotriz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
