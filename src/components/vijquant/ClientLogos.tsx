import React from "react";

const ClientLogos: React.FC = () => {
  const clients = [
    { name: "Brain", logo: "/vijquant-images/company-logo/brain.jpeg" },
    { name: "DSL", logo: "/vijquant-images/company-logo/dsl.jpeg" },
    { name: "FRC", logo: "/vijquant-images/company-logo/frc.jpeg" },
    { name: "GFC", logo: "/vijquant-images/company-logo/gfc.jpeg" },
    { name: "IH", logo: "/vijquant-images/company-logo/ih.png" },
    { name: "MCP", logo: "/vijquant-images/company-logo/mcp.png" },
    { name: "Merlion", logo: "/vijquant-images/company-logo/merlion.png" },
    { name: "SLEC", logo: "/vijquant-images/company-logo/slec.png" },
    { name: "Sphere", logo: "/vijquant-images/company-logo/sphere.png" },
    { name: "Tech", logo: "/vijquant-images/company-logo/tech.png" },
    { name: "TSI", logo: "/vijquant-images/company-logo/tsi.png" },
    { name: "ZedMed", logo: "/vijquant-images/company-logo/zedmed.png" },
  ];

  return (
    <section className="relative py-20 overflow-hidden border-y border-white/10 bg-black">
      <h3 className="text-center text-sm uppercase tracking-widest text-gray-500 mb-12">
        Trusted by Industry Leaders
      </h3>

      {/* 3D Moving Track */}
      <div className="relative w-full overflow-hidden perspective-[1200px]">
        <div className="flex gap-14 animate-logo-scroll">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="group flex-shrink-0 w-32 h-32 rounded-2xl
                         bg-white/5 border border-white/10
                         flex items-center justify-center
                         transform transition-all duration-500
                         hover:rotate-y-12 hover:-rotate-x-6 hover:scale-110
                         hover:border-blue-500/40
                         hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-16 h-16 object-contain opacity-80
                           group-hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes logo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-logo-scroll {
          animation: logo-scroll 35s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
