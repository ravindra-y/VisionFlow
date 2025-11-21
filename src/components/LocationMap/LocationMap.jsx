import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./LocationMap.css";

const LocationMap = ({
  location = "Barnawapara Wildlife Sanctuary",
  latitude = 21.1458,
  longitude = 81.3294,
  elevation = "298m",
  humidity = "65%",
  wind = "12 km/h",
}) => {
  // Create a custom marker icon
  const customMarker = new L.Icon({
    iconUrl:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCAzMiA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYgMEMxMC4zNzMgMCA2IDQuMzcyIDYgMTBjMCA5IDEwIDMwIDEwIDMwczEwLTIxIDEwLTMwYzAtNS42MjgtNC4zNzMtMTAtMTAtMTB6IiBmaWxsPSIjNjM2NmYxIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==",
    iconSize: [32, 48],
    iconAnchor: [16, 48],
    popupAnchor: [0, -48],
  });

  return (
    <div className="location-map-component">
      <MapContainer
        center={[latitude, longitude]}
        zoom={11}
        scrollWheelZoom={false}
        className="location-map-container"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]} icon={customMarker}>
          <Popup className="location-popup">
            <div className="popup-content">
              <h4 className="popup-title">{location}</h4>
              <div className="popup-coords">
                {latitude.toFixed(4)}° N, {longitude.toFixed(4)}° E
              </div>
              <div className="popup-stats">
                <div className="popup-stat">
                  <span className="stat-key">Elevation:</span>
                  <span className="stat-val">{elevation}</span>
                </div>
                <div className="popup-stat">
                  <span className="stat-key">Humidity:</span>
                  <span className="stat-val">{humidity}</span>
                </div>
                <div className="popup-stat">
                  <span className="stat-key">Wind:</span>
                  <span className="stat-val">{wind}</span>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
