import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/lib/constants";

const LINK_GROUPS = [
  {
    title: "Tienda",
    links: [
      { label: "Todos los productos", href: "/tienda" },
      { label: "Medicamentos", href: "/tienda/categorias/medicamentos" },
      { label: "Vitaminas", href: "/tienda/categorias/vitaminas" },
      { label: "Cuidado personal", href: "/tienda/categorias/cuidado-personal" },
    ],
  },
  {
    title: "Información",
    links: [
      { label: "Sobre nosotros", href: "#nosotros" },
      { label: "Ubicación", href: "#ubicacion" },
      { label: "Zonas de delivery", href: "#" },
      { label: "Términos y condiciones", href: "#" },
    ],
  },
  {
    title: "Contacto",
    texts: [BRAND.address, BRAND.phone, BRAND.email],
  },
];

export function LandingFooter() {
  return (
    <footer className="bg-navy-900 text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src="/logo-leofar.png"
                alt="LEOFAR PHARMA"
                width={48}
                height={48}
                className="object-contain drop-shadow-md"
              />
              <div>
                <p className="font-display text-white text-lg leading-none tracking-wide">
                  LEOFAR
                </p>
                <p className="text-[9px] text-teal/60 tracking-[0.3em] mt-0.5">
                  PHARMA
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {BRAND.tagline}. Medicamentos, vitaminas y cuidado personal con
              delivery a domicilio.
            </p>
          </div>

          {/* Link groups */}
          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold text-white/70 tracking-[0.2em] uppercase mb-5">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links?.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-teal-light transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {group.texts?.map((text) => (
                  <li key={text} className="text-sm text-white/50">
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} LEOFAR PHARMA. Todos los
            derechos reservados.
          </p>
          <div className="flex items-center gap-8">
            {Object.entries(BRAND.social).map(([name, href]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/40 hover:text-teal-light transition-colors duration-300 capitalize tracking-wide"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
