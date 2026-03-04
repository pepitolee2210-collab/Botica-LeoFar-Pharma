import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Truck, Clock, ShieldCheck, ArrowRight } from "lucide-react";

const FEATURES = [
  { icon: Truck, text: "Delivery a domicilio" },
  { icon: Clock, text: "Abierto hasta las 10PM" },
  { icon: ShieldCheck, text: "Productos garantizados" },
];

export function LandingHero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100vh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy to-navy-dark" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal/3 blur-[100px]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal teal accent line — logo motif */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[1px] bg-gradient-to-l from-transparent via-teal/30 to-transparent rotate-[-35deg]" />
      <div className="absolute bottom-1/3 -left-20 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-teal/20 to-transparent rotate-[-35deg]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 md:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 border border-teal/30 bg-teal/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-teal-light text-sm tracking-wide">
                Abierto ahora
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Tu salud,
              <br />
              <span className="text-teal-light">nuestra prioridad</span>
            </h1>

            <p
              className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-md animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              Medicamentos, vitaminas, cuidado personal y más.
              Todo lo que necesitas, con delivery a tu puerta.
            </p>

            {/* CTAs */}
            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <Link href="/tienda">
                <Button
                  size="lg"
                  className="bg-teal hover:bg-teal-light text-white rounded-full px-8 h-14 text-base tracking-wide shadow-2xl shadow-teal/30 hover:shadow-teal/50 transition-all duration-500 group w-full sm:w-auto"
                >
                  Comprar ahora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#categorias">
                <Button
                  size="lg"
                  className="rounded-full px-8 h-14 text-base bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm w-full sm:w-auto tracking-wide transition-all duration-300"
                >
                  Explorar categorías
                </Button>
              </a>
            </div>

            {/* Feature pills */}
            <div
              className="mt-14 flex flex-wrap gap-6 animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              {FEATURES.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-teal-light" />
                  </div>
                  <span className="text-sm text-white/70 tracking-wide">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side — Logo showcase */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Glow behind logo */}
              <div className="absolute inset-0 bg-teal/10 rounded-full blur-[80px] scale-150" />

              {/* Logo container */}
              <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px] flex items-center justify-center">
                {/* Rotating ring */}
                <div className="absolute inset-0 rounded-full border border-teal/10 animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-dashed border-white/5" />

                {/* Logo image */}
                <div className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 flex items-center justify-center">
                  <Image
                    src="/logo-leofar.png"
                    alt="LEOFAR PHARMA"
                    width={256}
                    height={256}
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -left-4 sm:-left-8 top-4 sm:top-10 bg-navy-800/80 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-3.5 animate-bounce [animation-duration:4s]">
                <p className="text-lg sm:text-xl">🚚</p>
                <p className="text-[10px] sm:text-xs text-white/60 mt-1 tracking-wide">30 min</p>
              </div>
              <div className="absolute -right-2 sm:-right-4 bottom-8 sm:bottom-16 bg-navy-800/80 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 sm:p-3.5 animate-bounce [animation-duration:5s] [animation-delay:1.5s]">
                <p className="text-lg sm:text-xl">⭐</p>
                <p className="text-[10px] sm:text-xs text-white/60 mt-1 tracking-wide">4.9/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-warm-50 wave-bottom" />
    </section>
  );
}
