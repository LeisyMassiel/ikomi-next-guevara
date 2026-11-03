
"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setEnviado(true);
  }

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100";

  return (
    <form
      onSubmit={handleSubmit}
      onChange={() => setEnviado(false)}
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
    >
      <div>
        <label
          htmlFor="nombre"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Apellidos y nombres
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          placeholder="Ingresa tus apellidos y nombres"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="telefono"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Teléfono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          required
          placeholder="Ingresa tu número de teléfono"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="correo"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Correo electrónico
        </label>
        <input
          id="correo"
          name="correo"
          type="email"
          required
          placeholder="correo@ejemplo.com"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="asunto"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Asunto
        </label>
        <input
          id="asunto"
          name="asunto"
          type="text"
          required
          placeholder="¿En qué podemos ayudarte?"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="mensaje"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          placeholder="Escribe tu consulta..."
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-3 rounded-lg bg-red-600 px-7 py-4 font-bold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg sm:ml-auto sm:w-auto"
      >
        <Send size={19} />
        Enviar mensaje
      </button>

      {enviado && (
        <div
          role="status"
          className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900"
        >
          <CheckCircle2 size={20} className="shrink-0" />
          <p>
            Formulario de demostración: los datos no se
            enviaron a ningún servidor.
          </p>
        </div>
      )}
    </form>
  );
}
