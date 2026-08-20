import Image from "next/image";

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-40 items-center gap-3 ${className}`}>
      <span className="h-px flex-1 bg-white/70" />
      <Image
        src="/images/vectores/estrella.svg"
        alt=""
        width={14}
        height={14}
        className="h-6 w-6 shrink-0"
        aria-hidden
      />
      <span className="h-px flex-1 bg-white/70" />
    </div>
  );
}

export function SparkleBand({ className = "" }: { className?: string }) {
  return <div className={`star-band h-20 w-full ${className}`} />;
}

export function StarSeparator({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/separator.svg"
      alt=""
      width={394}
      height={172}
      className={`h-auto w-full ${className}`}
      aria-hidden
    />
  );
}

export function StarSeparatorOverlay({
  position = "top",
}: {
  position?: "top" | "bottom";
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 z-30 ${position === "top" ? "top-0 -translate-y-1/2" : "bottom-0 translate-y-1/2"
        }`}
    >
      <StarSeparator />
    </div>
  );
}
