import React, { useEffect, useRef, useState } from 'react';
import PortfolioCard from './PortfolioCard';
import { supabase } from '@/lib/supabase';

interface PortfolioSectionProps {
  onProjectView: (project: string) => void;
}

interface Project {
  id: string;
  title: string;
  category: string;
  image_url: string | null;
  tags: string[];
  featured: boolean;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onProjectView }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [projects, setProjects] = useState<Project[]>([]);
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
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('id, title, category, image_url, tags, featured')
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback to default projects if database fails
      setProjects([
        {
          id: '1',
          title: 'FinTech Dashboard Pro',
          category: 'Web Apps',
          image_url: 'https://d64gsuwffb70l.cloudfront.net/69664b5c27a43340aa206389_1768311737897_d76a3e3d.png',
          tags: ['React', 'TypeScript', 'D3.js'],
          featured: true,
        },
        {
          id: '2',
          title: 'E-Commerce Platform',
          category: 'Web Apps',
          image_url: 'https://d64gsuwffb70l.cloudfront.net/69664b5c27a43340aa206389_1768311734432_24aee5af.jpg',
          tags: ['Next.js', 'Stripe', 'Prisma'],
          featured: true,
        },
        {
          id: '3',
          title: 'Healthcare App Redesign',
          category: 'UI/UX',
          image_url: 'https://d64gsuwffb70l.cloudfront.net/69664b5c27a43340aa206389_1768311744502_de423bdb.png',
          tags: ['Figma', 'User Research', 'Prototyping'],
          featured: false,
        },
        {
          id: '4',
          title: 'Virtual Product Showroom',
          category: '3D',
          image_url: 'https://d64gsuwffb70l.cloudfront.net/69664b5c27a43340aa206389_1768311739311_af26baf7.png',
          tags: ['Three.js', 'WebGL', 'Blender'],
          featured: true,
        },
        {
          id: '5',
          title: 'Enterprise CRM System',
          category: 'Software',
          image_url: 'https://d64gsuwffb70l.cloudfront.net/69664b5c27a43340aa206389_1768311746308_f1d1083c.png',
          tags: ['Node.js', 'PostgreSQL', 'Docker'],
          featured: false,
        },
        {
          id: '6',
          title: 'AI Analytics Platform',
          category: 'Web Apps',
          image_url: 'https://d64gsuwffb70l.cloudfront.net/69664b5c27a43340aa206389_1768311739495_68f91f9b.png',
          tags: ['Python', 'TensorFlow', 'React'],
          featured: true,
        },
      ]);
    }
    setLoading(false);
  };

  const filters = ['All', 'Web Apps', 'UI/UX', '3D', 'Software'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
            Featured Projects &
            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of innovative solutions that have helped businesses achieve their digital transformation goals.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <PortfolioCard
                  title={project.title}
                  category={project.category}
                  image={project.image_url || ''}
                  tags={project.tags}
                  onView={() => onProjectView(project.title)}
                />
              </div>
            ))}
          </div>
        )}

        {/* View All CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button
            onClick={() => onProjectView('all')}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;