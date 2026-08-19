"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { event } from "@/lib/event";

type MapModalProps = {
  onClose: () => void;
};

export function MapModal({ onClose }: MapModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-[#050b18]/85 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-full max-w-md rounded-2xl border border-white/20 bg-[#0c1a38] p-4 shadow-2xl">
        <button
          type="button"
          aria-label="Cerrar mapa"
          onClick={onClose}
          className="absolute right-3 top-3 text-white/80 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
        <p className="mb-3 pr-8 text-center font-serif text-xl">{event.venue}</p>
        <iframe
          title={`Mapa de ${event.venue}`}
          src={event.mapsEmbedUrl}
          className="h-[28rem] w-full rounded-lg"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </motion.div>
  );
}
