"use client";

import {
  User,
  MapPin,
  Package,
  Heart,
  Settings,
  LogOut,
  ChevronRight,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const MENU_ITEMS = [
  { icon: Package, label: "Mis Pedidos", description: "Historial y seguimiento" },
  { icon: MapPin, label: "Mis Direcciones", description: "Direcciones de entrega" },
  { icon: Heart, label: "Favoritos", description: "Productos guardados" },
  { icon: Settings, label: "Configuración", description: "Ajustes de cuenta" },
];

export default function AccountPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      {/* Profile card */}
      <div className="bg-gradient-to-br from-navy via-navy-dark to-navy rounded-2xl p-5 text-white mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal/10 rounded-full blur-3xl" />
        <div className="relative flex items-center gap-4">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
            <User className="w-8 h-8 text-white/60" />
          </div>
          <div>
            <h1 className="font-display text-lg">Invitado</h1>
            <p className="text-sm text-white/40">
              Inicia sesión para hacer pedidos
            </p>
          </div>
        </div>
        <Button
          variant="secondary"
          className="mt-4 w-full bg-white/10 hover:bg-white/15 text-white border-0 rounded-xl backdrop-blur-sm"
        >
          Iniciar sesión
        </Button>
      </div>

      {/* Install PWA prompt */}
      <div className="bg-teal-50 rounded-2xl p-4 mb-6 flex items-center gap-3 border border-teal/10">
        <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center shrink-0">
          <Download className="w-5 h-5 text-teal" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-navy">
            Instala nuestra app
          </p>
          <p className="text-xs text-navy/40">
            Acceso rápido desde tu pantalla de inicio
          </p>
        </div>
        <Button
          size="sm"
          className="bg-teal hover:bg-teal-dark text-white rounded-xl text-xs shadow-sm shadow-teal/20"
        >
          Instalar
        </Button>
      </div>

      {/* Menu */}
      <div className="space-y-2">
        {MENU_ITEMS.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-4 bg-white rounded-2xl p-4 border border-navy/5 active:scale-[0.98] transition-all duration-300 hover:border-teal/15 text-left"
          >
            <div className="w-10 h-10 bg-navy-50 rounded-xl flex items-center justify-center border border-navy/5">
              <item.icon className="w-5 h-5 text-navy/40" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-navy text-sm tracking-wide">
                {item.label}
              </p>
              <p className="text-xs text-navy/30">{item.description}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-navy/10" />
          </button>
        ))}
      </div>

      {/* Logout */}
      <button className="flex items-center gap-3 text-capsule-red/60 mt-6 px-4 text-sm font-medium tracking-wide hover:text-capsule-red transition-colors">
        <LogOut className="w-5 h-5" />
        Cerrar sesión
      </button>
    </div>
  );
}
