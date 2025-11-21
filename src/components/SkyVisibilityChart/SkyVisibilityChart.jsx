import { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FiBarChart2, FiStar, FiTrendingUp, FiCloud } from "react-icons/fi";
import "./SkyVisibilityChart.css";

// Custom Tooltip Component (outside the main component)
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p className="tooltip-time">{payload[0].payload.time}</p>
        {payload.map((entry, index) => (
          <p
            key={index}
            style={{ color: entry.color }}
            className="tooltip-value"
          >
            {entry.name}: {entry.value.toFixed(1)}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const SkyVisibilityChart = ({ location = "Raipur" }) => {
  const [timeRange, setTimeRange] = useState("24h");

  // Mock data generation based on location
  const generateChartData = () => {
    const hours = Array.from({ length: 24 }, (_, i) => i);
    return hours.map((hour) => {
      const baseVisibility = Math.sin((hour / 24) * Math.PI) * 40 + 65;
      const baseCloud = Math.cos((hour / 24) * Math.PI) * 35 + 25;

      return {
        time: `${String(hour).padStart(2, "0")}:00`,
        hour: hour,
        visibility: Math.max(
          20,
          Math.min(100, baseVisibility + (Math.random() - 0.5) * 15)
        ),
        cloudCover: Math.max(
          0,
          Math.min(100, baseCloud + (Math.random() - 0.5) * 15)
        ),
      };
    });
  };

  const chartData = useMemo(() => generateChartData(), []);

  const peakHours = useMemo(() => {
    const sorted = [...chartData].sort((a, b) => b.visibility - a.visibility);
    return sorted.slice(0, 3);
  }, [chartData]);

  const averageVisibility = useMemo(
    () =>
      (
        chartData.reduce((sum, d) => sum + d.visibility, 0) / chartData.length
      ).toFixed(1),
    [chartData]
  );

  const bestTime = useMemo(() => {
    const best = chartData.reduce((prev, curr) =>
      curr.visibility > prev.visibility ? curr : prev
    );
    return best;
  }, [chartData]);

  return (
    <div className="sky-visibility-chart">
      <div className="chart-header-section">
        <div className="header-info">
          <div>
            <h2 className="chart-title">24-Hour Sky Visibility Forecast</h2>
            <p className="chart-description">
              Star visibility and cloud coverage prediction for {location}
            </p>
          </div>
          <div className="time-range-selector">
            <button
              className={`time-btn ${timeRange === "24h" ? "active" : ""}`}
              onClick={() => setTimeRange("24h")}
            >
              24h
            </button>
            <button
              className={`time-btn ${timeRange === "12h" ? "active" : ""}`}
              onClick={() => setTimeRange("12h")}
            >
              12h
            </button>
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2f45" />
            <XAxis
              dataKey="time"
              stroke="#8b92b0"
              tick={{ fontSize: 12 }}
              interval={2}
            />
            <YAxis
              stroke="#8b92b0"
              tick={{ fontSize: 12 }}
              domain={[0, 100]}
              label={{
                value: "(%)",
                angle: -90,
                position: "insideLeft",
                offset: 10,
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="line" />
            <Line
              type="monotone"
              dataKey="visibility"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ fill: "#6366f1", r: 4 }}
              activeDot={{ r: 6 }}
              name="Star Visibility"
              isAnimationActive={true}
            />
            <Line
              type="monotone"
              dataKey="cloudCover"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ fill: "#8b5cf6", r: 4 }}
              activeDot={{ r: 6 }}
              name="Cloud Cover"
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Statistics and Insights */}
      <div className="insights-grid">
        {/* Average Visibility Card */}
        <div className="insight-card">
          <div className="insight-icon">
            <FiBarChart2 size={32} color="#6366f1" />
          </div>
          <div className="insight-content">
            <p className="insight-label">Average Visibility</p>
            <p className="insight-value">{averageVisibility}%</p>
          </div>
        </div>

        {/* Best Time Card */}
        <div className="insight-card">
          <div className="insight-icon">
            <FiStar size={32} color="#f59e0b" />
          </div>
          <div className="insight-content">
            <p className="insight-label">Best Observation Time</p>
            <p className="insight-value">{bestTime.time}</p>
            <p className="insight-detail">
              {bestTime.visibility.toFixed(0)}% visibility
            </p>
          </div>
        </div>

        {/* Peak Hours Card */}
        <div className="insight-card">
          <div className="insight-icon">
            <FiTrendingUp size={32} color="#10b981" />
          </div>
          <div className="insight-content">
            <p className="insight-label">Top 3 Peak Hours</p>
            <div className="peak-hours">
              {peakHours.map((hour, idx) => (
                <span key={idx} className="peak-badge">
                  {hour.time}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cloud Alert Card */}
        <div className="insight-card">
          <div className="insight-icon">
            <FiCloud size={32} color="#8b5cf6" />
          </div>
          <div className="insight-content">
            <p className="insight-label">Average Cloud Cover</p>
            <p className="insight-value">
              {(
                chartData.reduce((sum, d) => sum + d.cloudCover, 0) /
                chartData.length
              ).toFixed(1)}
              %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkyVisibilityChart;
