import { LandingHero } from "@/components/landing/hero";
import { LandingCategories } from "@/components/landing/categories";
import { LandingFeatured } from "@/components/landing/featured";
import { LandingAbout } from "@/components/landing/about";
import { LandingLocation } from "@/components/landing/location";
import { LandingFooter } from "@/components/landing/footer";
import { LandingHeader } from "@/components/landing/header";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
import { SplashScreen } from "@/components/splash-screen";

export default function LandingPage() {
  return (
    <>
      <SplashScreen />
      <main className="min-h-screen bg-white">
        <LandingHeader />
        <LandingHero />
        <LandingCategories />
        <LandingFeatured />
        <LandingAbout />
        <LandingLocation />
        <LandingFooter />
        <WhatsAppButton />
      </main>
    </>
  );
}
