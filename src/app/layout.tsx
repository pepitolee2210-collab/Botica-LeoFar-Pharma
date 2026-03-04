import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LEOFAR PHARMA | Tu salud, nuestra prioridad",
    template: "%s | LEOFAR PHARMA",
  },
  description:
    "Botica de confianza con los mejores productos farmacéuticos, cuidado personal y más. Delivery a domicilio en Lima.",
  applicationName: "LEOFAR PHARMA",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "LEOFAR PHARMA",
  },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: "LEOFAR PHARMA",
    title: "LEOFAR PHARMA | Tu salud, nuestra prioridad",
    description:
      "Compra medicamentos, vitaminas, cuidado personal y más. Delivery a domicilio.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1B3A5C",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${dmSerif.variable} ${outfit.variable} font-sans antialiased`}
      >
        {children}
        <Toaster
          position="top-center"
          richColors
          toastOptions={{
            style: {
              fontFamily: "var(--font-outfit)",
            },
          }}
        />
      </body>
    </html>
  );
}
