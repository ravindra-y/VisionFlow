import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import { cities } from "../../mockData";
import "./ExploreChhattisgarh.css";

const GET_COLOR_BY_VISIBILITY = (visibility) => {
  if (visibility >= 85) return "#10b981"; // Green
  if (visibility >= 75) return "#3b82f6"; // Blue
  if (visibility >= 65) return "#f59e0b"; // Amber
  return "#ef4444"; // Red
};

const ExploreChhattisgarh = () => {
  const [hoveredCity, setHoveredCity] = useState(null);
  return (
    <section className="explore-section">
      <div className="explore-container">
        <div className="explore-header">
          <h2 className="explore-title">Explore Chhattisgarh</h2>
          <p className="explore-subtitle">
            Click on any district to view real-time star visibility, weather
            conditions, and recommendations
          </p>
        </div>

        <div className="map-wrapper">
          <div className="map-label">
            <span className="map-label-icon">📍</span>
            <span className="map-label-text">Chhattisgarh Night Sky Map</span>
            <span className="map-label-desc">
              Click any marker to view detailed sky conditions
            </span>
          </div>
          <MapContainer
            center={[21.5, 81.8]}
            zoom={8}
            className="map-container"
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {cities.map((city, idx) => {
              const color = GET_COLOR_BY_VISIBILITY(city.starVisibility);
              const svgIcon = `<svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C7.58 0 4 3.58 4 8c0 7 8 24 8 24s8-17 8-24c0-4.42-3.58-8-8-8z" fill="${color}" stroke="white" stroke-width="0.5"/>
              </svg>`;

              const encodedSvg = btoa(svgIcon);
              const coloredMarker = new L.Icon({
                iconUrl: `data:image/svg+xml;base64,${encodedSvg}`,
                iconSize: [24, 32],
                iconAnchor: [12, 32],
                popupAnchor: [0, -32],
              });

              return (
                <Marker
                  key={idx}
                  position={city.coords}
                  icon={coloredMarker}
                  eventHandlers={{
                    mouseover: () => setHoveredCity(city.id),
                    mouseout: () => setHoveredCity(null),
                  }}
                >
                  <Tooltip sticky permanent={hoveredCity === city.id}>
                    <div className="tooltip-content">
                      <div className="tooltip-name">{city.name}</div>
                      <div className="tooltip-metrics">
                        <div className="tooltip-metric">
                          👁️ {city.starVisibility}%
                        </div>
                        <div className="tooltip-metric">
                          ☁️ {city.cloudCover}%
                        </div>
                      </div>
                    </div>
                  </Tooltip>
                  <Popup className="custom-popup">
                    <div className="popup-content">
                      <h3>{city.name}</h3>
                      <div className="popup-metrics">
                        <div className="popup-metric">
                          <span className="metric-label">Star Visibility:</span>
                          <span className="metric-value">
                            {city.starVisibility}%
                          </span>
                        </div>
                        <div className="popup-metric">
                          <span className="metric-label">Cloud Cover:</span>
                          <span className="metric-value">
                            {city.cloudCover}%
                          </span>
                        </div>
                        <div className="popup-metric">
                          <span className="metric-label">Light Pollution:</span>
                          <span className="metric-value">
                            {city.lightPollution}
                          </span>
                        </div>
                      </div>
                      <div className="popup-extra">
                        <p>
                          <strong>Temperature:</strong> {city.temperature}°C
                        </p>
                        <p>
                          <strong>Humidity:</strong> {city.humidity}%
                        </p>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default ExploreChhattisgarh;
