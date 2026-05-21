import React from 'react';

export default function VisualizationCommitment() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Execution Protocol</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">Our Operational Commitment</h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        {/* Dual Column Layout Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Block: Good Things (What We Commit & Do) */}
          <div className="bg-white p-8 border border-slate-300 rounded-xl shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-emerald-100 pb-4">
              <h3 className="text-xl font-black text-emerald-700 uppercase tracking-tight flex items-center gap-2">
                ✓ What We Commit & Execute
              </h3>
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </div>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-3"><span className="text-emerald-500 font-bold">▶</span> <strong>Absolute Scale Fidelity:</strong> We build render environments exactly following structural CAD / BIM coordinate parameters.</li>
              <li className="flex items-start gap-3"><span className="text-emerald-500 font-bold">▶</span> <strong>True Physics Lighting:</strong> Simulating real-world global illumination calculations relative to geographic orientation.</li>
              <li className="flex items-start gap-3"><span className="text-emerald-500 font-bold">▶</span> <strong>Material Optimization:</strong> Custom-tailoring procedural PBR shaders to ensure material reflections look completely realistic.</li>
            </ul>
          </div>

          {/* Right Block: Bad Things (What We Avoid) */}
          <div className="bg-white p-8 border border-slate-300 rounded-xl shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-red-100 pb-4">
              <h3 className="text-xl font-black text-[#A43025] uppercase tracking-tight flex items-center gap-2">
                ✕ What We Strictly Avoid
              </h3>
              <span className="h-2 w-2 rounded-full bg-[#A43025]" />
            </div>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-3"><span className="text-[#A43025] font-bold">✕</span> <strong>Generic Stock Assets:</strong> No generic low-poly assets that dilute the premium value of architectural engineering spaces.</li>
              <li className="flex items-start gap-3"><span className="text-[#A43025] font-bold">✕</span> <strong>Inaccurate Scaling:</strong> Zero guessing game behaviors; we completely avoid structural clipping or false dimension representations.</li>
              <li className="flex items-start gap-3"><span className="text-[#A43025] font-bold">✕</span> <strong>Blown-out Contrast Filters:</strong> Avoid artificial image filters that mask rendering defects or distort real-world physical material metrics.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}   