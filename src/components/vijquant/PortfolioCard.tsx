import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  tags: string[];
  onView: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  category,
  image,
  tags,
  onView,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
    setIsHovered(false);
  };

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onView}
      style={{
        transform: transform || undefined,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 group-hover:border-blue-500/50 transition-all duration-500">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-60'}`} />
          
          {/* Hover Actions */}
          <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all transform hover:scale-110">
              <Eye className="w-6 h-6" />
            </button>
            <button className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all transform hover:scale-110 shadow-lg shadow-blue-500/30">
              <ExternalLink className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            {category}
          </span>
          <h3 className="text-xl font-bold text-white mt-2 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all">
            {title}
          </h3>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium text-gray-400 bg-white/5 rounded-full border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl blur-xl transition-opacity duration-500 -z-10 ${isHovered ? 'opacity-30' : 'opacity-0'}`} />
    </div>
  );
};

export default PortfolioCard;
