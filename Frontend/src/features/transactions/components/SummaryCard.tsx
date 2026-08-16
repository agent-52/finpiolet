interface SummaryCardProps {
  icon: string;
  label: string;
  value: string;
  trend: string;
  sub: string;
  up: boolean;
  neutral?: boolean;
}

function Sparkline({ up, color }: { up: boolean; color: string }) {
  const pts = up
    ? "0,18 10,14 20,16 30,9 40,12 50,5 60,7 70,2 80,4"
    : "0,4  10,7  20,5  30,11 40,8  50,15 60,12 70,18 80,16";
  return (
    <svg className="sparkline" width={80} height={20} viewBox="0 0 80 20">
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

export function SummaryCard({
  icon,
  label,
  value,
  trend,
  sub,
  up,
  neutral,
}: SummaryCardProps) {
  const tClass = neutral ? "neutral" : up ? "up" : "down";
  const sparkColor = neutral ? "#5f6470" : up ? "#059669" : "#dc2626";
  return (
    <div className="summary-card">
      <div className="summary-card__header">
        <div>
          <div className="summary-card__label">{label}</div>
          <div className="summary-card__value">{value}</div>
        </div>
        <div className="summary-card__icon">{icon}</div>
      </div>
      <div className="summary-card__footer">
        <span className={`summary-card__trend summary-card__trend--${tClass}`}>
          {!neutral && (up ? "↑" : "↓")} {trend}
        </span>
        <Sparkline up={up} color={sparkColor} />
      </div>
      <div className="summary-card__sub">{sub}</div>
    </div>
  );
}
