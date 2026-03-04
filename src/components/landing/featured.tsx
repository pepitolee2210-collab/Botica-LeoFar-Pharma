import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { getFeaturedProducts } from "@/lib/mock-data";

const CATEGORY_EMOJIS: Record<string, string> = {
  medicamentos: "💊",
  "cuidado-personal": "🧴",
  bebes: "🍼",
  vitaminas: "💪",
  snacks: "🥤",
  "productos-medicos": "🩺",
};

export function LandingFeatured() {
  const products = getFeaturedProducts();

  return (
    <section id="productos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-teal" />
              <p className="text-sm font-medium text-teal tracking-[0.2em] uppercase">
                Destacados
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy">
              Productos populares
            </h2>
          </div>
          <Link
            href="/tienda"
            className="hidden sm:flex items-center gap-2 text-navy/60 hover:text-teal text-sm font-medium transition-colors group"
          >
            Ver todos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => {
            const discount = product.compareAtPrice
              ? Math.round((1 - product.price / product.compareAtPrice) * 100)
              : null;

            return (
              <Link
                key={product.id}
                href={`/tienda/producto/${product.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-navy/5 hover:border-teal/20 hover:shadow-2xl hover:shadow-navy/5 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-square bg-gradient-to-br from-navy-50 to-warm-50 flex items-center justify-center overflow-hidden">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-700">
                    {CATEGORY_EMOJIS[product.categorySlug] ?? "📦"}
                  </span>
                  {discount && (
                    <Badge className="absolute top-3 left-3 bg-capsule-red text-white border-0 rounded-full text-[10px]">
                      -{discount}%
                    </Badge>
                  )}
                  {product.requiresPrescription && (
                    <Badge className="absolute top-3 right-3 bg-warm text-white border-0 rounded-full text-[10px]">
                      Receta
                    </Badge>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-[10px] text-teal font-semibold tracking-[0.15em] uppercase">
                    {product.brand}
                  </p>
                  <h3 className="font-medium text-navy text-sm line-clamp-2 min-h-[2.5rem] mt-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-lg font-bold text-navy">
                      S/{product.price.toFixed(2)}
                    </span>
                    {product.compareAtPrice && (
                      <span className="text-xs text-navy/50 line-through">
                        S/{product.compareAtPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <Button
                    size="sm"
                    className="w-full mt-3 bg-navy/5 text-navy hover:bg-teal hover:text-white rounded-xl text-xs h-9 transition-all duration-300"
                  >
                    <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
                    Agregar
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-10 text-center">
          <Link href="/tienda">
            <Button
              variant="outline"
              className="rounded-full border-navy/20 text-navy hover:border-teal hover:text-teal px-8"
            >
              Ver todos los productos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
