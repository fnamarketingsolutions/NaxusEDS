import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCheckCircle, HiOutlineArrowSmRight } from 'react-icons/hi';
import StructuralServices from './StructuralServices';
import HowItWorks from './HowItWorks';
import StructuralFAQ from './StructuralFAQ';
import structuralImage from "../../../assets/engineeringAssets/structural-hero.png"


const StructuralDesign = () => {
  // Core technical capabilities list
  const structuralCapabilities = [
    "Reinforced Concrete (RCC) Drafting & Detailing",
    "Structural Steel Framework & Connection Design",
    "Foundation Plan Layouts & Retaining Wall Detailing",
    "High-Rise & Industrial Component Space Planning",
    "Comprehensive Rebar Bar Bending Schedules (BBS)",
    "Compliance Validations with Global Building Codes"
  ];

  return (
   <>
    <section className="py-24 px-6 md:px-16 bg-white font-sans text-gray-800 antialiased w-full overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ================= LEFT SIDE: HEADING & TECHNICAL CONTENT ================= */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div>
            <span className="text-xs font-bold text-[#A43025] uppercase tracking-widest block mb-2">
              Engineering Domain
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Structural Design & Detailing Services
            </h2>
            <div className="w-12 h-1 bg-[#A43025] mt-4 rounded-full"></div>
          </div>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl font-light">
            We deliver production-ready structural blueprints and computational drafting workflows. Our deep domain expertise translates complex architectural configurations into highly stable, resource-optimized, and code-compliant construction documentation.
          </p>

          {/* Capabilities Grid Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 pt-2">
            {structuralCapabilities.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2.5">
                <HiOutlineCheckCircle className="text-xl text-[#A43025] shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm font-light leading-tight">{item}</span>
              </div>
            ))}
          </div>

          {/* Action Runway */}
          <div className="pt-4">
            <button className="bg-[#A43025] text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:bg-[#8a281f] transition-all group w-full sm:w-auto justify-center shadow-sm">
              Request Technical Consultation 
              <HiOutlineArrowSmRight className="group-hover:translate-x-1 transition-transform text-xl" />
            </button>
          </div>
        </div>

        {/* ================= RIGHT SIDE: FULLY RESPONSIVE STRUCTURAL IMAGE ================= */}
        <div className="lg:col-span-5 w-full relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-40px" }}
            className="w-full h-[300px] sm:h-[400px] lg:h-[520px] overflow-hidden rounded-2xl relative group bg-gray-50"
          >
            {/* Visual branding color overlay matrix */}
            <div className="absolute inset-0 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            
            {/* Structural Blueprint Drawing Image Reference Tag */}
            <img 
              src={structuralImage}
              alt="NaxusEDS Structural Engineering Detailing" 
              className="w-full h-full object-cover-contain object-center group-hover:white-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </motion.div>
        </div>

      </div>
    </section>
    <StructuralServices/>
    <HowItWorks/>
    <StructuralFAQ/>
   </>
  );
};

export default StructuralDesign;