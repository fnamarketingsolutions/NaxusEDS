import React from 'react';

const visualProjects = [
  {
    title: "The Zenith Commercial Tower",
    desc: "Complete exterior facade daylight simulation and material mapping for a 45-story commercial skyscraper structure.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Luxury Residential Enclave",
    desc: "Interior spatial layout staging utilizing highly detailed physics-based rendering parameters for interior lighting grids.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Urban Development Plaza",
    desc: "Drone integrated photogrammetry matched with master plan 3D modeling blocks to showcase community interaction space.",
    img: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=600&q=80"
  }
];

export default function VisualizationProjects() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Showcase</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">Featured Visualization Projects</h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        {/* Upper Side Image Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visualProjects.map((project, index) => (
            <div key={index} className="bg-white border border-slate-300 hover:border-slate-400 transition-all duration-300 rounded-xl overflow-hidden shadow-sm group">
              
              {/* Upper Image Layer */}
              <div className="h-56 w-full overflow-hidden bg-slate-100 border-b border-slate-300">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Lower Text Frame */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight border-b border-slate-100 pb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}