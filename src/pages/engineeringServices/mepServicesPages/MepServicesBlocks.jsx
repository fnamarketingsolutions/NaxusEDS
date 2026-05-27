import React from 'react';
import mechenicalService from '../../../assets/bimAssets/mechanical-image.jpg'
import plumbingService from '../../../assets/bimAssets/plumbing.jpg'
import electricalService from '../../../assets/bimAssets/electrical.png'

export default function MepServicesBlocks() {
  // All engineering data, styling configurations, and responsive structural grid within a single component and return statement
  return (
    <section className="py-16 px-4 md:px-8 bg-white font-sans text-neutral-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-[#A43025] px-3 py-1 bg-red-50 rounded-full">
            Core Specializations
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Our MEP Engineering Services
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#A43025] mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-600 text-base md:text-lg">
            NaxusEDS delivers end-to-end building systems engineering, optimized for long-term sustainability, energy efficiency, and total code compliance.
          </p>
        </div>

        {/* 3-Column Responsive Block Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service Block 1: Mechanical (HVAC) Systems */}
          <div className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#A43025] transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Feature Image */}
              <div className="w-full h-56 bg-neutral-100 overflow-hidden relative">
                <img 
                  src={mechenicalService} 
                  alt="Mechanical HVAC Duct Systems Engineering" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#A43025] text-xs font-bold px-3 py-1 rounded-full border border-neutral-200">
                  HVAC
                </div>
              </div>
              
              {/* Content Panel */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-neutral-950 mb-3 group-hover:text-[#A43025] transition-colors duration-200">
                  Mechanical Engineering
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Advanced climate control solutions designed by NaxusEDS. We specialize in high-efficiency central air conditioning layouts, ventilation distribution, indoor air quality optimization, and energy recovery infrastructure loops.
                </p>
                <ul className="space-y-2 mt-4 pt-4 border-t border-neutral-100">
                  {["Chilled Water Plant Layouts", "Variable Refrigerant Flow (VRF)", "Cleanroom & Exhaust Ventilation"].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A43025]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

         
          </div>

          {/* Service Block 2: Electrical Power Systems */}
          <div className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#A43025] transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Feature Image */}
              <div className="w-full h-56 bg-neutral-100 overflow-hidden relative">
                <img 
                  src={electricalService} 
                  alt="Electrical Power Control Systems Panel" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#A43025] text-xs font-bold px-3 py-1 rounded-full border border-neutral-200">
                  Power & Comms
                </div>
              </div>
              
              {/* Content Panel */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-neutral-950 mb-3 group-hover:text-[#A43025] transition-colors duration-200">
                  Electrical Engineering
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Comprehensive infrastructure planning. NaxusEDS designs heavily optimized structural heavy power distribution grids, secure emergency back-up generator setups, and tailored building network security grids.
                </p>
                <ul className="space-y-2 mt-4 pt-4 border-t border-neutral-100">
                  {["Substation & Transformative Layouts", "Photometric Interior Lighting", "ELV & Structured Low-Voltage Wiring"].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A43025]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

         
          </div>

          {/* Service Block 3: Plumbing & Hydraulic Systems */}
          <div className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#A43025] transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Feature Image */}
              <div className="w-full h-56 bg-neutral-100 overflow-hidden relative">
                <img 
                  src={plumbingService} 
                  alt="Plumbing Hydraulic Pipelines Engineering" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#A43025] text-xs font-bold px-3 py-1 rounded-full border border-neutral-200">
                  Hydraulics
                </div>
              </div>
              
              {/* Content Panel */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-neutral-950 mb-3 group-hover:text-[#A43025] transition-colors duration-200">
                  Plumbing Engineering
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Optimized hydraulic management models. We manage complete commercial plumbing schematics, high-pressure booster pump stations, storm water drainage modeling, and automated chemical fire suppression mechanisms.
                </p>
                <ul className="space-y-2 mt-4 pt-4 border-t border-neutral-100">
                  {["Domestic & Central Hot Water Maps", "Medical Gas Pipeline Distribution", "Rainwater Harvesting & Recycling"].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs font-medium text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A43025]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

         
          </div>

        </div>

      </div>
    </section>
  );
}