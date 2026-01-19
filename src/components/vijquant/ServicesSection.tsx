
import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';
import { supabase } from '@/lib/supabase';

interface ServicesSectionProps {
  onServiceClick: (service: string) => void;
}

interface Service {
  id: string;
  title: string;
  description: string | null;
  icon: string;
  features: string[];
  glow_color: string;
  active: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('active', true)
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
      // Fallback to default services
      setServices([
        {
          id: '1',
          title: 'Web Development',
          description: 'Build powerful, scalable web applications with modern frameworks and cutting-edge technologies.',
          icon: 'web',
          features: [
            'React, Next.js, Vue.js',
            'Node.js & Python backends',
            'Progressive Web Apps',
            'API Development & Integration',
          ],
          glow_color: 'blue',
          active: true,
        },
        {
          id: '2',
          title: 'UI/UX Design',
          description: 'Create stunning, user-centered designs that captivate audiences and drive engagement.',
          icon: 'design',
          features: [
            'User Research & Testing',
            'Wireframing & Prototyping',
            'Design Systems',
            'Motion & Interaction Design',
          ],
          glow_color: 'violet',
          active: true,
        },
        {
          id: '3',
          title: '3D Web Experiences',
          description: 'Immersive 3D visualizations and interactive experiences that push the boundaries of web technology.',
          icon: '3d',
          features: [
            'Three.js & WebGL',
            'Interactive 3D Models',
            'Virtual Showrooms',
            'AR/VR Web Experiences',
          ],
          glow_color: 'cyan',
          active: true,
        },
        {
          id: '4',
          title: 'Software & IT Solutions',
          description: 'Enterprise-grade software solutions and IT infrastructure that power modern businesses.',
          icon: 'software',
          features: [
            'Custom Software Development',
            'Cloud Architecture',
            'DevOps & CI/CD',
            'Security & Compliance',
          ],
          glow_color: 'mixed',
          active: true,
        },
      ]);
    }
    setLoading(false);
  };

  const mapIconType = (icon: string): 'web' | 'design' | '3d' | 'software' => {
    const iconMap: Record<string, 'web' | 'design' | '3d' | 'software'> = {
      'web': 'web',
      'design': 'design',
      '3d': '3d',
      'software': 'software',
    };
    return iconMap[icon] || 'web';
  };

  const mapGlowColor = (color: string): 'blue' | 'violet' | 'cyan' | 'mixed' => {
    const colorMap: Record<string, 'blue' | 'violet' | 'cyan' | 'mixed'> = {
      'blue': 'blue',
      'violet': 'violet',
      'cyan': 'cyan',
      'mixed': 'mixed',
    };
    return colorMap[color] || 'blue';
  };

  return (
    <section id="services" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[200px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[200px] -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-sm font-semibold text-violet-400 uppercase tracking-widest">Our Services</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Comprehensive Solutions for
            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we offer end-to-end services that transform your ideas into powerful digital realities.
          </p>
        </div>

        {/* Services Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description || ''}
                  icon={mapIconType(service.icon)}
                  features={service.features}
                  glowColor={mapGlowColor(service.glow_color)}
                  onLearnMore={() => onServiceClick(service.title)}
                />
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-400 mb-6">
            Need a custom solution? Let's discuss your project requirements.
          </p>
          <button
            onClick={() => onServiceClick('custom')}
            className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
