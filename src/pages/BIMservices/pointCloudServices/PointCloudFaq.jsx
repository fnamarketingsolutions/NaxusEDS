import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqQuestions = [
  {
    q: 'What specific file formats can your scanning team process?',
    a: 'We comfortably process all standard raw laser formats, including E57, RCP, RCS, PTX, and LAS files, converting them cleanly into editable Autodesk Revit platforms.'
  },
  {
    q: 'How does your team handle hidden voids or un-scanned building interiors?',
    a: 'For hidden structural areas not captured by lasers, we mark those components using clear placeholder graphics and cross-reference original 2D blueprints.'
  },
  {
    q: 'What is your tolerance threshold protocol for structural deviations?',
    a: 'We strictly align projects with international standards, targeting a level of accuracy within ±5mm to ±10mm depending on client model specification details.'
  },
  {
    q: 'Do you extract architectural details for modern rendering needs?',
    a: 'While our main focus is precise engineering geometry, we map complex facade contours and profiles to build accurate base files for creative design layers.'
  },
  {
    q: 'How do file sizes scale when translating massive datasets?',
    a: 'We use clean component layouts and intelligent family linking parameters to structure models efficiently, keeping final file sizes manageable.'
  }
];

export default function PointCloudFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
          <div className="h-1 w-12 bg-[#A43025] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600">Quick details on data cloud registration limits and delivery parameters.</p>
        </div>

        <div className="space-y-4">
          {faqQuestions.map((faq, index) => {
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