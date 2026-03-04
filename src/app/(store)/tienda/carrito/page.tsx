"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";
import { useHydration } from "@/hooks/use-hydration";
import { DELIVERY_ZONES } from "@/lib/constants";
import { Skeleton } from "@/components/ui/skeleton";

const CATEGORY_EMOJIS: Record<string, string> = {
  medicamentos: "💊",
  "cuidado-personal": "🧴",
  bebes: "🍼",
  vitaminas: "💪",
  snacks: "🥤",
  "productos-medicos": "🩺",
};

export default function CartPage() {
  const hydrated = useHydration();
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const getSubtotal = useCartStore((s) => s.getSubtotal);
  const clearCart = useCartStore((s) => s.clearCart);

  if (!hydrated) {
    return (
      <div className="max-w-lg mx-auto px-4 py-4 space-y-4">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-20 w-full rounded-2xl" />
        <Skeleton className="h-20 w-full rounded-2xl" />
        <Skeleton className="h-40 w-full rounded-2xl" />
      </div>
    );
  }

  const subtotal = getSubtotal();
  const deliveryFee = DELIVERY_ZONES[0].fee;
  const freeDeliveryThreshold = 50;
  const isFreeDelivery = subtotal >= freeDeliveryThreshold;
  const total = subtotal + (isFreeDelivery ? 0 : deliveryFee);

  if (items.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-navy-50 rounded-3xl flex items-center justify-center mx-auto mb-5 border border-navy/5">
          <ShoppingBag className="w-10 h-10 text-navy/15" />
        </div>
        <h1 className="font-display text-xl text-navy mb-2">
          Tu carrito está vacío
        </h1>
        <p className="text-navy/40 text-sm mb-8">
          Agrega productos para empezar tu pedido
        </p>
        <Link href="/tienda">
          <Button className="bg-teal hover:bg-teal-dark text-white rounded-full px-8 shadow-lg shadow-teal/20">
            Explorar productos
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-display text-xl text-navy">Mi Carrito</h1>
        <button
          onClick={clearCart}
          className="text-xs text-capsule-red/70 font-medium hover:text-capsule-red tracking-wide"
        >
          Vaciar carrito
        </button>
      </div>

      {/* Free delivery progress */}
      {!isFreeDelivery && (
        <div className="bg-teal-50 rounded-2xl p-4 mb-5 border border-teal/10">
          <p className="text-sm text-navy font-medium">
            🚚 Agrega S/{(freeDeliveryThreshold - subtotal).toFixed(2)} más para
            delivery gratis
          </p>
          <div className="mt-2 h-1.5 bg-teal/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-teal rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(100, (subtotal / freeDeliveryThreshold) * 100)}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Items */}
      <div className="space-y-3">
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl p-3 border border-navy/5 flex gap-3"
          >
            <div className="w-20 h-20 bg-navy-50 rounded-xl flex items-center justify-center shrink-0 border border-navy/5">
              <span className="text-2xl">
                {CATEGORY_EMOJIS[product.categorySlug] ?? "📦"}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-navy line-clamp-1">
                {product.name}
              </h3>
              <p className="text-[11px] text-navy/30 mt-0.5 tracking-wide">
                {product.brand}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-navy">
                  S/{(product.price * quantity).toFixed(2)}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="w-7 h-7 bg-navy-50 rounded-lg flex items-center justify-center active:bg-navy-100"
                  >
                    <Minus className="w-3.5 h-3.5 text-navy/40" />
                  </button>
                  <span className="w-6 text-center text-sm font-medium text-navy">
                    {quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="w-7 h-7 bg-navy-50 rounded-lg flex items-center justify-center active:bg-navy-100"
                  >
                    <Plus className="w-3.5 h-3.5 text-navy/40" />
                  </button>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="w-7 h-7 ml-1 text-capsule-red/40 hover:text-capsule-red flex items-center justify-center"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 bg-white rounded-2xl p-5 border border-navy/5">
        <div className="space-y-2.5 text-sm">
          <div className="flex justify-between text-navy/50">
            <span>Subtotal</span>
            <span>S/{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-navy/50">
            <span>Delivery</span>
            <span className={isFreeDelivery ? "text-pharma-green font-medium" : ""}>
              {isFreeDelivery ? "Gratis" : `S/${deliveryFee.toFixed(2)}`}
            </span>
          </div>
          <div className="border-t border-navy/5 pt-2.5 flex justify-between font-bold text-navy text-base">
            <span>Total</span>
            <span>S/{total.toFixed(2)}</span>
          </div>
        </div>

        <Button className="w-full mt-5 bg-teal hover:bg-teal-dark text-white rounded-xl h-12 text-base font-semibold tracking-wide shadow-lg shadow-teal/20 transition-all duration-300">
          Realizar pedido
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
