"use client";

import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { searchProducts } from "@/lib/mock-data";
import { ProductCard } from "@/components/store/product-card";
import { Suspense } from "react";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const results = query ? searchProducts(query) : [];

  if (!query) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-navy/5">
          <Search className="w-8 h-8 text-navy/15" />
        </div>
        <p className="text-navy/40">Escribe algo para buscar productos</p>
      </div>
    );
  }

  return (
    <>
      <p className="text-sm text-navy/40 mb-4 tracking-wide">
        {results.length} resultado{results.length !== 1 ? "s" : ""} para &quot;
        {query}&quot;
      </p>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-navy/40">
            No encontramos productos para &quot;{query}&quot;
          </p>
          <p className="text-sm text-navy/25 mt-1">Intenta con otro término</p>
        </div>
      )}
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-4">
      <h1 className="font-display text-xl text-navy mb-4">Buscar</h1>
      <Suspense
        fallback={
          <div className="text-center py-20">
            <p className="text-navy/30">Cargando...</p>
          </div>
        }
      >
        <SearchResults />
      </Suspense>
    </div>
  );
}
