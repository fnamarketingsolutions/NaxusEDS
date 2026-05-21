import React from 'react';

const projects = [
  {
    title: 'Metro Center Commercial Complex',
    category: 'HVAC & Electrical Installation',
    location: 'Chicago, IL',
    image: '/api/placeholder/500/350'
  },
  {
    title: 'St. Jude Healthcare Annex',
    category: 'Full MEP BIM Coordination (LOD 400)',
    location: 'Austin, TX',
    image: '/api/placeholder/500/350'
  },
  {
    title: 'Nexus Industrial Hub',
    category: 'High-Voltage & Fire Protection Design',
    location: 'Seattle, WA',
    image: '/api/placeholder/500/350'
  }
];

export default function MepProjects() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-sm font-bold text-[#A43025] uppercase tracking-wider">Proven Execution</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-1">
              Particular MEP Projects
            </h2>
          </div>
          <button className="mt-4 md:mt-0 inline-flex items-center justify-center bg-[#A43025] hover:bg-[#89281e] text-white font-medium px-5 py-2.5 rounded-lg transition-colors text-sm shadow-sm">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-950 aspect-[4/3]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
              />
              {/* Gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-semibold text-[#A43025] bg-white px-2 py-0.5 rounded w-fit uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}