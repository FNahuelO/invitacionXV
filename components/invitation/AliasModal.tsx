"use client";

import { Copy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { event } from "@/lib/event";

type AliasModalProps = {
  onClose: () => void;
};

export function AliasModal({ onClose }: AliasModalProps) {
  const [copied, setCopied] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(event.alias);
      setCopied("Alias copiado al portapapeles ✔️");
      window.setTimeout(() => {
        setCopied("");
        onClose();
      }, 1500);
    } catch {
      setCopied("No se pudo copiar el alias");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-[#050b18]/85 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-full max-w-sm rounded-2xl border border-white/20 bg-[#0c1a38] px-8 py-10 text-center shadow-2xl">
        <button
          type="button"
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute right-3 top-3 text-2xl leading-none text-white/80 hover:text-white"
        >
          ×
        </button>
        <p className="font-serif text-2xl">Alias</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="text-sm tracking-wide">{event.alias}</span>
          <button
            type="button"
            aria-label="Copiar alias"
            onClick={handleCopy}
            className="text-white/80 transition hover:text-white"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
        {copied ? (
          <p className="mt-4 text-xs text-emerald-300">{copied}</p>
        ) : null}
      </div>
    </motion.div>
  );
}
