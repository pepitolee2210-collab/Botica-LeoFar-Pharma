import Link from "next/link";
import { CATEGORIES } from "@/lib/mock-data";
import { ArrowUpRight } from "lucide-react";

export function LandingCategories() {
  return (
    <section id="categorias" className="py-24 bg-warm-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-teal" />
            <p className="text-sm font-medium text-teal tracking-[0.2em] uppercase">
              Categorías
            </p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy">
            Todo lo que necesitas en un solo lugar
          </h2>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {CATEGORIES.map((category, i) => (
            <Link
              key={category.id}
              href={`/tienda/categorias/${category.slug}`}
              className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-navy/5 hover:border-teal/30 transition-all duration-500 hover:shadow-xl hover:shadow-teal/5 hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">
                {category.icon}
              </div>

              {/* Name */}
              <h3 className="text-sm font-semibold text-navy group-hover:text-teal transition-colors duration-300">
                {category.name}
              </h3>
              <p className="text-xs text-navy/60 mt-1">
                {category.productCount} productos
              </p>

              {/* Arrow indicator */}
              <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 text-navy/0 group-hover:text-teal transition-all duration-300 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
