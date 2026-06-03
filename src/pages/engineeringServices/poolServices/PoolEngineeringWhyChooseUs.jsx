import React from 'react';

const PoolEngineeringWhyChooseUs = () => {
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
            Why Choose NexusEDS for Pool Engineering?
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#A43025] mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-600 text-base md:text-lg">
            We deliver state-of-the-art aquatic designs engineered for pristine water clarity, structural longevity, and maximum energy efficiency.
          </p>
        </div>

        {/* 4-Column Horizontal Block Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Zero-Leak Structural Design */}
          <div className="group bg-neutral-50 border border-neutral-200 rounded-2xl p-6 md:p-8 hover:bg-white hover:border-[#A43025] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Icon / Branding Indicator */}
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#A43025] group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-950 mb-3 group-hover:text-[#A43025] transition-colors duration-200">
                Zero-Leak Shells
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                NexusEDS performs rigorous finite element analysis and concrete stress calculations to engineer reinforced, crack-resistant structures built to withstand extreme hydrostatic pressures.
              </p>
            </div>
          </div>

          {/* Card 2: Advanced Hydraulics */}
          <div className="group bg-neutral-50 border border-neutral-200 rounded-2xl p-6 md:p-8 hover:bg-white hover:border-[#A43025] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Icon / Branding Indicator */}
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#A43025] group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 15H19M9 11l3-3m0 0l3 3m-3-3v8"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-950 mb-3 group-hover:text-[#A43025] transition-colors duration-200">
                Optimized Hydraulics
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                We design balanced piping networks, surge tanks, and precision pump ratings that ensure rapid water turnover cycles while drastically cutting systemic line friction.
              </p>
            </div>
          </div>

          {/* Card 3: Crystal Clear Filtration */}
          <div className="group bg-neutral-50 border border-neutral-200 rounded-2xl p-6 md:p-8 hover:bg-white hover:border-[#A43025] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Icon / Branding Indicator */}
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#A43025] group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-950 mb-3 group-hover:text-[#A43025] transition-colors duration-200">
                Eco-Smart Filtration
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Our layouts integrate automated monitoring loops, high-performance media setups, and ozone/UV systems that minimize chemical usage and keep water sparkling.
              </p>
            </div>
          </div>

          {/* Card 4: Compliance Assurance */}
          <div className="group bg-neutral-50 border border-neutral-200 rounded-2xl p-6 md:p-8 hover:bg-white hover:border-[#A43025] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Icon / Branding Indicator */}
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#A43025] group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-950 mb-3 group-hover:text-[#A43025] transition-colors duration-200">
                Flawless Compliance
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Every layout is drafted in perfect alignment with IS codes, NSF guidelines, and public health mandates to guarantee seamless approvals and operational safety.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PoolEngineeringWhyChooseUs;