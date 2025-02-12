import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import icon from "../../assets/icons/pin.png";
import "leaflet/dist/leaflet.css";
import "./NewMap.css";
import { Icon } from "leaflet";
import type { Map as MapLeaflet } from "leaflet";
import { type Dispatch, type SetStateAction, useMemo } from "react";
import type { explorationType } from "../../types/exploringType";
import LocationMarker from "../LocationMarker/LocationMarker";

interface newMapProps {
  explorings: explorationType[];
  zoom: number;
  setCenteredMap: Dispatch<SetStateAction<MapLeaflet | null>>;
}

export default function NewMap({
  explorings: exploring,
  zoom,
  setCenteredMap,
}: newMapProps) {
  const customPin = new Icon({
    iconUrl: `${icon}`,
    iconSize: [38, 38],
  });

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={[45.76, 4.83]}
        zoom={zoom}
        scrollWheelZoom={true}
        ref={setCenteredMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        {exploring.length > 0 ? (
          exploring.map((loc) => (
            <Marker
              position={[loc.latitude, loc.longitude]}
              icon={customPin}
              key={loc.city_name}
            >
              <Popup>
                <h2>{loc.city_name}</h2>
                <img src={loc.img} alt={loc.city_name} className="image_loc" />
                <p>{loc.description}</p>
              </Popup>
            </Marker>
          ))
        ) : (
          <p>Oups !</p>
        )}
      </MapContainer>
    ),
    [customPin, exploring, zoom, setCenteredMap],
  );

  return <>{displayMap}</>;
}
