import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const questionData = [
  {
    title: 'How do you prevent custom families from lagging larger models?',
    titleAnswer: 'We strip out unnecessary CAD blocks and nested shapes, relying on simple parametric math to optimize geometry and keep files compact.'
  },
  {
    title: 'Can you map electrical parameters matching specific regional rules?',
    titleAnswer: 'Yes. We track regional parameters accurately, specifying exact values for power, load classifications, and connection styles.'
  },
  {
    title: 'What metrics guide your family design variations?',
    titleAnswer: 'We follow your specification charts, mapping variable dimensions so components scale cleanly without warping.'
  }
];

export default function RevitFamilyFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          <div className="h-1 w-12 bg-[#A43025] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600">Quick insights into parameter configuration and component performance limits.</p>
        </div>

        <div className="space-y-4">
          {questionData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span className={isOpen ? 'text-[#A43025]' : 'text-slate-900'}>{faq.title}</span>
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
                        {faq.titleAnswer}
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