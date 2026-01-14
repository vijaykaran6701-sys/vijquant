import React, { useEffect, useRef, useState } from 'react';
import GlassCard from './GlassCard';
import AnimatedCounter from './AnimatedCounter';
import { Zap, Clock, HeartHandshake, TrendingUp, Globe, Headphones } from 'lucide-react';

const WhyUsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 150, suffix: '+', label: 'Projects Completed', icon: Zap },
    { value: 50, suffix: '+', label: 'Happy Clients', icon: HeartHandshake },
    { value: 99, suffix: '%', label: 'Client Satisfaction', icon: TrendingUp },
    { value: 24, suffix: '/7', label: 'Support Available', icon: Headphones },
  ];

  const reasons = [
    {
      icon: Zap,
      title: 'Lightning Fast Delivery',
      description: 'Agile methodology ensures rapid development cycles and quick time-to-market for your projects.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'Global Expertise',
      description: 'Our diverse team brings international experience and best practices from across the tech industry.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'We build with growth in mind, ensuring your platform can handle millions of users seamlessly.',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: HeartHandshake,
      title: 'Partnership Approach',
      description: 'We become an extension of your team, invested in your long-term success and growth.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Our proven project management ensures deadlines are met without compromising quality.',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Round-the-clock support and maintenance to keep your systems running at peak performance.',
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section id="why-us" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            The Vijquant
            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Advantage
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Partner with a team that's committed to your success. Here's what sets us apart from the competition.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, index) => (
            <GlassCard key={index} glowColor="mixed" className="p-8 text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <stat.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <GlassCard className="p-8 h-full group" hover3D>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className={`mt-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <GlassCard className="p-10 md:p-16 text-center" glowColor="mixed">
            <div className="max-w-4xl mx-auto">
              <svg className="w-12 h-12 mx-auto mb-8 text-blue-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
                "Vijquant transformed our digital presence completely. Their team's expertise in 3D web experiences gave us a competitive edge we never thought possible. Truly exceptional work."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-xl">
                  <img src="vijquant-images/jd.png" alt="jd"/>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">James Davidson</div>
                  <div className="text-gray-400 text-sm">CEO, TechVentures Inc.</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
