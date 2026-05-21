import React from 'react';
import MepDesignAndStats from './MepdesignAndStats';
import MepServicesBlocks from './MepServicesBlocks';
import MepWhyChooseUs from './MepWhyChooseUs';

export default function MepHero() {
  // All hero layout configuration, copy changes for NaxusEDS, and styling contained inside a single component and return statement
  return (
   <>
    <section className="relative w-full min-h-[85vh] lg:min-h-[75vh] bg-white flex items-center font-sans overflow-hidden py-12 lg:py-0 px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content Text Block */}
        <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
         
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight leading-none">
            High-Performance <br className="hidden md:inline" />
            <span className="text-[#A43025]">MEP Engineering</span> Solutions
          </h1>
          
          <p className="mt-6 text-base md:text-lg text-neutral-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            NaxusEDS delivers sustainable, precision-engineered building systems. From complex HVAC automation to scalable power distribution and optimized hydraulic networks, we bring efficiency to your infrastructure.
          </p>
          
          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#A43025] text-white font-bold rounded-lg hover:bg-red-800 transition-colors duration-300 shadow-lg shadow-red-900/10 text-center cursor-pointer">
              Consult Our Engineers
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-neutral-300 text-neutral-800 font-bold rounded-lg hover:border-[#A43025] hover:text-[#A43025] transition-all duration-300 text-center cursor-pointer">
              Explore MEP Capabilities
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
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" 
              alt="NaxusEDS MEP Building Systems Engineering" 
              className="w-full h-full object-cover object-center"
            />
            {/* Status overlay badge */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm border border-neutral-200 px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A43025]"></span>
              <span className="text-xs font-bold text-neutral-800 tracking-wide">NaxusEDS Integrated Design</span>
            </div>
          </div>
        </div>

      </div>
    </section>
    <MepDesignAndStats/>
    <MepServicesBlocks/>
    <MepWhyChooseUs/>
   </>
  );
}