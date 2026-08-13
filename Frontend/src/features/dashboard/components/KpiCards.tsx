import {
  DollarSign,
  PiggyBank,
  ShoppingBag,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  sub: string;
  trend: number;
  iconWrapClass: string;
  Icon: React.ComponentType<{ size?: number }>;
}

function KPICard({
  title,
  value,
  sub,
  trend,
  iconWrapClass,
  Icon,
}: KPICardProps) {
  const isUp = trend >= 0;
  return (
    <div className="fp-kpi-card">
      <div className="fp-kpi-card-header">
        <span className="fp-kpi-card-title">{title}</span>
        <div className={`fp-kpi-icon-wrap ${iconWrapClass}`}>
          <Icon size={16} />
        </div>
      </div>
      <div className="fp-kpi-card-body">
        <p className="fp-kpi-card-value">{value}</p>
        <p className="fp-kpi-card-sub">{sub}</p>
      </div>
      <div className="fp-kpi-card-trend">
        <span
          className={`fp-trend-badge ${isUp ? "fp-trend-badge--up" : "fp-trend-badge--down"}`}
        >
          {isUp ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
          {isUp ? "+" : ""}
          {trend}%
        </span>
        <span className="fp-trend-label">vs last month</span>
      </div>
    </div>
  );
}

export default function KPICards() {
  return (
    <div className="fp-kpi-grid fp-section-mb">
      <KPICard
        title="Total Income"
        value="$12,840"
        sub="This month"
        trend={8.2}
        iconWrapClass="fp-kpi-icon-wrap--indigo"
        Icon={DollarSign}
      />
      <KPICard
        title="Total Expenses"
        value="$7,320"
        sub="This month"
        trend={-3.5}
        iconWrapClass="fp-kpi-icon-wrap--amber"
        Icon={ShoppingBag}
      />
      <KPICard
        title="Total Savings"
        value="$5,520"
        sub="Net this month"
        trend={14.8}
        iconWrapClass="fp-kpi-icon-wrap--emerald"
        Icon={PiggyBank}
      />
      <KPICard
        title="Top Category"
        value="Housing"
        sub="$2,400 spent"
        trend={2.1}
        iconWrapClass="fp-kpi-icon-wrap--purple"
        Icon={Wallet}
      />
    </div>
  );
}
