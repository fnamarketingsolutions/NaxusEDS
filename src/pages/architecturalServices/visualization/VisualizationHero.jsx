import React from 'react';
import VisualizationExpertise from './VisualizationExpertise';
import VisualizationTestimonials from './VisualizationTestimonials';
import VisualizationWhyChoose from './VisualizationWhyChoose';
import VisualizationFAQs from './VisualizationFAQs';

export default function VisualizationHero() {
  return (
   <>
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Copywriting Content */}
        <div className="space-y-6">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase block">
            Hyper-Realistic Renderings
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl uppercase leading-none">
            Bringing Architectural <br />
            <span className="text-[#A43025]">Concepts To Life</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Turn complex blueprints and structural engineering layout metrics into photometric 3D visualizations. We deliver millimetrically accurate spatial environments, lighting studies, and texture representations.
          </p>
          <div className="pt-4">
            <button className="bg-[#A43025] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-red-800 transition-colors duration-300 shadow-sm">
              Explore 3D Portfolio &rarr;
            </button>
          </div>
        </div>

        {/* Right Side: Responsive Image Window */}
        <div className="w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-xl overflow-hidden border border-slate-300 shadow-md relative bg-slate-50">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80" 
            alt="3D Architectural Visualization Hero Render" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded border border-slate-300 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-700">
            Render Node V-09
          </div>
        </div>

      </div>
    </section>
    <VisualizationExpertise/>
    <VisualizationTestimonials/>
    <VisualizationWhyChoose/>
    <VisualizationFAQs/>
   </>
  );
}