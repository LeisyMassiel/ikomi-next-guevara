import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Package } from "lucide-react";
import type { Producto } from "@/data/productos";

type ProductCardProps = {
  producto: Producto;
};

export default function ProductCard({
  producto,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <Image
          src={producto.imagen}
          alt={`Imagen ilustrativa de ${producto.nombre}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-sm">
          {producto.categoria}
        </span>
      </div>

      <div className="p-7">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-red-600">
          <Package size={18} />
          Repuesto automotriz
        </div>

        <h2 className="text-2xl font-extrabold text-slate-950">
          {producto.nombre}
        </h2>

        <p className="mt-4 min-h-20 leading-7 text-slate-600">
          {producto.descripcion}
        </p>

        <Link
          href={`/productos/${producto.slug}`}
          className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 font-bold text-red-600"
        >
          Ver detalle
          <ArrowUpRight
            size={21}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </article>
  );
}
