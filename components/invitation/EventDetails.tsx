"use client";

import Image from "next/image";
import { event, whatsappUrl } from "@/lib/event";
import { Countdown } from "./Countdown";
import { FadeIn } from "./FadeIn";
import { GhostButton } from "./GhostButton";

type EventDetailsProps = {
  onOpenMap: () => void;
};

export function EventDetails({ onOpenMap }: EventDetailsProps) {
  return (
    <section className="relative flex min-h-svh flex-col items-center px-8 py-20 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/images/2.svg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <Image
        src="/images/estrellas-top.svg"
        alt=""
        width={393}
        height={433}
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-auto w-full"
        aria-hidden
      />

      <FadeIn className="relative z-10 flex w-full flex-col items-center">
        <Countdown />
        <h2 className="mt-10 font-serif text-4xl">Los esperamos</h2>

        <div className="mt-12 flex w-full max-w-xs flex-col gap-10">
          <div className="flex flex-col items-center gap-3">
            <h3 className="font-script text-4xl leading-none">Día</h3>
            <p className="font-serif text-sm text-white/90">{event.weekdayLabel}</p>
            <GhostButton href={event.calendarUrl} variant="event" className="text-sm">
              Agendar
            </GhostButton>
          </div>

          <div className="flex flex-col items-center gap-3">
            <h3 className="font-script text-4xl leading-none">Lugar</h3>
            <p className="font-serif text-sm text-white/90">{event.venue}</p>
            <GhostButton href={whatsappUrl()} variant="event" className="text-sm">
              Confirmar asistencia
            </GhostButton>
          </div>

          <div className="flex flex-col items-center gap-3">
            <h3 className="font-script text-4xl leading-none">Dirección</h3>
            <p className="font-serif text-sm text-white/90">{event.address}</p>
            <GhostButton onClick={onOpenMap} variant="event" className="text-sm">
              Como llegar
            </GhostButton>
          </div>

          <div className="flex flex-col items-center gap-3">
            <h3 className="font-script text-4xl leading-none">Horarios</h3>
            <p className="font-serif text-sm text-white/90">
              <span className="font-script text-xl">Ceremonia</span> {event.ceremonyTime}
            </p>
            <p className="font-serif text-sm text-white/90">
              <span className="font-script text-xl">Fiesta</span> {event.partyTime}
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
