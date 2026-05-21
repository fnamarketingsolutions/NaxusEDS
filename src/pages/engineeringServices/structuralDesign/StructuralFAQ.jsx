import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMinus, HiPlus } from 'react-icons/hi';

const StructuralFAQ = () => {
  // Frequently Asked Questions array targeted to Structural Engineering services
  const faqData = [
    {
      question: "What building codes and global engineering standards do you follow?",
      answer: "We strictly adhere to international and localized building codes depending on your site requirements. This includes the International Building Code (IBC), Eurocodes (EN), American Concrete Institute (ACI) standards, American Institute of Steel Construction (AISC) specifications, and Indian Standard (IS) codes."
    },
    {
      question: "What initial inputs do you require from our side to begin the design process?",
      answer: "To start structural modeling, we require the finalized architectural layout blueprints/floor plans, localized geotechnical soil investigation reports, and any specific material preference requirements (such as target concrete grades or preferred structural steel profile sections)."
    },
    {
      question: "Do you deliver production-ready Bar Bending Schedules (BBS)?",
      answer: "Yes, we generate complete fabrication-ready Bar Bending Schedules alongside our reinforcement drawings. The BBS includes precise linear configurations, hook lengths, cutting calculations, total weights, and rebar classification charts to minimize on-site waste."
    },
    {
      question: "How do you ensure clash coordination between structural and MEP elements?",
      answer: "We utilize advanced structural drafting setups and cross-discipline verification workflows. If requested within a BIM setup, we perform detailed 3D clash-detection simulations to catch spatial conflicts between structural load-bearing elements and MEP routing pipelines before documentation delivery."
    },
    {
      question: "What turnaround times can we expect for a typical detailing project?",
      answer: "Timeline depends on total structural area scope and framing complexity. Small-to-medium commercial or residential layout drafting cycles typically run between 5 to 10 business days, whereas multi-story high-rise frameworks are split into staged deliverables managed via fixed sprint schedules."
    }
  ];

  // State setup tracking the open item index (null if all are collapsed)
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle handler function
  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-gray-50 border-t border-b border-gray-100 w-full font-sans antialiased">
      <div className="max-w-4xl mx-auto">
        
        {/* ================= CENTERED HEADING BLOCK ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#A43025] uppercase tracking-widest block mb-2">
            Information Center
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#A43025] mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
            Clear answers to common inquiries regarding our structural design layouts, processing parameters, and delivery workflows.
          </p>
        </div>

        {/* ================= EXPANDABLE FAQ STACK ================= */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:border-gray-200/80 transition-colors"
              >
                {/* Trigger Button Row */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 transition-colors group select-none"
                >
                  <span className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-[#A43025]' : 'text-gray-900 group-hover:text-[#A43025]'}`}>
                    {faq.question}
                  </span>
                  
                  {/* Plus / Minus Action Indicator Axis */}
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-200 ${isOpen ? 'bg-[#A43025] text-white border-[#A43025]' : 'bg-gray-50 text-gray-500 border-gray-100 group-hover:bg-red-50 group-hover:text-[#A43025]'}`}>
                    {isOpen ? <HiMinus className="text-sm" /> : <HiPlus className="text-sm" />}
                  </div>
                </button>

                {/* Animated Expandable Body Layer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-gray-50">
                        <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
                          {faq.answer}
                        </p>
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
};

export default StructuralFAQ;