import React, { useState } from 'react';

const structuralFAQs = [
  {
    question: "How do you ensure alignment between structural analysis software and BIM files?",
    answer: "We use direct plug-in coordinate translators. This preserves analytical nodes and physical centerlines during file transfers, preventing geometry offsets between modeling frames and raw calculations."
  },
  {
    question: "Do you supply complete rebar schedules alongside the 3D concrete models?",
    answer: "Yes. All structural concrete components are modeled with integrated rebar geometry. This allows us to extract comprehensive bar bending schedules (BBS) that align directly with regional compliance codes."
  },
  {
    question: "What specific file protocols do you follow for steel framework fabrication?",
    answer: "We deliver synchronized industry-standard data formats including clean Revit files, native CAD files, and structural coordinate outputs that interface directly with CNC fabrication machinery."
  }
];

export default function StructuralBIMFAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">Inquiries</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">Structural Knowledge Parameters</h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        <div className="space-y-4">
          {structuralFAQs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const positionString = String(index + 1).padStart(2, '0');

            return (
              <div key={index} className="bg-white border border-slate-300 hover:border-slate-400 transition-all duration-300 rounded-xl overflow-hidden shadow-sm">
                
                {/* Trigger Control */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono font-bold h-7 w-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-[#A43025] text-white border-[#A43025]' : 'bg-red-50 text-[#A43025] border-[#A43025]/10 group-hover:bg-[#A43025] group-hover:text-white'
                    }`}>
                      {positionString}
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-tight">
                      {faq.question}
                    </h3>
                  </div>
                  <span className={`text-slate-400 transform transition-transform duration-300 text-lg font-bold ${isOpen ? 'rotate-45 text-[#A43025]' : ''}`}>
                    ＋
                  </span>
                </button>

                {/* Collapsible Container */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-slate-100' : 'max-h-0'}`}>
                  <div className="p-6 bg-slate-50/50 pl-16 border-l-4 border-[#A43025]">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
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