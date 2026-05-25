import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineDocumentSearch, 
  HiOutlineCalculator, 
  HiOutlinePencilAlt, 
  HiOutlineShieldCheck 
} from 'react-icons/hi';
 import structuralStepImage from '../../../assets/engineeringAssets/structural-Steps.png';

const HowItWorks = () => {
  // Step-by-step structural engineering lifecycle data
  const steps = [
    {
      title: "Input & Architectural Analysis",
      desc: "We ingest your architectural layout configurations, floor plans, and localized geotechnical soil data maps to establish baseline project geometry.",
      icon: <HiOutlineDocumentSearch />,
    },
    {
      title: "Structural Modeling & Load Calculation",
      desc: "Using finite element analysis modeling setups, we run advanced simulations to account for dead loads, live loads, seismic parameters, and wind stress.",
      icon: <HiOutlineCalculator />,
    },
    {
      title: "Precise Blueprint Drafting & Rebar Detailing",
      desc: "Our drafting team builds complete structural engineering blueprints, detailing framing plans, concrete rebar profiles, and precise column schedules.",
      icon: <HiOutlinePencilAlt />,
    },
    {
      title: "Quality Validation & Code Compliance",
      desc: "Every design configuration undergoes thorough verification against global standard codes (IBC, Eurocodes, or IS codes) before safe production handover.",
      icon: <HiOutlineShieldCheck />,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-white font-sans text-gray-800 antialiased w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">

{/* ================= CENTERED HEADING BLOCK ================= */}
<div className="text-center max-w-2xl mx-auto mb-16">
  <span className="text-xs font-bold text-[#A43025] uppercase tracking-widest block mb-2">
    Execution Strategy
  </span>

  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
    Our Structural Process Flow
  </h2>

  <div className="w-16 h-1 bg-[#A43025] mx-auto mb-4 rounded-full"></div>

  <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
    How we translate your initial architectural design concepts into verified,
    engineering-grade structural layouts.
  </p>
</div>

{/* ================= SPLIT LAYOUT ================= */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
  
  {/* LEFT SIDE: BIGGER IMAGE */}
  <div className="lg:col-span-6 w-full h-72 sm:h-[500px] lg:h-auto min-h-[500px]">
    <div className="w-full h-full rounded-2xl overflow-hidden relative border border-gray-100 shadow-sm group">
      
      <div className="absolute inset-0 bg-[#A43025]/5 group-hover:bg-transparent transition-colors duration-300 z-10"></div>

      <img 
        src={structuralStepImage}
        alt="Structural Engineering Process Framework"
        className="w-full h-full object-cover-contain group-hover:scale-105 transition-all duration-500 ease-out"
      />
    </div>
  </div>

  {/* RIGHT SIDE: SMALLER TEXT WIDTH */}
  <div className="lg:col-span-6 relative flex flex-col justify-between py-2 pl-4 sm:pl-6">
    
    {/* Vertical Line */}
    <div className="absolute left-[20px] top-4 bottom-4 w-[2px] bg-gray-100 z-0" />

    {/* Steps */}
    <div className="space-y-6">
      {steps.map((step, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            delay: idx * 0.1,
            ease: "easeOut"
          }}
          viewport={{ once: true, margin: "-20px" }}
          className="relative z-10 flex items-start space-x-4 group pl-1.5"
        >
          
          {/* Icon */}
          <div className="w-9 h-9 rounded-full bg-white border-2 border-[#A43025] text-[#A43025] text-base flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:bg-[#A43025] group-hover:text-white transition-all duration-300">
            {step.icon}
          </div>

          {/* Text */}
          <div className="flex flex-col space-y-1 pt-0.5">
            <h4 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#A43025] transition-colors duration-300">
              <span className="font-mono text-xs font-semibold mr-1.5 text-gray-400">
                0{idx + 1}.
              </span>
              {step.title}
            </h4>

            <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
              {step.desc}
            </p>
          </div>

        </motion.div>
      ))}
    </div>

  </div>

</div>

</div>
    </section>
  );
};

export default HowItWorks;