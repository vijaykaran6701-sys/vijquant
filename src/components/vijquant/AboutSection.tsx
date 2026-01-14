import React, { useEffect, useRef, useState } from 'react';
import GlassCard from './GlassCard';
import { Lightbulb, Target, Users, Rocket, Award, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push boundaries with cutting-edge technology and creative solutions.',
      color: 'blue',
    },
    {
      icon: Target,
      title: 'Result Driven',
      description: 'Every project is designed to deliver measurable business outcomes.',
      color: 'violet',
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Your success is our priority. We build lasting partnerships.',
      color: 'cyan',
    },
    {
      icon: Rocket,
      title: 'Future Ready',
      description: 'Solutions built to scale and evolve with emerging technologies.',
      color: 'blue',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and best practices ensure exceptional deliverables.',
      color: 'violet',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guaranteed.',
      color: 'cyan',
    },
  ];

  const iconBgColors: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    violet: 'from-violet-500 to-violet-600',
    cyan: 'from-cyan-500 to-cyan-600',
  };

  const glowColors: Record<string, 'blue' | 'violet' | 'cyan'> = {
    blue: 'blue',
    violet: 'violet',
    cyan: 'cyan',
  };

  return (
    <section id="about" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">About Us</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Pioneering the Future of
            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At Vijquant Tech Solutions, we combine technical excellence with creative vision to deliver transformative digital experiences that drive business growth.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image/Visual */}
          <div className={`relative transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Rotating rings */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-violet-500/20 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-cyan-500/20 animate-[spin_25s_linear_infinite]" />
              
              {/* Center content */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    10+
                  </div>
                  <div className="text-gray-400 mt-2">Years of Excellence</div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 backdrop-blur-sm">
                <span className="text-sm text-blue-300">AI & ML</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 backdrop-blur-sm">
                <span className="text-sm text-violet-300">Cloud Native</span>
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 backdrop-blur-sm">
                <span className="text-sm text-cyan-300">Web3</span>
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 backdrop-blur-sm">
                <span className="text-sm text-indigo-300">DevOps</span>
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h3 className="text-3xl font-bold text-white mb-6">
              Building Tomorrow's Technology Today
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Founded with a vision to revolutionize digital experiences, Vijquant Tech Solutions has grown into a trusted partner for businesses seeking innovative technology solutions. Our team of expert developers, designers, and strategists work collaboratively to bring your vision to life.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We specialize in creating immersive web experiences, scalable software solutions, and cutting-edge 3D visualizations that set our clients apart in their industries.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4">
              {[
                'Full-stack development expertise',
                'Award-winning design team',
                'Agile methodology & rapid delivery',
                '24/7 support & maintenance',
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <GlassCard glowColor={glowColors[value.color]} className="p-6 h-full group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${iconBgColors[value.color]} flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
