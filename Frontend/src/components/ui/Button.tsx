import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger";

  size?: "sm" | "md" | "lg";

  loading?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  fullWidth?: boolean;
}

const variants = {
  primary: `
      bg-[var(--fp-green)]
      text-white
      hover:bg-[var(--fp-green-dark)]
      shadow-lg
      hover:shadow-xl
  `,

  secondary: `
      bg-[var(--fp-green-tint)]
      text-[var(--fp-green-dark)]
      hover:bg-[var(--fp-green-border)]
  `,

  outline: `
      border
      border-[var(--fp-border)]
      bg-white
      text-[var(--fp-text)]
      hover:bg-[var(--fp-bg-hover)]
  `,

  ghost: `
      text-[var(--fp-text)]
      hover:bg-[var(--fp-bg-hover)]
  `,

  danger: `
      bg-red-600
      text-white
      hover:bg-red-700
  `,
};

const sizes = {
  sm: "h-9 px-4 text-sm",

  md: "h-11 px-5 text-sm",

  lg: "h-12 px-6 text-base",
};

export default function Button({
  children,

  variant = "primary",

  size = "md",

  loading = false,

  leftIcon,

  rightIcon,

  fullWidth = false,

  disabled,

  className,

  ...props
}: ButtonProps) {
  return (
    <button
      disabled={loading || disabled}
      className={clsx(
        `
        inline-flex
        items-center
        justify-center
        gap-2

        rounded-xl

        font-semibold

        transition-all
        duration-200

        disabled:opacity-60
        disabled:pointer-events-none

        focus:outline-none
        focus:ring-2
        focus:ring-[var(--fp-green)]

      `,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="white"
              strokeOpacity=".3"
              strokeWidth="3"
            />

            <path
              d="M12 2a10 10 0 0 1 10 10"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          Loading...
        </>
      ) : (
        <>
          {leftIcon}

          {children}

          {rightIcon}
        </>
      )}
    </button>
  );
}