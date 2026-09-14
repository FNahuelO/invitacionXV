"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { whatsappUrl } from "@/lib/event";
import { GhostButton } from "./GhostButton";

type RsvpModalProps = {
  onClose: () => void;
};

type Attendance = "yes" | "no";
type Diet = "none" | "vegetarian" | "vegan";
type Step = 1 | 2;

const dietOptions: Array<{ value: Diet; label: string }> = [
  { value: "none", label: "No tengo restricciones" },
  { value: "vegetarian", label: "Vegetariano/a" },
  { value: "vegan", label: "Vegano/a" },
];

function RadioDot({ checked }: { checked: boolean }) {
  return (
    <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
      <span
        className={`h-4 w-4 rounded-full border ${checked ? "border-[#c9a0ff]" : "border-white/80"
          }`}
      />
      {checked ? (
        <span className="pointer-events-none absolute h-2 w-2 rounded-full bg-[#e8d4ff] shadow-[0_0_10px_rgba(232,212,255,0.9)]" />
      ) : null}
    </span>
  );
}

export function RsvpModal({ onClose }: RsvpModalProps) {
  const [step, setStep] = useState<Step>(1);
  const [attendance, setAttendance] = useState<Attendance>("yes");
  const [name, setName] = useState("");
  const [diet, setDiet] = useState<Diet>("none");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;

    if (step === 1) {
      if (attendance === "no") {
        window.open(
          whatsappUrl({ name: trimmed, attending: false }),
          "_blank",
          "noopener,noreferrer",
        );
        onClose();
        return;
      }
      setStep(2);
      return;
    }

    window.open(
      whatsappUrl({
        name: trimmed,
        attending: true,
        diet,
      }),
      "_blank",
      "noopener,noreferrer",
    );
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rsvp-title"
    >
      <button
        type="button"
        aria-label="Cerrar"
        className="absolute inset-0 bg-[#050b18]/70 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative z-10 flex min-h-svh w-full max-w-md flex-col items-center px-6 py-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#010D23_0%,#1a3a6e_55%,#3a6aa3_100%)]"
        />
        <Image
          src="/images/vectores/estrellas-rsvp.svg"
          alt=""
          width={393}
          height={640}
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-auto w-full"
          aria-hidden
          priority
        />

        <button
          type="button"
          aria-label="Cerrar confirmación"
          onClick={onClose}
          className="absolute right-5 top-5 z-20 text-2xl leading-none text-white/80 hover:text-white"
        >
          ×
        </button>

        <form
          onSubmit={handleSubmit}
          className="relative z-10 flex w-full flex-1 flex-col items-center justify-center -translate-y-20"
        >
          <div className="relative mx-auto flex aspect-square w-full max-w-[20rem] items-center justify-center">
            <Image
              src="/images/vectores/corona.svg"
              alt=""
              width={302}
              height={304}
              className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain"
              sizes="320px"
              aria-hidden
              priority
            />

            <div className="relative z-10 flex w-[72%] flex-col items-center px-2 text-center">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.25 }}
                    className="flex w-full flex-col items-center"
                  >
                    <h2
                      id="rsvp-title"
                      className="font-soligant text-[1.65rem] leading-tight text-white"
                    >
                      ¿Asistes a la fiesta?
                    </h2>

                    <fieldset className="mt-6 flex w-full items-center justify-center gap-4">
                      <legend className="sr-only">Confirmación de asistencia</legend>
                      <label className="flex cursor-pointer items-center gap-2">
                        <span className="font-soligant text-sm text-white">
                          ¡Si, confirmo!
                        </span>
                        <input
                          type="radio"
                          name="attendance"
                          value="yes"
                          checked={attendance === "yes"}
                          onChange={() => setAttendance("yes")}
                          className="sr-only"
                        />
                        <RadioDot checked={attendance === "yes"} />
                      </label>

                      <label className="flex cursor-pointer items-center gap-2">
                        <input
                          type="radio"
                          name="attendance"
                          value="no"
                          checked={attendance === "no"}
                          onChange={() => setAttendance("no")}
                          className="sr-only"
                        />
                        <RadioDot checked={attendance === "no"} />
                        <span className="font-soligant text-sm text-white">
                          No puedo
                        </span>
                      </label>
                    </fieldset>

                    <label className="mt-8 w-full">
                      <span className="sr-only">Nombre completo</span>
                      <input
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Ingresa tu nombre completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border-0 border-b border-white/35 bg-transparent pb-1 text-center font-soligant text-sm text-white placeholder:text-white/85 focus:border-white/70 focus:outline-none"
                      />
                    </label>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                    className="flex w-full flex-col items-center"
                  >
                    <h2
                      id="rsvp-title"
                      className="font-tropical-avenue text-sm leading-tight text-white"
                    >
                      <span className="inline-block rotate-180" aria-hidden>
                        ?
                      </span>
                      Tenés alguna preferencia alimentaria?
                    </h2>

                    <fieldset className="mt-8 flex w-full flex-col items-start gap-4 pl-2">
                      <legend className="sr-only">Preferencia alimentaria</legend>
                      {dietOptions.map((option) => (
                        <label
                          key={option.value}
                          className="flex cursor-pointer items-center gap-3"
                        >
                          <input
                            type="radio"
                            name="diet"
                            value={option.value}
                            checked={diet === option.value}
                            onChange={() => setDiet(option.value)}
                            className="sr-only"
                          />
                          <RadioDot checked={diet === option.value} />
                          <span className="font-tropical-avenue text-sm text-white">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </fieldset>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="absolute bottom-24 left-0 right-0 z-10 flex justify-center">
            <GhostButton
              type="submit"
              variant="event"
              className="font-tropical-avenue text-sm"
            >
              Enviar
            </GhostButton>
          </div>
        </form>

        <Image
          src="/images/vectores/separador-rsvp.svg"
          alt=""
          width={393}
          height={202}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-auto w-full"
          aria-hidden
        />
      </div>
    </motion.div>
  );
}
