"use client";

import Image from "next/image";
import { event } from "@/lib/event";
import { Divider } from "./Divider";
import { FadeIn } from "./FadeIn";
import { MusicPlayer } from "./MusicPlayer";

type HeroProps = {
  shouldPlay: boolean;
};

const silverText =
  "bg-[linear-gradient(180deg,#737373_0%,#D9D9D9_52.88%,#737373_100%)] bg-clip-text text-transparent";

export function Hero({ shouldPlay }: HeroProps) {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center px-8 py-16 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/images/zoe.png"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority
        />
        {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,24,0.35)_0%,rgba(5,11,24,0.55)_45%,rgba(5,11,24,0.75)_100%)]" /> */}
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

      <FadeIn className="relative z-10 flex max-w-[18rem] flex-col items-center mt-[5rem]">
        <h1
          className="flex items-center font-avegaer text-6xl font-medium uppercase leading-none tracking-wide"
          aria-label={event.honoree}
        >
          <span className={silverText}>Z</span>
          <span className="relative inline-flex items-center justify-center">
            <span className={silverText} aria-hidden>
              O
            </span>
            <Image
              src="/images/estrella.svg"
              alt=""
              width={12}
              height={12}
              className="pointer-events-none absolute left-1/2 top-[45.5%] z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2"
              aria-hidden
            />
          </span>
          <span className={silverText}>E</span>
        </h1>
        <p className={`font-avegaer text-2xl uppercase ${silverText}`}>
          {event.subtitle}
        </p>
        <p className="hero-tagline mt-14 whitespace-nowrap font-avegaer text-base leading-snug">
          {event.taglineHero[0]}
          <br />
          {event.taglineHero[1]}
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
