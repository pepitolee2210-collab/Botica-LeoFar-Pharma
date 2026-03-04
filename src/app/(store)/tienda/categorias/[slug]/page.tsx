import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/mock-data";
import { ProductCard } from "@/components/store/product-card";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  return { title: category?.name ?? "Categoría" };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  const products = getProductsByCategory(slug);

  return (
    <div className="max-w-lg mx-auto px-4 py-4">
      <Link
        href="/tienda/categorias"
        className="inline-flex items-center gap-1 text-sm text-navy/40 mb-4 active:text-teal tracking-wide"
      >
        <ChevronLeft className="w-4 h-4" />
        Categorías
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-navy-50 rounded-2xl flex items-center justify-center border border-navy/5">
          <span className="text-2xl">{category.icon}</span>
        </div>
        <div>
          <h1 className="font-display text-xl text-navy">{category.name}</h1>
          <p className="text-xs text-navy/40">{products.length} productos</p>
        </div>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-4xl mb-3">📦</p>
          <p className="text-navy/40">No hay productos en esta categoría aún.</p>
        </div>
      )}
    </div>
  );
}
