import React, { useState, useCallback, useRef } from 'react';
import ParticleCanvas from './vijquant/ParticleCanvas';
import Navigation from './vijquant/Navigation';
import HeroSection from './vijquant/HeroSection';
import AboutSection from './vijquant/AboutSection';
import TeamSection from './vijquant/TeamSection';
import ServicesSection from './vijquant/ServicesSection';
import PortfolioSection from './vijquant/PortfolioSection';
import WhyUsSection from './vijquant/WhyUsSection';
import ContactSection from './vijquant/ContactSection';
import TechStackSection from './vijquant/TechStackSection';
import CTASection from './vijquant/CTASection';
import ClientLogos from './vijquant/ClientLogos';
import Footer from './vijquant/Footer';
import ProjectModal from './vijquant/ProjectModal';
import ServiceModal from './vijquant/ServiceModal';




const AppLayout: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    category: string;
    image: string;
    tags: string[];
  } | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const mainRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleProjectView = (projectTitle: string) => {
    if (projectTitle === 'all') {
      scrollToSection('portfolio');
      return;
    }
    
    const projects = [
      {
        title: 'FinTech Dashboard Pro',
        category: 'Web Apps',
        image: 'https://d64gsuwffb70l.cloudfront.net/69664b5c27a43340aa206389_1768311737897_d76a3e3d.png',
        tags: ['React', 'TypeScript', 'D3.js'],
      },
      {
        title: 'E-Commerce Platform',
        category: 'Web Apps',
        image: 'https://d64gsuwffb70l.cloudfront.net/69664b5c27a43340aa206389_1768311734432_24aee5af.jpg',
        tags: ['Next.js', 'Stripe', 'Prisma'],
      },
      {
        title: 'Healthcare App Redesign',
        category: 'UI/UX',
        image: 'https://d64gsuwffb70l.cloudfront.net/69664b5c27a43340aa206389_1768311744502_de423bdb.png',
        tags: ['Figma', 'User Research', 'Prototyping'],
      },
      {
        title: 'Virtual Product Showroom',
        category: '3D',
        image: 'https://d64gsuwffb70l.cloudfront.net/69664b5c27a43340aa206389_1768311739311_af26baf7.png',
        tags: ['Three.js', 'WebGL', 'Blender'],
      },
      {
        title: 'Enterprise CRM System',
        category: 'Software',
        image: 'https://d64gsuwffb70l.cloudfront.net/69664b5c27a43340aa206389_1768311746308_f1d1083c.png',
        tags: ['Node.js', 'PostgreSQL', 'Docker'],
      },
      {
        title: 'AI Analytics Platform',
        category: 'Web Apps',
        image: 'https://d64gsuwffb70l.cloudfront.net/69664b5c27a43340aa206389_1768311739495_68f91f9b.png',
        tags: ['Python', 'TensorFlow', 'React'],
      },
    ];

    const project = projects.find(p => p.title === projectTitle);
    if (project) {
      setSelectedProject(project);
      setIsProjectModalOpen(true);
    }
  };

  const handleServiceClick = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsServiceModalOpen(true);
  };

  const handleContactFromModal = () => {
    setIsServiceModalOpen(false);
    setIsProjectModalOpen(false);
    setTimeout(() => scrollToSection('contact'), 100);
  };

  return (
    <div ref={mainRef} className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Navigation */}
      <Navigation onNavigate={scrollToSection} />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection
          onGetStarted={() => scrollToSection('contact')}
          onViewServices={() => scrollToSection('services')}
          onScrollDown={() => scrollToSection('about')}
        />

        {/* Client Logos */}
        <ClientLogos />

        {/* About Section */}
        <AboutSection />

        {/* Team Section */}
        <TeamSection />

        {/* Services Section */}
        <ServicesSection onServiceClick={handleServiceClick} />

        {/* Portfolio Section */}
        <PortfolioSection onProjectView={handleProjectView} />

        {/* Why Us Section */}
        <WhyUsSection />

        {/* Tech Stack */}
        <TechStackSection />

        {/* CTA Section */}
        <CTASection onGetStarted={() => scrollToSection('contact')} />

        {/* Contact Section */}
        <ContactSection />
      </main>



      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Modals */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        project={selectedProject}
      />
      
      <ServiceModal
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        service={selectedService}
        onContact={handleContactFromModal}
      />
    </div>
  );
};

export default AppLayout;
