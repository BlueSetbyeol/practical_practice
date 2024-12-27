import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <section className="general">
      <header>
        <h1>What do we do today ?</h1>
        <nav className="navbar">
          <Navbar />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>

      <footer>Made with determination even with errors !</footer>
    </section>
  );
}

export default App;
