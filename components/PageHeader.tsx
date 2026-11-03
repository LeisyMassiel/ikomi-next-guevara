type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[#0B101A] px-6 py-20 text-white lg:px-8 lg:py-24">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[2px] w-9 bg-red-600" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            {eyebrow}
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
