import React from 'react';
import GlassCard from './GlassCard';
import { Code2, Palette, Box, Server, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: 'web' | 'design' | '3d' | 'software';
  features: string[];
  glowColor: 'blue' | 'violet' | 'cyan' | 'mixed';
  onLearnMore: () => void;
}

const iconMap = {
  web: Code2,
  design: Palette,
  '3d': Box,
  software: Server,
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features,
  glowColor,
  onLearnMore,
}) => {
  const IconComponent = iconMap[icon];

  const iconBgColors = {
    blue: 'from-blue-500 to-blue-600',
    violet: 'from-violet-500 to-violet-600',
    cyan: 'from-cyan-500 to-cyan-600',
    mixed: 'from-indigo-500 to-purple-600',
  };

  return (
    <GlassCard glowColor={glowColor} className="p-8 h-full group">
      {/* Icon */}
      <div className="relative mb-6">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconBgColors[glowColor]} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${iconBgColors[glowColor]} blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-gray-300">
            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${iconBgColors[glowColor]}`} />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={onLearnMore}
        className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/btn"
      >
        Learn More
        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </GlassCard>
  );
};

export default ServiceCard;