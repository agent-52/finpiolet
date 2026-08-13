import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ChartTooltipProps } from "../../../types/charts.types";

const SPENDING_TREND_DATA = [
  { month: "Jan", spending: 6200 },
  { month: "Feb", spending: 5800 },
  { month: "Mar", spending: 7100 },
  { month: "Apr", spending: 6500 },
  { month: "May", spending: 6900 },
  { month: "Jun", spending: 7320 },
  { month: "Jul", spending: 6800 },
  { month: "Aug", spending: 7500 },
  { month: "Sep", spending: 6100 },
  { month: "Oct", spending: 6700 },
  { month: "Nov", spending: 7200 },
  { month: "Dec", spending: 7320 },
];

function SpendingTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="fp-chart-tooltip">
      <p className="fp-chart-tooltip-label">{label}</p>
      <p className="fp-chart-tooltip-value">
        ${payload[0].value.toLocaleString()}
      </p>
    </div>
  );
}

export function SpendingTrendChart() {
  return (
    <div className="fp-chart-card">
      <div className="fp-chart-header">
        <h3 className="fp-chart-title">Monthly Spending Trend</h3>
        <p className="fp-chart-subtitle">12-month overview</p>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={SPENDING_TREND_DATA}
          margin={{ top: 4, right: 8, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f0f1f5"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip content={<SpendingTooltip />} />
          <Line
            type="monotone"
            dataKey="spending"
            stroke="#4f46e5"
            strokeWidth={2.5}
            dot={false}
            activeDot={{
              r: 5,
              fill: "#4f46e5",
              strokeWidth: 2,
              stroke: "#fff",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
