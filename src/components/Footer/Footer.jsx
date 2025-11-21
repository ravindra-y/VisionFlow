import { FiGithub, FiTwitter, FiMail } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Screenshot 2025-11-21 161342.png";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Locations", path: "/locations" },
    { label: "Recommendations", path: "/recommendations" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <img
              src={logo}
              alt="Night Sky Monitoring"
              className="footer-logo"
            />
            <h3 className="footer-title">Night-Sky Monitor</h3>
          </div>
          <p className="footer-description">
            Helping astronomy enthusiasts find the best sky viewing spots across
            Chhattisgarh.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <nav className="footer-links">
            {quickLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="footer-link"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Connect</h4>
          <div className="footer-social">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Twitter"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="mailto:info@nightskymonitor.com"
              className="social-icon"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2025 Night-Sky Monitoring Dashboard. Built for astronomy enthusiasts
          in Chhattisgarh.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
