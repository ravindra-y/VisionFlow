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
              const coloredMarker = new L.Icon({
                iconUrl: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCAzMiA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iJHtjaXR5LnN0YXJWaXNpYmlsaXR5ID49IDg1ID8gJyMxMGI5ODEnIDogY2l0eS5zdGFyVmlzaWJpbGl0eSA+PSA3NSA/ICcjM2I4MmY2JyA6IGNpdHkuc3RhclZpc2liaWxpdHkgPj0gNjUgPyAnI2Y1OWUwYicgOiAnI2VmNDQ0NCd9Ii8+PC9zdmc+`,
                iconSize: [32, 48],
                iconAnchor: [16, 48],
                popupAnchor: [0, -48],
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
