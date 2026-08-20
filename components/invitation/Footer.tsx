"use client";

import Image from "next/image";
import { event, whatsappUrl } from "@/lib/event";
import { StarSeparatorOverlay } from "./Divider";
import { FadeIn } from "./FadeIn";

type FooterProps = {
  onOpenMap: () => void;
};

const links = [
  { label: "Confirmar asistencia ahora", href: whatsappUrl(), external: true },
  { label: "Agendar fecha", href: event.calendarUrl, external: true },
  { label: "Book de fotos", href: "#book", external: false },
] as const;

export function Footer({ onOpenMap }: FooterProps) {
  return (
    <footer className="relative flex min-h-svh flex-col items-center justify-center px-8 py-20 text-center">
      <StarSeparatorOverlay />
      <FadeIn className="relative z-10 flex flex-col items-center">
        <div className="flex flex-col items-center -translate-y-24">
          <h2 className="mt-4 font-soligant text-5xl">{event.honoree}</h2>
          <p className="mt-2 font-himalaya text-xs uppercase text-white/85">
            MIS 15 AÑOS
          </p>
        </div>

        <nav className="mt-10 flex flex-col items-center gap-8 text-sm tracking-wide text-white font-soligant -translate-y-16">
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
            Como llegar
          </button>
        </nav>
      </FadeIn>
      <Image
        src="/images/footer.svg"
        alt=""
        width={394}
        height={271}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-auto w-full translate-y-16 opacity-80"
        aria-hidden
      />
    </footer>
  );
}
