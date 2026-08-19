"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AliasModal } from "./AliasModal";
import { Curtain } from "./Curtain";
import { DressCode } from "./DressCode";
import { EventDetails } from "./EventDetails";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { MapModal } from "./MapModal";
import { PhotoBook } from "./PhotoBook";
import { StarField } from "./StarField";

export type ModalKind = "map" | "cbu" | null;

export function Invitation() {
  const [curtainOpen, setCurtainOpen] = useState(true);
  const [modal, setModal] = useState<ModalKind>(null);
  const [musicShouldPlay, setMusicShouldPlay] = useState(false);

  const openInvitation = useCallback(() => {
    setCurtainOpen(false);
    setMusicShouldPlay(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = curtainOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [curtainOpen]);

  return (
    <div className="relative min-h-svh bg-night text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <StarField />
      </div>

      <main className="relative z-10 mx-auto min-h-svh max-w-md overflow-x-hidden bg-gradient-to-b from-[#050b18]/92 via-[#0b1d42]/90 to-[#2b5a9e]/92 shadow-[0_0_80px_rgba(0,0,0,0.45)]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <StarField />
        </div>
        <div className="relative z-10">
          <Hero shouldPlay={musicShouldPlay} />
          <EventDetails onOpenMap={() => setModal("map")} />
          <DressCode />
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#010D23_0%,#375F91_43.75%,#4979B5_100%)]"
            />
            <PhotoBook />
            {/* <Gifts onOpenAlias={() => setModal("cbu")} /> */}
            <Footer onOpenMap={() => setModal("map")} />
          </div>
        </div>
      </main>

      <Curtain visible={curtainOpen} onOpen={openInvitation} />

      <AnimatePresence>
        {modal === "map" ? (
          <MapModal onClose={() => setModal(null)} />
        ) : null}
        {modal === "cbu" ? (
          <AliasModal onClose={() => setModal(null)} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
