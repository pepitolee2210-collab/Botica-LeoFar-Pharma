"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#categorias", label: "Categorías" },
  { href: "#productos", label: "Productos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-navy/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo-leofar.png"
              alt="LEOFAR PHARMA"
              width={44}
              height={44}
              className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <p className="font-display text-white text-lg leading-none tracking-wide">
                LEOFAR
              </p>
              <p className="text-[9px] text-teal-light tracking-[0.3em] mt-0.5">
                PHARMA
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-teal-light transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BRAND.phone}`}
              className="hidden lg:flex items-center gap-1.5 text-sm text-teal-light"
            >
              <Phone className="w-3.5 h-3.5" />
              {BRAND.phone}
            </a>
            <Link href="/tienda">
              <Button className="bg-teal hover:bg-teal-light text-white rounded-full px-6 h-9 text-sm font-medium tracking-wide shadow-lg shadow-teal/20 transition-all duration-300 hover:shadow-teal/40">
                Comprar ahora
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white/80"
              aria-label="Menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-navy-dark/98 backdrop-blur-xl border-t border-white/5">
          <nav className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base text-white/80 hover:text-teal-light hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 px-4">
              <Link href="/tienda" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-teal hover:bg-teal-light text-white rounded-full">
                  Ir a la Tienda
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
