import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { getProductBySlug, getProductsByCategory, CATEGORIES } from "@/lib/mock-data";
import { AddToCartButton } from "@/components/store/add-to-cart-button";
import { ProductCard } from "@/components/store/product-card";
import { Badge } from "@/components/ui/badge";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product?.name ?? "Producto" };
}

const CATEGORY_EMOJIS: Record<string, string> = {
  medicamentos: "💊",
  "cuidado-personal": "🧴",
  bebes: "🍼",
  vitaminas: "💪",
  snacks: "🥤",
  "productos-medicos": "🩺",
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const category = CATEGORIES.find((c) => c.id === product.categoryId);
  const related = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const discount = product.compareAtPrice
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : null;

  return (
    <div className="max-w-lg mx-auto">
      {/* Back */}
      <div className="px-4 py-3">
        <Link
          href={`/tienda/categorias/${product.categorySlug}`}
          className="inline-flex items-center gap-1 text-sm text-navy/40 active:text-teal tracking-wide"
        >
          <ChevronLeft className="w-4 h-4" />
          {category?.name ?? "Volver"}
        </Link>
      </div>

      {/* Product image */}
      <div className="relative aspect-square bg-gradient-to-br from-navy-50 to-warm-50/50 flex items-center justify-center mx-4 rounded-3xl border border-navy/5">
        <span className="text-8xl">
          {CATEGORY_EMOJIS[product.categorySlug] ?? "📦"}
        </span>
        {discount && (
          <Badge className="absolute top-4 left-4 bg-capsule-red text-white border-0 rounded-full text-sm px-3 py-1 shadow-lg">
            -{discount}%
          </Badge>
        )}
        {product.requiresPrescription && (
          <Badge className="absolute top-4 right-4 bg-warm text-white border-0 rounded-full px-3 py-1 shadow-lg">
            Requiere receta
          </Badge>
        )}
      </div>

      {/* Info */}
      <div className="px-4 mt-5">
        <p className="text-xs text-teal font-semibold uppercase tracking-[0.2em]">
          {product.brand}
        </p>
        <h1 className="font-display text-2xl text-navy mt-1">
          {product.name}
        </h1>

        {/* Price */}
        <div className="flex items-center gap-3 mt-3">
          <span className="text-3xl font-bold text-navy">
            S/{product.price.toFixed(2)}
          </span>
          {product.compareAtPrice && (
            <span className="text-lg text-navy/25 line-through">
              S/{product.compareAtPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Stock */}
        <div className="flex items-center gap-2 mt-3">
          <div
            className={`w-2 h-2 rounded-full ${
              product.stock > 10
                ? "bg-pharma-green"
                : product.stock > 0
                  ? "bg-warm"
                  : "bg-capsule-red"
            }`}
          />
          <span className="text-sm text-navy/40">
            {product.stock > 10
              ? "En stock"
              : product.stock > 0
                ? `Últimas ${product.stock} unidades`
                : "Agotado"}
          </span>
          <span className="text-sm text-navy/25">· {product.unit}</span>
        </div>

        {/* Description */}
        <div className="mt-5 pt-5 border-t border-navy/5">
          <h2 className="font-semibold text-navy text-sm mb-2 tracking-wide">
            Descripción
          </h2>
          <p className="text-navy/50 text-sm leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-navy-50 text-navy/40 rounded-full px-3 py-1 border border-navy/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Add to cart */}
        <div className="mt-6">
          <AddToCartButton product={product} />
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-10 px-4 pb-8">
          <h2 className="font-semibold text-navy text-sm tracking-wide mb-3">
            Productos relacionados
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
