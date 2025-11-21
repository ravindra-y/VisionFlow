import './ShootingStars.css'

const ShootingStars = () => {
  // Generate an array of shooting stars with randomized properties
  const stars = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    delay: Math.random() * 8,
    top: Math.random() * 60, // start within top 60% of screen
    left: Math.random() * 100,
    duration: 6 + Math.random() * 4
  }))

  return (
    <div className="shooting-stars" aria-hidden="true">
      {stars.map(star => (
        <span
          key={star.id}
          className="shooting-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
            '--duration': `${star.duration}s`
          }}
        />
      ))}
    </div>
  )
}

export default ShootingStars
