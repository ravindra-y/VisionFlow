import { useState } from "react";
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
import "./ComparisonPage.css";

function ComparisonPage() {
  const [locationA, setLocationA] = useState("Barnawapara Wildlife Sanctuary");
  const [locationB, setLocationB] = useState("Achanakmar Tiger Reserve");

  const locations = [
    {
      name: "Barnawapara Wildlife Sanctuary",
      distance: "90 km from Raipur",
      visibility: 95,
      cloud: 8,
      pollution: 1.8,
      label: "Location A",
      elevation: 298,
      humidity: 65,
      windSpeed: 12,
    },
    {
      name: "Achanakmar Tiger Reserve",
      distance: "120 km from Bilaspur",
      visibility: 92,
      cloud: 12,
      pollution: 1.5,
      label: "Location B",
      elevation: 625,
      humidity: 58,
      windSpeed: 15,
    },
  ];

  const getLocationData = (locationName) => {
    return locations.find((loc) => loc.name === locationName);
  };

  const visibilityChartData = [
    {
      month: "Jan",
      "Achanakmar Tiger Reserve": 82,
      "Barnawapara Wildlife Sanctuary": 85,
    },
    {
      month: "Feb",
      "Achanakmar Tiger Reserve": 84,
      "Barnawapara Wildlife Sanctuary": 87,
    },
    {
      month: "Mar",
      "Achanakmar Tiger Reserve": 87,
      "Barnawapara Wildlife Sanctuary": 89,
    },
    {
      month: "Apr",
      "Achanakmar Tiger Reserve": 89,
      "Barnawapara Wildlife Sanctuary": 90,
    },
    {
      month: "May",
      "Achanakmar Tiger Reserve": 86,
      "Barnawapara Wildlife Sanctuary": 87,
    },
    {
      month: "Jun",
      "Achanakmar Tiger Reserve": 82,
      "Barnawapara Wildlife Sanctuary": 84,
    },
    {
      month: "Jul",
      "Achanakmar Tiger Reserve": 84,
      "Barnawapara Wildlife Sanctuary": 86,
    },
    {
      month: "Aug",
      "Achanakmar Tiger Reserve": 88,
      "Barnawapara Wildlife Sanctuary": 90,
    },
    {
      month: "Sep",
      "Achanakmar Tiger Reserve": 91,
      "Barnawapara Wildlife Sanctuary": 93,
    },
    {
      month: "Oct",
      "Achanakmar Tiger Reserve": 92,
      "Barnawapara Wildlife Sanctuary": 95,
    },
    {
      month: "Nov",
      "Achanakmar Tiger Reserve": 91,
      "Barnawapara Wildlife Sanctuary": 94,
    },
    {
      month: "Dec",
      "Achanakmar Tiger Reserve": 89,
      "Barnawapara Wildlife Sanctuary": 92,
    },
  ];

  const determineWinner = () => {
    const avgVisibilityA = locationAData?.visibility || 0;
    const avgVisibilityB = locationBData?.visibility || 0;

    const avgCloudA = 100 - (locationAData?.cloud || 0);
    const avgCloudB = 100 - (locationBData?.cloud || 0);

    const pollutionScoreA = (10 - (locationAData?.pollution || 0)) * 10;
    const pollutionScoreB = (10 - (locationBData?.pollution || 0)) * 10;

    const totalScoreA = (avgVisibilityA + avgCloudA + pollutionScoreA) / 3;
    const totalScoreB = (avgVisibilityB + avgCloudB + pollutionScoreB) / 3;

    return totalScoreA > totalScoreB
      ? locationAData?.name
      : locationBData?.name;
  };

  const locationAData = getLocationData(locationA);
  const locationBData = getLocationData(locationB);

  return (
    <div className="comparison-page">
      <div className="comparison-container">
        <h1 className="comparison-title">Location Comparison</h1>
        <p className="comparison-subtitle">
          Compare sky observation conditions between two locations
        </p>

        <div className="comparison-selectors">
          <div className="selector-card">
            <h3>Location A</h3>
            <select
              value={locationA}
              onChange={(e) => setLocationA(e.target.value)}
              className="location-select"
            >
              {locations.map((loc) => (
                <option key={loc.name} value={loc.name}>
                  {loc.name}
                </option>
              ))}
            </select>
          </div>

          <div className="selector-card">
            <h3>Location B</h3>
            <select
              value={locationB}
              onChange={(e) => setLocationB(e.target.value)}
              className="location-select"
            >
              {locations.map((loc) => (
                <option key={loc.name} value={loc.name}>
                  {loc.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="comparison-data">
          {locationAData && (
            <div className="location-card">
              <div className="location-header">
                <div>
                  <h2>{locationAData.name}</h2>
                  <p className="distance">{locationAData.distance}</p>
                </div>
                <span className="location-label">{locationAData.label}</span>
              </div>

              <div className="metrics">
                <div className="metric">
                  <div className="metric-icon">👁️</div>
                  <div className="metric-content">
                    <p className="metric-label">Visibility</p>
                    <p className="metric-value">{locationAData.visibility}%</p>
                  </div>
                </div>

                <div className="metric">
                  <div className="metric-icon">☁️</div>
                  <div className="metric-content">
                    <p className="metric-label">Cloud</p>
                    <p className="metric-value">{locationAData.cloud}%</p>
                  </div>
                </div>

                <div className="metric">
                  <div className="metric-icon">💨</div>
                  <div className="metric-content">
                    <p className="metric-label">Pollution</p>
                    <p className="metric-value">{locationAData.pollution}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {locationBData && (
            <div className="location-card">
              <div className="location-header">
                <div>
                  <h2>{locationBData.name}</h2>
                  <p className="distance">{locationBData.distance}</p>
                </div>
                <span className="location-label location-b">
                  {locationBData.label}
                </span>
              </div>

              <div className="metrics">
                <div className="metric">
                  <div className="metric-icon">👁️</div>
                  <div className="metric-content">
                    <p className="metric-label">Visibility</p>
                    <p className="metric-value">{locationBData.visibility}%</p>
                  </div>
                </div>

                <div className="metric">
                  <div className="metric-icon">☁️</div>
                  <div className="metric-content">
                    <p className="metric-label">Cloud</p>
                    <p className="metric-value">{locationBData.cloud}%</p>
                  </div>
                </div>

                <div className="metric">
                  <div className="metric-icon">💨</div>
                  <div className="metric-content">
                    <p className="metric-label">Pollution</p>
                    <p className="metric-value">{locationBData.pollution}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="detailed-metrics-section">
          <h2 className="detailed-metrics-title">
            Detailed Metrics Comparison
          </h2>
          <p className="detailed-metrics-subtitle">
            Head-to-head comparison of all key metrics
          </p>

          <div className="detailed-metrics-container">
            <div className="metric-row">
              <div className="metric-bar-left">
                <span className="metric-value-large">
                  {locationAData?.visibility}%
                </span>
                <span className="metric-icon">👁️</span>
              </div>
              <div className="metric-label-center">
                <p className="metric-name">Visibility Score</p>
              </div>
              <div className="metric-bar-right">
                <span className="metric-value-large">
                  {locationBData?.visibility}%
                </span>
                <span className="metric-icon">👁️</span>
              </div>
            </div>

            <div className="metric-row">
              <div className="metric-bar-left">
                <span className="metric-value-large">
                  {locationAData?.cloud}%
                </span>
                <span className="metric-icon">☁️</span>
              </div>
              <div className="metric-label-center">
                <p className="metric-name">Cloud Cover</p>
              </div>
              <div className="metric-bar-right">
                <span className="metric-value-large">
                  {locationBData?.cloud}%
                </span>
                <span className="metric-icon">☁️</span>
              </div>
            </div>

            <div className="metric-row">
              <div className="metric-bar-left">
                <span className="metric-value-large">
                  {locationAData?.pollution}
                </span>
                <span className="metric-icon">💨</span>
              </div>
              <div className="metric-label-center">
                <p className="metric-name">Light Pollution</p>
              </div>
              <div className="metric-bar-right">
                <span className="metric-value-large">
                  {locationBData?.pollution}
                </span>
                <span className="metric-icon">💨</span>
              </div>
            </div>

            <div className="metric-row">
              <div className="metric-bar-left">
                <span className="metric-value-large">
                  {locationAData?.elevation}m
                </span>
                <span className="metric-icon">⛰️</span>
              </div>
              <div className="metric-label-center">
                <p className="metric-name">Elevation</p>
              </div>
              <div className="metric-bar-right">
                <span className="metric-value-large">
                  {locationBData?.elevation}m
                </span>
                <span className="metric-icon">⛰️</span>
              </div>
            </div>

            <div className="metric-row">
              <div className="metric-bar-left">
                <span className="metric-value-large">
                  {locationAData?.humidity}%
                </span>
                <span className="metric-icon">💧</span>
              </div>
              <div className="metric-label-center">
                <p className="metric-name">Humidity</p>
              </div>
              <div className="metric-bar-right">
                <span className="metric-value-large">
                  {locationBData?.humidity}%
                </span>
                <span className="metric-icon">💧</span>
              </div>
            </div>

            <div className="metric-row">
              <div className="metric-bar-left">
                <span className="metric-value-large">
                  {locationAData?.windSpeed} km/h
                </span>
                <span className="metric-icon">💨</span>
              </div>
              <div className="metric-label-center">
                <p className="metric-name">Wind Speed</p>
              </div>
              <div className="metric-bar-right">
                <span className="metric-value-large">
                  {locationBData?.windSpeed} km/h
                </span>
                <span className="metric-icon">💨</span>
              </div>
            </div>
          </div>
        </div>

        <div className="visibility-chart-section">
          <h2 className="chart-title">12-Month Visibility Comparison</h2>
          <p className="chart-subtitle">
            Historical visibility trends for both locations
          </p>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={visibilityChartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(148, 163, 184, 0.1)"
                />
                <XAxis
                  dataKey="month"
                  stroke="#94a3b8"
                  style={{ fontSize: "12px" }}
                />
                <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 42, 0.9)",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    borderRadius: "8px",
                    color: "#f1f5f9",
                  }}
                  cursor={{ stroke: "rgba(59, 130, 246, 0.3)" }}
                />
                <Legend
                  wrapperStyle={{ paddingTop: "20px" }}
                  iconType="line"
                  textColor="#cbd5e1"
                />
                <Line
                  type="monotone"
                  dataKey="Achanakmar Tiger Reserve"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", r: 5 }}
                  activeDot={{ r: 7 }}
                />
                <Line
                  type="monotone"
                  dataKey="Barnawapara Wildlife Sanctuary"
                  stroke="#60a5fa"
                  strokeWidth={2}
                  dot={{ fill: "#60a5fa", r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="winner-section">
          <div className="winner-icon">🏆</div>
          <h2 className="winner-title">{determineWinner()} Wins Overall</h2>
          <p className="winner-subtitle">
            Based on current visibility, cloud cover, and light pollution
            metrics
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComparisonPage;
