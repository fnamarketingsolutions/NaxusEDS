import React from 'react';
import { motion } from 'framer-motion';

const systemPhases = [
  {
    stepNum: '01',
    heading: 'Specification Intake & Audit',
    summary: 'Analyzing submittal files, mechanical sizing cut-sheets, and clearance data sheets to verify key scaling dimensions.'
  },
  {
    stepNum: '02',
    heading: ' native Skeleton Configuration',
    summary: 'Constructing precise constraint reference planes, setting dimensional formulas, and assigning key structural anchors.'
  },
  {
    stepNum: '03',
    heading: 'Parameter & Property Embedding',
    summary: 'Injecting mechanical metrics, power voltage inputs, connection paths, and complete catalog tracking indices into the assets.'
  },
  {
    stepNum: '04',
    heading: 'Strict Quality Stress Testing',
    summary: 'Testing models inside multiple project sandboxes to ensure parameters flex properly without breaking connections.'
  }
];

export default function RevitFamilyWorkflow() {
  return (
    <section className="py-20 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Library Development Process
          </h2>
          <div className="h-1 w-16 bg-[#A43025] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600">
            A reliable component creation framework engineered to deliver consistent, error-free parametric files.
          </p>
        </div>

        {/* Timeline Structure Container */}
        <div className="relative w-full">
          {/* Centered Vertical Tracking Line for Large Displays */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-100" />

          <div className="space-y-12 md:space-y-20 w-full">
            {systemPhases.map((phase, idx) => {
              // Determine if step is even or odd for alternating layout logic
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="flex flex-col md:flex-row items-center w-full relative">
                  
                  {/* Left Side Positioner */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-12 lg:pr-16 order-2 md:order-1">
                    {isEven && (
                      <motion.div 
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55 }}
                        className="bg-white p-6 rounded-xl border border-slate-200 shadow-md max-w-md text-center md:text-right border-t-4 border-t-[#A43025]"
                      >
                        <span className="text-xs font-bold text-[#A43025] tracking-widest uppercase">Phase {phase.stepNum}</span>
                        <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">{phase.heading}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{phase.summary}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Central Node Pointer Pin */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#A43025] text-[#A43025] font-bold text-sm flex items-center justify-center shadow-md z-10 my-4 md:my-0 order-1 md:order-2">
                    {phase.stepNum}
                  </div>

                  {/* Right Side Positioner */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-12 lg:pl-16 order-3">
                    {!isEven && (
                      <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55 }}
                        className="bg-white p-6 rounded-xl border border-slate-200 shadow-md max-w-md text-center md:text-left border-t-4 border-t-[#A43025]"
                      >
                        <span className="text-xs font-bold text-[#A43025] tracking-widest uppercase">Phase {phase.stepNum}</span>
                        <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">{phase.heading}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{phase.summary}</p>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}