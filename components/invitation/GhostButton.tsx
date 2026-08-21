import { cn } from "@/lib/utils";

type GhostButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  variant?: "default" | "event";
};

const defaultStyles =
  "inline-flex min-w-[11rem] items-center justify-center rounded-full border border-white/75 bg-white/5 px-8 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition hover:bg-white/15";

const eventShellStyles =
  "inline-flex w-[15rem] rounded-full bg-[linear-gradient(90deg,#666666_0%,#FFFFFF_57.21%,#616161_97.6%,#646464_99.99%)] p-px shadow-[0_4px_16px_rgba(0,0,0,0.35)]";

const eventInnerStyles =
  "inline-flex w-full items-center justify-center rounded-full bg-[#002859] px-8 py-2.5 font-serif text-base font-normal normal-case tracking-normal text-white transition hover:brightness-110";

function EventButtonInner({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn(eventInnerStyles, className)}>{children}</span>;
}

export function GhostButton({
  children,
  className,
  onClick,
  href,
  type = "button",
  variant = "default",
}: GhostButtonProps) {
  if (variant === "event") {
    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={eventShellStyles}
        >
          <EventButtonInner className={className}>{children}</EventButtonInner>
        </a>
      );
    }

    return (
      <button type={type} onClick={onClick} className={eventShellStyles}>
        <EventButtonInner className={className}>{children}</EventButtonInner>
      </button>
    );
  }

  const styles = cn(defaultStyles, className);

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
