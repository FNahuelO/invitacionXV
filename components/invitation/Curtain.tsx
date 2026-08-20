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
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      initial={false}
      animate={
        visible
          ? { y: 0, opacity: 1, pointerEvents: "auto" as const }
          : { y: "-100%", opacity: 0, pointerEvents: "none" as const }
      }
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#010D23_0%,#1a3a6e_55%,#3a6aa3_100%)]"
      />

      <div className="relative flex min-h-svh w-full max-w-md flex-col items-center justify-center px-6 py-10">
        <Image
          src="/images/vectores/estrellas-rsvp.svg"
          alt=""
          width={393}
          height={640}
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-auto w-full"
          aria-hidden
          priority
        />
        <Image
          src="/images/vectores/separador-rsvp.svg"
          alt=""
          width={393}
          height={202}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-auto w-full"
          aria-hidden
          priority
        />

        <div className="relative z-10 flex flex-col items-center gap-8 text-center">

          <button
            type="button"
            onClick={onOpen}
            className="font-soligant text-3xl text-white transition hover:text-white/80"
          >
            Abrir
          </button>
        </div>
      </div>
    </motion.div>
  );
}
