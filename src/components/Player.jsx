import { CircleArrowLeft, CircleArrowRight, Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

const MediaPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10; // retrocede 10 segundos
    }
  };

  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10; // avanza 10 segundos
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <audio ref={audioRef} src="src/assets/audio.mp3" preload="auto" />

      <div className="flex items-center justify-center gap-6 p-4 rounded-md">
        <button
          className="text-gray-200 hover:text-white text-xl"
          onClick={handleRewind}
        >
          <CircleArrowLeft />
        </button>

        <button
          onClick={handlePlayPause}
          className="w-12 h-12 rounded-full border-2 border-gray-200 text-gray-200 hover:text-white hover:border-white flex items-center justify-center text-xl"
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>

        <button
          className="text-gray-200 hover:text-white text-xl"
          onClick={handleForward}
        >
          <CircleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MediaPlayer;
