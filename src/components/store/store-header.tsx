"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, Home } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export function StoreHeader() {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/tienda/buscar?q=${encodeURIComponent(query.trim())}`);
      setIsSearching(false);
      setQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-navy to-navy-dark shadow-lg shadow-navy/20">
      <div className="max-w-lg mx-auto px-4 h-14 flex items-center gap-3">
        {isSearching ? (
          <>
            <form onSubmit={handleSearch} className="flex-1 flex gap-2">
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar productos..."
                autoFocus
                className="flex-1 h-9 bg-white/10 border-white/10 text-white placeholder:text-white/40 rounded-xl focus-visible:ring-teal/40 focus-visible:border-teal/30"
              />
            </form>
            <button
              onClick={() => {
                setIsSearching(false);
                setQuery("");
              }}
              className="text-white/60 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </>
        ) : (
          <>
            <Link href="/tienda" className="flex items-center gap-2 group">
              <Image
                src="/logo-leofar.png"
                alt="LEOFAR PHARMA"
                width={36}
                height={36}
                className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <p className="font-display text-white text-sm leading-none tracking-wide">
                  LEOFAR
                </p>
                <p className="text-[7px] text-teal-light/60 tracking-[0.25em] mt-px">
                  PHARMA
                </p>
              </div>
            </Link>

            <div className="flex-1" />

            <Link
              href="/"
              className="w-9 h-9 flex items-center justify-center text-white/50 hover:text-teal-light transition-colors rounded-xl hover:bg-white/5"
              aria-label="Volver al inicio"
            >
              <Home className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setIsSearching(true)}
              className="w-9 h-9 flex items-center justify-center text-white/50 hover:text-teal-light transition-colors rounded-xl hover:bg-white/5"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </header>
  );
}
