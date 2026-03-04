import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CATEGORIES } from "@/lib/mock-data";

export const metadata = {
  title: "Categorías",
};

export default function CategoriesPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <h1 className="font-display text-xl text-navy mb-5">Categorías</h1>

      <div className="space-y-3">
        {CATEGORIES.map((category) => (
          <Link
            key={category.id}
            href={`/tienda/categorias/${category.slug}`}
            className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-navy/5 active:scale-[0.98] transition-all duration-300 hover:border-teal/20 hover:shadow-md hover:shadow-teal/5"
          >
            <div className="w-14 h-14 bg-navy-50 rounded-2xl flex items-center justify-center shrink-0 border border-navy/5">
              <span className="text-3xl">{category.icon}</span>
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-navy text-sm tracking-wide">
                {category.name}
              </h2>
              <p className="text-xs text-navy/40">
                {category.productCount} productos
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-navy/15" />
          </Link>
        ))}
      </div>
    </div>
  );
}
