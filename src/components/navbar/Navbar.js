import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-container_link">
        Pokédex
      </Link>
      <a href="https://pokeapi.co/" className="navbar-container_logo">
        <img
          src={process.env.PUBLIC_URL + "/assets/pokedex_logo.png"}
          alt="Pokedex Logo"
        />
      </a>
      <Link to="/about" className="navbar-container_link">
        About
      </Link>
    </nav>
  );
}
