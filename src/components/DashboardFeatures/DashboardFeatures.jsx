import "./DashboardFeatures.css";

const DashboardFeatures = () => {
  const features = [
    {
      icon: "⭐",
      iconColor: "#4169E1",
      title: "Real-time Metrics",
      description: "",
    },
    {
      icon: "📍",
      iconColor: "#10B981",
      title: "Interactive Map",
      description: "",
    },
    {
      icon: "📈",
      iconColor: "#8B5CF6",
      title: "Daily Recommendations",
      description: "",
    },
    {
      icon: "✓",
      iconColor: "#F97316",
      title: "Location Ratings",
      description: "",
    },
    {
      icon: "🌙",
      iconColor: "#EC4899",
      title: "Dark Mode Support",
      description: "",
    },
    {
      icon: "→",
      iconColor: "#06B6D4",
      title: "Responsive Design",
      description: "",
    },
  ];

  return (
    <section className="dashboard-features">
      <div className="dashboard-features-container">
        <div className="section-header">
          <h2 className="section-title">Dashboard Features</h2>
          <p className="section-description">
            Everything you need to find the perfect stargazing spot
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div
                className="feature-icon"
                style={{ backgroundColor: `${feature.iconColor}33` }}
              >
                <span
                  style={{
                    filter: `drop-shadow(0 0 8px ${feature.iconColor})`,
                  }}
                >
                  {feature.icon}
                </span>
              </div>
              <h3 className="feature-item-title">{feature.title}</h3>
              <p className="feature-item-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardFeatures;
