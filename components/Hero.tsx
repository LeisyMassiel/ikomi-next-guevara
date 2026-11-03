
import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function Hero({
  title,
  description,
  image,
  imageAlt = "Imagen relacionada con el sector automotriz",
  buttonText = "Explorar catálogo",
  buttonHref = "/productos",
}: HeroProps) {
  return (
    <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#0B101A] text-white lg:min-h-[740px]">
      {/* Imagen de fondo mediante URL */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Degradado oscuro para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080C14]/95 via-[#080C14]/80 to-[#080C14]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/60 via-transparent to-transparent" />

      {/* Línea roja decorativa */}
      <div className="absolute left-0 top-0 h-full w-1 bg-red-600" />

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-red-600" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-400 sm:text-sm">
              IKOMI PERÚ · REPUESTOS AUTOMOTRICES
            </span>
          </div>

          {/* Título */}
          <h1 className="max-w-3xl text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
            {title}
          </h1>

          {/* Descripción */}
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
            {description}
          </p>

          {/* Botones */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-red-600 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-red-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl"
            >
              {buttonText}
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-lg border border-white/50 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/20"
            >
              Solicitar información
            </Link>
          </div>

          {/* Detalle corporativo */}
          <div className="mt-16 flex items-center gap-4 border-t border-white/20 pt-6">
            <span className="text-3xl font-black text-red-500">
              IK.
            </span>

            <div className="text-xs font-semibold uppercase leading-5 tracking-widest text-slate-300">
              Repuestos
              <br />
              Automotrices
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
