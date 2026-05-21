import React from 'react';
import FacadeCategories from './FacadeCategories';
import FacadeWorkFlow from './FacadeWorkFlow';
import WhyChooseFacade from './WhyChooseFacade';
import FacadeFAQs from './FacadeFAQs';


export default function FacadeHero() {
  return (
   <>
    <section className="bg-white py-12 px-4 sm:px-6 lg:py-20 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Column: Text and Details Content */}
        <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 uppercase leading-[1.1]">
              Engineering The<br />
              Future Of Facades
            </h1>
            <p className="text-lg sm:text-xl font-bold text-[#A43025] leading-snug">
              Precision Building Envelope Solutions by NaxusEDS
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            Explore specialized architectural services transforming architectural designs into 
            structurally sound, aesthetically striking, and sustainable buildings. Our expertise 
            in facade drafting, advanced building envelope technology, and high-performance 
            engineering ensures optimization, energy efficiency, and regulatory compliance for 
            complex facades, structural glazing, unitized systems, and complex geometries. We 
            deliver comprehensive solutions that balance design intent with structural performance, 
            cost optimization, and durability across global projects.
          </p>

          <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed pt-2 border-t border-slate-200">
            NaxusEDS: Leading the way in innovative building enclosure systems, detailed 
            engineering, and sustainable facade development.
          </p>
          
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-[#A43025] text-white font-bold text-sm uppercase tracking-wider rounded shadow-md hover:bg-[#82241b] transition-colors duration-300"
            >
              Connect With Our Engineers
            </a>
          </div>
        </div>

        {/* Right Column: Structured Image Block */}
        <div className="lg:col-span-6 order-1 lg:order-2 w-full">
          {/* Framed Image Block with slightly dark gray borders and subtle shadow */}
          <div className="p-2 bg-white border border-slate-400 rounded shadow-lg">
            <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] border border-slate-300">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="NaxusEDS High-rise modern glass facade building engineering structure"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
    <FacadeCategories/>
    <FacadeWorkFlow/>
    <WhyChooseFacade/>
    <FacadeFAQs/>
   </>
  );
}