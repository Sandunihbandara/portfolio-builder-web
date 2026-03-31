function BackgroundEffects() {
  const particles = Array.from({ length: 35 });
  const stars = Array.from({ length: 22 });

  return (
    <div className="background-effects">
      <div className="aurora aurora-1"></div>
      <div className="aurora aurora-2"></div>

      <div className="bg-blob blob1"></div>
      <div className="bg-blob blob2"></div>
      <div className="bg-blob blob3"></div>

      <div className="light-ring ring1"></div>
      <div className="light-ring ring2"></div>

      {particles.map((_, index) => (
        <span
          key={`particle-${index}`}
          className={`floating-particle particle-${(index % 6) + 1}`}
          style={{
            left: `${(index * 7.3) % 100}%`,
            top: `${(index * 11.7) % 100}%`,
            animationDelay: `${(index % 10) * 0.6}s`,
            animationDuration: `${8 + (index % 6)}s`,
          }}
        />
      ))}

      {stars.map((_, index) => (
        <span
          key={`star-${index}`}
          className="twinkle-star"
          style={{
            left: `${(index * 13.1) % 100}%`,
            top: `${(index * 17.4) % 100}%`,
            animationDelay: `${(index % 8) * 0.7}s`,
            animationDuration: `${2.5 + (index % 4)}s`,
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundEffects;