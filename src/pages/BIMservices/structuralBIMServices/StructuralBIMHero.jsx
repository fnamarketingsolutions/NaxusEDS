import React from 'react';
import StructuralBIMProjects from './StructuralBIMProjects';
import Reviews from '../../homePages/Reviews';
import StructuralBIMWhyChoose from './StructuralBIMWhyChoose';
import StructuralCoreServices from './StructuralCoreServices';
import StructuralBIMWorkflow from './StructuralBIMWorkflow';
import StructuralBIMFAQs from './StructuralBIMFAQs';
import ContactCTA from '../../../components/ContactCTA';


export default function StructuralBIMHero() {
  return (
   <>
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Technical Copy Block */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-red-50 text-[#A43025] px-3 py-1 rounded border border-[#A43025]/10">
            <span className="h-2 w-2 rounded-full bg-[#A43025] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              High-Load Calculation Alignment
            </span>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl uppercase leading-none">
            INTEGRATED STRUCTURAL <br />
            <span className="text-[#A43025]">BIM MODELING SERVICES</span>
          </h1>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Translate complex structural calculation protocols into millimetrically accurate 3D parametric foundations. We deploy analytical models for steel frameworks, reinforced concrete framing, and smart rebar configurations synchronized directly with native engineering software.
          </p>
          
          <div className="pt-2">
            <button className="bg-[#A43025] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-red-800 transition-colors duration-300 shadow-sm">
              Initiate Structural Audit &rarr;
            </button>
          </div>
        </div>

        {/* Right Side: Responsive Engineering Grid Frame */}
        <div className="w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-xl overflow-hidden border border-slate-300 shadow-md bg-slate-50">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" 
            alt="Structural BIM Framing and Steel Detailing Interface" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
    <StructuralBIMProjects/>
    <Reviews/>
    <StructuralBIMWhyChoose/>
    <StructuralCoreServices/>
    <StructuralBIMWorkflow/>
    <ContactCTA/>
    <StructuralBIMFAQs/>
   </>
  );
}