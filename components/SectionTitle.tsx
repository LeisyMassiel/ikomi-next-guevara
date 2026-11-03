type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : "text-left"}`}>
      <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-red-600">
        IKOMI PERÚ
      </span>

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-slate-600 ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
