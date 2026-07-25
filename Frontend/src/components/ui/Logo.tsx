import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  clickable?: boolean;
  className?: string;
}

const sizes = {
  sm: {
    box: "w-8 h-8",
    icon: 16,
    text: "text-base",
  },
  md: {
    box: "w-10 h-10",
    icon: 18,
    text: "text-lg",
  },
  lg: {
    box: "w-12 h-12",
    icon: 22,
    text: "text-xl",
  },
};

function LogoContent({
  size,
  showText,
  className,
}: Required<Pick<LogoProps, "size" | "showText">> & {
  className?: string;
}) {
  const current = sizes[size];

  return (
    <div
      className={`flex items-center gap-3 select-none ${className ?? ""}`}
    >
      <div
        className={`
          ${current.box}
          rounded-xl
          bg-gradient-to-br
          from-[var(--fp-green)]
          to-[var(--fp-green-dark)]
          flex
          items-center
          justify-center
          shadow-lg
        `}
      >
        <TrendingUp
          size={current.icon}
          className="text-white"
          strokeWidth={2.5}
        />
      </div>

      {showText && (
        <span
          className={`
            ${current.text}
            font-semibold
            tracking-tight
            text-[var(--fp-text)]
          `}
        >
          FinPilot
        </span>
      )}
    </div>
  );
}

export default function Logo({
  size = "md",
  showText = true,
  clickable = false,
  className,
}: LogoProps) {
  if (clickable) {
    return (
      <Link to="/">
        <LogoContent
          size={size}
          showText={showText}
          className={className}
        />
      </Link>
    );
  }

  return (
    <LogoContent
      size={size}
      showText={showText}
      className={className}
    />
  );
}