import React, { useState } from 'react';

const facadeFaqs = [
  {
    q: "What parameters dictate the selection between Unitized and Stick curtain walling?",
    a: "Unitized systems are ideal for fast-paced, high-rise construction because modules are factory-glazed and pre-assembled. Stick systems are preferred for low-to-mid-rise projects with complex geometries that require piece-by-piece field adjustments."
  },
  {
    q: "How does NexusEDS ensure structural compliance with high peak wind loads?",
    a: "We perform rigorous structural wind load analysis based on local boundary regulations, building height, and geographical topography. This data directly dictates the required glass thickness, profile depth, and anchoring bracket engineering."
  },
  {
    q: "What role does thermal break engineering play in building envelope design?",
    a: "By integrating non-conductive materials within aluminum framing profiles, thermal breaks prevent heat transfer. This minimizes cold-bridging, eliminates internal condensation, and significantly lowers long-term building HVAC expenditures."
  },
  {
    q: "How do your ventilated rainscreen designs manage moisture mitigation?",
    a: "We utilize advanced pressure-equalized rainscreen principles. The external cladding blocks the bulk of rainwater, while a rear-ventilated cavity uses natural air convection to instantly drain and evaporate any minor moisture ingress."
  },
  {
    q: "Can you optimize facade engineering budgets without risking layout structural integrity?",
    a: "Yes, through meticulous Value Engineering. We analyze structural profiles, glass cutting optimization maps, and material yields to reduce fabrication costs and material waste while fully maintaining architectural performance."
  },
  {
    q: "What design measures are taken to guarantee strict fire-safety compliance?",
    a: "We integrate non-combustible perimeter fire stops and smoke seals at every floor slab interface. This ensures that the cavity between the concrete structure and the curtain wall does not act as a chimney during a thermal event."
  }
];

export default function FacadeFAQs() {
  // Track open state using the active item index (null means all are closed)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8 border-b border-slate-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider text-[#A43025] uppercase">
            Technical Knowledge Base
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl uppercase">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-[#A43025] mx-auto mt-4" />
        </div>

        {/* Accordion List Wrapper */}
        <div className="space-y-4">
          {facadeFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            // Pad single digits with leading zero for a cleaner, engineering aesthetic structure
            const questionNumber = String(index + 1).padStart(2, '');

            return (
              <div 
                key={index} 
                className="bg-white border border-slate-300 hover:border-slate-400 transition-all duration-300 rounded-xl overflow-hidden shadow-sm"
              >
                {/* Trigger Button (The Question Block) */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    {/* Structural Dynamic Number Badge */}
                    <span className={`flex-shrink-0 text-xs font-mono font-bold h-7 w-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-[#A43025] text-white border-[#A43025]' 
                        : 'bg-red-50 text-[#A43025] border-[#A43025]/10 group-hover:bg-[#A43025] group-hover:text-white group-hover:border-[#A43025]'
                    }`}>
                      {questionNumber}
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-tight leading-snug">
                      {faq.q}
                    </h3>
                  </div>

                  {/* Expand / Collapse Icon Indicator */}
                  <span className={`flex-shrink-0 ml-2 h-5 w-5 text-slate-400 group-hover:text-[#A43025] transform transition-transform duration-300 flex items-center justify-center font-bold text-lg ${
                    isOpen ? 'rotate-45 text-[#A43025]' : ''
                  }`}>
                    ＋
                  </span>
                </button>

                {/* Collapsible Content Block Container */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 sm:p-8 bg-slate-50/50 pl-16 sm:pl-18 border-l-4 border-[#A43025]">
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