"use client";

import { event, whatsappUrl } from "@/lib/event";
import { Divider } from "./Divider";
import { FadeIn } from "./FadeIn";
import { SparkleBand } from "./Divider";

type FooterProps = {
  onOpenMap: () => void;
};

const links = [
  { label: "Confirmar asistencia ahora", href: whatsappUrl(), external: true },
  { label: "Agendar fecha", href: event.calendarUrl, external: true },
  { label: "Book de fotos", href: "#book", external: false },
  { label: "Regalos", href: "#regalos", external: false },
] as const;

export function Footer({ onOpenMap }: FooterProps) {
  return (
    <footer className="relative flex min-h-svh flex-col items-center justify-center px-8 py-20 text-center">
      <SparkleBand className="pointer-events-none absolute inset-x-0 top-8 opacity-70" />
      <FadeIn className="flex flex-col items-center">
        <p className="text-sm tracking-[0.3em] text-white/80">{event.dateLabel}</p>
        <p className="mt-6 text-sm text-white/90">Te invito a mi XV años</p>
        <h2 className="mt-4 font-serif text-7xl">{event.honoree}</h2>
        <p className="mt-2 text-xs uppercase tracking-[0.4em] text-white/85">
          MIS QUINCE
        </p>
        <div className="mt-8">
          <Divider />
        </div>
        <nav className="mt-10 flex flex-col items-center gap-5 text-sm tracking-wide text-white/90">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <a key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ),
          )}
          <button
            type="button"
            onClick={onOpenMap}
            className="transition hover:text-white"
          >
            Cómo llegar
          </button>
        </nav>
      </FadeIn>
      <SparkleBand className="pointer-events-none absolute inset-x-0 bottom-0 opacity-80" />
    </footer>
  );
}
