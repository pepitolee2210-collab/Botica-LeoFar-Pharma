"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";
import type { Product } from "@/lib/mock-data";
import { toast } from "sonner";

export function AddToCartButton({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = () => {
    addItem(product, quantity);
    toast.success(`${product.name} (x${quantity}) agregado al carrito`);
    setQuantity(1);
  };

  return (
    <div className="flex items-center gap-3">
      {/* Quantity selector */}
      <div className="flex items-center gap-1 bg-navy-50 rounded-xl p-1">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white active:bg-white transition-colors"
          aria-label="Reducir cantidad"
        >
          <Minus className="w-4 h-4 text-navy/60" />
        </button>
        <span className="w-8 text-center font-semibold text-navy">
          {quantity}
        </span>
        <button
          onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
          className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white active:bg-white transition-colors"
          aria-label="Aumentar cantidad"
        >
          <Plus className="w-4 h-4 text-navy/60" />
        </button>
      </div>

      {/* Add button */}
      <Button
        onClick={handleAdd}
        disabled={product.stock === 0}
        className="flex-1 bg-teal hover:bg-teal-dark active:bg-teal-dark text-white rounded-xl h-11 text-sm font-semibold tracking-wide shadow-lg shadow-teal/20 transition-all duration-300"
      >
        <ShoppingCart className="w-4 h-4 mr-2" />
        Agregar · S/{(product.price * quantity).toFixed(2)}
      </Button>
    </div>
  );
}
