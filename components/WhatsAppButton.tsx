
import { SiWhatsapp } from "react-icons/si";

const telefono = "51985068416";

const mensaje =
  "Hola, quisiera recibir información sobre los repuestos de IKOMI Perú.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      title="Consultar por WhatsApp"
      className="group fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/30 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[#20BD5A] hover:shadow-2xl"
    >
      <SiWhatsapp
        size={34}
        aria-hidden="true"
      />

      <span className="pointer-events-none absolute right-20 whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
        ¿Necesitas ayuda?
      </span>
    </a>
  );
}
