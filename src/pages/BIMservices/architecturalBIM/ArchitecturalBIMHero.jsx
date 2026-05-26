import React from 'react';
import BIMServices from './BIMServices';
import BIMWhyChoose from './BIMWhyChoose';
import BIMEngagementModels from './BIMEngagementModels';
import BIMWorkflow from './BIMWorkflow';
import WhyBIMService from './WhyBIMService';
import BIMFAQs from './BIMFAQs';
import ContactCTA from '../../../components/ContactCTA';
import architecturalBIMImage from '../../../assets/bimAssets/architecture-bim.png';

export default function ArchitecturalBIMHero() {
  return (
    <>
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Technical Copy */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-red-50 text-[#A43025] px-3 py-1 rounded border border-[#A43025]/10">
            <span className="h-2 w-2 rounded-full bg-[#A43025] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase">
              LOD 400 Coordination Hub
            </span>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl uppercase leading-none">
            INTEGRATED BUILDING <br />
            <span className="text-[#A43025]">INFORMATION MODELING</span>
          </h1>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Streamline your construction lifecycle with millimetrically accurate 3D BIM coordination. We map architectural geometries, execute rigid interference check arrays, and optimize asset models directly within native framework files.
          </p>
          
          <div className="pt-2">
            <button className="bg-[#A43025] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-red-800 transition-colors duration-300 shadow-sm">
              Initiate BIM Review &rarr;
            </button>
          </div>
        </div>

        {/* Right Side: Responsive Image */}
        <div className="w-full h-[350px] sm:h-[450px] lg:h-[500px] rounded-xl overflow-hidden border border-slate-300 shadow-md bg-slate-50">
          <img 
            src={architecturalBIMImage} 
            alt="Architectural Parametric BIM Model System" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
    <BIMServices/>
    <BIMWhyChoose/>
    <BIMEngagementModels/>
    <BIMWorkflow/>
    <WhyBIMService/>
    <ContactCTA/>
    <BIMFAQs/>
    </>
  );
}