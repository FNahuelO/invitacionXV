"use client";

import Image from "next/image";
import { event } from "@/lib/event";
import { Divider } from "./Divider";
import { FadeIn } from "./FadeIn";
import { MusicPlayer } from "./MusicPlayer";

type HeroProps = {
  shouldPlay: boolean;
};

export function Hero({ shouldPlay }: HeroProps) {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center px-8 py-16 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/images/1.svg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <Image
        src="/images/estrellas-top.svg"
        alt=""
        width={393}
        height={433}
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-auto w-full"
        aria-hidden
        priority
      />
      <Image
        src="/images/estrellas-bottom.svg"
        alt=""
        width={393}
        height={433}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-auto w-full"
        aria-hidden
        priority
      />

      <FadeIn className="relative z-10 flex max-w-[15rem] flex-col items-center">
        <h1 className="mt-2 font-soligant text-5xl font-medium leading-none tracking-wide">
          {event.honoree}
        </h1>
        <p className="mt-2 font-himalaya text-xl uppercase tracking-[0.2em] text-white/90">
          {event.subtitle}
        </p>
        <p className="mt-4 max-w-[13rem] font-soligant text-xs leading-relaxed text-white/85">
          {event.taglineHero}
        </p>
        <div className="mt-5">
          <Divider className="w-28 gap-2" />
        </div>
        <div className="mt-5">
          <MusicPlayer shouldPlay={shouldPlay} compact />
        </div>
      </FadeIn>
    </section>
  );
}
