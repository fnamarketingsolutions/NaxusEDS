import React, { useState } from 'react';

const qaData = [
  {
    question: "What source file schemas do you require to begin 3D spatial layout generation?",
    answer: "We accept native format structural models from Autodesk Revit, Rhino (.3dm), AutoCAD blueprints (.dwg), and standard IFC file configurations to anchor scale metrics."
  },
  {
    question: "How are custom site lighting calculations processed for spatial render scenes?",
    answer: "We use geo-coordinated sky data matrices to input exact astronomical coordinates. This accurately mirrors daylight, sunset shadows, and cloud cover properties."
  },
  {
    question: "What is the typical output resolution tier for big-screen presentation views?",
    answer: "Standard production deliverables are rendered at high-fidelity 4K ultra-sharp resolutions. For massive site hoardings, we scale assets up to ultra-crisp 8K formats."
  }
];

export default function VisualizationFAQs() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Inquiries</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">Visualization Knowledge Base</h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        {/* List Accordion Engine */}
        <div className="space-y-4">
          {qaData.map((item, idx) => {
            const isActive = openIdx === idx;
            const itemNum = String(idx + 1).padStart(2, '0');

            return (
              <div key={idx} className="bg-white border border-slate-300 hover:border-slate-400 transition-all duration-300 rounded-xl overflow-hidden shadow-sm">
                
                {/* Accordion Toggle Trigger Row */}
                <button 
                  onClick={() => setOpenIdx(isActive ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono font-bold h-7 w-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isActive ? 'bg-[#A43025] text-white border-[#A43025]' : 'bg-red-50 text-[#A43025] border-[#A43025]/10 group-hover:bg-[#A43025] group-hover:text-white'
                    }`}>
                      {itemNum}
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-tight">
                      {item.question}
                    </h3>
                  </div>
                  <span className={`text-slate-400 transform transition-transform duration-300 text-lg font-bold ${isActive ? 'rotate-45 text-[#A43025]' : ''}`}>
                    ＋
                  </span>
                </button>

                {/* Collapsible Container */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isActive ? 'max-h-[300px] border-t border-slate-100' : 'max-h-0'}`}>
                  <div className="p-6 bg-slate-50/50 pl-16 border-l-4 border-[#A43025]">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}