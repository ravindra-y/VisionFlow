import { useState, useEffect } from 'react'
import './DashboardNew.css'

const DashboardPage = () => {
  const [selectedLocation, setSelectedLocation] = useState('Raipur')
  const [lastUpdated, setLastUpdated] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setLastUpdated(new Date())
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  const getTimeSinceUpdate = () => {
    const now = new Date()
    const diff = Math.floor((now - lastUpdated) / 60000)
    return diff === 0 ? 'Updated just now' : `Updated ${diff} min ago`
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        {/* Header Section */}
        <div className="dashboard-header">
          <div className="header-left">
            <h1 className="dashboard-title">Sky Monitoring Dashboard</h1>
            <p className="dashboard-subtitle">Real-time conditions across Chhattisgarh observation sites</p>
          </div>
          <div className="header-right">
            <div className="location-selector">
              <span className="location-icon">📍</span>
              <select
                className="location-dropdown"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="Raipur">Raipur</option>
                <option value="Bilaspur">Bilaspur</option>
                <option value="Durg">Durg</option>
                <option value="Korba">Korba</option>
                <option value="Rajnandgaon">Rajnandgaon</option>
              </select>
            </div>
            <button className="theme-toggle-btn">🌙</button>
          </div>
        </div>

        {/* Live Status */}
        <div className="live-status">
          <span className="live-indicator">● Live</span>
          <span className="update-time">● {getTimeSinceUpdate()}</span>
        </div>

        {/* Metrics Grid */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-header">
              <span className="metric-title">Star Visibility Score</span>
              <div className="metric-icon visibility-icon">👁️</div>
            </div>
            <div className="metric-content">
              <div className="metric-value">92 <span className="metric-unit">%</span></div>
              <div className="metric-change positive">↑ 5% from yesterday</div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <span className="metric-title">Cloud Cover</span>
              <div className="metric-icon cloud-icon">☁️</div>
            </div>
            <div className="metric-content">
              <div className="metric-value">12 <span className="metric-unit">%</span></div>
              <div className="metric-change negative">↓ 8% from yesterday</div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <span className="metric-title">Light Pollution Index</span>
              <div className="metric-icon pollution-icon">💡</div>
            </div>
            <div className="metric-content">
              <div className="metric-value">2.1 <span className="metric-unit">mag/arcsec²</span></div>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <span className="metric-title">Active Locations</span>
              <div className="metric-icon location-icon">📍</div>
            </div>
            <div className="metric-content">
              <div className="metric-value">18</div>
            </div>
          </div>
        </div>

        {/* Chart and Alerts Section */}
        <div className="dashboard-grid">
          {/* 24-Hour Sky Visibility Chart */}
          <div className="chart-card">
            <div className="chart-header">
              <div>
                <h3 className="chart-title">24-Hour Sky Visibility</h3>
                <p className="chart-subtitle">Star visibility and cloud coverage forecast</p>
              </div>
              <div className="chart-legend">
                <div className="legend-item">
                  <span className="legend-dot visibility-dot"></span>
                  <span className="legend-label">Visibility</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot cloud-dot"></span>
                  <span className="legend-label">Cloud Cover</span>
                </div>
              </div>
            </div>
            <div className="chart-container">
              <svg className="visibility-chart" viewBox="0 0 600 300" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="225" x2="600" y2="225" stroke="#1f2437" strokeWidth="1" />
                <line x1="0" y1="150" x2="600" y2="150" stroke="#1f2437" strokeWidth="1" />
                <line x1="0" y1="75" x2="600" y2="75" stroke="#1f2437" strokeWidth="1" />

                {/* Visibility line (blue) */}
                <path
                  d="M 0 75 Q 100 30 150 45 T 300 105 Q 350 120 450 45 T 600 60"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="3"
                />

                {/* Cloud Cover line (purple) */}
                <path
                  d="M 0 240 Q 100 270 150 225 T 300 135 Q 400 90 450 180 T 600 255"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                />
              </svg>
              <div className="chart-x-labels">
                <span>00:00</span>
                <span>04:00</span>
                <span>08:00</span>
                <span>12:00</span>
                <span>16:00</span>
                <span>20:00</span>
                <span>24:00</span>
              </div>
              <div className="chart-y-labels">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>
            </div>
          </div>

          {/* Sky Alerts */}
          <div className="alerts-card">
            <div className="alerts-header">
              <div className="alerts-icon">⏰</div>
              <h3 className="alerts-title">Sky Alerts</h3>
            </div>

            <div className="alerts-list">
              <div className="alert-item excellent">
                <div className="alert-badge">
                  <span className="badge-icon">⭐</span>
                  <span className="badge-text">EXCELLENT</span>
                </div>
                <h4 className="alert-title">Perfect viewing conditions tonight!</h4>
                <div className="alert-location">
                  <span className="alert-pin">📍</span>
                  <span>Barnawapara Wildlife Sanctuary</span>
                </div>
                <div className="alert-time">20:00 - 04:00</div>
              </div>

              <div className="alert-item warning">
                <div className="alert-badge">
                  <span className="badge-icon">⚠️</span>
                  <span className="badge-text">WARNING</span>
                </div>
                <h4 className="alert-title">Increasing cloud cover expected</h4>
                <div className="alert-location">
                  <span className="alert-pin">📍</span>
                  <span>Raipur</span>
                </div>
                <div className="alert-time">After 02:00</div>
              </div>

              <div className="alert-item info">
                <div className="alert-badge">
                  <span className="badge-icon">ℹ️</span>
                  <span className="badge-text">INFO</span>
                </div>
                <h4 className="alert-title">New moon phase - optimal for deep sky observation</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Location Map and Observation Times Section */}
        <div className="location-observation-grid">
          {/* Current Monitoring Location */}
          <div className="location-map-card">
            <div className="location-map-header">
              <h3 className="section-title">Current Monitoring Location</h3>
              <p className="section-subtitle">Barnawapara Wildlife Sanctuary</p>
            </div>
            <div className="interactive-map">
              <div className="map-pin-icon">📍</div>
              <div className="map-label">Interactive Map</div>
              <div className="map-coordinates">21.1458° N, 81.3294° E</div>
              <div className="map-dot dot-1"></div>
              <div className="map-dot dot-2"></div>
            </div>
            <div className="location-stats">
              <div className="location-stat">
                <div className="stat-label">Elevation</div>
                <div className="stat-value">298m</div>
              </div>
              <div className="location-stat">
                <div className="stat-label">Humidity</div>
                <div className="stat-value">65%</div>
              </div>
              <div className="location-stat">
                <div className="stat-label">Wind</div>
                <div className="stat-value">12 km/h</div>
              </div>
            </div>
          </div>

          {/* Best Observation Times */}
          <div className="observation-times-card">
            <div className="observation-header">
              <h3 className="section-title">Best Observation Times Today</h3>
              <p className="section-subtitle">Optimal viewing windows based on conditions</p>
            </div>
            <div className="time-slots">
              <div className="time-slot excellent-time">
                <div className="time-slot-header">
                  <div className="time-period">Evening Peak</div>
                  <span className="time-badge excellent">Excellent</span>
                </div>
                <div className="time-range">20:00 – 23:00</div>
                <div className="time-description">Clear skies, minimal light pollution</div>
              </div>

              <div className="time-slot very-good-time">
                <div className="time-slot-header">
                  <div className="time-period">Late Night</div>
                  <span className="time-badge very-good">Very Good</span>
                </div>
                <div className="time-range">00:00 – 04:00</div>
                <div className="time-description">Darkest hours, best for deep sky</div>
              </div>

              <div className="time-slot good-time">
                <div className="time-slot-header">
                  <div className="time-period">Dawn</div>
                  <span className="time-badge good">Good</span>
                </div>
                <div className="time-range">04:30 – 06:00</div>
                <div className="time-description">Planetary viewing window</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
