"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { event } from "@/lib/event";

type CurtainProps = {
  visible: boolean;
  onOpen: () => void;
};

export function Curtain({ visible, onOpen }: CurtainProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050b18]"
      initial={false}
      animate={
        visible
          ? { y: 0, opacity: 1, pointerEvents: "auto" as const }
          : { y: "-100%", opacity: 0, pointerEvents: "none" as const }
      }
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,90,170,0.35),transparent_60%)]" />
        <div className="star-band absolute inset-x-0 top-16 h-24 opacity-80" />
        <div className="star-band absolute inset-x-0 bottom-20 h-28 opacity-70" />
      </div>

      <div className="relative flex flex-col items-center gap-8 px-6 text-center">
        <div className="relative h-36 w-36 overflow-hidden rounded-full border border-white/40 shadow-[0_0_40px_rgba(120,170,255,0.35)]">
          <Image
            src={event.portraitSrc}
            alt={event.honoree}
            fill
            className="object-cover"
            sizes="144px"
            priority
          />
        </div>
        <div>
          <p className="font-serif text-5xl tracking-wide">{event.honoree}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.45em] text-white/80">
            {event.subtitle}
          </p>
        </div>
        <button
          type="button"
          onClick={onOpen}
          className="font-serif text-3xl text-white transition hover:text-white/80"
        >
          Abrir
        </button>
      </div>
    </motion.div>
  );
}
