type Star = {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
};

function hash(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const STARS: Star[] = Array.from({ length: 110 }, (_, i) => ({
  left: `${hash(i + 1) * 100}%`,
  top: `${hash(i + 41) * 100}%`,
  size: hash(i + 77) > 0.86 ? 3 : hash(i + 13) > 0.6 ? 2 : 1,
  delay: `${hash(i + 19) * 4}s`,
  duration: `${2.4 + hash(i + 29) * 3}s`,
  opacity: 0.35 + hash(i + 53) * 0.65,
}));

export function StarField() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(60,110,190,0.28),transparent_62%)]" />
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#2d6dff]/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[#1a4b9c]/25 blur-3xl" />
      {STARS.map((star, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: star.delay,
            animationDuration: star.duration,
            boxShadow:
              star.size > 1
                ? "0 0 6px rgba(255,255,255,0.8)"
                : "0 0 3px rgba(255,255,255,0.5)",
          }}
        />
      ))}
    </div>
  );
}
