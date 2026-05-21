import React from 'react';

const workflowSteps = [
  { step: "01", phase: "Ingest", title: "Calculation Audit", body: "Reviewing spatial calculation notes, engineers' blueprints, and concrete design parameters." },
  { step: "02", phase: "Draft", title: "Framing Construction", body: "Building structural component configurations and foundation elements inside central files." },
  { step: "03", phase: "Check", title: "Clash Diagnostics", body: "Running rigorous structural collision checks against architectural files to isolate space conflicts." },
  { step: "04", phase: "Issue", title: "Detailing Export", body: "Isolating fabrication drawings, material schedules, and detailing data frameworks for site crews." }
];

export default function StructuralBIMWorkflow() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Operational Path</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">The Structural Execution Workflow</h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {workflowSteps.map((item, idx) => (
            <div key={idx} className="p-6 bg-white border border-slate-300 rounded-xl shadow-sm space-y-4 hover:border-slate-400 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#A43025] uppercase bg-red-50 px-2 py-0.5 rounded border border-[#A43025]/10">
                  {item.phase}
                </span>
                <span className="text-xs font-mono font-bold text-slate-300">({item.step})</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}