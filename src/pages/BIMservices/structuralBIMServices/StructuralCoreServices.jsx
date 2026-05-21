import React from 'react';

const coreServices = [
  {
    title: "Steel Detailing & Shop Drawings",
    desc: "Generating accurate shop fabrication framing sets, assembly layouts, and bill of materials explicitly detailed from structural modeling calculations.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Reinforced Concrete & Rebar Detailing",
    desc: "Modeling exact rebar distribution layouts, concrete spacing geometry, and smart scheduling tags strictly aligned to dynamic load protocols.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Structural Analytical Integration",
    desc: "Seamless translation loops mapping analytical framing nodes directly from raw math formulas into fully coordinated 3D structural Revit families.",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
  }
];

export default function StructuralCoreServices() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Technical Execution</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">Our Core Structural BIM Services</h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreServices.map((service, idx) => (
            <div key={idx} className="bg-white border border-slate-300 hover:border-slate-400 transition-all duration-300 rounded-xl overflow-hidden shadow-sm group">
              
              {/* Upper Image Frame */}
              <div className="h-52 w-full overflow-hidden bg-slate-100 border-b border-slate-300">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Lower Text Frame */}
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