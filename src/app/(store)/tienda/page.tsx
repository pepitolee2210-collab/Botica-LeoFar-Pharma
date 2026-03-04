import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CATEGORIES, getFeaturedProducts, getDiscountedProducts } from "@/lib/mock-data";
import { ProductCard } from "@/components/store/product-card";

export default function StorePage() {
  const featured = getFeaturedProducts();
  const discounted = getDiscountedProducts();

  return (
    <div className="max-w-lg mx-auto">
      {/* Promo banner */}
      <div className="mx-4 mt-4 bg-gradient-to-br from-navy via-navy-dark to-navy rounded-2xl p-5 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal/10 rounded-full blur-2xl" />
        <div className="relative">
          <p className="text-[10px] font-medium text-teal-light tracking-[0.2em] uppercase">
            Bienvenido a
          </p>
          <h1 className="font-display text-xl mt-1 tracking-wide">LEOFAR PHARMA</h1>
          <p className="text-sm text-white/40 mt-1">
            Delivery gratis en pedidos mayores a S/50
          </p>
        </div>
      </div>

      {/* Categories horizontal scroll */}
      <section className="mt-6">
        <div className="px-4 flex items-center justify-between mb-3">
          <h2 className="font-semibold text-navy text-sm tracking-wide">Categorías</h2>
          <Link
            href="/tienda/categorias"
            className="text-xs text-teal font-medium flex items-center tracking-wide"
          >
            Ver todas <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/tienda/categorias/${cat.slug}`}
              className="flex-shrink-0 w-20 text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-navy-50 rounded-2xl flex items-center justify-center group-active:scale-95 transition-transform border border-navy/5 group-hover:border-teal/20">
                <span className="text-2xl">{cat.icon}</span>
              </div>
              <p className="text-[11px] font-medium text-navy/60 mt-1.5 line-clamp-2 tracking-wide">
                {cat.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Ofertas */}
      {discounted.length > 0 && (
        <section className="mt-8">
          <div className="px-4 mb-3">
            <h2 className="font-semibold text-navy text-sm tracking-wide">
              Ofertas del día
            </h2>
          </div>
          <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar">
            {discounted.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-40">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Destacados */}
      <section className="mt-8 px-4 pb-8">
        <h2 className="font-semibold text-navy text-sm tracking-wide mb-3">
          Productos destacados
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
