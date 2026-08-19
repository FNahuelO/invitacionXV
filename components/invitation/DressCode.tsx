import Image from "next/image";
import { event } from "@/lib/event";
import { FadeIn } from "./FadeIn";
import { SparkleBand } from "./Divider";

export function DressCode() {
  return (
    <section className="relative flex min-h-[90svh] flex-col items-center px-8 py-20 text-center">
      <SparkleBand className="pointer-events-none absolute inset-x-0 top-0 opacity-70" />
      <FadeIn className="flex flex-col items-center">
        <h2 className="font-serif text-5xl">Fiesta</h2>
        <p className="mt-10 font-script text-4xl">{event.dressCodeLabel}</p>
        <div className="relative mt-6 h-40 w-40 animate-drift">
          <Image
            src={event.dressSrc}
            alt="Vestido de gala"
            fill
            className="object-contain drop-shadow-[0_0_18px_rgba(180,210,255,0.45)]"
            sizes="160px"
          />
        </div>
        <p className="mt-6 font-serif text-3xl">{event.dressCode}</p>
        <p className="mt-4 text-sm text-white/80">{event.dressCodeNote}</p>
      </FadeIn>
      <SparkleBand className="pointer-events-none absolute inset-x-0 bottom-8 opacity-60" />
    </section>
  );
}
