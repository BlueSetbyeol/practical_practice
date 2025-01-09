import type { LatLng } from "leaflet";
import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

export default function LocationMarker() {
  const [position, setPosition] = useState<LatLng>();
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === undefined ? undefined : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
