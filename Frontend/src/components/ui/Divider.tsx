interface DividerProps {
  text?: string;
}

export default function Divider({
  text,
}: DividerProps) {
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="flex-1 h-px bg-[var(--fp-border)]" />

      {text && (
        <span
          className="
            text-xs
            uppercase
            tracking-wider
            text-[var(--fp-text-caption)]
            whitespace-nowrap
          "
        >
          {text}
        </span>
      )}

      <div className="flex-1 h-px bg-[var(--fp-border)]" />
    </div>
  );
}