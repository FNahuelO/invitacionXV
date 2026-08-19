export function Divider() {
  return (
    <div className="flex w-40 items-center gap-3">
      <span className="h-px flex-1 bg-white/70" />
      <span className="h-1.5 w-1.5 rotate-45 border border-white/80" />
      <span className="h-px flex-1 bg-white/70" />
    </div>
  );
}

export function SparkleBand({ className = "" }: { className?: string }) {
  return <div className={`star-band h-20 w-full ${className}`} />;
}
