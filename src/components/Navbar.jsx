import "./Navbar.css"

import logo from "../assets/dccnl-logo.png"
function Navbar() {
  return (
    <nav className="navbar">
    <a href="#" className="logo">
        <img src={logo} alt="Dorfflic Logistics Logo" />
    </a>
    
    <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#track">Track Delivery</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>       
    </nav>
  );
}

export default Navbar;