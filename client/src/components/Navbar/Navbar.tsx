import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section className="navigation">
      <h1>What do we do today ?</h1>
      <ul className="list0fProjects">
        <Link to="/map">Tests of Map</Link>
        <Link to="/api">Tests of API</Link>
        <Link to="/heros">Tests of Cors</Link>
        <li>Tests to do</li>
      </ul>
    </section>
  );
}
