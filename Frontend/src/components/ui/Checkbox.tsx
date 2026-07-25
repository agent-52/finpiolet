import { Check } from "lucide-react";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export default function Checkbox({
  checked,
  onChange,
  label,
  disabled = false,
}: CheckboxProps) {
  return (
    <label
      className={`
        flex items-center gap-3
        cursor-pointer
        select-none
        ${disabled && "opacity-60 cursor-not-allowed"}
      `}
    >
      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`
          h-5
          w-5
          rounded-md
          border
          transition-all
          duration-200
          flex
          items-center
          justify-center

          ${
            checked
              ? "bg-[var(--fp-green)] border-[var(--fp-green)]"
              : "bg-white border-[var(--fp-divider)]"
          }
        `}
      >
        {checked && (
          <Check
            size={12}
            className="text-white"
            strokeWidth={3}
          />
        )}
      </button>

      {label && (
        <span className="text-sm text-[var(--fp-text-body)]">
          {label}
        </span>
      )}
    </label>
  );
}