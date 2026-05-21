import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600607688210-c3f8869f698b?auto=format&fit=crop&w=400&q=80"
];

export default function VisualizationExpertise() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Visual Capability Matrix</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">Expertise Render Gallery</h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        {/* Elegant 9-Image Render Block Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px]">
          {images.map((imgUrl, i) => (
            <div 
              key={i} 
              className={`border border-slate-300 rounded-xl overflow-hidden relative group bg-slate-50 shadow-sm ${
                i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              } ${i === 4 ? 'lg:row-span-2' : ''}`}
            >
              <img 
                src={imgUrl} 
                alt={`NaxusEDS 3D Architectural expertise render item ${i + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-300" />
              <span className="absolute bottom-3 left-3 font-mono text-[10px] text-white bg-slate-950/60 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10 tracking-widest">
                EXPERT-0{i+1}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}