import React, { useState } from 'react';

const faqsList = [
  {
    q: "What does Level of Development (LOD) 400 mean for our project files?",
    a: "LOD 400 models provide enough precision for fabrication and assembly. The components are modeled with specific geometric detail, accurate quantities, and precise data parameters."
  },
  {
    q: "How are file adjustments tracked across our multiple design teams?",
    a: "We deploy central workshared model structures using cloud repositories. Every change is logged with timestamp coordinates to avoid sync overwrites or version loss."
  },
  {
    q: "Can you convert older 2D legacy blueprints into smart parametric environments?",
    a: "Yes. We specialize in point-cloud conversions and legacy 2D drawing vectorization, mapping old reference sets into organized, intelligent Revit model ecosystems."
  }
];

export default function BIMFAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Inquiries</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">BIM Knowledge Base</h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        {/* Accordion Engine */}
        <div className="space-y-4">
          {faqsList.map((faq, index) => {
            const isOpen = openIndex === index;
            const numericLabel = String(index + 1).padStart(2, '0');

            return (
              <div key={index} className="bg-white border border-slate-300 hover:border-slate-400 transition-all duration-300 rounded-xl overflow-hidden shadow-sm">
                
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono font-bold h-7 w-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-[#A43025] text-white border-[#A43025]' : 'bg-red-50 text-[#A43025] border-[#A43025]/10 group-hover:bg-[#A43025] group-hover:text-white'
                    }`}>
                      {numericLabel}
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-tight">
                      {faq.q}
                    </h3>
                  </div>
                  <span className={`text-slate-400 transform transition-transform duration-300 text-lg font-bold ${isOpen ? 'rotate-45 text-[#A43025]' : ''}`}>
                    ＋
                  </span>
                </button>

                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-slate-100' : 'max-h-0'}`}>
                  <div className="p-6 bg-slate-50/50 pl-16 border-l-4 border-[#A43025]">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {faq.a}
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