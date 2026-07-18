// Pure CSS particle background - no external dependency issues
// Uses absolutely positioned animated dots via CSS animations

const ParticlesComponent = () => {
  // Generate static particles
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.4 + 0.1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            background: p.id % 2 === 0 ? '#3b82f6' : '#8b5cf6',
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
            boxShadow: `0 0 ${p.size * 2}px ${p.id % 2 === 0 ? '#3b82f6' : '#8b5cf6'}`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-15px); }
          100% { transform: translateY(-10px) translateX(5px); }
        }
      `}</style>
    </div>
  );
};

export default ParticlesComponent;
