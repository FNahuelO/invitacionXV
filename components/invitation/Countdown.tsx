"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { event } from "@/lib/event";

type TimeLeft = {
  dias: number;
  hrs: number;
  min: number;
  seg: number;
};

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) {
    return { dias: 0, hrs: 0, min: 0, seg: 0 };
  }
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
    min: Math.floor((diff / (1000 * 60)) % 60),
    seg: Math.floor((diff / 1000) % 60),
  };
}

const TARGET = new Date(event.countdownTarget);

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    dias: 0,
    hrs: 0,
    min: 0,
    seg: 0,
  });

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(TARGET));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const units: Array<{ key: keyof TimeLeft; label: string }> = [
    { key: "dias", label: "Días" },
    { key: "hrs", label: "Hrs" },
    { key: "min", label: "Min" },
    { key: "seg", label: "Seg" },
  ];

  return (
    <div className="relative flex h-56 w-56 items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-white/30" />
      <div className="absolute inset-3 rounded-full border border-white/60 bg-white/95 text-[#1a2744] shadow-[0_0_40px_rgba(255,255,255,0.2)]">
        <div className="flex h-full flex-col items-center justify-center">
          <p className="font-script text-3xl text-[#4a5a78]">Faltan</p>
          <div className="mt-3 flex">
            {units.map((unit, index) => (
              <div
                key={unit.key}
                className={`flex min-w-[2.6rem] flex-col items-center px-1 ${index < units.length - 1 ? "border-r border-black/15" : ""
                  }`}
              >
                <span className="font-serif text-lg leading-none">
                  {pad(timeLeft[unit.key])}
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-wider text-[#5b6b86]">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image
        src="/images/vectores/estrella.svg"
        alt=""
        width={14}
        height={14}
        className="pointer-events-none absolute right-[0.3rem] top-[2rem] z-10 h-8 w-8"
        aria-hidden
      />
    </div>
  );
}
