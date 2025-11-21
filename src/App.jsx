import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import StarsBackground from './components/Background/StarsBackground'
import ShootingStars from './components/Background/ShootingStars'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import LocationsPage from './pages/LocationsPage'

function AppContent() {
  const location = useLocation()
  const showBackground = location.pathname === '/'

  return (
    <div className="app">
      {showBackground && (
        <>
          <StarsBackground />
          <ShootingStars />
        </>
      )}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/locations" element={<LocationsPage />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
