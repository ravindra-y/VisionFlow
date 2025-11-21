import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="logo">
            <svg className="star-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="brand-title">Night Sky Monitoring</h1>
        </Link>

        <div className="navbar-right">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/locations" className="nav-link">Locations</Link>
          <Link to="/recommendations" className="nav-link">Recommendations</Link>
          <Link to="/compare" className="nav-link">Compare</Link>
          <button className="theme-toggle">
            <span className="moon-icon">🌙</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar