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
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const team: TeamMember[] = [
    {
      id: 'tm1',
      name: 'Vijay Karanh',
      role: 'Co-Founder | CEO',
      bio: 'Leads company vision, strategy, and growth.',
      avatar: '/vijquant-images/team/vijay_karan.png',
    },
    {
      id: 'tm2',
      name: 'Sumit Paswan',
      role: 'CTO | Backend Developer',
      bio: 'Leads technology and backend architecture.',
      avatar: '/vijquant-images/team/sumit.png',
    },
    {
      id: 'tm3',
      name: 'Gaurav Savita',
      role: 'CMO | Head of Marketing',
      bio: 'Drives branding, marketing, and growth.',
      avatar: '/vijquant-images/team/gaurav-savita.png',
    },
    {
      id: 'tm4',
      name: 'Amrita Singh',
      role: 'Operations Manager',
      bio: 'Manages operations and delivery.',
      avatar: '/vijquant-images/team/amrita.png',
    },
    {
      id: 'tm5',
      name: 'Gaurav Pal',
      role: 'Frontend Developer',
      bio: 'Builds fast and interactive UI.',
      avatar: '/vijquant-images/team/gaurav.png',
    },
    {
      id: 'tm6',
      name: 'Vishal Singh',
      role: 'Cyber Security Specialist',
      bio: 'Ensures system and data security.',
      avatar: '/vijquant-images/team/vishal_singh.png',
    },
    {
      id: 'tm7',
      name: 'Sanjana Kashyap',
      role: 'Web Designer',
      bio: 'Creates modern visual designs.',
      avatar: '/vijquant-images/team/sanjana.png',
    },
    {
      id: 'tm8',
      name: 'Rashmi Gautam',
      role: 'UI/UX Designer',
      bio: 'Designs intuitive user experiences.',
      avatar: '/vijquant-images/team/rashmi.png',
    },
  ];

  return (
    <section id="team" ref={sectionRef} className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
            Our Team
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold mt-3">
            People Behind the Product
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {team.map((member) => (
            <div
              key={member.id}
              className="group [perspective:1200px]"
            >
              <div
                className="
                  relative bg-white/5 rounded-2xl p-6 text-center
                  transition-all duration-500 ease-out
                  transform-gpu
                  group-hover:-translate-y-3
                  group-hover:rotate-x-[8deg]
                  group-hover:rotate-y-[8deg]
                  group-hover:scale-[1.05]
                  group-hover:shadow-[0_30px_60px_-15px_rgba(34,211,238,0.35)]
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/20 to-transparent blur-xl" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 mb-4 rounded-xl overflow-hidden bg-white/10">
                    {member.avatar ? (
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-bold">
                        {member.name.charAt(0)}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-semibold">{member.name}</h4>
                  <p className="text-sm text-cyan-300 font-medium">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-gray-400">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

