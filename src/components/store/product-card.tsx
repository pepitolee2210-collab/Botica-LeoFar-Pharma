"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/stores/cart-store";
import type { Product } from "@/lib/mock-data";
import { toast } from "sonner";

const CATEGORY_EMOJIS: Record<string, string> = {
  medicamentos: "💊",
  "cuidado-personal": "🧴",
  bebes: "🍼",
  vitaminas: "💪",
  snacks: "🥤",
  "productos-medicos": "🩺",
};

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success(`${product.name} agregado al carrito`);
  };

  const discount = product.compareAtPrice
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : null;

  return (
    <Link
      href={`/tienda/producto/${product.slug}`}
      className="group bg-white rounded-2xl overflow-hidden border border-navy/5 active:scale-[0.97] transition-all duration-300 hover:shadow-lg hover:shadow-navy/5 hover:border-teal/15"
    >
      {/* Image */}
      <div className="relative aspect-square bg-gradient-to-br from-navy-50/80 to-warm-50/50 flex items-center justify-center">
        <span className="text-4xl group-hover:scale-110 group-active:scale-95 transition-transform duration-500">
          {CATEGORY_EMOJIS[product.categorySlug] ?? "📦"}
        </span>
        {discount && (
          <Badge className="absolute top-2 left-2 bg-capsule-red text-white border-0 rounded-full text-[10px] px-2 shadow-sm">
            -{discount}%
          </Badge>
        )}
        {product.requiresPrescription && (
          <Badge className="absolute top-2 right-2 bg-warm text-white border-0 rounded-full text-[10px] px-1.5 shadow-sm">
            Rx
          </Badge>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-[10px] text-teal font-semibold uppercase tracking-[0.15em]">
          {product.brand}
        </p>
        <h3 className="text-sm font-medium text-navy line-clamp-2 min-h-[2.5rem] mt-0.5 leading-snug">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="text-base font-bold text-navy">
              S/{product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <span className="text-[11px] text-navy/25 line-through ml-1.5">
                S/{product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="w-8 h-8 bg-navy/5 hover:bg-teal active:bg-teal-dark text-navy/40 hover:text-white active:text-white rounded-xl flex items-center justify-center transition-all duration-300"
            aria-label="Agregar al carrito"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}
