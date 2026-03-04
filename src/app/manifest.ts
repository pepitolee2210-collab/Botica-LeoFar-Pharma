import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LEOFAR PHARMA",
    short_name: "LEOFAR",
    description:
      "Tu botica de confianza. Compra medicamentos, cuidado personal y más con delivery a domicilio.",
    start_url: "/tienda",
    display: "standalone",
    background_color: "#EEF2F7",
    theme_color: "#1B3A5C",
    orientation: "portrait",
    categories: ["health", "shopping", "medical"],
    icons: [
      {
        src: "/icons/icon-192x192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-192x192.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
  };
}
