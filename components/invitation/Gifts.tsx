"use client";

import { Gift } from "lucide-react";
import { event } from "@/lib/event";
import { FadeIn } from "./FadeIn";
import { GhostButton } from "./GhostButton";

type GiftsProps = {
  onOpenAlias: () => void;
};

export function Gifts({ onOpenAlias }: GiftsProps) {
  return (
    <section
      id="regalos"
      className="relative flex min-h-[80svh] flex-col items-center px-8 py-20 text-center"
    >
      <FadeIn className="flex flex-col items-center">
        <h2 className="font-serif text-5xl">Regalos</h2>
        <div className="mt-10 flex h-28 w-28 items-center justify-center rounded-full border border-white/70 bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
          <Gift className="h-10 w-10" strokeWidth={1.25} />
        </div>
        <p className="mt-8 max-w-xs text-sm leading-relaxed text-white/90">
          {event.giftsMessage}
        </p>
        <div className="mt-8">
          <GhostButton onClick={onOpenAlias}>Ver más</GhostButton>
        </div>
      </FadeIn>
    </section>
  );
}
