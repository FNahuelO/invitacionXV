import { cn } from "@/lib/utils";

type GhostButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
};

const styles =
  "inline-flex min-w-[11rem] items-center justify-center rounded-full border border-white/75 bg-white/5 px-8 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition hover:bg-white/15";

export function GhostButton({
  children,
  className,
  onClick,
  href,
  type = "button",
}: GhostButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(styles, className)}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(styles, className)}>
      {children}
    </button>
  );
}
