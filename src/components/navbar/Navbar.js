import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-container_link">
        Pokédex
      </Link>
      <img
        src="./assets/pokedex_logo.png"
        alt="Pokedex Logo"
        className="navbar-container_logo"
      />
      <Link to="/about" className="navbar-container_link">
        About
      </Link>
    </nav>
  );
}
