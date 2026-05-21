import React from 'react';
import PoolEngineeringAbout from './PoolEngineeringAbout';
import PoolEngineeringWhyChooseUs from './PoolEngineeringWhyChooseUs';

export default function PoolEngineeringHero() {
  // All pool layout configuration, copy changes for NaxusEDS, and styling contained inside a single component and return statement
  return (
  <>
    <section className="relative w-full min-h-[85vh] lg:min-h-[75vh] bg-white flex items-center font-sans overflow-hidden py-12 lg:py-0 px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content Text Block */}
        <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
        
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight leading-none">
            Precision-Engineered <br className="hidden md:inline" />
            <span className="text-[#A43025]">Pool & Aquatic</span> Systems
          </h1>
          
          <p className="mt-6 text-base md:text-lg text-neutral-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            NaxusEDS delivers world-class aquatic engineering blueprints. From advanced commercial high-load filtration grids and surge tank optimization to immaculate structural concrete shell compliance, we design water systems built to last.
          </p>
          
          {/* Action Button */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#A43025] text-white font-bold rounded-lg hover:bg-red-800 transition-colors duration-300 shadow-lg shadow-red-900/10 text-center cursor-pointer">
              Consult Our Pool Engineers
            </button>
          </div>

        </div>

        {/* Right Side: Visual Graphic Block */}
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[500px] order-1 lg:order-2 flex items-center justify-center">
          {/* Subtle geometric framing layer to support the white background theme */}
          <div className="absolute inset-0 bg-red-50/50 rounded-3xl transform rotate-3 scale-95 pointer-events-none"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-red-50 rounded-xl -z-10 hidden sm:block"></div>
          
          <div className="w-full h-full rounded-2xl overflow-hidden border border-neutral-200 shadow-md relative">
            <img 
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80" 
              alt="NaxusEDS Luxury Commercial Pool System Design and Filtration Integration" 
              className="w-full h-full object-cover object-center"
            />
            {/* Status overlay badge */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm border border-neutral-200 px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A43025]"></span>
              <span className="text-xs font-bold text-neutral-800 tracking-wide">NaxusEDS Aquatic Engineering</span>
            </div>
          </div>
        </div>

      </div>
    </section>

      <PoolEngineeringAbout/>
      <PoolEngineeringWhyChooseUs/>
</>
  );
}