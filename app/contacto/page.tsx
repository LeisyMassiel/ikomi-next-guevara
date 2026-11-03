
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contáctenos",
  description:
    "Página de contacto de IKOMI Perú con mapa de referencia y formulario de consultas.",
};

const direccion =
  "Av. Nicolás Ayllón 3384, Ate, Lima, Perú";

const mapaUrl =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(direccion) +
  "&output=embed";

export default function ContactoPage() {
  return (
    <>
      {/* Cabecera */}
      <section className="bg-[#0B101A] px-6 py-16 text-center text-white lg:px-8">
        <div className="mx-auto max-w-4xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            IKOMI PERÚ
          </span>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            CONTÁCTENOS
          </h1>

          <div className="mx-auto mt-6 h-1 w-16 bg-red-600" />

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Completa el formulario para realizar una consulta
            sobre nuestros productos y soluciones automotrices.
          </p>
        </div>
      </section>

      {/* Mapa y formulario */}
      <section className="bg-[#F4F5F7] px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2">
          {/* Columna izquierda: Google Maps */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white">
                <MapPin size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-950">
                  Nuestra ubicación
                </h2>

                <p className="text-sm text-slate-600">
                  Ubicación mostrada en la referencia
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              <iframe
                title="Mapa de ubicación de referencia de IKOMI Perú"
                src={mapaUrl}
                width="100%"
                height="440"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <MapPin
                  size={25}
                  className="mt-1 shrink-0 text-red-600"
                />

                <div>
                  <h3 className="font-bold text-slate-950">
                    Dirección de referencia
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {direccion}
                  </p>

                  <Link
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-red-600 hover:text-red-700"
                  >
                    Ver en Google Maps
                    <ArrowUpRight size={19} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-black text-slate-950">
                Envíanos un mensaje
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Completa los campos para probar nuestro
                formulario de contacto.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
