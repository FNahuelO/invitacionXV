import Image from "next/image";

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-40 items-center gap-3 ${className}`}>
      <span className="h-px flex-1 bg-[linear-gradient(90deg,#737373_0%,#D9D9D9_52.88%,#737373_100%)]" />
      <Image
        src="/images/vectores/estrella.svg"
        alt=""
        width={14}
        height={14}
        className="h-6 w-6 shrink-0 opacity-90 brightness-125"
        aria-hidden
      />
      <span className="h-px flex-1 bg-[linear-gradient(90deg,#737373_0%,#D9D9D9_52.88%,#737373_100%)]" />
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
