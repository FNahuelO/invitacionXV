"use client";

import { SkipBack, SkipForward, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { event } from "@/lib/event";

type MusicPlayerProps = {
  shouldPlay?: boolean;
};

export function MusicPlayer({ shouldPlay = false }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    <div className="flex items-center justify-center gap-6">
      <audio ref={audioRef} src={event.audioSrc} preload="auto" loop />
      <button
        type="button"
        aria-label="Retroceder 10 segundos"
        onClick={() => skip(-10)}
        className="text-white/80 transition hover:text-white"
      >
        <SkipBack className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label={isPlaying ? "Pausar" : "Reproducir"}
        onClick={toggle}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white text-white transition hover:bg-white/10"
      >
        {isPlaying ? (
          <Pause className="h-5 w-5" />
        ) : (
          <Play className="ml-0.5 h-5 w-5" />
        )}
      </button>
      <button
        type="button"
        aria-label="Avanzar 10 segundos"
        onClick={() => skip(10)}
        className="text-white/80 transition hover:text-white"
      >
        <SkipForward className="h-5 w-5" />
      </button>
    </div>
  );
}
