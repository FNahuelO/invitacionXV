"use client";

import Image from "next/image";
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
      className="relative flex min-h-svh flex-col items-center px-8 text-center"
    >
      <Image
        src="/images/vectores/separator.svg"
        alt=""
        width={393}
        height={179}
        className="pointer-events-none absolute inset-x-0 -top-24 z-[1] h-auto w-full"
        aria-hidden
      />

      <FadeIn className="relative z-10 flex flex-1 flex-col items-center justify-center">
        <h2 className="heading-silver font-avegaer text-4xl tracking-[0.06em]">
          Regalos
        </h2>

        <div className="relative mt-12 h-[6.75rem] w-[7.25rem]">
          <Image
            src="/images/vectores/regalo.svg"
            alt=""
            fill
            className="object-contain"
            sizes="116px"
            aria-hidden
          />
        </div>

        <p className="mt-10 max-w-[16rem] font-avegaer text-sm leading-relaxed text-white/90 tracking-[0.04em]">
          {event.giftsMessage}
        </p>

        <div className="mt-10">
          <GhostButton
            onClick={onOpenAlias}
            variant="event"
            className="font-avegaer text-base"
          >
            Ver más
          </GhostButton>
        </div>
      </FadeIn>
    </section>
  );
}
