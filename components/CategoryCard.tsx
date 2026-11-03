import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type CategoryCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function CategoryCard({
  title,
  description,
  image,
  href,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-[380px] overflow-hidden rounded-2xl bg-slate-950 text-white"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

      <div className="relative mt-auto flex w-full items-end justify-between gap-4 p-7">
        <div>
          <h3 className="text-2xl font-extrabold">
            {title}
          </h3>

          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-200">
            {description}
          </p>
        </div>

        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-red-700">
          <ArrowUpRight size={22} />
        </span>
      </div>
    </Link>
  );
}
