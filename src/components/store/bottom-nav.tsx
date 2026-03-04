"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid3X3, ShoppingCart, User } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";
import { useHydration } from "@/hooks/use-hydration";

const NAV_ITEMS = [
  { href: "/tienda", icon: Home, label: "Inicio" },
  { href: "/tienda/categorias", icon: Grid3X3, label: "Categorías" },
  { href: "/tienda/carrito", icon: ShoppingCart, label: "Carrito" },
  { href: "/tienda/cuenta", icon: User, label: "Mi Cuenta" },
];

export function BottomNav() {
  const pathname = usePathname();
  const hydrated = useHydration();
  const rawCount = useCartStore((s) => s.getItemCount());
  const itemCount = hydrated ? rawCount : 0;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-navy/5 pb-safe">
      <div className="max-w-lg mx-auto flex">
        {NAV_ITEMS.map(({ href, icon: Icon, label }) => {
          const isActive =
            href === "/tienda"
              ? pathname === "/tienda"
              : pathname.startsWith(href);
          const isCart = label === "Carrito";

          return (
            <Link
              key={href}
              href={href}
              className={`flex-1 flex flex-col items-center py-2 pt-3 transition-all duration-300 relative ${
                isActive
                  ? "text-navy"
                  : "text-navy/30 active:text-navy/50"
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 ${isActive ? "stroke-[2.5]" : "stroke-[1.5]"}`}
                />
                {isCart && itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 w-[18px] h-[18px] bg-teal text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm shadow-teal/30">
                    {itemCount > 9 ? "9+" : itemCount}
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] mt-1 tracking-wide ${
                  isActive ? "font-semibold text-navy" : "text-navy/30"
                }`}
              >
                {label}
              </span>
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-teal rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
