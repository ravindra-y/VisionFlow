import { useState } from 'react'
import { Eye, Cloud, Lightbulb, TrendingUp } from 'lucide-react'
import './RecommendationsPage.css'

const RecommendationsPage = () => {
  const [selectedLocation, setSelectedLocation] = useState('Raipur')

  return (
    <div className="recommendations-page">
      <div className="recommendations-container">
        {/* Header Section */}
        <div className="recommendations-header">
          <h1 className="recommendations-title">Daily Recommendations</h1>
          <p className="recommendations-subtitle">Top observation spots for tonight based on live conditions</p>

          <div className="header-info">
            <div className="location-selector-rec">
              <span className="location-icon">📍</span>
              <select
                className="location-dropdown-rec"
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
            <div className="sun-times">
              <div className="sun-time">
                <span className="sun-icon">🌅</span>
                <span className="sun-label">Sunset: 18:15</span>
              </div>
              <span className="dot-separator">•</span>
              <div className="sun-time">
                <span className="sun-icon">🌄</span>
                <span className="sun-label">Sunrise: 06:30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ideal Spot Card */}
        <div className="ideal-spot-card">
          <div className="ideal-spot-badge">
            <span className="star-icon">⭐</span>
            <span className="badge-text">Ideal Spot of the Day</span>
          </div>

          <div className="ideal-spot-header">
            <div>
              <h2 className="ideal-spot-name">Barnawapara Wildlife Sanctuary</h2>
              <p className="ideal-spot-coords">21.1458° N, 81.3294° E</p>
            </div>
            <div className="ideal-spot-score">
              <div className="score-number">98</div>
              <div className="score-label">Score</div>
            </div>
          </div>

          <div className="ideal-spot-metrics">
            <div className="ideal-metric-card">
              <div className="ideal-metric-icon">👁️</div>
              <div className="ideal-metric-content">
                <div className="ideal-metric-label">Visibility</div>
                <div className="ideal-metric-value">95%</div>
              </div>
            </div>

            <div className="ideal-metric-card">
              <div className="ideal-metric-icon">☁️</div>
              <div className="ideal-metric-content">
                <div className="ideal-metric-label">Cloud Cover</div>
                <div className="ideal-metric-value">8%</div>
              </div>
            </div>

            <div className="ideal-metric-card">
              <div className="ideal-metric-icon">💡</div>
              <div className="ideal-metric-content">
                <div className="ideal-metric-label">Light Pollution</div>
                <div className="ideal-metric-value">1.8</div>
              </div>
            </div>
          </div>

          <div className="why-section">
            <h3 className="why-title">Why This Location?</h3>
            <div className="reasons-list">
              <div className="reason-item">
                <span className="check-icon">✓</span>
                <span className="reason-text">Exceptional visibility</span>
              </div>
              <div className="reason-item">
                <span className="check-icon">✓</span>
                <span className="reason-text">Minimal light pollution</span>
              </div>
              <div className="reason-item">
                <span className="check-icon">✓</span>
                <span className="reason-text">Clear skies forecast</span>
              </div>
            </div>
          </div>

          <div className="location-footer">
            <div className="footer-info">
              <span className="info-icon">📍</span>
              <span className="info-text">90 km from Raipur</span>
            </div>
            <div className="best-time">
              <span className="time-label">Best Time:</span>
              <span className="time-value">22:00 - 03:00</span>
            </div>
          </div>

          <div className="action-buttons">
            <button className="view-details-button">View Details</button>
            <button className="compare-button">Compare</button>
          </div>
        </div>

        {/* Sky Quality Timeline */}
        <div className="timeline-card">
          <div className="timeline-header">
            <div>
              <h3 className="timeline-title">Tonight's Sky Quality Timeline</h3>
              <p className="timeline-subtitle">Optimal observation quality throughout the night</p>
            </div>
          </div>

          <div className="timeline-chart">
            <svg className="quality-chart" viewBox="0 0 1200 300" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="0" y1="60" x2="1200" y2="60" stroke="#2a2f45" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="0" y1="120" x2="1200" y2="120" stroke="#2a2f45" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="0" y1="180" x2="1200" y2="180" stroke="#2a2f45" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="0" y1="240" x2="1200" y2="240" stroke="#2a2f45" strokeWidth="1" strokeDasharray="5,5" />

              {/* Area fill under curve */}
              <defs>
                <linearGradient id="qualityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              <path
                d="M 0 200 L 100 120 L 200 60 L 300 45 L 400 40 L 500 35 L 600 35 L 700 35 L 800 40 L 900 50 L 1000 80 L 1100 130 L 1200 190 L 1200 300 L 0 300 Z"
                fill="url(#qualityGradient)"
              />

              {/* Quality line */}
              <path
                d="M 0 200 L 100 120 L 200 60 L 300 45 L 400 40 L 500 35 L 600 35 L 700 35 L 800 40 L 900 50 L 1000 80 L 1100 130 L 1200 190"
                fill="none"
                stroke="#6366f1"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            {/* X-axis labels */}
            <div className="timeline-x-labels">
              <span>18:00</span>
              <span>19:00</span>
              <span>20:00</span>
              <span>21:00</span>
              <span>22:00</span>
              <span>23:00</span>
              <span>00:00</span>
              <span>01:00</span>
              <span>02:00</span>
              <span>03:00</span>
              <span>04:00</span>
              <span>05:00</span>
              <span>06:00</span>
            </div>

            {/* Y-axis labels */}
            <div className="timeline-y-labels">
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>
          </div>

          <div className="peak-quality-info">
            <span className="peak-dot"></span>
            <span className="peak-text">Peak Quality: 00:00 - 01:00</span>
          </div>
        </div>

        {/* Top 5 Observation Spots */}
        <div className="top-spots-section">
          <h2 className="top-spots-title">Top 5 Observation Spots Tonight</h2>

          <div className="top-spots-grid">
            {/* Spot #2 */}
            <div className="top-spot-card">
              <div className="card-glow"></div>

              <div className="spot-header">
                <span className="spot-rank">#2</span>
                <span className="spot-score">Score: 96</span>
              </div>

              <div className="spot-title-section">
                <h3 className="spot-name">Achanakmar Tiger Reserve</h3>
                <p className="spot-coords">22.2578° N, 81.6194° E</p>
              </div>

              <div className="spot-metrics">
                <div className="spot-metric">
                  <Eye className="spot-metric-icon" size={20} />
                  <span className="spot-metric-label">Visibility</span>
                  <span className="spot-metric-value">92%</span>
                </div>
                <div className="spot-metric">
                  <Cloud className="spot-metric-icon" size={20} />
                  <span className="spot-metric-label">Cloud</span>
                  <span className="spot-metric-value">12%</span>
                </div>
                <div className="spot-metric">
                  <Lightbulb className="spot-metric-icon" size={20} />
                  <span className="spot-metric-label">Pollution</span>
                  <span className="spot-metric-value">1.5</span>
                </div>
              </div>

              <div className="spot-features">
                <div className="feature-item">
                  <TrendingUp className="feature-icon" size={16} />
                  <span className="feature-text">Darkest location</span>
                </div>
                <div className="feature-item">
                  <TrendingUp className="feature-icon" size={16} />
                  <span className="feature-text">High elevation</span>
                </div>
                <div className="feature-item">
                  <TrendingUp className="feature-icon" size={16} />
                  <span className="feature-text">Stable conditions</span>
                </div>
              </div>

              <div className="spot-time">
                <p className="spot-time-label">Best Time</p>
                <p className="spot-time-value">21:30 - 04:00</p>
              </div>

              <button className="spot-view-btn">View Details</button>
            </div>

            {/* Spot #3 */}
            <div className="top-spot-card">
              <div className="card-glow"></div>

              <div className="spot-header">
                <span className="spot-rank">#3</span>
                <span className="spot-score">Score: 94</span>
              </div>

              <div className="spot-title-section">
                <h3 className="spot-name">Indravati National Park</h3>
                <p className="spot-coords">19.1167° N, 81.2833° E</p>
              </div>

              <div className="spot-metrics">
                <div className="spot-metric">
                  <Eye className="spot-metric-icon" size={20} />
                  <span className="spot-metric-label">Visibility</span>
                  <span className="spot-metric-value">90%</span>
                </div>
                <div className="spot-metric">
                  <Cloud className="spot-metric-icon" size={20} />
                  <span className="spot-metric-label">Cloud</span>
                  <span className="spot-metric-value">10%</span>
                </div>
                <div className="spot-metric">
                  <Lightbulb className="spot-metric-icon" size={20} />
                  <span className="spot-metric-label">Pollution</span>
                  <span className="spot-metric-value">1.6</span>
                </div>
              </div>

              <div className="spot-features">
                <div className="feature-item">
                  <TrendingUp className="feature-icon" size={16} />
                  <span className="feature-text">Remote location</span>
                </div>
                <div className="feature-item">
                  <TrendingUp className="feature-icon" size={16} />
                  <span className="feature-text">Excellent air quality</span>
                </div>
                <div className="feature-item">
                  <TrendingUp className="feature-icon" size={16} />
                  <span className="feature-text">Low humidity</span>
                </div>
              </div>

              <div className="spot-time">
                <p className="spot-time-label">Best Time</p>
                <p className="spot-time-value">20:00 - 02:30</p>
              </div>

              <button className="spot-view-btn">View Details</button>
            </div>

            {/* Spot #4 */}
            <div className="top-spot-card">
              <div className="card-glow"></div>

              <div className="spot-header">
                <span className="spot-rank">#4</span>
                <span className="spot-score">Score: 92</span>
              </div>

              <div className="spot-title-section">
                <h3 className="spot-name">Tamor Pingla Wildlife Sanctuary</h3>
                <p className="spot-coords">23.1167° N, 82.6833° E</p>
              </div>

              <div className="spot-metrics">
                <div className="spot-metric">
                  <Eye className="spot-metric-icon" size={20} />
                  <span className="spot-metric-label">Visibility</span>
                  <span className="spot-metric-value">91%</span>
                </div>
                <div className="spot-metric">
                  <Cloud className="spot-metric-icon" size={20} />
                  <span className="spot-metric-label">Cloud</span>
                  <span className="spot-metric-value">14%</span>
                </div>
                <div className="spot-metric">
                  <Lightbulb className="spot-metric-icon" size={20} />
                  <span className="spot-metric-label">Pollution</span>
                  <span className="spot-metric-value">1.9</span>
                </div>
              </div>

              <div className="spot-features">
                <div className="feature-item">
                  <TrendingUp className="feature-icon" size={16} />
                  <span className="feature-text">Wide open views</span>
                </div>
                <div className="feature-item">
                  <TrendingUp className="feature-icon" size={16} />
                  <span className="feature-text">Minimal obstructions</span>
                </div>
                <div className="feature-item">
                  <TrendingUp className="feature-icon" size={16} />
                  <span className="feature-text">Good accessibility</span>
                </div>
              </div>

              <div className="spot-time">
                <p className="spot-time-label">Best Time</p>
                <p className="spot-time-value">21:00 - 03:30</p>
              </div>

              <button className="spot-view-btn">View Details</button>
            </div>

            {/* Spot #5 */}
            <div className="top-spot-card">
              <div className="card-glow"></div>

              <div className="spot-header">
                <span className="spot-rank">#5</span>
                <span className="spot-score">Score: 89</span>
              </div>

              <div className="spot-title-section">
                <h3 className="spot-name">Kanger Valley National Park</h3>
                <p className="spot-coords">18.8622° N, 81.9414° E</p>
              </div>

              <div className="spot-metrics">
                <div className="spot-metric">
                  <Eye className="spot-metric-icon" size={20} />
                  <span className="spot-metric-label">Visibility</span>
                  <span className="spot-metric-value">88%</span>
                </div>
                <div className="spot-metric">
                  <Cloud className="spot-metric-icon" size={20} />
                  <span className="spot-metric-label">Cloud</span>
                  <span className="spot-metric-value">15%</span>
                </div>
                <div className="spot-metric">
                  <Lightbulb className="spot-metric-icon" size={20} />
                  <span className="spot-metric-label">Pollution</span>
                  <span className="spot-metric-value">2.1</span>
                </div>
              </div>

              <div className="spot-features">
                <div className="feature-item">
                  <TrendingUp className="feature-icon" size={16} />
                  <span className="feature-text">Natural dark sky</span>
                </div>
                <div className="feature-item">
                  <TrendingUp className="feature-icon" size={16} />
                  <span className="feature-text">Protected area</span>
                </div>
                <div className="feature-item">
                  <TrendingUp className="feature-icon" size={16} />
                  <span className="feature-text">Weather stability</span>
                </div>
              </div>

              <div className="spot-time">
                <p className="spot-time-label">Best Time</p>
                <p className="spot-time-value">22:00 - 02:00</p>
              </div>

              <button className="spot-view-btn">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecommendationsPage
