"use client";

import Image from "next/image";
import { event } from "@/lib/event";
import { Countdown } from "./Countdown";
import { FadeIn } from "./FadeIn";
import { GhostButton } from "./GhostButton";

const headingGradient =
  "bg-[linear-gradient(180deg,#999_0%,#fff_41.02%,#999_65.62%)] bg-clip-text text-transparent";

type EventDetailsProps = {
  onOpenMap: () => void;
  onOpenRsvp: () => void;
};

export function EventDetails({ onOpenMap, onOpenRsvp }: EventDetailsProps) {
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
        <h2 className="mt-10 font-soligant text-4xl">Los esperamos</h2>

        <div className="mt-12 flex w-full max-w-xs flex-col gap-10">
          <div className="flex flex-col items-center gap-2">
            <h3 className={`font-golden-hills text-2xl leading-none ${headingGradient}`}>
              Día
            </h3>
            <p className="font-himalaya text-sm text-white/90">{event.weekdayLabel}</p>
            <GhostButton href={event.calendarUrl} variant="event" className="text-sm font-tropical-avenue">
              Agendar
            </GhostButton>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h3 className={`font-golden-hills text-2xl leading-none ${headingGradient}`}>
              Lugar
            </h3>
            <p className="font-himalaya text-sm text-white/90">{event.venue}</p>
            <GhostButton
              onClick={onOpenRsvp}
              variant="event"
              className="font-tropical-avenue text-sm"
            >
              Confirmar asistencia
            </GhostButton>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h3 className={`font-golden-hills text-2xl leading-none ${headingGradient}`}>
              Dirección
            </h3>
            <p className="font-himalaya text-sm text-white/90">{event.address}</p>
            <GhostButton onClick={onOpenMap} variant="event" className="text-sm font-tropical-avenue">
              Como llegar
            </GhostButton>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h3 className={`font-golden-hills text-4xl leading-none ${headingGradient}`}>
              Horarios
            </h3>
            <p className="font-serif text-sm text-white/90">
              <span className="font-golden-hills text-xl">Fiesta</span> {event.partyTime}
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
