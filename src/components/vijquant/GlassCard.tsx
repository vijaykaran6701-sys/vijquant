import React, { useRef, useState } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'violet' | 'cyan' | 'mixed';
  hover3D?: boolean;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'blue',
  hover3D = true,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const glowColors = {
    blue: 'from-blue-500/20 via-transparent to-transparent',
    violet: 'from-violet-500/20 via-transparent to-transparent',
    cyan: 'from-cyan-500/20 via-transparent to-transparent',
    mixed: 'from-blue-500/20 via-violet-500/10 to-cyan-500/20',
  };

  const borderColors = {
    blue: 'border-blue-500/30 hover:border-blue-400/50',
    violet: 'border-violet-500/30 hover:border-violet-400/50',
    cyan: 'border-cyan-500/30 hover:border-cyan-400/50',
    mixed: 'border-indigo-500/30 hover:border-indigo-400/50',
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover3D || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlowPosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform('');
    setGlowPosition({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-white/[0.08] to-white/[0.02]
        backdrop-blur-xl border ${borderColors[glowColor]}
        transition-all duration-300 ease-out
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{
        transform: transform || undefined,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-radial ${glowColors[glowColor]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        style={{
          background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(99, 102, 241, 0.15), transparent 50%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default GlassCard;
