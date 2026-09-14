"use client";

import Image from "next/image";
import { event, whatsappUrl } from "@/lib/event";
import { StarSeparatorOverlay } from "./Divider";
import { FadeIn } from "./FadeIn";

type FooterProps = {
  onOpenMap: () => void;
};
const silverText =
  "bg-[linear-gradient(180deg,#737373_0%,#D9D9D9_52.88%,#737373_100%)] bg-clip-text text-transparent";


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
          <h1
            className="heading-silver flex items-center font-avegaer text-6xl font-medium uppercase leading-none tracking-wide [filter:drop-shadow(0px_4px_4px_#00000040)]"
            aria-label={event.honoree}
          >
            <span>Z</span>
            <span className="relative inline-flex items-center justify-center">
              <span aria-hidden>O</span>
              <Image
                src="/images/estrella.svg"
                alt=""
                width={12}
                height={12}
                className="pointer-events-none absolute left-1/2 top-[45.5%] z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2"
                aria-hidden
              />
            </span>
            <span>E</span>
          </h1>
          <p className={`mt-2 font-avegaer text-2xl uppercase ${silverText}`}>
            MIS 15 AÑOS
          </p>
        </div>

        <nav className="mt-10 flex flex-col items-center gap-8 text-xl tracking-wide font-avegaer text-white -translate-y-16">
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
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-auto w-full opacity-80 "
        aria-hidden
      />
    </footer>
  );
}
