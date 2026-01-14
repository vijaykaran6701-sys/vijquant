import React, { useEffect } from 'react';
import { X, Check, ArrowRight, Code2, Palette, Box, Server } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: string | null;
  onContact: () => void;
}

const serviceDetails: Record<string, {
  title: string;
  icon: React.ElementType;
  description: string;
  features: string[];
  process: string[];
  technologies: string[];
}> = {
  'Web Development': {
    title: 'Web Development',
    icon: Code2,
    description: 'We build powerful, scalable web applications using modern frameworks and best practices. From simple landing pages to complex enterprise solutions, our team delivers exceptional results.',
    features: [
      'Custom Web Applications',
      'E-commerce Platforms',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
      'Database Design & Optimization',
      'Performance Optimization',
    ],
    process: [
      'Requirements Analysis',
      'Architecture Planning',
      'Agile Development',
      'Testing & QA',
      'Deployment & Launch',
      'Ongoing Support',
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'],
  },
  'UI/UX Design': {
    title: 'UI/UX Design',
    icon: Palette,
    description: 'Create stunning, user-centered designs that captivate audiences and drive engagement. Our design team combines aesthetics with functionality to deliver exceptional user experiences.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design',
      'Design Systems',
      'Interaction Design',
      'Usability Testing',
    ],
    process: [
      'Discovery & Research',
      'Information Architecture',
      'Wireframing',
      'Visual Design',
      'Prototyping',
      'User Testing',
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Framer'],
  },
  '3D Web Experiences': {
    title: '3D Web Experiences',
    icon: Box,
    description: 'Immersive 3D visualizations and interactive experiences that push the boundaries of web technology. Transform your digital presence with cutting-edge 3D solutions.',
    features: [
      'Interactive 3D Models',
      'Virtual Showrooms',
      'Product Configurators',
      'AR/VR Experiences',
      'Animated Visualizations',
      'Real-time Rendering',
    ],
    process: [
      'Concept Development',
      '3D Modeling',
      'Texturing & Lighting',
      'Animation',
      'Web Integration',
      'Optimization',
    ],
    technologies: ['Three.js', 'WebGL', 'Blender', 'Unity', 'Unreal Engine', 'GSAP'],
  },
  'Software & IT Solutions': {
    title: 'Software & IT Solutions',
    icon: Server,
    description: 'Enterprise-grade software solutions and IT infrastructure that power modern businesses. We deliver robust, scalable systems designed for growth.',
    features: [
      'Custom Software Development',
      'Cloud Architecture',
      'DevOps & CI/CD',
      'System Integration',
      'Security & Compliance',
      'IT Consulting',
    ],
    process: [
      'Assessment & Planning',
      'Architecture Design',
      'Development',
      'Testing & Security',
      'Deployment',
      'Maintenance',
    ],
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Terraform', 'Jenkins'],
  },
};

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service, onContact }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !service) return null;

  const details = serviceDetails[service];
  
  if (!details) {
    // Custom quote modal
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={onClose} />
        <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 border border-white/10 p-8 text-center">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold text-white mb-4">Request Custom Quote</h2>
          <p className="text-gray-400 mb-6">Tell us about your unique requirements and we'll create a tailored solution just for you.</p>
          <button onClick={onContact} className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all">
            Contact Us
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = details.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={onClose} />
      
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 border border-white/10 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors">
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">{details.title}</h2>
              <p className="text-gray-400">Professional Solutions</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-10">{details.description}</p>

          {/* Features */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-white mb-4">What We Offer</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {details.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-white mb-4">Our Process</h3>
            <div className="flex flex-wrap gap-3">
              {details.process.map((step, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-sm text-blue-400 font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-gray-300">{step}</span>
                  {index < details.process.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-600 mx-1" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {details.technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 rounded-full border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
            <button onClick={onContact} className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all shadow-lg shadow-blue-500/25">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={onClose} className="px-8 py-3 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-all">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
