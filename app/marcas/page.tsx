import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  SearchCheck,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Marcas",
  description:
    "Conoce las marcas de vehículos utilizadas como referencia en el catálogo de repuestos automotrices de IKOMI Perú.",
};

const marcas = [
  { nombre: "Hyundai", tipo: "Vehículos comerciales", inicial: "H" },
  { nombre: "Kia", tipo: "Vehículos y transporte", inicial: "K" },
  { nombre: "Mitsubishi", tipo: "Vehículos de trabajo", inicial: "M" },
  { nombre: "Hino", tipo: "Camiones y buses", inicial: "H" },
  { nombre: "Isuzu", tipo: "Vehículos comerciales", inicial: "I" },
  { nombre: "Nissan", tipo: "Vehículos y transporte", inicial: "N" },
];

export default function MarcasPage() {
  return (
    <>
      {/* Cabecera */}
      <section className="relative overflow-hidden bg-[#0B101A] px-6 py-24 text-white lg:px-8">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 flex items-center gap-3 text-red-400">
            <Truck size={22} />
            <span className="text-sm font-bold uppercase tracking-widest">
              Sector automotriz
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Marcas que forman parte del mundo automotriz.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Explora las marcas de vehículos utilizadas como
            referencia para organizar nuestras líneas de repuestos.
          </p>
        </div>
      </section>

      {/* Listado de marcas */}
      <section className="bg-[#F4F5F7] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">
              Nuestras referencias
            </span>

            <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-5xl">
              Explora las marcas.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              Conoce algunas marcas reconocidas dentro
              del sector de vehículos comerciales.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {marcas.map((marca) => (
              <article
                key={marca.nombre}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0B101A] text-4xl font-black text-white transition-colors group-hover:bg-red-600">
                    {marca.inicial}
                  </div>

                  <ArrowUpRight
                    size={23}
                    className="text-slate-400 transition-colors group-hover:text-red-600"
                  />
                </div>

                <h3 className="mt-8 text-3xl font-black text-slate-950">
                  {marca.nombre}
                </h3>

                <p className="mt-3 text-slate-600">
                  {marca.tipo}
                </p>

                <div className="mt-8 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-red-600">
                  <BadgeCheck size={18} />
                  Referencia automotriz
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="flex items-start gap-5">
            <Boxes className="shrink-0 text-red-600" size={36} />

            <div>
              <h2 className="text-2xl font-black text-slate-950">
                Variedad de componentes
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                Explora diferentes categorías de repuestos
                para conocer sus características.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <SearchCheck className="shrink-0 text-red-600" size={36} />

            <div>
              <h2 className="text-2xl font-black text-slate-950">
                Consulta de compatibilidad
              </h2>
              <p className="mt-3 leading-8 text-slate-600">
                Verifica el modelo de tu vehículo antes
                de seleccionar un componente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Llamada a la acción */}
      <section className="bg-red-600 px-6 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">
              Encuentra el repuesto que necesitas.
            </h2>

            <p className="mt-3 text-red-100">
              Explora nuestro catálogo de productos.
            </p>
          </div>

          <Link
            href="/productos"
            className="inline-flex w-fit items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-red-600 transition-colors hover:bg-slate-100"
          >
            Ver productos
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
