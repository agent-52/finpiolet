interface IcProps {
  paths: string[];
  size?: number;
  color?: string;
  sw?: number;
}

export function Ic({
  paths,
  size = 16,
  color = "currentColor",
  sw = 1.75,
}: IcProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      {paths.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}
