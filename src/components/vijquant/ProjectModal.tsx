import React, { useEffect } from 'react';
import { X, ExternalLink, Github, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    image: string;
    tags: string[];
    description?: string;
  } | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
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

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 border border-white/10 shadow-2xl shadow-blue-500/10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image */}
        <div className="relative aspect-video overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
            {project.category}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
            {project.title}
          </h2>
          
          <p className="text-gray-400 leading-relaxed mb-8">
            {project.description || 'This project showcases our expertise in creating innovative digital solutions. We worked closely with the client to understand their needs and delivered a product that exceeded expectations.'}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 rounded-full border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:from-blue-500 hover:to-violet-500 transition-all shadow-lg shadow-blue-500/25">
              <ExternalLink className="w-5 h-5" />
              View Live Project
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-all">
              <Github className="w-5 h-5" />
              View Source
            </button>
          </div>

          {/* Related Projects */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Related Projects</h3>
            <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group">
              View More Projects
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
