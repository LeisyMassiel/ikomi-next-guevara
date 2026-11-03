import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, PackageSearch } from "lucide-react";

import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { productos } from "@/data/productos";
import { imagenes } from "@/data/imagenes";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Explora el catálogo de demostración de repuestos automotrices de IKOMI Perú.",
};

export default function ProductosPage() {
  return (
    <>
      {/* Banner principal */}
      <Hero
        image={imagenes.productos}
        imageAlt="Componentes mecánicos del sector automotriz"
        title="Repuestos para cada desafío."
        description="Explora nuestras categorías de repuestos y conoce componentes para el mantenimiento de vehículos."
        buttonText="Ver productos"
        buttonHref="#catalogo"
      />

      {/* Catálogo de productos */}
      <section
        id="catalogo"
        className="scroll-mt-24 bg-[#F4F5F7] px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <div className="flex items-center gap-3 text-red-600">
              <PackageSearch size={22} />
              <span className="text-sm font-bold uppercase tracking-widest">
                Nuestro catálogo
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-black text-slate-950 sm:text-5xl">
              Encuentra el componente que necesitas.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Explora nuestra selección de productos de
              demostración y consulta sus características.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {productos.map((producto) => (
              <ProductCard
                key={producto.slug}
                producto={producto}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de contacto */}
      <section className="bg-[#0B101A] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black">
              ¿Necesitas orientación?
            </h2>

            <p className="mt-3 text-slate-300">
              Comunícate con nosotros para solicitar
              información sobre repuestos automotrices.
            </p>
          </div>

          <Link
            href="/contacto"
            className="inline-flex w-fit items-center gap-3 rounded-xl bg-red-600 px-7 py-4 font-bold text-white transition-colors hover:bg-red-700"
          >
            Contáctanos
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
