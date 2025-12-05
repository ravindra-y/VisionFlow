import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiMoon } from "react-icons/fi";
import logo from "../../../public/Gemini_Generated_Image_mk3kanmk3kanmk3k-photoaidcom-cropped.png";
import "./Navbar.css";

const Navbar = ({ isHomePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Locations", path: "/locations" },
    { label: "Recommendations", path: "/recommendations" },
    { label: "Compare", path: "/compare" },
  ];

  return (
    <nav className={`navbar ${isHomePage ? 'navbar-home' : ''}`}>
      <div className="navbar-container">
        {/* Logo and Brand */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img src={logo} alt="Night Sky Monitoring" className="navbar-logo" />
          <h1 className="brand-title">Night Sky Monitor</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-right">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="nav-link">
              {link.label}
            </Link>
          ))}
          <button className="theme-toggle" aria-label="Toggle theme">
            <FiMoon size={20} color="#06b6d4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-nav-container">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <button className="mobile-theme-toggle" aria-label="Toggle theme">
            <FiMoon size={20} color="#06b6d4" />
            <span>Theme</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
