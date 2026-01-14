import React, { useEffect, useRef, useState } from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  avatar?: string;
}

const TeamSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const team: TeamMember[] = [
    {
      id: 'tm1',
      name: 'Vijay Karanh',
      role: 'Co-Founder',
      bio: 'Drives company vision, strategy, and growth. Oversees technology direction and innovation; focused on building scalable and future-ready solutions.',
      avatar: '/vijquant-images/team/vijay_karan.png',
    },
    {
      id: 'tm2',
      name: 'Amrita',
      role: 'Manager',
      bio: 'Manages operations and team coordination. Ensures smooth project execution and client communication; maintains quality standards and delivery timelines.',
      avatar: '/vijquant-images/team/amrita.png',
    },
    {
      id: 'tm3',
      name: 'Sumit Paswan',
      role: 'Backend Developer',
      bio: 'Develops server-side logic and database systems. Handles APIs, authentication, and performance optimization; ensures secure and scalable backend architecture.',
      avatar: '/vijquant-images/team/sumit.png',
    },
    {
      id: 'tm4',
      name: 'Gaurav Pal',
      role: 'Frontend Developer',
      bio: 'Builds responsive and interactive user interfaces. Works with modern HTML, CSS, and JavaScript frameworks; focused on performance and smooth user experience.',
      avatar: '/vijquant-images/team/gaurav.png',
    },
    {
      id: 'tm5',
      name: 'Vishal Singh',
      role: 'Cyber Security Specialist',
      bio: 'Ensures application and data security. Manages vulnerability testing and risk analysis; implements security best practices and protection layers.',
      avatar: '/vijquant-images/team/vishal_singh.png',
    },
    {
      id: 'tm6',
      name: 'Sanjana',
      role: 'Web Designer',
      bio: 'Designs visually appealing website layouts. Creates modern, clean, and responsive designs; focuses on branding and visual consistency.',
      avatar: '/vijquant-images/team/sanjana.png',
    },
    {
      id: 'tm7',
      name: 'Rashmi',
      role: 'UI/UX Designer',
      bio: 'Designs user-centric interfaces and workflows. Improves usability, accessibility, and user engagement; converts ideas into intuitive digital experiences.',
      avatar: '/vijquant-images/team/rashmi.png',
    },
  ];

  return (
    <section id="team" ref={sectionRef} className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Our Team</span>
          <h3 className="text-3xl sm:text-4xl font-bold mt-3">People Behind the Product</h3>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">A small cross-disciplinary team focused on building delightful digital products.</p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          {team.map((member) => (
            <div key={member.id} className="bg-white/3 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center">
                {member.avatar ? (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ width: '100%', height: '100%' }}
                  />
                ) : (
                  <div className="text-xl font-semibold text-gray-300">{member.name.charAt(0)}</div>
                )}
              </div>
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-sm text-cyan-300 font-medium">{member.role}</p>
              <p className="mt-3 text-sm text-gray-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
