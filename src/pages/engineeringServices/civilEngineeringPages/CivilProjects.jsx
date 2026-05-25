import React from 'react';

const CivilProjects = () => {
  const projects = [
    {
      title: "The Zenith Commercial Hub",
      category: "Structural Frame & Foundation Design",
      location: "Chandigarh, India",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Mohali Industrial Corridors",
      category: "Zoning & Deep Soil Stabilization",
      location: "Mohali, Punjab",
      image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Regency Luxury Apartments",
      category: "High-Rise Concrete Shear Wall Modeling",
      location: "Zirakpur, India",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-neutral-50 border-y border-neutral-100 font-sans text-neutral-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-[#A43025] px-3 py-1 bg-red-50 rounded-full">
            Our Portfolio
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Featured Civil & Structural Projects
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#A43025] mx-auto rounded-full"></div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-full h-56 bg-neutral-100 overflow-hidden relative">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-neutral-200 px-3 py-1 rounded-md text-xs font-bold text-[#A43025]">
                  {proj.location}
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase text-neutral-400 tracking-wider">
                  {proj.category}
                </span>
                <h3 className="text-lg font-extrabold text-neutral-950 mt-1 group-hover:text-[#A43025] transition-colors duration-200">
                  {proj.title}
                </h3>
                <p className="text-neutral-500 text-xs mt-2">
                  Engineered to perfection meeting rigid master compliance directives by the NaxusEDS deployment desk.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CivilProjects;