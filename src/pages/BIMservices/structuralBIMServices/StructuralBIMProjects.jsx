import React from 'react';

const projectsList = [
  {
    id: 1,
    title: "The Vertex Commercial Complex",
    desc: "Full structural modeling execution of a 42-story commercial grid system. Engineered full structural coordination maps detailing rebar configuration matrices and comprehensive load transfer components synchronized perfectly to raw architectural sketches.",
    metric: "LOD 400 Steel Framing",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Strata Industrial Logistics Hub",
    desc: "Developing high-fidelity warehouse framing assemblies with precise multi-tiered concrete foundations. All structural columns and overhead joists were fully detailed inside central cloud workshared models to track spatial limitations against industrial processing systems.",
    metric: "Zero Fabrication Field Clashes",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  }
];

export default function StructuralBIMProjects() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Case Trackers</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">Featured Structural Projects</h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        {/* Alternating Project Pipeline Rows */}
        <div className="space-y-16 lg:space-y-24">
          {projectsList.map((project, idx) => {
            const isImageLeft = idx % 2 === 0;

            return (
              <div 
                key={project.id} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Image Grid Slot Container */}
                <div className={`w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden border border-slate-300 shadow-sm bg-slate-50 lg:col-span-6 ${
                  isImageLeft ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content Grid Slot Container */}
                <div className={`space-y-4 lg:col-span-6 ${
                  isImageLeft ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className="inline-block text-[10px] font-mono font-bold tracking-widest text-[#A43025] uppercase bg-red-50 px-2.5 py-1 rounded border border-[#A43025]/10">
                    {project.metric}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="pt-2">
                    <button className="text-xs font-bold text-[#A43025] uppercase tracking-wider hover:text-red-800 transition-colors flex items-center gap-1">
                      Examine Layout Analysis &rarr;
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}