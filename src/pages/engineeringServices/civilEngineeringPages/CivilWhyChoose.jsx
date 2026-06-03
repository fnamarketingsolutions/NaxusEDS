import React from 'react';

const CivilWhyChoose = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-neutral-50 border-b border-neutral-100 font-sans text-neutral-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-[#A43025] px-3 py-1 bg-red-50 rounded-full">
            Core Capabilities
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Why Choose NexusEDS for Civil Engineering?
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#A43025] mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-600 text-base md:text-lg">
            We merge heavy structural physics with precise digital simulations to eliminate structural errors, compress construction cycle timelines, and optimize investment safety.
          </p>
        </div>

        {/* 4-Column Card Block Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="group bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 hover:border-[#A43025] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#A43025] group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-neutral-950 mb-3 group-hover:text-[#A43025] transition-colors duration-200">
              Advanced Structural Analysis
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Utilizing state-of-the-art computational modeling platforms to ensure comprehensive load path distributions under extreme dynamic environmental stresses.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 hover:border-[#A43025] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#A43025] group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-neutral-950 mb-3 group-hover:text-[#A43025] transition-colors duration-200">
              Value Engineering Mindset
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              We re-engineer reinforcement details and layout designs to drastically minimize total reinforcing steel and premium structural concrete mix overhead.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 hover:border-[#A43025] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#A43025] group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-neutral-950 mb-3 group-hover:text-[#A43025] transition-colors duration-200">
              Master Code Compliance
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Every calculation and rebar map undergoes exhaustive evaluation checks to completely align with localized IS codes and national building directives.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 hover:border-[#A43025] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#A43025] group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-neutral-950 mb-3 group-hover:text-[#A43025] transition-colors duration-200">
              LOD 500 BIM Workflows
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Seamless translation of concepts into structural information models, completely eradicating site component conflicts during actual concrete installation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CivilWhyChoose;