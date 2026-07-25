import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="text-xs font-semibold uppercase tracking-wider text-[var(--fp-text-2)]">
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={clsx(
            `
            h-11
            w-full
            rounded-xl
            border
            border-[var(--fp-border)]
            bg-white
            px-4
            text-sm
            text-[var(--fp-text)]
            outline-none
            transition-all
            duration-200

            placeholder:text-[var(--fp-text-caption)]

            focus:border-[var(--fp-green)]
            focus:ring-4
            focus:ring-green-100
          `,
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-100",
            className
          )}
          {...props}
        />

        {error ? (
          <span className="text-xs text-red-600">{error}</span>
        ) : helperText ? (
          <span className="text-xs text-[var(--fp-text-muted)]">
            {helperText}
          </span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;