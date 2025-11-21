import { useState } from 'react'
import './LocationsPage.css'

const LocationsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const locationsData = [
    {
      id: 1,
      name: 'Barnawapara Wildlife Sanctuary',
      lat: '21.1458° N',
      lng: '81.3294° E',
      visibility: 95,
      cloud: 8,
      pollution: 1.8,
      distance: '90 km from Raipur',
      elevation: '298m',
      badge: 'Excellent',
      top: '35%',
      left: '45%'
    },
    {
      id: 2,
      name: 'Achanakmar Tiger Reserve',
      lat: '22.2578° N',
      lng: '81.6194° E',
      visibility: 92,
      cloud: 12,
      pollution: 1.5,
      distance: '120 km from Bilaspur',
      elevation: '625m',
      badge: 'Excellent',
      top: '25%',
      left: '55%'
    },
    {
      id: 3,
      name: 'Kanger Valley National Park',
      lat: '18.8622° N',
      lng: '81.9414° E',
      visibility: 88,
      cloud: 15,
      pollution: 2.1,
      distance: '30 km from Jagdalpur',
      elevation: '560m',
      badge: 'Very Good',
      top: '55%',
      left: '50%'
    },
    {
      id: 4,
      name: 'Indravati National Park',
      lat: '19.1167° N',
      lng: '81.2833° E',
      visibility: 90,
      cloud: 10,
      pollution: 1.6,
      distance: '210 km from Raipur',
      elevation: '420m',
      badge: 'Excellent',
      top: '65%',
      left: '35%'
    },
    {
      id: 5,
      name: 'Sitanadi Wildlife Sanctuary',
      lat: '21.3583° N',
      lng: '81.5694° E',
      visibility: 87,
      cloud: 18,
      pollution: 2.3,
      distance: '70 km from Dhamtari',
      elevation: '385m',
      badge: 'Very Good',
      top: '45%',
      left: '60%'
    },
    {
      id: 6,
      name: 'Udanti Wildlife Sanctuary',
      lat: '21.1764° N',
      lng: '82.2897° E',
      visibility: 85,
      cloud: 20,
      pollution: 2.5,
      distance: '95 km from Raipur',
      elevation: '310m',
      badge: 'Good',
      top: '38%',
      left: '70%'
    },
    {
      id: 7,
      name: 'Tamor Pingla Wildlife Sanctuary',
      lat: '23.1167° N',
      lng: '82.6833° E',
      visibility: 91,
      cloud: 14,
      pollution: 1.9,
      distance: '85 km from Surguja',
      elevation: '540m',
      badge: 'Excellent',
      top: '20%',
      left: '65%'
    },
    {
      id: 8,
      name: 'Gomarda Wildlife Sanctuary',
      lat: '22.1333° N',
      lng: '82.3500° E',
      visibility: 83,
      cloud: 22,
      pollution: 2.7,
      distance: '45 km from Raigarh',
      elevation: '365m',
      badge: 'Good',
      top: '28%',
      left: '42%'
    }
  ]

  const locations = [
    { id: 1, name: 'Barnawapara Wildlife Sanctuary', lat: 21.1458, lng: 81.3294, top: '35%', left: '45%' },
    { id: 2, name: 'Indravati National Park', lat: 19.5, lng: 81.5, top: '65%', left: '35%' },
    { id: 3, name: 'Achanakmar Tiger Reserve', lat: 22.3, lng: 81.6, top: '25%', left: '55%' },
    { id: 4, name: 'Kanger Valley', lat: 18.9, lng: 81.9, top: '55%', left: '50%' },
    { id: 5, name: 'Sitanadi Wildlife Sanctuary', lat: 21.8, lng: 81.8, top: '45%', left: '60%' },
    { id: 6, name: 'Tamor Pingla', lat: 22.8, lng: 82.5, top: '20%', left: '65%' },
    { id: 7, name: 'Udanti Sitanadi', lat: 21.5, lng: 82.2, top: '38%', left: '70%' },
    { id: 8, name: 'Gomarda Reserve', lat: 22.2, lng: 81.2, top: '28%', left: '42%' }
  ]

  return (
    <div className="locations-page">
      <div className="locations-container">
        {/* Header Section */}
        <div className="locations-header">
          <h1 className="locations-title">Location Explorer</h1>
          <p className="locations-subtitle">Discover 8 premium sky observation sites across Chhattisgarh</p>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="map-card">
            <h3 className="map-title">Chhattisgarh Observation Sites Map</h3>

            <div className="map-container">
              {/* Map Background */}
              <div className="map-background">
                {/* Location Pins */}
                {locations.map((location) => (
                  <div
                    key={location.id}
                    className="map-pin"
                    style={{ top: location.top, left: location.left }}
                    title={location.name}
                  >
                    <div className="pin-pulse"></div>
                  </div>
                ))}

                {/* Center Icon */}
                <div className="map-center">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#6366f1" />
                  </svg>
                  <div className="map-label">Interactive Map View</div>
                  <div className="map-hover-text">Hover over locations to view details</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="filter-section">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            <span className="filter-icon">🎯</span>
            All Locations
          </button>
          <button
            className={`filter-btn ${activeFilter === 'visibility' ? 'active' : ''}`}
            onClick={() => setActiveFilter('visibility')}
          >
            <span className="filter-icon">⭐</span>
            Best Visibility (90%+)
          </button>
          <button
            className={`filter-btn ${activeFilter === 'pollution' ? 'active' : ''}`}
            onClick={() => setActiveFilter('pollution')}
          >
            <span className="filter-icon">💡</span>
            Low Light Pollution
          </button>
          <button
            className={`filter-btn ${activeFilter === 'cloud' ? 'active' : ''}`}
            onClick={() => setActiveFilter('cloud')}
          >
            <span className="filter-icon">☁️</span>
            Clear Sky (&lt;15%)
          </button>
        </div>

        {/* Location Cards Grid */}
        <div className="locations-grid">
          {locationsData.map((location) => (
            <div key={location.id} className="location-card">
              <div className="location-card-header">
                <div>
                  <h3 className="location-name">{location.name}</h3>
                  <p className="location-coords">{location.lat}, {location.lng}</p>
                </div>
                <span className={`location-badge ${location.badge.toLowerCase().replace(' ', '-')}`}>
                  {location.badge}
                </span>
              </div>

              <div className="location-metrics">
                <div className="location-metric">
                  <div className="metric-icon-label">
                    <span className="metric-icon-small">👁️</span>
                    <span className="metric-label-small">Visibility</span>
                  </div>
                  <div className="metric-value-large">{location.visibility}%</div>
                </div>

                <div className="location-metric">
                  <div className="metric-icon-label">
                    <span className="metric-icon-small">☁️</span>
                    <span className="metric-label-small">Cloud</span>
                  </div>
                  <div className="metric-value-large">{location.cloud}%</div>
                </div>

                <div className="location-metric">
                  <div className="metric-icon-label">
                    <span className="metric-icon-small">💡</span>
                    <span className="metric-label-small">Pollution</span>
                  </div>
                  <div className="metric-value-large">{location.pollution}</div>
                </div>
              </div>

              <div className="location-info">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <span className="info-text">{location.distance}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Elevation:</span>
                  <span className="info-text">{location.elevation}</span>
                </div>
              </div>

              <button className="view-details-btn">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LocationsPage
