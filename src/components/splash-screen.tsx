"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const SPLASH_DURATION = 2700;
const EXIT_DURATION = 500;

export function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"enter" | "exit">("enter");

  useEffect(() => {
    const shown = sessionStorage.getItem("leofar-splash");
    if (shown) {
      setVisible(false);
      return;
    }

    sessionStorage.setItem("leofar-splash", "1");
    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => setPhase("exit"), SPLASH_DURATION);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, SPLASH_DURATION + EXIT_DURATION);

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
          ? "opacity-0 scale-[1.03] duration-500"
          : "opacity-100 scale-100 duration-300"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, #122840 0%, #0A1626 70%)",
      }}
    >
      {/* Atmospheric glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-teal/6 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-teal/4 blur-[80px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Pharma cross that draws itself before logo appears */}
      <div className="absolute pointer-events-none">
        <div
          className="w-[2px] h-10 bg-gradient-to-b from-transparent via-teal/40 to-transparent origin-center"
          style={{ animation: "splash-cross-v 0.4s ease-out 0.1s both" }}
        />
      </div>
      <div className="absolute pointer-events-none">
        <div
          className="h-[2px] w-10 bg-gradient-to-r from-transparent via-teal/40 to-transparent origin-center"
          style={{ animation: "splash-cross-h 0.4s ease-out 0.1s both" }}
        />
      </div>

      {/* Pulse rings emanating from logo */}
      <div className="absolute flex items-center justify-center pointer-events-none">
        <div
          className="w-28 h-28 rounded-full border border-teal/25"
          style={{ animation: "splash-ring 2s ease-out 0.6s both" }}
        />
      </div>
      <div className="absolute flex items-center justify-center pointer-events-none">
        <div
          className="w-28 h-28 rounded-full border border-teal/18"
          style={{ animation: "splash-ring 2s ease-out 0.9s both" }}
        />
      </div>
      <div className="absolute flex items-center justify-center pointer-events-none">
        <div
          className="w-28 h-28 rounded-full border border-teal/12"
          style={{ animation: "splash-ring 2s ease-out 1.2s both" }}
        />
      </div>

      {/* Logo with heartbeat */}
      <div
        className="relative"
        style={{
          animation:
            "splash-logo-enter 0.9s cubic-bezier(0.34,1.56,0.64,1) 0.3s both",
        }}
      >
        {/* Glow behind logo */}
        <div
          className="absolute inset-0 bg-teal/15 rounded-full blur-[50px] scale-[2]"
          style={{ animation: "splash-glow 2s ease-in-out 0.6s both" }}
        />

        {/* Logo with heartbeat pulse */}
        <div
          style={{
            animation: "splash-heartbeat 1.3s ease-in-out 1.1s 1",
          }}
        >
          <Image
            src="/logo-leofar.png"
            alt="LEOFAR PHARMA"
            width={120}
            height={120}
            className="object-contain relative z-10 drop-shadow-[0_0_40px_rgba(42,157,143,0.25)]"
            priority
          />
        </div>
      </div>

      {/* Brand name */}
      <div className="mt-7 text-center relative z-10">
        <h1
          className="font-display text-[26px] sm:text-3xl text-white tracking-[0.18em]"
          style={{
            animation: "splash-text-reveal 0.7s ease-out 1.3s both",
          }}
        >
          LEOFAR
        </h1>
        <p
          className="text-teal-light/50 text-[9px] tracking-[0.5em] mt-1.5"
          style={{
            animation: "splash-text-reveal 0.7s ease-out 1.6s both",
          }}
        >
          PHARMA
        </p>
      </div>

      {/* Tagline */}
      <p
        className="text-white/30 text-xs sm:text-sm mt-5 tracking-[0.08em]"
        style={{
          animation: "splash-text-reveal 0.7s ease-out 1.9s both",
        }}
      >
        Tu salud, nuestra prioridad
      </p>

      {/* Progress bar at bottom */}
      <div className="absolute bottom-14 sm:bottom-12 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-[2px] bg-white/8 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #2A9D8F, #3DB8A8)",
            animation: `splash-progress ${SPLASH_DURATION}ms cubic-bezier(0.4,0,0.2,1) forwards`,
          }}
        />
      </div>
    </div>
  );
}
