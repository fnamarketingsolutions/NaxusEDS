import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const drawingFaqs = [
  {
    q: 'What scale guidelines do you apply for intricate MEP layout areas?',
    a: 'We scale general plans at standard intervals, shifting to highly detailed configurations (such as 1/2" = 1\'-0") for complex mechanical plant areas or congested riser configurations.'
  },
  {
    q: 'How are model modifications tracked on issued drawing packages?',
    a: 'Every update is managed through structured title-block revision tracking, providing site teams with clear revision markers detailing spatial updates.'
  },
  {
    q: 'Do your drawings indicate structural insulation buffers and layout clearances?',
    a: 'Yes. All duct and piping blueprints outline exact clearances for lagging insulation alongside necessary safety clearances surrounding electrical panels.'
  },
  {
    q: 'Can you deliver sheet files matching custom contractor title blocks?',
    a: 'Absolutely. We map borders, symbol indexes, tag graphics, and typography variables directly to align with your organization’s standard submittal branding.'
  }
];

export default function ShopDrawingsFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          <div className="h-1 w-12 bg-[#A43025] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600">Quick details on sheet detailing criteria and submittal coordination metrics.</p>
        </div>

        <div className="space-y-4">
          {drawingFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span className={isOpen ? 'text-[#A43025]' : 'text-slate-900'}>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#A43025]' : ''}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}