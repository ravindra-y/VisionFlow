import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiMoon } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
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
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Brand */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <div className="logo">
            <svg
              className="star-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
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
