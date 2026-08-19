"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { event } from "@/lib/event";
import { FadeIn } from "./FadeIn";
import { StarSeparatorOverlay } from "./Divider";

export function PhotoBook() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="book"
      className="relative flex min-h-svh flex-col items-center px-6 py-20 text-center"
    >
      <StarSeparatorOverlay />
      <FadeIn className="relative z-10 w-full">
        <h2 className="font-serif text-5xl">Book</h2>
        <div className="relative mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {event.photos.map((photo, index) => (
                <div
                  key={photo.src}
                  className="min-w-0 shrink-0 grow-0 basis-full px-8"
                >
                  <figure
                    className={`mx-auto w-full max-w-[16.5rem] bg-white p-3 pb-12 shadow-[0_18px_40px_rgba(0,0,0,0.35)] ${
                      index % 2 === 0 ? "-rotate-2" : "rotate-2"
                    }`}
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#dce6f5]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        sizes="264px"
                      />
                    </div>
                  </figure>
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/50 bg-black/20 p-2 text-white backdrop-blur-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Foto siguiente"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/50 bg-black/20 p-2 text-white backdrop-blur-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-8 flex justify-center gap-1.5">
          {event.photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              aria-label={`Ir a la foto ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1.5 rounded-full transition ${
                selected === index ? "w-5 bg-white" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.35em] text-white/70">
          {event.romanTitle}
        </p>
        <p className="mt-3 font-serif text-sm italic text-white/85">
          {event.tagline}
        </p>
      </FadeIn>
    </section>
  );
}
