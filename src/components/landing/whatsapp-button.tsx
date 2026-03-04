"use client";

import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hola, quisiera hacer una consulta sobre productos."
  );
  const url = `https://wa.me/${BRAND.whatsapp}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-110 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
