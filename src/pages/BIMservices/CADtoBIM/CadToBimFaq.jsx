import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const questionsList = [
  {
    q: 'Can you process low-resolution, handwritten legacy sketches?',
    a: 'Yes. Our modeling teams reconstruct degraded files by cross-checking structural standards and manual measurements to confirm placement parameters.'
  },
  {
    q: 'Which formats do your teams deliver final files in?',
    a: 'We deliver industry-standard formats including active Revit files (RVT), structural project drawings, and open formats like IFC for universal system integration.'
  },
  {
    q: 'How are model scale discrepancies and file errors handled?',
    a: 'When discrepancies show up in legacy 2D drawings, we flag the conflict and work closely with your engineering group to resolve dimensions before finalizing files.'
  }
];

export default function CadToBimFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          <div className="h-1 w-12 bg-[#A43025] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600">Quick answers regarding file formatting parameters and model delivery metrics.</p>
        </div>

        <div className="space-y-4">
          {questionsList.map((faq, index) => {
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