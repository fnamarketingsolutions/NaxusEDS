import React from 'react';

export default function MepWhyChooseUs() {
  // All configuration data, structural text blocks, and responsive 4-column layout inside a single component and return statement
  return (
    <section className="py-16 px-4 md:px-8 bg-white font-sans text-neutral-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-[#A43025] px-3 py-1 bg-red-50 rounded-full">
            Our Advantage
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Why Choose NexusEDS for MEP Services?
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#A43025] mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-600 text-base md:text-lg">
            We engineer intelligent, high-performing building systems that lower operational expenses, reduce environmental impact, and ensure flawless mechanical execution.
          </p>
        </div>

        {/* 4-Column Horizontal Block Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Precision Engineering */}
          <div className="group bg-neutral-50 border border-neutral-200 rounded-2xl p-6 md:p-8 hover:bg-white hover:border-[#A43025] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Icon / Branding Indicator */}
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#A43025] group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-950 mb-3 group-hover:text-[#A43025] transition-colors duration-200">
                Precision & Accuracy
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Our detailed layout calculations and 3D clash-detection workflows eliminate structural overlaps before fabrication, keeping your project deployment moving seamlessly.
              </p>
            </div>
          </div>

          {/* Card 2: Cost Optimization */}
          <div className="group bg-neutral-50 border border-neutral-200 rounded-2xl p-6 md:p-8 hover:bg-white hover:border-[#A43025] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Icon / Branding Indicator */}
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#A43025] group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-950 mb-3 group-hover:text-[#A43025] transition-colors duration-200">
                Value Engineering
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                We optimize layout routing and design specifications to drastically cut equipment overhead costs and systemic energy draw footprints from day one onwards.
              </p>
            </div>
          </div>

          {/* Card 3: Code Compliance */}
          <div className="group bg-neutral-50 border border-neutral-200 rounded-2xl p-6 md:p-8 hover:bg-white hover:border-[#A43025] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Icon / Branding Indicator */}
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#A43025] group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-950 mb-3 group-hover:text-[#A43025] transition-colors duration-200">
                100% Code Compliant
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Every design schematic passes extensive master cross-checks to align perfectly with regional guidelines, international codes, and municipal building laws.
              </p>
            </div>
          </div>

          {/* Card 4: Seamless Integration */}
          <div className="group bg-neutral-50 border border-neutral-200 rounded-2xl p-6 md:p-8 hover:bg-white hover:border-[#A43025] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Icon / Branding Indicator */}
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#A43025] group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-950 mb-3 group-hover:text-[#A43025] transition-colors duration-200">
                BIM Coordination
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Our high-fidelity LOD structural models link perfectly with architectural blueprints to keep general contractors, installers, and managers in complete harmony.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}