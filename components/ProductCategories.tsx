import CategoryCard from "./CategoryCard";

const categorias = [
  {
    title: "Motor y componentes",
    description:
      "Componentes para el funcionamiento y mantenimiento del motor.",
    image:
      "https://images.unsplash.com/photo-1621782866606-05bfd58a26c2?auto=format&fit=crop&w=900&q=80",
    href: "/productos",
  },
  
  {
    title: "Sistema de frenos",
    description:
        "Soluciones relacionadas con el sistema de frenado.",
    image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Stopping_power_(32804787015).jpg?width=900",
    href: "/productos",
  },

  {
    title: "Filtros automotrices",
    description:
      "Conoce componentes para la filtración y el mantenimiento.",
    image:
      "https://images.unsplash.com/photo-1688385274085-a009a3c5d4b7?auto=format&fit=crop&w=900&q=80",
    href: "/productos",
  },
];

export default function ProductCategories() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            Nuestro catálogo
          </p>

          <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-5xl">
            Encuentra los repuestos que necesitas.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explora nuestras principales categorías de repuestos
            automotrices.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categorias.map((categoria) => (
            <CategoryCard
              key={categoria.title}
              {...categoria}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
