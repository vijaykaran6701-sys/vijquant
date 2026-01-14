import React, { useEffect, useRef, useState } from 'react';
import ContactForm from './ContactForm';
import GlassCard from './GlassCard';
import { MapPin, Mail, Phone, Clock, ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Kanpur Nagar', 'Uttar Pradesh, India'],
      color: 'blue',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@vijquant.com', 'support@vijquant.com'],
      color: 'violet',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 (9170) 259-644', '+91 (9170) 659-644'],
      color: 'cyan',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9AM - 6PM', 'Sat: 10AM - 4PM'],
      color: 'mixed',
    },
  ];

  const iconBgColors: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    violet: 'from-violet-500 to-violet-600',
    cyan: 'from-cyan-500 to-cyan-600',
    mixed: 'from-indigo-500 to-purple-600',
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Let's Build Something
            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Reach out and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Start a Conversation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Whether you have a project in mind or just want to explore possibilities, we're here to help. Our team typically responds within 24 hours.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <GlassCard 
                  key={index} 
                  className="p-6 group" 
                  glowColor={info.color as 'blue' | 'violet' | 'cyan' | 'mixed'}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconBgColors[info.color]} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-500`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-400 text-sm">{detail}</p>
                  ))}
                </GlassCard>
              ))}
            </div>

            {/* Quick Links */}
            <GlassCard className="p-6 mt-6" glowColor="mixed">
              <h4 className="text-white font-semibold mb-4">Quick Actions</h4>
              <div className="space-y-3">
                {[
                  { label: 'Schedule a Call', href: '#' },
                  { label: 'Download Company Profile', href: '#' },
                  { label: 'View Case Studies', href: '#' },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center justify-between text-gray-400 hover:text-white transition-colors group/link"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
