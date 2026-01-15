import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, Facebook, Youtube } from 'lucide-react';
const logoUrl = new URL('../../assets/vijquant-logo.svg', import.meta.url).href;

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
    { label: 'Admin', id: 'admin', isLink: true },
  ];


  const services = [
    'Web Development',
    'UI/UX Design',
    '3D Web Experiences',
    'Software Solutions',
    'IT Consulting',
    'Cloud Services',
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/vijquant', label: 'X' },
    { icon: Youtube, href: 'https://www.youtube.com/', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/vijquant_tech_solutions?igsh=bjd4MzNiMWF3djNv', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-slate-900/50 border-t border-white/10">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <img src="/vijquant-images/vijquant-logo.png" alt="Vijquant logo" className="w-28 h-10 object-contain" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Vijquant</span>
                <p className="text-xs text-gray-500 tracking-wider uppercase">Tech Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Innovating digital experiences with cutting-edge technology and creative solutions for the modern enterprise.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  {'isLink' in link && link.isLink ? (
                    <a
                      href={`/${link.id}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>

          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Kanpur Nagar, Uttar Pradesh</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-violet-400" />
                </div>
                <a href="mailto:vijquant@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  vijquant@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <a href="tel:+919170259644" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +91 9170 259 644
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Vijquant Tech Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-gray-500 hover:text-white transition-colors">Privacy Policy</button>
            <button className="text-gray-500 hover:text-white transition-colors">Terms of Service</button>
            <button className="text-gray-500 hover:text-white transition-colors">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
