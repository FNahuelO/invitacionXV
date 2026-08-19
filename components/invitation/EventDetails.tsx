"use client";

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
      <FadeIn className="flex w-full flex-col items-center">
        <Countdown />
        <h2 className="mt-10 font-serif text-4xl italic">Los esperamos</h2>

        <div className="mt-12 flex w-full max-w-xs flex-col gap-10">
          <div className="flex flex-col items-center gap-3">
            <h3 className="font-serif text-3xl">Día</h3>
            <p className="text-sm tracking-wide text-white/90">
              {event.weekdayLabel}
            </p>
            <GhostButton href={event.calendarUrl}>Agendar</GhostButton>
          </div>

          <div className="flex flex-col items-center gap-3">
            <h3 className="font-serif text-3xl">Lugar</h3>
            <p className="text-sm tracking-wide text-white/90">{event.venue}</p>
            <GhostButton href={whatsappUrl()}>Confirmar asistencia</GhostButton>
          </div>

          <div className="flex flex-col items-center gap-3">
            <h3 className="font-serif text-3xl">Ubicación</h3>
            <p className="text-sm tracking-wide text-white/90">{event.address}</p>
            <GhostButton onClick={onOpenMap}>Cómo llegar</GhostButton>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h3 className="font-serif text-3xl">Horario</h3>
            <p className="text-sm uppercase tracking-[0.18em] text-white/90">
              {event.schedule}
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
