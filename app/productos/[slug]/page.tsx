
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";

import {
  productos,
  obtenerProducto,
} from "@/data/productos";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Genera las rutas de nuestros productos
export function generateStaticParams() {
  return productos.map((producto) => ({
    slug: producto.slug,
  }));
}

// Metadata diferente para cada producto
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const producto = obtenerProducto(slug);

  if (!producto) {
    return {
      title: "Producto no encontrado",
      description:
        "El producto solicitado no existe en el catálogo.",
    };
  }

  return {
    title: producto.nombre,
    description: producto.descripcion,
  };
}

export default async function DetalleProductoPage({
  params,
}: Props) {
  const { slug } = await params;
  const producto = obtenerProducto(slug);

  // Mostrar 404 si el producto no existe
  if (!producto) {
    notFound();
  }

  return (
    <>
      {/* Cabecera */}
      <section className="bg-[#0B101A] px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition-colors hover:text-red-300"
          >
            <ArrowLeft size={18} />
            Volver al catálogo
          </Link>

          <div className="mt-10">
            <p className="text-sm font-bold uppercase tracking-widest text-red-400">
              {producto.categoria}
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              {producto.nombre}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {producto.descripcion}
            </p>
          </div>
        </div>
      </section>

      {/* Detalle del producto */}
      <section className="bg-[#F4F5F7] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Fotografía */}
          <div className="relative h-[350px] overflow-hidden rounded-3xl bg-white shadow-xl sm:h-[500px]">
            <Image
              src={producto.imagen}
              alt={`Fotografía ilustrativa de ${producto.nombre}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Información */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-red-600">
              <PackageCheck size={18} />
              Repuesto automotriz
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Información del producto
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {producto.detalle}
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={24}
                  className="mt-1 shrink-0 text-red-600"
                />
                <p className="leading-7 text-slate-700">
                  Categoría: {producto.categoria}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={24}
                  className="mt-1 shrink-0 text-red-600"
                />
                <p className="leading-7 text-slate-700">
                  Consulta la compatibilidad con tu vehículo
                  antes de seleccionar un componente.
                </p>
              </div>
            </div>

            <Link
              href="/contacto"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-red-600 px-7 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
            >
              Solicitar información
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Enlace al catálogo */}
      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
              ¿Quieres conocer más productos?
            </h2>

            <p className="mt-3 text-slate-600">
              Explora las demás categorías de repuestos.
            </p>
          </div>

          <Link
            href="/productos"
            className="inline-flex items-center gap-3 rounded-xl border border-slate-200 px-6 py-4 font-bold text-slate-900 transition-colors hover:bg-slate-100"
          >
            Ver catálogo completo
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
