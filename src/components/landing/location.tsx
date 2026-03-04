import { MapPin, Clock, Phone, Navigation, ExternalLink } from "lucide-react";
import { BRAND } from "@/lib/constants";

// Coordenadas exactas de Jr. Huanuco, Chimbote, Perú
const LAT = -9.0883080;
const LNG = -78.5688314;
const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`;
const GOOGLE_MAPS_EMBED = `https://www.google.com/maps?q=${LAT},${LNG}&z=17&output=embed`;

export function LandingLocation() {
  return (
    <section id="ubicacion" className="py-24 bg-warm-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-teal" />
            <p className="text-sm font-medium text-teal tracking-[0.2em] uppercase">
              Visítanos
            </p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy">
            Encuéntranos en Chimbote
          </h2>
          <p className="text-navy/65 mt-4 text-lg leading-relaxed">
            Estamos ubicados en una zona accesible para que puedas visitarnos
            fácilmente.
          </p>
        </div>

        {/* Map container - full width with floating cards */}
        <div className="relative">
          {/* Map with custom border and shadow */}
          <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-navy/10 border border-navy/10 relative group">
            <div className="h-[420px] sm:h-[480px] lg:h-[520px] relative">
              <iframe
                src={GOOGLE_MAPS_EMBED}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de LEOFAR PHARMA"
              />

              {/* Custom marker overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none z-10">
                {/* Pulse ring */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6">
                  <div className="absolute inset-0 bg-teal/30 rounded-full animate-ping" />
                  <div className="absolute inset-1 bg-teal rounded-full" />
                </div>
                {/* Marker card */}
                <div className="bg-navy text-white px-4 py-2.5 rounded-2xl shadow-xl shadow-navy/30 mb-2 whitespace-nowrap relative">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-teal rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-display text-sm">LEOFAR PHARMA</p>
                      <p className="text-[10px] text-white/70 tracking-wide">
                        Botica de confianza
                      </p>
                    </div>
                  </div>
                  {/* Arrow pointing down */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-navy rotate-45 rounded-sm" />
                </div>
              </div>

              {/* Top gradient overlay for polish */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-warm-50/40 to-transparent pointer-events-none" />
            </div>

            {/* Bottom bar with CTA */}
            <div className="bg-navy px-5 py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-teal/20 flex items-center justify-center shrink-0">
                  <Navigation className="w-5 h-5 text-teal" />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-medium text-sm truncate">
                    {BRAND.address}
                  </p>
                  <p className="text-white/60 text-xs">Chimbote, Áncash</p>
                </div>
              </div>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-teal hover:bg-teal-dark text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-colors shadow-lg shadow-teal/20"
              >
                Cómo llegar
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Floating info cards - positioned over/below the map */}
          <div className="grid sm:grid-cols-3 gap-4 mt-6 lg:mt-[-4rem] lg:mx-8 lg:relative lg:z-20">
            {/* Dirección */}
            <div className="bg-white rounded-2xl p-5 border border-navy/5 shadow-lg shadow-navy/5 hover:shadow-xl hover:shadow-teal/10 hover:-translate-y-1 transition-all duration-500">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center mb-3 shadow-md shadow-teal/20">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-navy text-sm tracking-wide mb-1">
                Dirección
              </h3>
              <p className="text-navy/65 text-sm leading-relaxed">
                {BRAND.address}
              </p>
            </div>

            {/* Horario */}
            <div className="bg-white rounded-2xl p-5 border border-navy/5 shadow-lg shadow-navy/5 hover:shadow-xl hover:shadow-teal/10 hover:-translate-y-1 transition-all duration-500">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center mb-3 shadow-md shadow-navy/20">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-navy text-sm tracking-wide mb-1">
                Horario
              </h3>
              <p className="text-navy/65 text-sm leading-relaxed">
                {BRAND.schedule.weekdays}
              </p>
              <p className="text-navy/65 text-sm leading-relaxed">
                {BRAND.schedule.weekends}
              </p>
            </div>

            {/* Teléfono */}
            <div className="bg-white rounded-2xl p-5 border border-navy/5 shadow-lg shadow-navy/5 hover:shadow-xl hover:shadow-teal/10 hover:-translate-y-1 transition-all duration-500">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pharma-green to-teal flex items-center justify-center mb-3 shadow-md shadow-pharma-green/20">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-navy text-sm tracking-wide mb-1">
                Teléfono
              </h3>
              <p className="text-navy/65 text-sm">{BRAND.phone}</p>
              <a
                href={`tel:${BRAND.phone}`}
                className="inline-flex items-center gap-1 text-xs text-teal font-medium mt-1.5 hover:text-teal-dark transition-colors"
              >
                Llamar ahora
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
