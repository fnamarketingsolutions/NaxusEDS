import React from 'react';

export default function CivilWorkflow() {
  const steps = [
    {
      number: "01",
      title: "Site Survey & Geotechnical Evaluation",
      desc: "Comprehensive site profiling, topographic contour analysis, and soil load-bearing assessments to establish absolute foundational constraints."
    },
    {
      number: "02",
      title: "Structural Modeling & Load Calculations",
      desc: "Advanced finite element analysis simulating seismic, wind, dead, and live structural loading combinations using cutting-edge design tools."
    },
    {
      number: "03",
      title: "BIM Coordination & Detail Optimization",
      desc: "Generating 3D master clash blueprints to match architecture grids perfectly, ensuring total optimization prior to material procurement."
    },
    {
      number: "04",
      title: "Regulatory Compliance & Execution Handoff",
      desc: "Finalizing localized master compliance documentation, municipal approvals check-checks, and dispatching structural schematics directly to site teams."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white font-sans text-neutral-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-bold uppercase tracking-wider text-[#A43025] px-3 py-1 bg-red-50 rounded-full">
            Execution Path
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Our Civil Engineering Process Workflow
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#A43025] mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-600 text-base md:text-lg">
            A highly systematic, calculation-backed pipeline designed to keep structural blueprints flawlessly aligned with field parameters.
          </p>
        </div>

        {/* Step Blocks Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-neutral-50 border border-neutral-200 rounded-2xl p-6 pt-10 hover:bg-white hover:border-[#A43025] hover:shadow-xl transition-all duration-300">
              {/* Step Badge */}
              <div className="absolute -top-5 left-6 bg-[#A43025] text-white text-sm font-black w-10 h-10 rounded-xl flex items-center justify-center shadow-md shadow-red-950/20">
                {step.number}
              </div>
              
              <h3 className="text-base font-extrabold text-neutral-950 mb-3 min-h-[48px] flex items-center">
                {step.title}
              </h3>
              <p className="text-neutral-600 text-xs leading-relaxed border-t border-neutral-100 pt-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}