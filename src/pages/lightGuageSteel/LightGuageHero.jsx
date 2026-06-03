import React from 'react';
import GuageImageBlocks from './GuageImageBlocks';
import ContactCTA from '../../components/ContactCTA';
import SectionReveal from '../../components/SectionReveal';
import lightGuageSteelImage from '../../assets/images/light-guage-steel1.jpg';


export default function LightGuageHero() {
  return (
 <>
    <SectionReveal className="bg-white py-16 lg:py-24 flex items-center min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="order-1 lg:order-1 text-center lg:text-left">
          <span className="text-[#A43025] uppercase tracking-widest font-bold text-xs block mb-3">
            Precision Engineering
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-none mb-6">
            Advanced Light Gauge <br />
            <span className="text-[#A43025]">Steel Fabrication</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            NexusEDS engineers cold-formed steel framing with CNC precision, rapid site assembly, and code-compliant connections for commercial and residential structures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#portfolio" 
              className="bg-[#A43025] hover:bg-[#82241c] text-white font-semibold px-8 py-3 rounded transition duration-300 shadow-md text-center"
            >
              Our Gallery
            </a>
            
          </div>
        </div>

        {/* Right Side: Image Block */}
        <div className="order-2 lg:order-2 w-full">
          <img 
            src={lightGuageSteelImage} 
            alt="Light Gauge Steel Structural Framing" 
            className="w-full h-[320px] sm:h-[450px] object-cover rounded-lg shadow-xl"
          />
        </div>

      </div>
    </SectionReveal>
    <GuageImageBlocks/>
    <ContactCTA/>
 </>
  );
}