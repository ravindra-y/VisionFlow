import "./Hero.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/Durg-removebg-preview.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="badge">Real-time Sky Monitoring</div>

            <h1 className="hero-title">
              Discover the Best{" "}
              <span className="gradient-text">Stargazing Locations</span> in
              Chhattisgarh
            </h1>

            <p className="hero-description">
              Track real-time night sky conditions, star visibility, cloud
              cover, and light pollution across multiple locations. Perfect for
              astronomy enthusiasts and students.
            </p>

            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => navigate("/dashboard")}
              >
                Open Dashboard
                <span className="arrow">→</span>
              </button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>

          <div className="hero-image">
            <img src={heroImage} alt="Stargazing Location" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
