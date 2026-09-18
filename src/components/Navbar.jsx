import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/dccnl-logo2.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <a href="#home" className="logo">
        <img src={logo} alt="Dorfflic Logistics Logo" />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
      <li>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
      </li>

      <li>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
      </li>

      <li>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>
      </li>

      <li>
        <a href="#track" onClick={() => setMenuOpen(false)}>
          Track Delivery
        </a>
      </li>

      <li>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </li>
    </ul>

    </nav>
  );
}

export default Navbar;