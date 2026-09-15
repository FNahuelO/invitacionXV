import Image from "next/image";
import { event } from "@/lib/event";
import { FadeIn } from "./FadeIn";
import { StarSeparator } from "./Divider";

function DressStar({ gradientId }: { gradientId: string }) {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block shrink-0"
      aria-hidden
    >
      <path
        d="M2.5014 0L3.08948 1.98096H5L3.45526 3.08047L4.04334 5L2.5014 3.74386L0.953844 4.95393L1.54474 3.08968L0 1.98096H1.91052L2.5014 0Z"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="2.5"
          x2="5"
          y2="2.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#878787" />
          <stop offset="0.480749" stopColor="#F6F0E8" />
          <stop offset="1" stopColor="#908C88" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DressCode() {
  const [firstLine, secondLine, thirdLine] = event.dressCodeNote2;

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
        <h2 className="font-avegaer text-5xl">Fiesta</h2>
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
        <p className="mt-10 font-avegaer text-5xl">{event.dressCode}</p>
        <p className="mt-10 w-full max-w-[22rem] text-center font-avegaer text-sm leading-relaxed text-white">
          <span className="flex items-center justify-center gap-2 whitespace-nowrap">
            <DressStar gradientId="dress-star-left" />
            <span>{firstLine}</span>
            <DressStar gradientId="dress-star-right" />
          </span>
          <span className="mt-0.5 block">{secondLine}</span>
          <span className="mt-0.5 block">{thirdLine}</span>
        </p>
      </FadeIn>
    </section>
  );
}
