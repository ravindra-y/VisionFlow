import { useState } from "react";
import { FiEye, FiCloud, FiZap, FiTrendingUp } from "react-icons/fi";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./LocationsPage.css";

const LocationsPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(0);

  const locationsData = [
    {
      id: 1,
      name: "Barnawapara Wildlife Sanctuary",
      lat: "21.1458° N",
      lng: "81.3294° E",
      visibility: 95,
      visibilityChange: "+3% from avg",
      cloud: 8,
      cloudChange: "4% from avg",
      pollution: 1.8,
      pollutionUnit: "mag/arcsec²",
      distance: "90 km from Raipur",
      elevation: "298m",
      elevationDetail: "Above sea level",
      badge: "Excellent",
      top: "35%",
      left: "45%",
    },
    {
      id: 2,
      name: "Achanakmar Tiger Reserve",
      lat: "22.2578° N",
      lng: "81.6194° E",
      visibility: 92,
      visibilityChange: "+2% from avg",
      cloud: 12,
      cloudChange: "3% from avg",
      pollution: 1.5,
      pollutionUnit: "mag/arcsec²",
      distance: "120 km from Bilaspur",
      elevation: "625m",
      elevationDetail: "Above sea level",
      badge: "Excellent",
      top: "25%",
      left: "55%",
    },
    {
      id: 3,
      name: "Kanger Valley National Park",
      lat: "18.8622° N",
      lng: "81.9414° E",
      visibility: 88,
      visibilityChange: "+1% from avg",
      cloud: 15,
      cloudChange: "5% from avg",
      pollution: 2.1,
      pollutionUnit: "mag/arcsec²",
      distance: "30 km from Jagdalpur",
      elevation: "560m",
      elevationDetail: "Above sea level",
      badge: "Very Good",
      top: "55%",
      left: "50%",
    },
    {
      id: 4,
      name: "Indravati National Park",
      lat: "19.1167° N",
      lng: "81.2833° E",
      visibility: 90,
      visibilityChange: "+2% from avg",
      cloud: 10,
      cloudChange: "2% from avg",
      pollution: 1.6,
      pollutionUnit: "mag/arcsec²",
      distance: "210 km from Raipur",
      elevation: "420m",
      elevationDetail: "Above sea level",
      badge: "Excellent",
      top: "65%",
      left: "35%",
    },
    {
      id: 5,
      name: "Sitanadi Wildlife Sanctuary",
      lat: "21.3583° N",
      lng: "81.5694° E",
      visibility: 87,
      visibilityChange: "+1% from avg",
      cloud: 18,
      cloudChange: "6% from avg",
      pollution: 2.3,
      pollutionUnit: "mag/arcsec²",
      distance: "70 km from Dhamtari",
      elevation: "385m",
      elevationDetail: "Above sea level",
      badge: "Very Good",
      top: "45%",
      left: "60%",
    },
    {
      id: 6,
      name: "Udanti Wildlife Sanctuary",
      lat: "21.1764° N",
      lng: "82.2897° E",
      visibility: 85,
      visibilityChange: "0% from avg",
      cloud: 20,
      cloudChange: "7% from avg",
      pollution: 2.5,
      pollutionUnit: "mag/arcsec²",
      distance: "95 km from Raipur",
      elevation: "310m",
      elevationDetail: "Above sea level",
      badge: "Good",
      top: "38%",
      left: "70%",
    },
    {
      id: 7,
      name: "Tamor Pingla Wildlife Sanctuary",
      lat: "23.1167° N",
      lng: "82.6833° E",
      visibility: 91,
      visibilityChange: "+2% from avg",
      cloud: 14,
      cloudChange: "4% from avg",
      pollution: 1.9,
      pollutionUnit: "mag/arcsec²",
      distance: "85 km from Surguja",
      elevation: "540m",
      elevationDetail: "Above sea level",
      badge: "Excellent",
      top: "20%",
      left: "65%",
    },
    {
      id: 8,
      name: "Gomarda Wildlife Sanctuary",
      lat: "22.1333° N",
      lng: "82.3500° E",
      visibility: 83,
      visibilityChange: "0% from avg",
      cloud: 22,
      cloudChange: "8% from avg",
      pollution: 2.7,
      pollutionUnit: "mag/arcsec²",
      distance: "45 km from Raigarh",
      elevation: "365m",
      elevationDetail: "Above sea level",
      badge: "Good",
      top: "28%",
      left: "42%",
    },
  ];

  const visibilityData = [
    { month: "Jan", value: 85 },
    { month: "Feb", value: 88 },
    { month: "Mar", value: 90 },
    { month: "Apr", value: 92 },
    { month: "May", value: 89 },
    { month: "Jun", value: 86 },
    { month: "Jul", value: 88 },
    { month: "Aug", value: 91 },
    { month: "Sep", value: 94 },
    { month: "Oct", value: 96 },
    { month: "Nov", value: 97 },
    { month: "Dec", value: 95 },
  ];

  const pollutionData = [
    { month: "Jan", value: 2.7 },
    { month: "Feb", value: 2.5 },
    { month: "Mar", value: 2.3 },
    { month: "Apr", value: 2.1 },
    { month: "May", value: 2.3 },
    { month: "Jun", value: 2.6 },
    { month: "Jul", value: 2.7 },
    { month: "Aug", value: 2.4 },
    { month: "Sep", value: 2.0 },
    { month: "Oct", value: 1.8 },
    { month: "Nov", value: 1.7 },
    { month: "Dec", value: 2.0 },
  ];

  const currentLocation = locationsData[selectedLocation];

  return (
    <div className="locations-page">
      <div className="locations-container">
        {/* Header Section */}
        <div className="location-detail-header">
          <div className="header-top">
            <div className="header-left">
              <h1 className="location-detail-title">{currentLocation.name}</h1>
              <p className="location-detail-coords">
                {currentLocation.lat}, {currentLocation.lng} •{" "}
                {currentLocation.distance}
              </p>
            </div>
            <div className="header-right">
              <span
                className={`quality-badge badge-${currentLocation.badge
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {currentLocation.badge}
              </span>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-header">
              <span className="metric-label">Visibility Score</span>
            </div>
            <div className="metric-content">
              <div className="metric-icon-wrapper">
                <FiEye className="metric-icon" size={32} />
              </div>
              <div className="metric-details">
                <span className="metric-value">
                  {currentLocation.visibility}%
                </span>
                <span className="metric-change positive">
                  {currentLocation.visibilityChange}
                </span>
              </div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <span className="metric-label">Cloud Cover</span>
            </div>
            <div className="metric-content">
              <div className="metric-icon-wrapper cloud-icon">
                <FiCloud className="metric-icon" size={32} />
              </div>
              <div className="metric-details">
                <span className="metric-value">{currentLocation.cloud}%</span>
                <span className="metric-change negative">
                  ↓ {currentLocation.cloudChange}
                </span>
              </div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <span className="metric-label">Light Pollution</span>
            </div>
            <div className="metric-content">
              <div className="metric-icon-wrapper pollution-icon">
                <FiZap className="metric-icon" size={32} />
              </div>
              <div className="metric-details">
                <span className="metric-value">
                  {currentLocation.pollution}
                </span>
                <span className="metric-unit">
                  {currentLocation.pollutionUnit}
                </span>
              </div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <span className="metric-label">Elevation</span>
            </div>
            <div className="metric-content">
              <div className="metric-icon-wrapper elevation-icon">
                <FiTrendingUp className="metric-icon" size={32} />
              </div>
              <div className="metric-details">
                <span className="metric-value">
                  {currentLocation.elevation}
                </span>
                <span className="metric-unit">
                  {currentLocation.elevationDetail}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Location Selector */}
        <div className="location-selector">
          <h3 className="selector-title">Browse Other Locations</h3>
          <div className="location-chips">
            {locationsData.map((location, index) => (
              <button
                key={location.id}
                className={`location-chip ${
                  selectedLocation === index ? "active" : ""
                }`}
                onClick={() => setSelectedLocation(index)}
              >
                {location.name}
              </button>
            ))}
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-section">
          <div className="chart-card">
            <div className="chart-header">
              <h3 className="chart-title">Yearly Visibility Trend</h3>
              <p className="chart-subtitle">
                Monthly average star visibility score
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={visibilityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2f45" />
                <XAxis
                  dataKey="month"
                  stroke="#8b92b0"
                  tick={{ fill: "#8b92b0" }}
                />
                <YAxis
                  stroke="#8b92b0"
                  tick={{ fill: "#8b92b0" }}
                  domain={[0, 100]}
                />
                <Tooltip
                  contentStyle={{
                    background: "#1a1f35",
                    border: "1px solid #2a2f45",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#6366f1"
                  strokeWidth={3}
                  dot={{ fill: "#6366f1", r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <h3 className="chart-title">Light Pollution Trend</h3>
              <p className="chart-subtitle">Monthly light pollution index</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={pollutionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2f45" />
                <XAxis
                  dataKey="month"
                  stroke="#8b92b0"
                  tick={{ fill: "#8b92b0" }}
                />
                <YAxis
                  stroke="#8b92b0"
                  tick={{ fill: "#8b92b0" }}
                  domain={[0, 3]}
                />
                <Tooltip
                  contentStyle={{
                    background: "#1a1f35",
                    border: "1px solid #2a2f45",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Bar dataKey="value" fill="#a5b4fc" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Hourly Forecast */}
        <div className="hourly-forecast-section">
          <div className="forecast-header">
            <h3 className="forecast-title">Tonight's Hourly Forecast</h3>
            <p className="forecast-subtitle">
              Detailed hour-by-hour sky conditions
            </p>
          </div>

          <div className="forecast-table">
            <div className="forecast-table-header">
              <div className="forecast-header-cell">Time</div>
            </div>

            <div className="forecast-table-body">
              <div className="forecast-row">
                <div className="forecast-cell time-cell">18:00</div>
                <div className="forecast-cell">
                  <div className="visibility-cell">
                    <div
                      className="visibility-bar"
                      style={{ width: "85%" }}
                    ></div>
                    <span className="visibility-text">85%</span>
                  </div>
                  <div>15%</div>
                  <div>24°C</div>
                  <div>
                    <span className="condition-badge condition-good">Good</span>
                  </div>
                </div>
              </div>

              <div className="forecast-row">
                <div className="forecast-cell time-cell">19:00</div>
                <div className="forecast-cell">
                  <div className="visibility-cell">
                    <div
                      className="visibility-bar"
                      style={{ width: "88%" }}
                    ></div>
                    <span className="visibility-text">88%</span>
                  </div>
                  <div>12%</div>
                  <div>22°C</div>
                  <div>
                    <span className="condition-badge condition-good">Good</span>
                  </div>
                </div>
              </div>

              <div className="forecast-row">
                <div className="forecast-cell time-cell">20:00</div>
                <div className="forecast-cell">
                  <div className="visibility-cell">
                    <div
                      className="visibility-bar"
                      style={{ width: "92%" }}
                    ></div>
                    <span className="visibility-text">92%</span>
                  </div>
                  <div>10%</div>
                  <div>20°C</div>
                  <div>
                    <span className="condition-badge condition-very-good">
                      Very Good
                    </span>
                  </div>
                </div>
              </div>

              <div className="forecast-row">
                <div className="forecast-cell time-cell">21:00</div>
                <div className="forecast-cell">
                  <div className="visibility-cell">
                    <div
                      className="visibility-bar"
                      style={{ width: "94%" }}
                    ></div>
                    <span className="visibility-text">94%</span>
                  </div>
                  <div>8%</div>
                  <div>19°C</div>
                  <div>
                    <span className="condition-badge condition-very-good">
                      Very Good
                    </span>
                  </div>
                </div>
              </div>

              <div className="forecast-row">
                <div className="forecast-cell time-cell">22:00</div>
                <div className="forecast-cell">
                  <div className="visibility-cell">
                    <div
                      className="visibility-bar"
                      style={{ width: "95%" }}
                    ></div>
                    <span className="visibility-text">95%</span>
                  </div>
                  <div>8%</div>
                  <div>18°C</div>
                  <div>
                    <span className="condition-badge condition-excellent">
                      Excellent
                    </span>
                  </div>
                </div>
              </div>

              <div className="forecast-row">
                <div className="forecast-cell time-cell">23:00</div>
                <div className="forecast-cell">
                  <div className="visibility-cell">
                    <div
                      className="visibility-bar"
                      style={{ width: "96%" }}
                    ></div>
                    <span className="visibility-text">96%</span>
                  </div>
                  <div>7%</div>
                  <div>17°C</div>
                  <div>
                    <span className="condition-badge condition-excellent">
                      Excellent
                    </span>
                  </div>
                </div>
              </div>

              <div className="forecast-row">
                <div className="forecast-cell time-cell">00:00</div>
                <div className="forecast-cell">
                  <div className="visibility-cell">
                    <div
                      className="visibility-bar"
                      style={{ width: "95%" }}
                    ></div>
                    <span className="visibility-text">95%</span>
                  </div>
                  <div>8%</div>
                  <div>16°C</div>
                  <div>
                    <span className="condition-badge condition-excellent">
                      Excellent
                    </span>
                  </div>
                </div>
              </div>

              <div className="forecast-row">
                <div className="forecast-cell time-cell">01:00</div>
                <div className="forecast-cell">
                  <div className="visibility-cell">
                    <div
                      className="visibility-bar"
                      style={{ width: "94%" }}
                    ></div>
                    <span className="visibility-text">94%</span>
                  </div>
                  <div>10%</div>
                  <div>16°C</div>
                  <div>
                    <span className="condition-badge condition-very-good">
                      Very Good
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compare Button */}
        <div className="action-section">
          <button className="compare-location-btn">Compare Location</button>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
