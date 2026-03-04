export const BRAND = {
  name: "LEOFAR PHARMA",
  tagline: "Tu salud, nuestra prioridad",
  description:
    "Botica de confianza con los mejores productos farmacéuticos, cuidado personal y más. Delivery a domicilio.",
  phone: "+51923106678",
  whatsapp: "51923106678",
  email: "contacto@leofarpharma.pe",
  address: "Jr. Huanuco Mz. N1 LT 24, Chimbote, Perú",
  schedule: {
    weekdays: "Lunes a Sábado: 7:00 AM - 11:00 PM",
    weekends: "Domingos: 7:00 AM - 10:00 PM",
  },
  social: {
    facebook: "https://facebook.com/leofarpharma",
    instagram: "https://instagram.com/leofarpharma",
    tiktok: "https://tiktok.com/@leofarpharma",
  },
} as const;

export const DELIVERY_ZONES = [
  { id: 1, name: "Centro", fee: 3.5, estimatedMinutes: "20-30" },
  { id: 2, name: "Norte", fee: 5.0, estimatedMinutes: "30-45" },
  { id: 3, name: "Sur", fee: 5.0, estimatedMinutes: "30-45" },
  { id: 4, name: "Este", fee: 6.0, estimatedMinutes: "40-60" },
] as const;

export const ORDER_STATUSES = {
  new: { label: "Nuevo", color: "bg-blue-500" },
  preparing: { label: "En preparación", color: "bg-yellow-500" },
  on_the_way: { label: "En camino", color: "bg-purple-500" },
  delivered: { label: "Entregado", color: "bg-green-500" },
  cancelled: { label: "Cancelado", color: "bg-red-500" },
} as const;
