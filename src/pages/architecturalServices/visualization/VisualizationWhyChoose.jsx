import React from 'react';

const benchmarks = [
  { 
     label: "PBR Material Accuracy", 
    body: "Physically Based Rendering frameworks guarantee authentic concrete, metal, and glass surface reflections.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80"
  },
  { 
     label: "Render Farm Scaling", 
    body: "High-throughput cloud parallel infrastructure delivers high-res presentation frames inside critical limits.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80"
  },
  { 
     label: "BIM Layout Portability", 
    body: "Direct native pipeline integrations map smoothly with Revit, Rhino, and CAD coordinates data models.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80"
  },
  { 
     label: "Iterative Engineering", 
    body: "Accelerated revision turnarounds configured cleanly into agile sprint review cycles.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80"
  }
];

export default function VisualizationWhyChoose() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Strategic Leverage</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">Why Source NaxusEDS For 3D Visuals</h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        {/* Horizontal 4 Columns Matrix Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benchmarks.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-300 hover:border-slate-400 transition-all duration-300 flex flex-col justify-between shadow-sm group rounded-xl overflow-hidden"
            >
              <div>
                {/* Upper Side: Image Block Frame */}
                <div className="h-40 w-full overflow-hidden relative border-b border-slate-300 bg-slate-50">
                  <img 
                    src={card.image} 
                    alt={card.label} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
             
                </div>

                {/* Content Block Area */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-black text-slate-900 uppercase tracking-tight min-h-[44px] flex items-center">
                      {card.label}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed min-h-[64px]">
                    {card.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}