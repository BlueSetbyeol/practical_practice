import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import icon from "../../assets/icons/pin.png";
import "leaflet/dist/leaflet.css";
import "./NewMap.css";
import { Icon } from "leaflet";

const ExploringMap = [
  {
    loc: "Lyon",
    lat: 45.76,
    long: 4.83,
    description: "Native City",
    year: 1988,
    img: "https://www.visitelyon.fr/wp-content/uploads/2021/05/ville-de-lyon-1-1230x699.webp",
  },
  {
    loc: "London",
    lat: 51.505,
    long: -0.09,
    description: "First time working abroad",
    year: 2014,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg",
  },
  {
    loc: "Séoul",
    lat: 37.55,
    long: 126.99,
    description: "First exploration alone abroad",
    year: 2010,
    img: "https://cdn.concreteplayground.com/content/uploads/2023/12/City-of-Seoul_CJNattanai_Getty-Images-1.jpg",
  },
  {
    loc: "San Francisco",
    lat: 37.77,
    long: -122.26,
    description: "First travel worldwide",
    year: 2000,
    img: "https://cdn.prod.website-files.com/64bd94de0b26820044ae16e2/65e5d2ee1a9a6af1ddcbc57e_N%C3%A1vrh%20bez%20n%C3%A1zvu%20(46)%20(1).jpg",
  },
];

export default function NewMap() {
  const customPin = new Icon({
    iconUrl: `${icon}`,
    iconSize: [38, 38],
  });
  return (
    <>
      <h3>A map to show them all</h3>
      <MapContainer center={[45.76, 4.83]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        />
        {ExploringMap.map((loc) => (
          <Marker position={[loc.lat, loc.long]} icon={customPin} key={loc.loc}>
            <Popup>
              <h2>{loc.loc}</h2>
              <img src={loc.img} alt={loc.loc} className="image_loc" />
              <p>{loc.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
