import React from 'react';

export default function WhyBIMService() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Feature Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Main Brand Core Title */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase block">Strategic Imperative</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase sm:text-4xl">
              Why Transition To <br />
              <span className="text-[#A43025]">Centralized BIM?</span>
            </h2>
            <div className="h-1 w-16 bg-[#A43025] mt-2" />
          </div>

          {/* Right Side: Core Secondary Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50/50 border border-slate-300 rounded-xl space-y-2">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Erase Rework Waste</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Fixing structural component collisions inside software models takes minutes; resolving matching structural conflicts on-site during active construction costs thousands.
              </p>
            </div>
            <div className="p-6 bg-slate-50/50 border border-slate-300 rounded-xl space-y-2">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Long-Term Asset Integrity</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                BIM coordinates are rich with material lifecycle data, providing owners with an efficient digital twin schematic to simplify facility maintenance for decades.
              </p>
            </div>
          </div>

        </div>

        {/* Lower Level: 4 Horizontal Blocks Layered Directly Underneath */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          
          {/* Block 01 */}
          <div className="p-6 bg-slate-50/50 border border-slate-300 rounded-xl space-y-2 hover:border-slate-400 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">4D Timeline Linking</h3>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Integrate phasing milestones directly into geometric elements to visualize step-by-step construction sequencing and prevent site deployment bottlenecks.
            </p>
          </div>

          {/* Block 02 */}
          <div className="p-6 bg-slate-50/50 border border-slate-300 rounded-xl space-y-2 hover:border-slate-400 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">5D Quantity Extraction</h3>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Generate instant material takeoffs automatically driven by active changes in the 3D grid, keeping cost analysis parameters synchronized.
            </p>
          </div>

          {/* Block 03 */}
          <div className="p-6 bg-slate-50/50 border border-slate-300 rounded-xl space-y-2 hover:border-slate-400 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Unified Data Protocol</h3>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Consolidate structural, MEP, and architectural models under a single source of truth, removing error-prone translation loops between teams.
            </p>
          </div>

          {/* Block 04 */}
          <div className="p-6 bg-slate-50/50 border border-slate-300 rounded-xl space-y-2 hover:border-slate-400 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Compliance Tracking</h3>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              Enforce local regulatory standards and building codes inside the modeling database, guaranteeing smooth validation loops during municipal checks.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}