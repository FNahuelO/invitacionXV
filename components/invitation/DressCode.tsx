import Image from "next/image";
import { event } from "@/lib/event";
import { FadeIn } from "./FadeIn";
import { StarSeparator } from "./Divider";

export function DressCode() {
  return (
    <section className="relative flex min-h-svh w-full flex-col items-center justify-center px-8 py-16 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden bg-[#000B21]"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 -translate-y-1/2">
        <Image
          src="/images/vectores/fondo.svg"
          alt=""
          width={394}
          height={80}
          className="absolute inset-x-0 top-1/2 z-0 h-auto w-full -translate-y-1/2"
          aria-hidden
        />
        <div className="relative z-10">
          <StarSeparator />
        </div>
      </div>

      <FadeIn className="relative z-10 flex w-full flex-col items-center">
        <h2 className="font-tropical-avenue text-4xl">Fiesta</h2>
        <p className="mt-6 font-golden-hills text-3xl">{event.dressCodeLabel}</p>
        <div className="relative mt-10 h-44 w-44">
          <Image
            src={event.dressSrc}
            alt="Vestido de gala"
            fill
            className="object-contain"
            sizes="176px"
          />
        </div>
        <p className="mt-10 font-tropical-avenue text-4xl">{event.dressCode}</p>
      </FadeIn>
    </section>
  );
}
