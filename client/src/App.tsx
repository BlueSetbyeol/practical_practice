import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <section className="general">
      <header>
        <Link to="/" className="linkToHome">
          Home
        </Link>
        <nav className="navbar">
          <Navbar />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <hr />
      <footer>Made with determination, even with errors !</footer>
    </section>
  );
}

export default App;
