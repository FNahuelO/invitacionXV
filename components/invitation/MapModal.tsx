"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { event } from "@/lib/event";

type MapModalProps = {
  onClose: () => void;
};

export function MapModal({ onClose }: MapModalProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      role="dialog"
      aria-modal="true"
      aria-label={`Mapa de ${event.venue}`}
    >
      <button
        type="button"
        aria-label="Cerrar"
        className="absolute inset-0 bg-[#050b18]/50"
        onClick={onClose}
      />

      <motion.div
        className="relative z-10 flex min-h-svh w-full max-w-md flex-col items-center px-6 py-10"
        initial={{ opacity: 0, y: 18, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#010D23_0%,#1a3a6e_55%,#3a6aa3_100%)]"
        />
        <Image
          src="/images/vectores/fondo-mapa.svg"
          alt=""
          fill
          className="pointer-events-none object-cover object-top"
          sizes="448px"
          priority
          aria-hidden
        />

        <button
          type="button"
          aria-label="Cerrar mapa"
          onClick={onClose}
          className="absolute right-5 top-5 z-20 text-2xl leading-none text-white/80 hover:text-white"
        >
          ×
        </button>

        <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center">
          <p className="mb-5 text-center font-soligant text-2xl">{event.venue}</p>

          <div className="w-full max-w-sm rounded-lg bg-[linear-gradient(180deg,#666_0%,#fff_34.62%,#666_100%)] p-[4px] shadow-2xl">
            <div className="relative h-[28rem] w-full overflow-hidden rounded-[6px] bg-[#071225]">
              {!loaded ? (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#071225]">
                  <motion.span
                    className="h-9 w-9 rounded-full border-2 border-white/20 border-t-white"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.85, repeat: Infinity, ease: "linear" }}
                    aria-hidden
                  />
                  <p className="font-soligant text-sm text-white/70">Cargando mapa...</p>
                </div>
              ) : null}

              <iframe
                title={`Mapa de ${event.venue}`}
                src={event.mapsEmbedUrl}
                className={`h-full w-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"
                  }`}
                loading="eager"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setLoaded(true)}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
