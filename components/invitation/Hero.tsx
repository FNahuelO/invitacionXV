"use client";

import Image from "next/image";
import { event } from "@/lib/event";
import { Divider, SparkleBand } from "./Divider";
import { FadeIn } from "./FadeIn";
import { MusicPlayer } from "./MusicPlayer";

type HeroProps = {
  shouldPlay: boolean;
};

export function Hero({ shouldPlay }: HeroProps) {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center px-8 py-16 text-center">
      <SparkleBand className="pointer-events-none absolute inset-x-0 top-0 opacity-80" />
      <SparkleBand className="pointer-events-none absolute inset-x-0 bottom-8 opacity-70" />

      <FadeIn className="relative z-10 flex flex-col items-center">
        <div className="relative mb-8 h-28 w-28 overflow-hidden rounded-full border border-white/50 shadow-[0_0_30px_rgba(150,190,255,0.35)]">
          <Image
            src={event.portraitSrc}
            alt={event.honoree}
            fill
            className="object-cover"
            sizes="112px"
            priority
          />
        </div>
        <p className="text-sm tracking-[0.35em] text-white/80">{event.dateLabel}</p>
        <h1 className="mt-4 font-serif text-7xl font-medium leading-none tracking-wide">
          {event.honoree}
        </h1>
        <p className="mt-3 text-xs uppercase tracking-[0.42em] text-white/90">
          {event.subtitle}
        </p>
        <p className="mt-6 max-w-[16rem] font-serif text-sm italic leading-relaxed text-white/85">
          {event.tagline}
        </p>
        <div className="mt-8">
          <Divider />
        </div>
        <div className="mt-8">
          <MusicPlayer shouldPlay={shouldPlay} />
        </div>
      </FadeIn>
    </section>
  );
}
