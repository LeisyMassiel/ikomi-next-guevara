
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IKOMI Perú | Repuestos Automotrices",
    template: "%s | IKOMI Perú",
  },
  description:
    "Descubre IKOMI Perú, especialistas en repuestos automotrices. Conoce nuestros productos, servicios y marcas.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        {/* Barra de navegación */}
        <Navbar />

        {/* Contenido de cada página */}
        <main className="flex-1">
          {children}
        </main>

        {/* Pie de página */}
        <Footer />

        {/* Botón flotante de WhatsApp */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
