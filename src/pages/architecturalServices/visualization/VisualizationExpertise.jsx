import React from 'react';
import VisualizationExpertise1 from '../../../Assets/bimAssets/expertise1.jpg';
import VisualizationExpertise2 from '../../../Assets/bimAssets/expertise2.jpg';
import VisualizationExpertise3 from '../../../Assets/bimAssets/expertise3.jpg';
import VisualizationExpertise4 from '../../../Assets/bimAssets/expertise4.jpg';
import VisualizationExpertise5 from '../../../Assets/bimAssets/expertise5.webp';
import VisualizationExpertise6 from '../../../Assets/bimAssets/expertise6.jpg';
import VisualizationExpertise7 from '../../../Assets/bimAssets/expertise7.jpg';
import VisualizationExpertise8 from '../../../Assets/bimAssets/expertise8.jpg';

const images = [
  VisualizationExpertise1,
  VisualizationExpertise2,
  VisualizationExpertise3,
  VisualizationExpertise4,
  VisualizationExpertise5,
  VisualizationExpertise6,
  VisualizationExpertise7,
  VisualizationExpertise8
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