import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCheck, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import CivilEngineeringServices from './CivilEnginneringServices';
import Models from '../../../components/Models';
import CivilReviews from './CivilReviews';
import CivilWhyChoose from './CivilWhyChoose';
import CivilWorkFlow from './CivilWorkFlow';
import CivilProjects from './CivilProjects';
import ContactCTA from '../../../components/ContactCTA';


  
const CivilEngineering = () => {
  // Key infrastructure domain expertise points
  const engineeringHighlights = [
    "Comprehensive Site Grading & Land Development Plans",
    "Stormwater Management & Hydrological Drainage Layouts",
    "Utility Network Mapping (Water, Sewerage, & Gas Routing)",
    "Roadway Alignment, Cross-Sections & Pavement Geometric Design",
    "As-Built Documentation & Existing Site Plan Digitization",
    "Environmental Compliance & Topographical Data Integration"
  ];

  return (
   <>
    <section className="py-24 px-6 md:px-16 bg-white font-sans text-gray-800 antialiased w-full overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ================= LEFT SIDE: TECHNICAL CONTENT SECTION ================= */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div>
            <span className="text-xs font-bold text-[#A43025] uppercase tracking-widest block mb-2">
              Infrastructure Engineering
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Civil Engineering & Site Development Layouts
            </h2>
            <div className="w-12 h-1 bg-[#A43025] mt-4 rounded-full"></div>
          </div>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl font-light">
            At NaxusEDS, we provide sustainable infrastructure drafting and civil engineering planning services. Our technical team transforms complex surveying data and topographical blueprints into master site layouts, optimized grading structures, and fully coordinated utility networks.
          </p>

          {/* Capabilities Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-4 pt-2">
            {engineeringHighlights.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 group">
                <div className="w-5 h-5 rounded-md bg-red-50 text-[#A43025] flex items-center justify-center shrink-0 mt-0.5 border border-red-100/50 group-hover:bg-[#A43025] group-hover:text-white transition-colors duration-200">
                  <HiOutlineCheck className="text-xs stroke-[3]" />
                </div>
                <span className="text-gray-600 text-sm font-light leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Strategic Call to Action Button */}
          <div className="pt-4">
            <button className="bg-[#A43025] text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:bg-[#8a281f] transition-all group w-full sm:w-auto justify-center shadow-sm">
              Initiate Project Layout
              <HiOutlineArrowNarrowRight className="group-hover:translate-x-1 transition-transform text-lg" />
            </button>
          </div>
        </div>

        {/* ================= RIGHT SIDE: FULLY RESPONSIVE IMAGE BLOCK ================= */}
        <div className="lg:col-span-5 w-full relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-40px" }}
            className="w-full h-[300px] sm:h-[400px] lg:h-[520px] overflow-hidden rounded-2xl shadow-lg relative group bg-gray-50"
          >
            {/* Visual theme color filter matrix */}
            <div className="absolute inset-0 bg-[#A43025]/5 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            
            {/* Native Image Component Tag */}
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop" 
              alt="NaxusEDS Civil Engineering Infrastructure Site Blueprint Plan" 
              className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </motion.div>
        </div>

      </div>
    </section>

    <CivilEngineeringServices/>
    <Models/>
    <CivilReviews/>
    <CivilWhyChoose/>
    <CivilProjects/>
    <CivilWorkFlow/>

    <ContactCTA/>
   
   </>
  );
};

export default CivilEngineering;