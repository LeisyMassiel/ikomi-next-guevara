export type Producto = {
  slug: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  detalle: string;
  imagen: string;
};

export const productos: Producto[] = [
  {
    slug: "filtro-de-aceite",
    nombre: "Filtro de aceite",
    categoria: "Filtros",
    descripcion:
      "Componente diseñado para ayudar a mantener limpio el aceite del motor.",
    detalle:
      "El filtro de aceite retiene impurezas presentes en el lubricante. Su reemplazo periódico forma parte del mantenimiento preventivo del vehículo.",
    imagen:
      "https://images.unsplash.com/photo-1688385274085-a009a3c5d4b7?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "disco-de-freno",
    nombre: "Disco de freno",
    categoria: "Sistema de frenos",
    descripcion:
      "Pieza del sistema de frenado que trabaja junto con las pastillas.",
    detalle:
      "El disco de freno permite generar fricción con las pastillas para reducir la velocidad del vehículo. Es importante revisar su desgaste y compatibilidad.",
    imagen:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "componentes-de-motor",
    nombre: "Componentes de motor",
    categoria: "Motor",
    descripcion:
      "Elementos utilizados en el mantenimiento y reparación del motor.",
    detalle:
      "Los componentes del motor cumplen distintas funciones mecánicas. Su selección debe considerar el modelo del vehículo y las especificaciones del fabricante.",
    imagen:
      "https://images.unsplash.com/photo-1621782866606-05bfd58a26c2?auto=format&fit=crop&w=900&q=80",
  },
];

export function obtenerProducto(slug: string) {
  return productos.find((producto) => producto.slug === slug);
}
