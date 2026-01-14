import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import FloatingGeometry from './FloatingGeometry';

interface HeroSectionProps {
  onGetStarted: () => void;
  onViewServices: () => void;
  onScrollDown: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted, onViewServices, onScrollDown }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px] animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-[128px] animate-pulse"
        style={{
          animationDelay: '1s',
          transform: `translate(${-mousePosition.x * 2}px, ${-mousePosition.y * 2}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px]"
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))`,
          transition: 'transform 0.5s ease-out',
        }}
      />

      {/* 3D Floating Geometry */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] hidden lg:block">
        <FloatingGeometry />
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">Now accepting new projects for 2026</span>
          </div>

          {/* Main Heading */}
          <h1 
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <span className="text-white">Vijquant</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Solutions
            </span>
          </h1>

          {/* Tagline */}
          <p 
            className={`text-xl sm:text-2xl text-gray-400 mb-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Innovating Digital Experiences
          </p>

          {/* Description */}
          <p 
            className={`text-lg text-gray-500 mb-10 max-w-xl leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            We craft next-generation digital solutions that transform businesses and captivate users through cutting-edge technology and stunning design.
          </p>

          {/* Short Team Line */}
          <p className={`text-sm text-gray-400 mb-8 max-w-xl leading-relaxed transform transition-all duration-1000 delay-450 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Vijquant Tech Solutions is powered by a skilled team of developers, designers, and innovators delivering modern and future-ready digital solutions.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <button
              onClick={onGetStarted}
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 flex items-center gap-3"
            >
              Get Started
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onViewServices}
              className="group px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center gap-3"
            >
              <Play className="w-5 h-5" />
              View Services
            </button>
          </div>

          {/* Stats */}
          <div 
            className={`flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '50+', label: 'Happy Clients' },
              { value: '10+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={onScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      <style>{`
        @keyframes spin {
          from { transform: rotateY(0deg) translateZ(150px); }
          to { transform: rotateY(360deg) translateZ(150px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
