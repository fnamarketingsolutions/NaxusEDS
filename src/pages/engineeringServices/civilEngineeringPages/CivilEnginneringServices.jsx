import React from 'react';

const CivilEngineeringServices = () => {
  // All service data, styles, and JSX contained within a single component and a single return statement
  return (
    <section className="py-16 px-4 md:px-8 bg-white font-sans text-neutral-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-[#A43025] px-3 py-1 bg-red-50 rounded-full">
            Our Expertise
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Civil Engineering Services
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#A43025] mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-600 text-base md:text-lg">
            Delivering sustainable infrastructure solutions from concept to completion with precision and engineering excellence.
          </p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Block 1: Structural Engineering */}
          <div className="group relative bg-white border border-neutral-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:border-[#A43025] flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-neutral-200 group-hover:bg-[#A43025] transition-colors duration-300"></div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-[#A43025] mb-5 group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#A43025] transition-colors duration-300">
                Structural Engineering
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Comprehensive analysis and structural design for high-rise residential buildings, commercial complexes, and industrial frameworks, ensuring safety and compliance.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center text-sm font-semibold text-[#A43025] cursor-pointer">
              <span>Explore Scope</span>
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>

          {/* Block 2: Infrastructure & Highway Design */}
          <div className="group relative bg-white border border-neutral-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:border-[#A43025] flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-neutral-200 group-hover:bg-[#A43025] transition-colors duration-300"></div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-[#A43025] mb-5 group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#A43025] transition-colors duration-300">
                Infrastructure & Highways
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Planning and engineering of geometric roadway alignments, major highways, urban street networks, and essential drainage integration networks.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center text-sm font-semibold text-[#A43025] cursor-pointer">
              <span>Explore Scope</span>
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>

          {/* Block 3: Geotechnical & Foundation Consultancy */}
          <div className="group relative bg-white border border-neutral-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:border-[#A43025] flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-neutral-200 group-hover:bg-[#A43025] transition-colors duration-300"></div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-[#A43025] mb-5 group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#A43025] transition-colors duration-300">
                Geotechnical Engineering
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Advanced soil mechanics assessment, thorough site investigations, and custom shallow or deep foundation designs tailored for complex strata conditions.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center text-sm font-semibold text-[#A43025] cursor-pointer">
              <span>Explore Scope</span>
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>

          {/* Block 4: Construction Project Management */}
          <div className="group relative bg-white border border-neutral-200 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:border-[#A43025] flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-neutral-200 group-hover:bg-[#A43025] transition-colors duration-300"></div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-[#A43025] mb-5 group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#A43025] transition-colors duration-300">
                Project Management
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                End-to-end execution supervision including precise cost estimation, resource scheduling, strict quality control, and site safety management protocols.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center text-sm font-semibold text-[#A43025] cursor-pointer">
              <span>Explore Scope</span>
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CivilEngineeringServices;