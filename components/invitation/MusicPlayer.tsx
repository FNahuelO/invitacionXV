"use client";

import { SkipBack, SkipForward, Pause, Play } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { event } from "@/lib/event";

type MusicPlayerProps = {
  shouldPlay?: boolean;
  compact?: boolean;
};

const shadow = "[filter:drop-shadow(0px_4px_4px_#00000040)]";

export function MusicPlayer({ shouldPlay = false, compact = false }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const gradientId = useId().replace(/:/g, "");
  const paint = `url(#${gradientId})`;
  const skipSize = compact ? "h-5 w-5" : "h-6 w-6";
  const playIconSize = compact ? "h-[1.15rem] w-[1.15rem]" : "h-6 w-6";
  const playBtnSize = compact ? "h-11 w-11" : "h-14 w-14";

  useEffect(() => {
    if (!shouldPlay) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, [shouldPlay]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  };

  const skip = (delta: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, audio.currentTime + delta);
  };

  return (
    <div
      className={
        compact
          ? "flex items-center justify-center gap-5"
          : "flex items-center justify-center gap-7"
      }
    >
      <svg width="0" height="0" aria-hidden className="absolute">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#999999" />
            <stop offset="50.48%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#999999" />
          </linearGradient>
        </defs>
      </svg>

      <audio ref={audioRef} src={event.audioSrc} preload="auto" loop />

      <button
        type="button"
        aria-label="Retroceder 10 segundos"
        onClick={() => skip(-10)}
        className={`transition hover:opacity-80 ${shadow}`}
      >
        <SkipBack className={skipSize} fill={paint} stroke={paint} strokeWidth={1} />
      </button>

      <button
        type="button"
        aria-label={isPlaying ? "Pausar" : "Reproducir"}
        onClick={toggle}
        className={`relative flex items-center justify-center transition hover:opacity-90 ${shadow} ${playBtnSize}`}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden
        >
          <circle
            cx="24"
            cy="24"
            r="22.5"
            stroke={paint}
            strokeWidth="1.5"
          />
        </svg>
        {isPlaying ? (
          <Pause className={playIconSize} fill={paint} stroke={paint} strokeWidth={1} />
        ) : (
          <Play className={`${playIconSize} ml-0.5`} fill={paint} stroke={paint} strokeWidth={1} />
        )}
      </button>

      <button
        type="button"
        aria-label="Avanzar 10 segundos"
        onClick={() => skip(10)}
        className={`transition hover:opacity-80 ${shadow}`}
      >
        <SkipForward className={skipSize} fill={paint} stroke={paint} strokeWidth={1} />
      </button>
    </div>
  );
}
