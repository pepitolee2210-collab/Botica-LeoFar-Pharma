"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const STORE_SPLASH_DURATION = 2200;
const EXIT_DURATION = 500;

export function StoreSplash() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"enter" | "exit">("enter");

  useEffect(() => {
    const shown = sessionStorage.getItem("leofar-store-splash");
    if (shown) {
      setVisible(false);
      return;
    }

    sessionStorage.setItem("leofar-store-splash", "1");
    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => setPhase("exit"), STORE_SPLASH_DURATION);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, STORE_SPLASH_DURATION + EXIT_DURATION);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all ease-out ${
        phase === "exit"
          ? "opacity-0 scale-[1.02] duration-500"
          : "opacity-100 scale-100 duration-300"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at 50% 45%, #1B3A5C 0%, #0A1626 80%)",
      }}
    >
      {/* Atmospheric glow */}
      <div className="absolute w-64 h-64 bg-teal/8 rounded-full blur-[80px] pointer-events-none" />

      {/* Logo with orbiting particles */}
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Outer orbit ring */}
        <div className="absolute inset-[-20px] rounded-full border border-dashed border-white/8" />

        {/* Inner orbit ring */}
        <div className="absolute inset-[-8px] rounded-full border border-white/5" />

        {/* Primary orbiting particle */}
        <div
          className="absolute inset-[-20px]"
          style={{
            animation:
              "spin 1.8s linear infinite, store-orbit-fade-in 0.4s ease-out both",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-teal shadow-[0_0_14px_rgba(42,157,143,0.7)]" />
        </div>

        {/* Secondary particle (reverse) */}
        <div
          className="absolute inset-[-30px]"
          style={{
            animation:
              "spin 2.8s linear infinite reverse, store-orbit-fade-in 0.6s ease-out both",
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-teal-light/50 shadow-[0_0_8px_rgba(61,184,168,0.4)]" />
        </div>

        {/* Tertiary particle */}
        <div
          className="absolute inset-[-12px]"
          style={{
            animation:
              "spin 2.2s linear infinite, store-orbit-fade-in 0.5s ease-out both",
          }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-pharma-green/50" />
        </div>

        {/* Logo with breathing pulse */}
        <div
          style={{
            animation:
              "splash-logo-enter 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.1s both",
          }}
        >
          <div style={{ animation: "store-breathe 2s ease-in-out infinite" }}>
            <Image
              src="/logo-leofar.png"
              alt="LEOFAR PHARMA"
              width={72}
              height={72}
              className="object-contain drop-shadow-[0_0_30px_rgba(42,157,143,0.25)]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Brand text */}
      <div className="mt-6 text-center">
        <p
          className="font-display text-white text-lg tracking-[0.15em]"
          style={{
            animation: "splash-text-reveal 0.6s ease-out 0.5s both",
          }}
        >
          LEOFAR PHARMA
        </p>
        <p
          className="text-white/35 text-xs mt-2 tracking-wider"
          style={{
            animation: "splash-text-reveal 0.6s ease-out 0.8s both",
          }}
        >
          Preparando tu tienda...
        </p>
      </div>

      {/* Scanning progress line */}
      <div className="absolute bottom-14 sm:bottom-12 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-[2px] bg-white/8 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #2A9D8F, #3DB8A8)",
            animation: `splash-progress ${STORE_SPLASH_DURATION}ms cubic-bezier(0.4,0,0.2,1) forwards`,
          }}
        />
      </div>

      {/* Animated dots */}
      <div
        className="absolute bottom-20 sm:bottom-18 flex gap-1.5"
        style={{ animation: "splash-text-reveal 0.5s ease-out 1s both" }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full bg-teal"
          style={{
            animation: "store-dot-bounce 1.4s ease-in-out 0s infinite",
          }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full bg-teal"
          style={{
            animation: "store-dot-bounce 1.4s ease-in-out 0.15s infinite",
          }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full bg-teal"
          style={{
            animation: "store-dot-bounce 1.4s ease-in-out 0.3s infinite",
          }}
        />
      </div>
    </div>
  );
}
