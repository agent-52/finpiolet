import { PieChart } from "recharts";
import { Cell, Pie, ResponsiveContainer } from "recharts";

const CATEGORY_DATA = [
  { name: "Housing", value: 2400, color: "#4f46e5" },
  { name: "Food", value: 1640, color: "#10b981" },
  { name: "Transport", value: 820, color: "#f59e0b" },
  { name: "Healthcare", value: 480, color: "#ef4444" },
  { name: "Entertainment", value: 680, color: "#8b5cf6" },
  { name: "Shopping", value: 1300, color: "#3b82f6" },
];
const RADIAN = Math.PI / 180;

type PieLabelProps = {
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  percent?: number;
};

function renderPieLabel({
  cx = 0,
  cy = 0,
  midAngle = 0,
  innerRadius = 0,
  outerRadius = 0,
  percent = 0,
}: PieLabelProps) {
  if (percent < 0.07) return null;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontSize: 11, fontWeight: 600 }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}

export default function CategoryBreakdownChart() {
  return (
    <div className="fp-chart-card">
      <div className="fp-chart-header">
        <h3 className="fp-chart-title">Category Breakdown</h3>
        <p className="fp-chart-subtitle">This month's spend</p>
      </div>
      <div className="fp-chart-pie-wrapper">
        <ResponsiveContainer width="55%" height={180}>
          <PieChart>
            <Pie
              data={CATEGORY_DATA}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={80}
              dataKey="value"
              labelLine={false}
              label={renderPieLabel}
            >
              {CATEGORY_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="fp-chart-legend-list">
          {CATEGORY_DATA.map((cat) => (
            <div key={cat.name} className="fp-chart-legend-item">
              <div className="fp-chart-legend-left">
                <span
                  className="fp-chart-legend-dot"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="fp-chart-legend-name">{cat.name}</span>
              </div>
              <span className="fp-chart-legend-value">
                ${cat.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
