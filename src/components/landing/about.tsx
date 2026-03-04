import { Heart, Award, Users, Leaf } from "lucide-react";

const VALUES = [
  {
    icon: Heart,
    title: "Compromiso",
    description: "Cuidamos la salud de nuestros clientes como si fuera la nuestra.",
  },
  {
    icon: Award,
    title: "Calidad",
    description: "Solo trabajamos con laboratorios certificados y productos garantizados.",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    description: "Nuestro equipo de químicos farmacéuticos te asesora en cada compra.",
  },
  {
    icon: Leaf,
    title: "Accesibilidad",
    description: "Precios justos y opciones genéricas para que todos cuiden su salud.",
  },
];

const STATS = [
  { value: "10+", label: "Años de experiencia" },
  { value: "5,000+", label: "Clientes satisfechos" },
  { value: "2,000+", label: "Productos disponibles" },
];

export function LandingAbout() {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      {/* Navy background panel */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy-900" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Text content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-teal" />
              <p className="text-sm font-medium text-teal-light tracking-[0.2em] uppercase">
                Sobre nosotros
              </p>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Más de 10 años cuidando tu salud
            </h2>

            <p className="mt-6 text-white/75 leading-relaxed text-lg">
              En <strong className="text-teal-light font-medium">LEOFAR PHARMA</strong>,
              somos una botica comprometida con el bienestar de nuestra
              comunidad. Ofrecemos una amplia variedad de productos
              farmacéuticos con la asesoría de profesionales de la salud.
            </p>

            <p className="mt-4 text-white/60 leading-relaxed">
              Ahora con nuestro servicio de delivery, llevar salud a tu hogar
              es más fácil que nunca.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-display text-teal-light">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/60 mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Values grid */}
          <div className="grid grid-cols-2 gap-4">
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-teal/20 transition-all duration-500 ${
                  i === 1 ? "mt-8" : i === 3 ? "mt-8" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-teal-light" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">
                  {value.title}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
