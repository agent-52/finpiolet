import {
  forwardRef,
  InputHTMLAttributes,
  useState,
} from "react";

import clsx from "clsx";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const PasswordInput = forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(({ label, error, className, ...props }, ref) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-xs font-semibold uppercase tracking-wider text-[var(--fp-text-2)]">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          ref={ref}
          type={show ? "text" : "password"}
          className={clsx(
            `
            h-11
            w-full
            rounded-xl
            border
            border-[var(--fp-border)]
            bg-white
            px-4
            pr-12
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

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-[var(--fp-text-caption)]
            hover:text-[var(--fp-text)]
            transition-colors
          "
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {error && (
        <span className="text-xs text-red-600">
          {error}
        </span>
      )}
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;