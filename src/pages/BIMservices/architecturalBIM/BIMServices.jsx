import React from 'react';

const bimServicesData = [
  {
    title: "3D Architectural Modeling",
    desc: "Converting basic design blueprints into high-fidelity parametric intelligence models scaled to exact LOD standards.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Clash Detection & Coordination",
    desc: "Running extensive cross-discipline audits to identify and eliminate structural spatial interferences before fabrication.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "BIM Content Creation (Families)",
    desc: "Developing completely parametric, smart Revit components and layout families with integrated operational metadata.",
    img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&q=80"
  }
];

export default function BIMServices() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Core Capabilities</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">Specialized BIM Services</h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        {/* Image on Upper Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bimServicesData.map((service, idx) => (
            <div key={idx} className="bg-white border border-slate-300 hover:border-slate-400 transition-all duration-300 rounded-xl overflow-hidden shadow-sm group">
              
              <div className="h-52 w-full overflow-hidden bg-slate-100 border-b border-slate-300">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}