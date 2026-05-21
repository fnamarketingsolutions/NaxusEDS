import React from 'react';

const features = [
  { 
    tag: "01", 
    title: "Millimeter Precision", 
    body: "We strictly eliminate geometry estimation, mapping all data parameters down to millimetric engineering specifications.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80"
  },
  { 
    tag: "02", 
    title: "Interference Clearance", 
    body: "Advanced automatic clash isolation checks reduce spatial friction and field revision work orders.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80"
  },
  { 
    tag: "03", 
    title: "Standard Alignment", 
    body: "Full procedural adherence to global ISO 19650 coordination protocols and naming conventions.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=500&q=80"
  },
  { 
    tag: "04", 
    title: "As-Built Integration", 
    body: "Direct transition paths transforming active site scans directly into updated parametric digital twins.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80"
  }
];

export default function BIMWhyChoose() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Value Metrics</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">Why Source Our BIM Expertise</h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-300 hover:border-slate-400 transition-all duration-300 flex flex-col justify-between shadow-sm rounded-xl overflow-hidden group">
              <div>
                {/* Upper Image Frame */}
                <div className="h-40 w-full overflow-hidden relative border-b border-slate-300 bg-slate-50">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-mono font-bold tracking-widest text-[#A43025] bg-white px-2 py-0.5 rounded border border-slate-300 shadow-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Text Block Area */}
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-black text-slate-900 uppercase tracking-tight min-h-[44px] flex items-center">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed min-h-[64px]">
                    {item.body}
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