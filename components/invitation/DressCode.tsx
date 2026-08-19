import Image from "next/image";
import { event } from "@/lib/event";
import { FadeIn } from "./FadeIn";
import { StarSeparatorOverlay } from "./Divider";

export function DressCode() {
  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center px-8 py-16 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden bg-[#000B21]"
      />

      <StarSeparatorOverlay />

      <FadeIn className="relative z-10 flex w-full flex-col items-center">
        <h2 className="font-serif text-5xl">Fiesta</h2>
        <p className="mt-6 font-script text-4xl">{event.dressCodeLabel}</p>
        <div className="relative mt-10 h-44 w-44">
          <Image
            src={event.dressSrc}
            alt="Vestido de gala"
            fill
            className="object-contain"
            sizes="176px"
          />
        </div>
        <p className="mt-10 font-serif text-3xl">{event.dressCode}</p>
      </FadeIn>
    </section>
  );
}
