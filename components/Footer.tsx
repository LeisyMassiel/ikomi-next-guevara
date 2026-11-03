import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-3xl font-black">
            IKOMI<span className="text-red-500">.</span>
          </h2>

          <p className="mt-4 max-w-sm leading-relaxed text-slate-400">
            Soluciones en repuestos automotrices para mantener
            tus vehículos en movimiento.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold">Enlaces rápidos</h3>

          <div className="flex flex-col gap-3 text-slate-400">
            <Link href="/" className="hover:text-white">Inicio</Link>
            <Link href="/nosotros" className="hover:text-white">Nosotros</Link>
            <Link href="/servicios" className="hover:text-white">Servicios</Link>
            <Link href="/productos" className="hover:text-white">Productos</Link>
            <Link href="/marcas" className="hover:text-white">Marcas</Link>
            <Link href="/contacto" className="hover:text-white">Contacto</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-bold">Atención al cliente</h3>

          <p className="leading-relaxed text-slate-400">
            ¿Necesitas información sobre nuestros productos?
            Comunícate con nosotros mediante la sección de contacto.
          </p>

          <Link
            href="/contacto"
            className="mt-5 inline-block rounded-lg bg-red-600 px-5 py-3 font-semibold transition-colors hover:bg-red-700"
          >
            Contáctanos
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-400">
        © 2026 IKOMI Perú. Todos los derechos reservados.
      </div>
    </footer>
  );
}
