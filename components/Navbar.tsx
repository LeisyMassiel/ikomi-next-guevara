"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Productos", href: "/productos" },
  { name: "Marcas", href: "/marcas" },
  { name: "Contáctenos", href: "/contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="text-3xl font-black tracking-tight text-slate-900"
          onClick={() => setIsOpen(false)}
        >
          IKOMI<span className="text-red-600">.</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-sm font-semibold transition-colors ${
                isActive(item.href)
                  ? "text-red-600"
                  : "text-slate-700 hover:text-red-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="rounded-lg border border-slate-200 p-3 text-slate-900 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-4 py-3 font-semibold ${
                isActive(item.href)
                  ? "bg-red-50 text-red-600"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
