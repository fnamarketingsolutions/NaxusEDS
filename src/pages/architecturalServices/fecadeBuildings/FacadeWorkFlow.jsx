import React from 'react';

const workflowSteps = [
  {
    code: "STEP-01",
    title: "As-Built / Design Ingestion",
    desc: "We absorb your schematic sketches, point clouds, CAD references, or baseline PDFs into our localized engineering workflow for structured project initialization.",
    metrics: "Project Data Acquisition"
  },
  {
    code: "STEP-02",
    title: "Parametric Drafting & BIM Modeling",
    desc: "Our engineering team transforms raw architectural concepts into intelligent BIM environments using coordinated layers, vectors, and scalable drafting systems.",
    metrics: "Smart BIM Coordination"
  },
  {
    code: "STEP-03",
    title: "Rigid Quality Verification",
    desc: "Every model and drawing package undergoes multi-stage quality audits to eliminate spatial clashes, dimension inconsistencies, and compliance anomalies.",
    metrics: "Precision QA Validation"
  },
  {
    code: "STEP-04",
    title: "Production Handover",
    desc: "Final deliverables are exported into clean, production-ready DWG, RVT, and documentation packages optimized for construction and execution teams.",
    metrics: "Delivery Ready Assets"
  }
];

export default function FacadeWorkFlow() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">
            Workflow Pipeline
          </span>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">
            Our Engineering Workflow
          </h2>

          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-[1px] bg-slate-300 h-full top-0" />

          <div className="space-y-12 lg:space-y-0 relative">
            {workflowSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center justify-between w-full lg:mb-16 last:mb-0 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12" />

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-slate-400 items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-[#A43025]" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full lg:w-5/12">
                    <div className="bg-white p-8 border border-slate-300 rounded-2xl hover:border-slate-400 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg group relative">

                      <div>

                        {/* Step Code */}
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-xs font-mono font-bold tracking-widest text-[#A43025] bg-red-50 px-3 py-1 rounded border border-[#A43025]/10">
                            {step.code}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 leading-snug">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          {step.desc}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {step.metrics}
                        </span>

                        <span className="text-sm font-bold text-[#A43025] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                          Explore →
                        </span>
                      </div>

                    </div>
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