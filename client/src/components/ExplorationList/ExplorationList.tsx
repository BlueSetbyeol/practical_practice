import "./ExplorationList.css";
import type { LatLngExpression, Map as MapLeaflet } from "leaflet";
import type { explorationType } from "../../types/exploringType";

interface explorationListProps {
  explorings: explorationType[];
  centeredMap: MapLeaflet | null;
  zoom: number;
}

export default function ExplorationList({
  centeredMap,
  zoom,
  explorings,
}: explorationListProps) {
  const handleClick = (loc: [number, number]) => {
    if (centeredMap) {
      const coord: LatLngExpression = loc;
      centeredMap.setView(coord, zoom);
    }
  };

  return (
    <>
      {explorings.length !== 0 ? (
        explorings.map((loc) => (
          <button
            type="button"
            key={loc.id}
            className="exploring_card"
            onClick={() => handleClick([loc.latitude, loc.longitude])}
          >
            <img src={loc.img} alt={loc.city_name} className="city_image" />
            <div className="exploration_description">
              <p>City name : {loc.city_name}</p>
              <p>Description : {loc.description}</p>
              <p>Date of visit : {loc.year}</p>
            </div>
          </button>
        ))
      ) : (
        <article className="exploring_card">
          <p>To be determined</p>
        </article>
      )}
    </>
  );
}
