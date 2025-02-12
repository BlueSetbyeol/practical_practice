import ExplorationList from "../../components/ExplorationList/ExplorationList";
import NewMap from "../../components/NewMap/NewMap";
import "./TestOfMap.css";
import type { Map as MapLeaflet } from "leaflet";
import { useEffect, useState } from "react";
import type { explorationType } from "../../types/exploringType";

export default function TestOfMap() {
  const [explorings, setExplorings] = useState<explorationType[]>([]);

  const zoom = 5;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/explorations`)
      .then((res) => res.json())
      .then((data) => setExplorings(data));
  }, []);

  const [centeredMap, setCenteredMap] = useState<MapLeaflet | null>(null);

  return (
    <>
      <h3>A map to show them all</h3>
      <p>Click on the map to show your current location</p>
      <section className="presentation_map">
        <aside className="exploring_list">
          {centeredMap ? (
            <ExplorationList
              centeredMap={centeredMap}
              zoom={zoom}
              explorings={explorings}
            />
          ) : null}
        </aside>
        <article className="exploring_map">
          <NewMap
            explorings={explorings}
            zoom={zoom}
            setCenteredMap={setCenteredMap}
          />
        </article>
      </section>
    </>
  );
}
