import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ChartTooltipProps } from "../../../types/charts.types";

const INCOME_VS_EXPENSE_DATA = [
  { month: "Jul", income: 11200, expense: 6800 },
  { month: "Aug", income: 11900, expense: 7500 },
  { month: "Sep", income: 10800, expense: 6100 },
  { month: "Oct", income: 12100, expense: 6700 },
  { month: "Nov", income: 12500, expense: 7200 },
  { month: "Dec", income: 12840, expense: 7320 },
];
function IncomeExpenseTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="fp-chart-tooltip">
      <p className="fp-chart-tooltip-label">{label}</p>
      {payload.map((p) => (
        <div key={p.name} className="fp-chart-tooltip-row">
          <span className="fp-chart-tooltip-row-label">{p.name}</span>
          <span
            className="fp-chart-tooltip-row-value"
            style={{ color: p.color }}
          >
            ${p.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}
export function IncomeVsExpenseChart() {
  return (
    <div className="fp-chart-card">
      <div className="fp-chart-header">
        <h3 className="fp-chart-title">Income vs Expenses</h3>
        <p className="fp-chart-subtitle">Last 6 months</p>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={INCOME_VS_EXPENSE_DATA}
          margin={{ top: 4, right: 8, left: -20, bottom: 0 }}
          barGap={4}
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
          <Tooltip content={<IncomeExpenseTooltip />} />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
          />
          <Bar
            dataKey="income"
            name="Income"
            fill="#10b981"
            radius={[4, 4, 0, 0]}
            maxBarSize={28}
          />
          <Bar
            dataKey="expense"
            name="Expense"
            fill="#4f46e5"
            radius={[4, 4, 0, 0]}
            maxBarSize={28}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
