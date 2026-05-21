import React from 'react';

const steps = [
  { 
    phase: "Phase A", 
    action: "Data Ingestion", 
    description: "Consolidating 2D schematic layouts, CAD elevations, and project coordinate reference maps.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=150&q=80"
  },
  { 
    phase: "Phase B", 
    action: "Parametric Assembly", 
    description: "Constructing core 3D architectural asset volumes directly within synchronized shared central files.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=150&q=80"
  },
  { 
    phase: "Phase C", 
    action: "Clash Arbitration", 
    description: "Running deep diagnostic audits to flag interference matrices and resolve structural conflicts.",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=150&q=80"
  },
  { 
    phase: "Phase D", 
    action: "LOD Sign-Off", 
    description: "Verifying metadata parameters, updating geometry tags, and exporting clean model iterations.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=150&q=80"
  }
];

export default function BIMWorkflow() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Operational Path</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">The BIM Execution Workflow</h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        {/* Workflow Block Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 border border-slate-300 rounded-xl shadow-sm space-y-5 hover:border-slate-400 transition-colors duration-300 flex flex-col justify-between">
              
              <div className="space-y-4">
                {/* Top Inner Row: Left Side Image/Tag Matrix, Right Side Number */}
                <div className="flex items-start justify-between gap-4">
                  
                  {/* Left Side: Dynamic Image Thumbnail & Phase Tag Column */}
                  <div className="flex items-start gap-3">
                    {/* Top-Left Inner Side Image Block */}
                    <div className="h-12 w-12 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 flex-shrink-0">
                      <img 
                        src={step.image} 
                        alt={step.action} 
                        className="w-full h-full object-cover grayscale opacity-80"
                      />
                    </div>
                    
                    {/* Phase Metadata Badge */}
                    <span className="text-[9px] font-mono font-bold tracking-wider text-[#A43025] uppercase bg-red-50 px-2 py-0.5 rounded border border-[#A43025]/10 mt-0.5">
                      {step.phase}
                    </span>
                  </div>

                  {/* Right Side: Process Step Position Indicator */}
                  <span className="text-xs font-mono font-bold text-slate-300 tracking-tight">
                    0{idx + 1}
                  </span>
                </div>

                {/* Lower Text Frame */}
                <div className="space-y-1">
                  <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">
                    {step.action}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}